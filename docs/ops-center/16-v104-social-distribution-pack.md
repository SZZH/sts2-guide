# v0.104.0 社媒分发包

> 日期：2026-05-07
> 状态：`READY`
> 适用内容：`/news/slay-the-spire-2-beta-patch-v0-104-0-analysis`

## 1. 执行判断

旧的 Reddit / X / Steam 待回复已经跨期太久，继续补回复的讨论价值低，且容易显得机械。今天不追旧帖，改为围绕官方 `v0.104.0 beta` 更新准备新的轻分发。

执行边界：

- 发帖前必须确认代码已推送 `main`、Vercel Production 已 `Ready`、正式域名目标页返回 `HTTP 200`，且正文可检索到 `v0.104.0` 等目标内容
- 主事实源只用官方 Steam patch notes
- 不把 beta branch 写成 main branch 结论
- 每个平台最多 1 个链接
- Reddit 主贴默认不放链接，链接只作为后续评论补充
- 不跨平台复用同一段文案
- 发出后需要在 30-60 分钟内看一次互动，否则不建议立即发布

## 2. Reddit 草稿

目标社区优先级：`r/slaythespire`，备选 `r/roguelites`。

标题：

```text
v0.104.0 beta feels less like a full meta reset and more like a retest patch
```

正文：

```text
The official v0.104.0 beta notes read to me less like "everything changed" and more like a focused retest patch.

The main things I would retest first:

- Ironclad: Conflagration now looks much more Strength-sensitive, and Drum of Battle moved into a clearer Exhaust/Energy role.
- Regent: Parry should be easier to reason about now that the Block goes directly onto Sovereign Blade.
- Ancients: Neow's Booming Conch, Neow's Fury, and Tezcatara's Nutritious Soup all look worth another pass.
- Doormaker: the devs are still watching the data, so I would not call that problem solved or broken yet.

What are people retesting first after this beta patch? Ironclad, Regent, Ancients, or lower Ascension pacing?
```

首条评论链接草稿（主贴发出 15-60 分钟后，且没有触发过滤再发）：

```text
I wrote up my notes here, mainly to keep the official patch facts separate from early community impressions:
https://sts2guide.com/news/slay-the-spire-2-beta-patch-v0-104-0-analysis
```

## 3. X 草稿

短串，链接放最后一条。

```text
Slay the Spire 2 v0.104.0 beta does not look like a full meta reset to me.

It looks more like a retest patch:
- Ironclad card roles got clearer
- Regent Parry is easier to read
- Ancients got real buffs
- Doormaker is still being watched, not declared fixed
```

```text
The biggest practical question is probably not "what is S tier now?"

It is:
what should we retest before carrying v0.103.2 assumptions forward?

For me: Conflagration, Drum of Battle, Parry, Neow's Fury, Booming Conch, and low Ascension pacing.
```

```text
I wrote the longer version here, using the official Steam notes as the fact source:
https://sts2guide.com/news/slay-the-spire-2-beta-patch-v0-104-0-analysis
```

## 4. Steam 社区草稿

Steam 不建议另开纯导流帖。只有当讨论区已有 `v0.104.0` / `beta patch` / `Doormaker` / `Ironclad` 相关高质量帖子时，才用补充回复。

回复草稿：

```text
I would be careful calling v0.104.0 a full meta reset yet.

The official notes are pretty specific: lower Ascension pacing is being adjusted, Doormaker is still being monitored, and the clearest retest targets are Conflagration, Drum of Battle, Parry, and a few Ancient tools like Neow's Booming Conch / Neow's Fury.

So my read is: retest the affected packages first, but don't rewrite every build or tier list from one beta branch note.
```

可选补充链接（仅当原帖允许外链且上下文需要）：

```text
I collected the official-note-based summary here:
https://sts2guide.com/news/slay-the-spire-2-beta-patch-v0-104-0-analysis
```

## 5. 发布优先级

当前默认优先级：

1. `Steam`：第一优先。先找已有 `v0.104.0` / `beta patch` / `Doormaker` / `Ironclad` 相关讨论，优先补充官方 notes 总结和 retest 观点；不主动开纯导流帖。
2. `Reddit`：第二优先。适合发讨论帖，但主贴默认不放链接，且需要发后 30-60 分钟看评论。
3. `X`：最后优先。适合低成本短串，但不作为主要分发阵地。

如果今天只能做一个平台，优先做 `Steam`。若 Steam 当下没有合适已有讨论，再转 `Reddit`。只有 Steam / Reddit 都不适合时，才发 `X` 短串。

## 6. 后续记录要求

发出后必须回填：

- 平台
- 发布时间
- 链接
- 是否带链接
- 30-60 分钟互动复查结果
- 是否触发过滤 / 移除 / 限流

## 7. 发布前部署闸门

本分发包只允许在以下证据齐全后执行：

- `git status --short --branch` 显示本轮改动已提交并推送，不存在待发布的代码差异
- Vercel Production 最新部署状态为 `Ready`
- `curl -I -L https://sts2guide.com/news/slay-the-spire-2-beta-patch-v0-104-0-analysis` 返回 `HTTP 200`
- 正文快检能命中 `v0.104.0`、`Conflagration`、`Drum of Battle`、`Doormaker`

若任一项不满足，标准动作是先部署/等部署/修缓存，不进入 X、Reddit 或 Steam 发帖。
