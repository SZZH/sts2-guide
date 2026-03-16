import { getIndexNowConfig, submitIndexNowUrls } from "@/shared/indexNow";

type IndexNowBody = {
  url?: string;
  urls?: string[];
};

function isAuthorized(request: Request) {
  const expected = process.env.INDEXNOW_API_TOKEN;
  if (!expected) return true;
  const incoming = request.headers.get("x-indexnow-token");
  return incoming === expected;
}

export async function GET() {
  const { keyLocation, endpoint } = getIndexNowConfig();
  return Response.json({
    ok: true,
    endpoint,
    keyLocation,
  });
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return Response.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  let body: IndexNowBody | null = null;
  try {
    body = (await request.json()) as IndexNowBody;
  } catch {
    return Response.json({ ok: false, message: "Invalid JSON body" }, { status: 400 });
  }

  const candidates = [
    ...(body?.url ? [body.url] : []),
    ...((body?.urls || []).filter((item) => typeof item === "string") as string[]),
  ];

  const result = await submitIndexNowUrls(candidates);
  return Response.json(result, { status: result.status });
}
