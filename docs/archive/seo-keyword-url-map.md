# StS2 Guide SEO Keyword-URL Map

Last updated: 2026-03-17

## Mapping rules
- One primary keyword cluster maps to one primary URL.
- Other pages should link to the primary URL instead of competing for the same exact term.
- Use close variants as secondary keywords on supporting pages, not as primary targets.
- Phase focus (current): prioritize entity long-tail pages (`cards/relics/mechanics/build`) over broad launch/news terms.
- Do not publish new launch/news pages unless they serve a clearly different search intent.

## Primary keyword ownership
| URL | Primary keyword cluster | Secondary variants | Notes |
|---|---|---|---|
| `/` | slay the spire 2 guide | sts2 guide, slay the spire 2 strategy hub | Brand/home intent only |
| `/news/slay-the-spire-2-launch-time-us-china` | slay the spire 2 launch time | sts2 launch time, slay the spire 2 release time, early access launch time | Launch hub page, time-sensitive |
| `/news` | slay the spire 2 news | sts2 updates, slay the spire 2 patch notes | News index intent |
| `/characters` | slay the spire 2 characters | sts2 characters, best sts2 character | Character index intent |
| `/characters/[slug]` | `{character} guide` | `{character} build`, `{character} strategy` | One character = one page |
| `/mechanics` | slay the spire 2 mechanics | sts2 mechanics, sly doom stars forge | System glossary intent |
| `/guides` | slay the spire 2 build guides | sts2 builds, best sts2 decks | Build overview intent |
| `/relics` | slay the spire 2 relics | sts2 relic database, best relics sts2 | Relic lookup intent |
| `/about` | about sts2 guide | sts2 guide mission, editorial policy | Trust/about intent only |

## Current sprint ownership (validation batch first)
| URL pattern | Primary keyword cluster | Notes |
|---|---|---|
| `/cards/[slug]` | `{card name} slay the spire 2` | P0: entity long-tail priority |
| `/relics/[slug]` | `{relic name} slay the spire 2` | P0: entity long-tail priority |
| `/guides/*mechanic*` | `{mechanic} explained sts2` | P0: problem/intent driven |
| `/guides/*build*` | `{character} early build sts2` | P0: actionable strategy intent |

## Internal linking anchors (recommended)
- To launch hub: `Slay the Spire 2 Launch Time`, `Launch Guide`, `First 24h Checklist`
- To mechanics: `Slay the Spire 2 Mechanics`, `Sly Doom Stars Forge Guide`
- To guides: `Slay the Spire 2 Build Guides`, `Best Deck Builds`
- To characters: `Slay the Spire 2 Characters`, `Character Guides`
- To relics: `Slay the Spire 2 Relics`, `Relic Database`

## Do-not-compete checks
- Do not publish another page targeting exact match `slay the spire 2 launch time`.
- If publishing a launch-related update, add it to the existing launch hub or target a different intent (for example: first-day mistakes, starter character choice, FAQ updates).
- Keep title/H1/canonical aligned with the URL owner above.
- For current sprint, avoid creating multiple pages for the same card/relic/entity variant; merge synonyms into one owner URL.
