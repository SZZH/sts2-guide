#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';

const BASE_URL = process.env.VERCEL_BASE_URL || 'https://vercel.com';
const TOKEN = process.env.VERCEL_TOKEN;
const TEAM_ID = process.env.VERCEL_TEAM_ID;
const TEAM_SLUG = process.env.VERCEL_TEAM_SLUG;
const PROJECT_ID = process.env.VERCEL_PROJECT_ID || 'sts2-guide';
const TZ = process.env.TZ_OVERRIDE || 'Asia/Shanghai';
const LOOP_SECONDS = Number(process.env.MONITOR_LOOP_SECONDS || '0');
const ROUNDS = Number(process.env.MONITOR_ROUNDS || '1');

if (!TOKEN) {
  console.error('Missing VERCEL_TOKEN');
  process.exit(1);
}
if (!TEAM_ID) {
  console.error('Missing VERCEL_TEAM_ID (example: team_xxx)');
  process.exit(1);
}
if (!TEAM_SLUG) {
  console.error('Missing VERCEL_TEAM_SLUG (example: szzhs-projects)');
  process.exit(1);
}

const headers = {
  Authorization: `Bearer ${TOKEN}`,
  Accept: 'application/json',
};

function iso(input) {
  return new Date(input).toISOString();
}

function windowRange() {
  const to = new Date();
  const from = new Date(to.getTime() - 60 * 60 * 1000);
  return { from: iso(from), to: iso(to) };
}

async function requestJson(url) {
  const res = await fetch(url, { headers });
  const text = await res.text();
  let json = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = { raw: text };
  }
  return {
    ok: res.ok,
    status: res.status,
    url,
    data: json,
  };
}

function metricFromOverview(overview) {
  if (!overview || typeof overview !== 'object') return {};
  return {
    visitors: overview.visitors ?? overview.uniqueVisitors ?? null,
    pageViews: overview.pageViews ?? overview.views ?? null,
    bounceRate: overview.bounceRate ?? null,
  };
}

async function collectOnce() {
  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10);
  const ts = now.toISOString().replace(/[:.]/g, '-');

  const { from, to } = windowRange();
  const filter = encodeURIComponent('{}');

  const urls = {
    realtime: `${BASE_URL}/api/web-analytics/realtime?projectId=${encodeURIComponent(PROJECT_ID)}&teamId=${encodeURIComponent(TEAM_ID)}`,
    overview: `${BASE_URL}/api/web-analytics/overview?filter=${filter}&from=${encodeURIComponent(from)}&projectId=${encodeURIComponent(PROJECT_ID)}&teamId=${encodeURIComponent(TEAM_ID)}&to=${encodeURIComponent(to)}&tz=${encodeURIComponent(TZ)}`,
    topReferrer: `${BASE_URL}/api/web-analytics/stats?filter=${filter}&from=${encodeURIComponent(from)}&limit=10&projectId=${encodeURIComponent(PROJECT_ID)}&teamId=${encodeURIComponent(TEAM_ID)}&to=${encodeURIComponent(to)}&type=referrer&tz=${encodeURIComponent(TZ)}`,
    topPath: `${BASE_URL}/api/web-analytics/stats?filter=${filter}&from=${encodeURIComponent(from)}&limit=10&projectId=${encodeURIComponent(PROJECT_ID)}&teamId=${encodeURIComponent(TEAM_ID)}&to=${encodeURIComponent(to)}&type=path&tz=${encodeURIComponent(TZ)}`,
    speedEnabled: `${BASE_URL}/api/speed-insights/enabled-projects?teamId=${encodeURIComponent(TEAM_SLUG)}`,
  };

  const [realtime, overview, topReferrer, topPath, speedEnabled] = await Promise.all([
    requestJson(urls.realtime),
    requestJson(urls.overview),
    requestJson(urls.topReferrer),
    requestJson(urls.topPath),
    requestJson(urls.speedEnabled),
  ]);

  const overviewMetrics = metricFromOverview(overview.data);
  const speedProjectNames = Array.isArray(speedEnabled.data?.projects)
    ? speedEnabled.data.projects.map((p) => p.name)
    : [];

  const summary = {
    collectedAt: now.toISOString(),
    project: PROJECT_ID,
    window: { from, to, timezone: TZ },
    status: {
      realtime: realtime.status,
      overview: overview.status,
      topReferrer: topReferrer.status,
      topPath: topPath.status,
      speedEnabled: speedEnabled.status,
    },
    metrics: {
      realtime: realtime.data,
      overview: overviewMetrics,
      speedInsightsEnabledProjects: speedProjectNames,
      topReferrer: topReferrer.data,
      topPath: topPath.data,
    },
    raw: {
      realtime,
      overview,
      topReferrer,
      topPath,
      speedEnabled,
    },
  };

  const logDir = path.join(process.cwd(), 'ops-logs', 'vercel', dateStr);
  await fs.mkdir(logDir, { recursive: true });

  const jsonPath = path.join(logDir, `${ts}.json`);
  await fs.writeFile(jsonPath, JSON.stringify(summary, null, 2));

  const mdPath = path.join(process.cwd(), 'ops-logs', `${dateStr}.md`);
  const md = `\n## [${new Date().toLocaleTimeString('zh-CN', { hour12: false, timeZone: TZ })} CST] Vercel monitor snapshot\n\n### Why\n- Launch-night realtime monitoring run (Vercel).\n\n### What I changed\n- Files:\n  - ${jsonPath}\n- External:\n  - Vercel Analytics API + Speed Insights status check\n\n### Evidence (truth check)\n- Official: https://vercel.com/docs/analytics\n- Official: https://vercel.com/docs/speed-insights\n- Confidence: High\n\n### Traffic impact\n- Baseline window: ${from}\n- Post-change window: ${to}\n- Vercel Realtime: ${JSON.stringify(summary.metrics.realtime)}\n- Vercel Overview: ${JSON.stringify(summary.metrics.overview)}\n- Speed Insights enabled projects: ${speedProjectNames.join(', ') || 'n/a'}\n- Assessment: snapshot captured for launch-night decisioning.\n\n### Next step\n- Continue polling and compare deltas every cycle.\n`;
  await fs.appendFile(mdPath, md);

  console.log(`Saved snapshot: ${jsonPath}`);
  console.log(`Appended log: ${mdPath}`);
  console.log(`Status: ${JSON.stringify(summary.status)}`);
}

async function main() {
  const rounds = LOOP_SECONDS > 0 ? Math.max(1, ROUNDS) : 1;
  for (let i = 0; i < rounds; i += 1) {
    await collectOnce();
    if (LOOP_SECONDS > 0 && i < rounds - 1) {
      await new Promise((resolve) => setTimeout(resolve, LOOP_SECONDS * 1000));
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
