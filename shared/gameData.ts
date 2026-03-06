export const CHARACTERS = [
  {
    slug: 'ironclad',
    name: 'Ironclad',
    title: 'The Relentless Warrior',
    description: 'A battle-hardened warrior who channels raw strength and fury, sacrificing health for devastating power.',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/ss_026b621a38b400c9f4080a7dd9152dd3050cbe2d.1920x1080.jpg?t=1770241822',
    difficulty: 'Intermediate',
    hp: 80,
    gold: 99,
    startingRelic: 'Burning Blood',
    startingDeck: [
      'Strike (5)',
      'Defend (4)',
      'Bash (1)',
    ],
    mechanics: [
      {
        name: 'Strength',
        description: 'Stack Strength to increase damage output. Many Ironclad cards gain or benefit from Strength.',
      },
      {
        name: 'Exhaust',
        description: 'Remove cards from your deck for the rest of combat. Synergizes with Feel No Pain and Dark Embrace.',
      },
      {
        name: 'Self-Damage',
        description: 'Pay health to gain powerful effects. Combos with Rupture and self-healing relics.',
      },
    ],
    playstyle: 'Ironclad excels at building overwhelming offensive power through Strength stacking while maintaining survivability through Block and healing. The character rewards aggressive play and calculated risk-taking, often sacrificing health for immediate power gains. Exhaust synergies allow for deck manipulation and powerful combos.',
    lore: 'Once a decorated general of the mountain kingdoms, the Ironclad abandoned his post after witnessing the corruption of his commanders. Now he climbs the Spire seeking redemption, his body scarred by countless battles but his will unbroken. Each strike channels the fury of his fallen comrades, and his blood burns with an eternal flame that refuses to be extinguished.',
    updatedAt: '2026-02-13',
  },
  {
    slug: 'silent',
    name: 'Silent',
    title: 'The Deadly Assassin',
    description: 'A cunning rogue who strikes from the shadows, wielding poison, shivs, and the new Sly mechanic for devastating combos.',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/ss_01ff255192aea73e2fd9940cea4f613cb2919298.1920x1080.jpg?t=1770241822',
    difficulty: 'Advanced',
    hp: 70,
    gold: 99,
    startingRelic: 'Ring of the Snake',
    startingDeck: [
      'Strike (5)',
      'Defend (5)',
      'Survivor (1)',
      'Neutralize (1)',
    ],
    mechanics: [
      {
        name: 'Sly',
        description: 'NEW MECHANIC: Cards with Sly automatically play themselves when discarded. Enables powerful discard synergies and unexpected plays.',
      },
      {
        name: 'Poison',
        description: 'Apply Poison to enemies that deals damage at the end of their turn. Stacks infinitely for long-term damage.',
      },
      {
        name: 'Shivs',
        description: 'Generate 0-cost attack cards that synergize with card-play effects. Can quickly overwhelm enemies with volume.',
      },
    ],
    playstyle: 'Silent rewards careful planning and exploiting enemy patterns. The new Sly mechanic adds a layer of strategy around hand management and discard effects. Poison provides consistent damage over time, while Shivs enable burst damage through volume. Silent players must balance defensive play with setting up devastating combos.',
    lore: 'A master assassin who speaks only through action, the Silent has eliminated countless targets without leaving a trace. Her climb up the Spire is a contract unlike any other—one that promises answers about her forgotten past. The shadows themselves seem to bend to her will, and her blades carry toxins distilled from the Spire\'s own corrupted essence.',
    updatedAt: '2026-02-13',
  },
  {
    slug: 'necrobinder',
    name: 'Necrobinder',
    title: 'The Undead Summoner',
    description: 'A dark sorceress who commands death itself, manipulating souls and wielding her skeletal companion Osty to overwhelm foes.',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/ss_8c1bbb6d2a000405176cd625ef70bee8ebad1c87.1920x1080.jpg?t=1770241822',
    difficulty: 'Advanced',
    hp: 35,
    gold: 99,
    startingRelic: 'Osty\'s Binding',
    startingDeck: [
      'Strike (5)',
      'Defend (4)',
      'Blight Strike (1)',
      'Bodyguard (1)',
    ],
    mechanics: [
      {
        name: 'Doom',
        description: 'NEW MECHANIC: Apply Doom to enemies that triggers at the end of their turn, dealing massive delayed damage. Stack multiple Doom effects for devastating combos.',
      },
      {
        name: 'Osty',
        description: 'Your skeletal hand companion that can block damage, attack enemies, and be sacrificed for powerful effects. Osty respawns each combat.',
      },
      {
        name: 'Souls',
        description: 'Generate Soul cards that provide energy, draw, and other benefits. Many Necrobinder cards create or consume Souls.',
      },
    ],
    playstyle: 'Necrobinder offers a unique minion-based playstyle centered around Osty. Players must decide when to use Osty defensively versus offensively, and when to sacrifice him for powerful effects. The Doom mechanic rewards planning ahead and stacking delayed damage. Soul generation provides resource flexibility and enables powerful turns.',
    lore: 'A necromancer who bound their soul to Osty, a colossal undead hand. Sassy, dark-humored, and surprisingly cheerful for someone who deals in death. Despite having very low HP (35), Osty absorbs damage meant for you.',
    updatedAt: '2026-02-13',
  },
  {
    slug: 'regent',
    name: 'The Regent',
    title: 'Heir to the Throne of Stars',
    description: 'Heir to the Throne of Stars. Accumulates Stars, Forges artifacts, and commands Minions in battle.',
    image: 'https://www.megacrit.com/images/regent_gif.gif',
    lore: 'Heir to the Throne of Stars. Commands celestial magic to accumulate Stars, forge powerful artifacts, and summon minions. Seeks to reclaim their rightful place through the power of the Spire.',
    startingRelic: 'Stellar Compass',
    startingDeck: [
      'Strike (5)',
      'Defend (4)',
      'Forge (1)',
      'Starlight (1)',
    ],
    mechanics: [
      {
        name: 'Stars',
        description: 'NEW MECHANIC: A special resource that accumulates as you play cards. Spend Stars to activate powerful cosmic abilities and forge artifacts.',
      },
      {
        name: 'Forge',
        description: 'Create permanent artifacts that provide ongoing benefits. Forged items remain for the entire combat and stack with each other.',
      },
      {
        name: 'Minions',
        description: 'Summon celestial minions that fight alongside you. Unlike Necrobinder\'s minions, Regent\'s minions are temporary but extremely powerful.',
      },
    ],
    playstyle: 'The Regent requires strategic resource management and long-term planning. Accumulate Stars through card play, then spend them on Forge abilities to create permanent advantages. Celestial minions provide burst damage and utility. This character rewards players who can balance immediate threats with building towards overwhelming late-game power.',
    difficulty: 'Advanced',
    hp: 75,
    gold: 99,
    updatedAt: '2026-02-13',
  },
];

export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: 'News' | 'Guide' | 'Analysis' | 'Update';
  readTime: string;
  featured: boolean;
  image: string;
  url: string;
  source: string;
  updatedAt: string;
  intro?: string[];
  sections?: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  relatedLinks?: {
    href: string;
    label: string;
  }[];
  sourceType?: 'internal' | 'external';
}

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    slug: 'slay-the-spire-2-launch-time-us-china',
    title: 'Slay the Spire 2 Is Out Now in Early Access: Launch Status, Time, and First 24 Hours Guide',
    excerpt: 'Slay the Spire 2 is now live in Early Access. This launch hub covers release status, practical launch-time conversion, first-24-hours priorities, beginner mistakes, and the best next pages to read during launch week.',
    date: '2026-03-04',
    category: 'News',
    readTime: '10 min',
    featured: true,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/ss_026b621a38b400c9f4080a7dd9152dd3050cbe2d.1920x1080.jpg?t=1770241822',
    url: 'https://store.steampowered.com/app/2868840/Slay_the_Spire_2/',
    source: 'StS2 Guide',
    sourceType: 'internal',
    updatedAt: '2026-03-06',
    intro: [
      'Slay the Spire 2 is now live in Early Access on Steam. This page is no longer just a launch-time converter; it is a launch-status hub for players who want the fastest verified answer and the next useful page to open.',
      'The release-date fact is already settled. The more useful launch-week questions now are: is it live, does it support co-op, what should beginners read first, and where should returning players go for mechanics and character differences.',
    ],
    sections: [
      {
        heading: 'Slay the Spire 2 release status: out now in Early Access',
        paragraphs: [
          'The key update is simple and confirmed: Slay the Spire 2 is out now in Early Access on Steam. If you reached this page through searches like “out now”, “launch status”, or “early access live”, you can treat the release as active rather than upcoming.',
          'That changes the job of this page. After confirming the game is live, it should route you toward the next practical question: how to start your first run, which character is safest, and where to check mechanics like Sly, Doom, Stars, and Forge.',
        ],
        bullets: [
          'Current status: live in Steam Early Access',
          'Release date: March 5, 2026',
          'Confirmed next-stop topics: first-run guide, starter character choice, mechanics reference',
        ],
      },
      {
        heading: 'Launch time and current storefront status',
        paragraphs: [
          'For users still checking the unlock-hour conversion, the practical launch-time reference remains the same: March 5, 2026 at 10:00 AM in US Pacific Time and March 6, 2026 at 2:00 AM in China Standard Time.',
          'That timing question matters less now because the storefront is already live. The more important operational check is whether your Steam client has updated cleanly and whether your local storefront shows the game as playable.',
        ],
        bullets: [
          'US Pacific Time: March 5, 2026, 10:00 AM',
          'China Standard Time: March 6, 2026, 2:00 AM',
          'Current storefront state: available on Steam',
        ],
      },
      {
        heading: 'What is officially confirmed right now',
        paragraphs: [
          'The most important confirmed fact is that Slay the Spire 2 launched as an Early Access release, not a full 1.0 release. That sets the right expectation for balance, content expansion, and week-one discussion.',
          'Another confirmed talking point from launch coverage is that Slay the Spire 2 supports 4-player co-op. That is one of the clearest “what is new now” answers for people comparing it to the first game.',
        ],
        bullets: [
          'Early Access went live on March 5, 2026',
          'The game is playable on Steam now',
          '4-player co-op is part of the launch-week feature set',
          'Character-specific mechanics remain a major discovery path for new players',
        ],
      },
      {
        heading: 'Characters and mechanics new players should recognize fast',
        paragraphs: [
          'The fastest way to avoid information overload in launch week is to anchor on the known character set and a short list of mechanics. Ironclad and Silent remain the easiest reference points, while Necrobinder and Regent introduce more system-heavy play patterns.',
          'Mechanics like Sly, Doom, Stars, and Forge are not just flavor labels. They are the terms that show up again and again when players try to understand why a run felt stable or why a draft line collapsed.',
        ],
      },
      {
        heading: '4-player co-op is one of the biggest launch-week differentiators',
        paragraphs: [
          'One of the most valuable launch-week facts to highlight is 4-player co-op. That is a concrete feature difference users are actively searching for, and it changes how some players judge the sequel even before they dive deep into solo progression.',
          'If your question is not “when does it unlock” but “what is new enough to justify jumping in now,” co-op is one of the strongest short answers.',
        ],
      },
      {
        heading: 'What to do in your first 24 hours',
        paragraphs: [
          'Launch-week advice is most useful when it reduces wasted runs. Treat your first few hours as calibration: learn enemy pacing, test one character deeply enough to spot stable card packages, and avoid rushing into rigid tier-list thinking.',
          'If you are splitting attention between solo runs and co-op curiosity, still start with one clean solo baseline. That gives you better judgment when comparing multiplayer impressions later.',
        ],
      },
      {
        heading: 'First 24 hours checklist (launch execution plan)',
        paragraphs: [
          'This section is built for players who want a clear launch-day routine instead of vague hype. Use it as a practical sequence and adapt based on your available time.',
        ],
        bullets: [
          'T-30 minutes: update client, verify controller/keybinds, and check platform unlock status.',
          'T+0 to T+2 hours: run exploratory attempts to learn enemy pacing and card pool direction instead of forcing one build.',
          'T+2 to T+6 hours: pick one character to focus on, track which card packages consistently stabilize Act 1.',
          'T+6 to T+24 hours: test two to three draft rules (card add discipline, pathing risk level, boss prep timing) and keep only what repeats results.',
          'Do not lock tier-list conclusions too early; Early Access balance and player understanding will shift quickly.',
        ],
      },
      {
        heading: 'Top 5 beginner mistakes at launch (and better alternatives)',
        paragraphs: [
          'Most early losses come from decision quality, not bad luck. These patterns are common in launch week and are fixable with simple constraints.',
        ],
        bullets: [
          'Mistake 1: drafting every flashy rare card. Better: draft for curve, block coverage, and energy consistency first.',
          'Mistake 2: overfighting elites without a damage plan. Better: only route into elites when your current deck can end fights on time.',
          'Mistake 3: forcing one archetype after one lucky reward. Better: commit late and pivot when card rewards clearly point elsewhere.',
          'Mistake 4: undervaluing defensive turns in new matchups. Better: treat unknown enemy patterns as information turns and preserve HP.',
          'Mistake 5: copying final builds without understanding transition cards. Better: learn the bridge cards that carry weak early decks.',
        ],
      },
      {
        heading: 'What to read next after launch',
        paragraphs: [
          'The highest-value launch-week path depends on your immediate question. If you are completely new, go to the first-run guide. If you are choosing a class, go to the starter character guide. If your question is about systems or keywords like Sly, Doom, Stars, or Forge, go to mechanics. If your question is about multiplayer, read the co-op explainer.',
        ],
        bullets: [
          'Need the beginner route? Read the first-run guide.',
          'Need the short answer on class choice? Read the best starter character guide.',
          'Need wiki-style system explanations? Read the mechanics page.',
          'Need the multiplayer answer? Read the co-op explainer.',
        ],
      },
      {
        heading: 'Launch FAQ and update policy',
        paragraphs: [
          'Because this is an Early Access launch page, some details can change quickly. This guide separates confirmed information from practical inference and will be updated during launch week.',
        ],
        bullets: [
          'Q: Is this a full 1.0 release? A: No, Slay the Spire 2 is live in Early Access.',
          'Q: Is the unlock hour final for every region? A: Use the listed conversion as practical reference, but treat storefront live status as the final source of truth.',
          'Q: Which page should I read next? A: Start with Mechanics for systems, Best Starter Character for class choice, or First-Run Guide for launch-day decisions.',
          'Verification note: as of March 6, 2026 in China / March 5, 2026 in the US, official messaging confirms the game is live in Early Access.',
          'Update log: 2026-03-06 - rewrote this page from pre-launch timing reference into a post-launch hub with direct next-step routing.',
        ],
      },
    ],
    relatedLinks: [
      {
        href: '/news/slay-the-spire-2-known-issues-and-fixes',
        label: 'Known issues and fixes: crash, black screen, freeze, and text problems',
      },
      {
        href: '/news/slay-the-spire-2-hotfix-patch-notes',
        label: 'Hotfix patch notes: what v0.98.1 fixed on day one',
      },
      {
        href: '/news/slay-the-spire-2-co-op-guide-how-it-works',
        label: 'Co-op guide: what launch-week multiplayer confirms so far',
      },
      {
        href: '/news/slay-the-spire-2-steam-deck-performance-guide',
        label: 'Steam Deck guide: current performance picture and common fixes',
      },
      {
        href: '/news/slay-the-spire-2-first-run-guide-act-1-priorities',
        label: 'First-run priorities for launch week and Act 1 stability',
      },
      {
        href: '/news/best-starter-character-slay-the-spire-2-early-access',
        label: 'Best starter character if you want the fastest clean start',
      },
      {
        href: '/characters',
        label: 'Browse all known Slay the Spire 2 characters',
      },
      {
        href: '/mechanics',
        label: 'See the currently known Slay the Spire 2 mechanics',
      },
      {
        href: '/news',
        label: 'Read more Slay the Spire 2 news and updates',
      },
      {
        href: '/news/slay-the-spire-2-co-op-guide-how-it-works',
        label: 'Co-op guide: what launch-week multiplayer confirms so far',
      },
    ],
  },
  {
    slug: 'slay-the-spire-2-hotfix-patch-notes',
    title: 'Slay the Spire 2 Hotfix Patch Notes: What v0.98.1 Fixed on Day One',
    excerpt: 'Slay the Spire 2 hotfix v0.98.1 is already live. This quick patch-notes guide explains what the launch-day hotfix fixed, which crashes and localization issues it targets, and what to try next if your problem remains.',
    date: '2026-03-06',
    category: 'News',
    readTime: '6 min',
    featured: false,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/ss_8f8dcd17d2dc8f228151f00ca17e59f2f65b9d85.1920x1080.jpg?t=1770241822',
    url: 'https://steamdb.info/patchnotes/22221407/',
    source: 'StS2 Guide',
    sourceType: 'internal',
    updatedAt: '2026-03-06',
    intro: [
      'Slay the Spire 2 hotfix v0.98.1 is already live. The practical takeaway is that this is a launch-day stability patch, not a content update.',
      'If you only need the short answer, v0.98.1 targets multiplayer progression lockouts, several crash paths, and a set of localization problems that were visible immediately after release.',
    ],
    sections: [
      {
        heading: 'Short answer: v0.98.1 is a day-one stability hotfix',
        paragraphs: [
          'The hotfix was published on March 6, 2026 and its job is clear: clean up launch-day bugs and softlocks that players reported immediately after Early Access went live.',
          'That makes this patch more important for troubleshooting than for theorycrafting. If you are deciding whether you need to update right now, the answer is yes.',
        ],
        bullets: [
          'Patch version: v0.98.1',
          'Focus: bug fixes, crash fixes, softlock fixes, localization fixes',
          'Not a balance patch or content expansion',
        ],
      },
      {
        heading: 'What v0.98.1 fixed',
        paragraphs: [
          'The most important confirmed fix is a multiplayer progression problem. If your first run was in multiplayer and you disconnected after beating the Act 1 boss, the bug could stop you from starting a new run or entering the Timeline screen. The hotfix targets that case directly.',
          'The patch also fixes several crash paths tied to fast card play and localization. That includes unsupported Steam language fallback problems and multiple non-English text-related crashes.',
        ],
        bullets: [
          'Fixed multiplayer bug that could block a new run after an Act 1 boss disconnect',
          'Fixed a crash from fast card play when targeting was cancelled',
          'Fixed untranslated-text crash paths for languages with complex plural rules',
          'Fixed intermittent non-English crashes and a Japanese localization-specific crash',
          'Fixed unsupported Steam languages showing all text as W instead of falling back to English',
        ],
      },
      {
        heading: 'What this patch means for players',
        paragraphs: [
          'If you ran into launch-day instability, this patch may remove the need for some manual workarounds. Multiplayer users and non-English language users have the strongest reason to recheck the game immediately after updating.',
          'At the same time, not every reported problem is guaranteed to disappear after one hotfix. The right expectation is that v0.98.1 removes several obvious failures, but some launch-week troubleshooting will still be necessary.',
        ],
        bullets: [
          'Update first, then retry the exact failure case before changing system settings',
          'Re-check language settings if you saw text display anomalies before the patch',
          'Use the known-issues page if crashes or freezes continue after updating',
        ],
      },
      {
        heading: 'What to do if your issue remains after updating',
        paragraphs: [
          'If you still have a crash, black screen, or freeze after installing v0.98.1, move from patch reading into troubleshooting. Start with the simplest checks first: restart Steam, verify files, and retry without extra overlays or background capture tools.',
          'If your issue looks language-specific, switch back to a fully supported language and test again. If your issue is multiplayer-specific, try reproducing it in solo first so you can separate a general stability problem from a co-op-only bug.',
        ],
        bullets: [
          'Restart Steam and confirm the new build is installed',
          'Verify game files before changing wider system settings',
          'Separate solo issues from co-op issues when testing',
        ],
      },
      {
        heading: 'Launch-week FAQ',
        paragraphs: [
          'The most useful questions around this patch are short and practical. Use this as the quick-reference block before you move into deeper troubleshooting.',
        ],
        bullets: [
          'Q: Is v0.98.1 a content patch? A: No, it is a stability and bug-fix hotfix.',
          'Q: Does this hotfix target co-op issues? A: Yes, one confirmed fix addresses a multiplayer progression lockout after an Act 1 boss disconnect.',
          'Q: Should I still troubleshoot after updating? A: Yes, if your exact issue remains after the patch, move to known-issues troubleshooting rather than assuming the problem is gone.',
        ],
      },
    ],
    relatedLinks: [
      {
        href: '/news/slay-the-spire-2-known-issues-and-fixes',
        label: 'Known issues and fixes: crash, black screen, freeze, and text problems',
      },
      {
        href: '/news/slay-the-spire-2-launch-time-us-china',
        label: 'Launch hub: live status, FAQ, and the best next pages to read',
      },
      {
        href: '/news/slay-the-spire-2-steam-deck-performance-guide',
        label: 'Steam Deck guide: current performance picture and common fixes',
      },
      {
        href: '/news',
        label: 'Browse more Slay the Spire 2 launch-week updates',
      },
    ],
  },
  {
    slug: 'slay-the-spire-2-known-issues-and-fixes',
    title: 'Slay the Spire 2 Known Issues and Fixes: Crash, Black Screen, Freeze',
    excerpt: 'The most common Slay the Spire 2 launch-week problems are crashes, black screens, freezes, and language-related display errors. This troubleshooting guide prioritizes the fastest checks first, then separates patched issues from problems that may still need a workaround.',
    date: '2026-03-06',
    category: 'News',
    readTime: '8 min',
    featured: true,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/ss_026b621a38b400c9f4080a7dd9152dd3050cbe2d.1920x1080.jpg?t=1770241822',
    url: 'https://store.steampowered.com/app/2868840/Slay_the_Spire_2/',
    source: 'StS2 Guide',
    sourceType: 'internal',
    updatedAt: '2026-03-06',
    intro: [
      'The most common Slay the Spire 2 launch-week problems are startup crashes, black screens, freezes, and text display issues. The practical goal of this page is to help you separate “already addressed by the hotfix” from “still worth troubleshooting locally.”',
      'Start with the fastest checks first. In launch week, that usually beats overcomplicated system tweaking.',
    ],
    sections: [
      {
        heading: 'Fastest troubleshooting steps first',
        paragraphs: [
          'Begin with the checks that resolve the highest number of launch-week failures at the lowest cost. That means confirming the game updated correctly, fully restarting Steam, and verifying local files before you make broader system changes.',
          'If you are testing a multiplayer problem, also retry in solo after updating. That gives you a clean way to see whether the failure is specific to co-op or part of a wider stability issue.',
        ],
        bullets: [
          'Confirm the game updated to the latest hotfix build',
          'Fully restart Steam, then relaunch the game',
          'Verify integrity of game files',
          'Retry once in solo if the original problem happened in multiplayer',
        ],
      },
      {
        heading: 'Crash or freeze on launch',
        paragraphs: [
          'Launch-week crash reports have clustered around startup instability, fast card-play edge cases, and some language-related failures. The hotfix already targets several of those paths, so patch status matters before anything else.',
          'If your game still crashes on launch after updating, narrow the problem rather than changing five things at once. Restart Steam, verify files, disable overlays or capture tools, and note whether the crash happens before the menu, at the menu, or only once you enter a run.',
        ],
        bullets: [
          'Update first, because v0.98.1 already fixes multiple crash paths',
          'Disable overlays and background capture tools if the crash persists',
          'Test whether the crash is menu-level or run-level',
          'Use the in-game feedback tool or Steam discussion boards if the crash remains reproducible',
        ],
      },
      {
        heading: 'Black screen or stuck loading',
        paragraphs: [
          'A visible cursor on top of a black screen has been reported by players during launch week. Community reports suggest that a full Steam restart can help in some cases, which makes this a good early check before deeper troubleshooting.',
          'If the issue only appears after entering combat or after skipping tutorial flow, note that detail. It helps separate a general launch failure from a state-specific bug that may need another patch.',
        ],
        bullets: [
          'Try a full Steam restart before wider system changes',
          'Note whether the black screen happens on boot, menu load, or first combat',
          'Re-test after the hotfix before assuming the issue is still current',
        ],
      },
      {
        heading: 'Text or language display issues',
        paragraphs: [
          'One confirmed hotfix target was unsupported Steam languages showing all text as W instead of falling back to English. The patch also fixes several non-English crash paths and a Japanese localization-specific error.',
          'That means language settings are now a first-class troubleshooting signal. If you were using an unsupported or edge-case language setting on day one, update first and re-test before assuming the client is still broken.',
        ],
        bullets: [
          'The W-text fallback issue is a confirmed hotfix target',
          'Several non-English crash cases were also patched in v0.98.1',
          'If text issues remain, switch to a fully supported language and re-test',
        ],
      },
      {
        heading: 'When to wait for another patch',
        paragraphs: [
          'Not every launch-week failure is best solved by local tweaking. If you can clearly reproduce the issue on the latest build and the problem survives file verification plus a clean Steam restart, the next useful step may be reporting rather than repeatedly reinstalling.',
          'The right launch-week mindset is iterative. Update, retest, isolate the trigger, then decide whether you are dealing with a local environment problem or a bug that still needs another official fix.',
        ],
      },
      {
        heading: 'Launch-week FAQ',
        paragraphs: [
          'Use this block for the fastest version of the answer before moving into full troubleshooting.',
        ],
        bullets: [
          'Q: My game still crashes after the hotfix. What should I do first? A: Restart Steam, verify files, and re-test on the latest build before deeper system changes.',
          'Q: My text looked broken on day one. Is that a known issue? A: Yes. Unsupported-language fallback and several non-English text-related crashes were explicit hotfix targets.',
          'Q: Should I keep troubleshooting if the issue is still reproducible? A: Isolate the trigger first, then decide whether to keep local testing or report it through official feedback channels.',
        ],
      },
    ],
    relatedLinks: [
      {
        href: '/news/slay-the-spire-2-hotfix-patch-notes',
        label: 'Hotfix patch notes: what v0.98.1 fixed on day one',
      },
      {
        href: '/news/slay-the-spire-2-steam-deck-performance-guide',
        label: 'Steam Deck guide: current performance picture and common fixes',
      },
      {
        href: '/news/slay-the-spire-2-launch-time-us-china',
        label: 'Launch hub: live status, FAQ, and launch-week routing',
      },
      {
        href: '/news',
        label: 'Browse more Slay the Spire 2 launch-week updates',
      },
    ],
  },
  {
    slug: 'slay-the-spire-2-co-op-guide-how-it-works',
    title: 'Slay the Spire 2 Co-op Guide: How Multiplayer Works at Launch',
    excerpt: 'Slay the Spire 2 does have online co-op, with up to 4 players on Steam. This launch-week guide separates what is officially confirmed from what still needs more player verification, then points groups toward the best first pages to read together.',
    date: '2026-03-06',
    category: 'News',
    readTime: '7 min',
    featured: false,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/ss_8f8dcd17d2dc8f228151f00ca17e59f2f65b9d85.1920x1080.jpg?t=1770241822',
    url: 'https://store.steampowered.com/app/2868840/Slay_the_Spire_2/',
    source: 'StS2 Guide',
    sourceType: 'internal',
    updatedAt: '2026-03-06',
    intro: [
      'Yes. Slay the Spire 2 has online co-op, and the official Steam page confirms support for up to 4 players.',
      'What matters in launch week is separating confirmed multiplayer facts from details that still need broader player testing. This page is built around that split so you can make decisions without pretending every system interaction is already settled.',
    ],
    sections: [
      {
        heading: 'What is confirmed about co-op at launch',
        paragraphs: [
          'The official Steam store page confirms online co-op and explicitly says the game can be played with up to 4 players. It also states that the mode includes multiplayer-specific cards and team synergies.',
          'That is enough to answer the highest-value launch-week query: yes, the sequel really does have a dedicated co-op mode, and it is one of the most concrete feature differences from how many players remember the first game.',
        ],
        bullets: [
          'Officially confirmed: online co-op',
          'Officially confirmed: up to 4 players',
          'Officially confirmed: multiplayer-specific cards and team synergies',
        ],
      },
      {
        heading: 'How to start a multiplayer run',
        paragraphs: [
          'Use the launch client and Steam account state as your baseline. In practical terms, the first step is making sure every player has updated to the latest version, because launch-day hotfixes already included a multiplayer progression fix.',
          'Once your build is current, start a multiplayer session through the live Steam version of the game. If your group runs into disconnects or progression weirdness, re-test after confirming everyone is on the same build rather than assuming the mode itself is unavailable.',
        ],
        bullets: [
          'Update the client before testing co-op',
          'Confirm everyone is on the same live build',
          'Retry after the hotfix if your first co-op session behaved strangely',
        ],
      },
      {
        heading: 'Questions players are asking most',
        paragraphs: [
          'The most common launch-week multiplayer questions are not always deep systems questions. Many groups just want to know whether co-op exists, whether it is stable enough to test now, and which supporting pages they should read before the first session.',
          'That is why co-op search intent overlaps with beginner content. One player in the group usually benefits from the first-run guide, and character selection still matters even if your first session is primarily social.',
        ],
        bullets: [
          'If your group is new, start with the first-run guide before overplanning synergy',
          'If one player wants the safest first pick, send them to the starter-character guide',
          'If terms like Sly, Doom, Stars, or Forge cause confusion, use the mechanics page as a quick glossary',
        ],
      },
      {
        heading: 'Details still being verified',
        paragraphs: [
          'Launch-week discussion is still settling around finer multiplayer implementation details. That means this page should not overclaim on systems that need more player observation, such as exact reward flow, role specialization patterns, or edge-case interactions after disconnects.',
          'The right way to use co-op information in week one is to anchor on what the official page confirms, then layer practical group observations on top once they repeat consistently.',
        ],
        bullets: [
          'Treat edge-case reward and progression behavior as still being verified',
          'Use official confirmation for feature existence, not for every emergent system detail',
          'Expect more stable co-op guidance after additional patches and player testing',
        ],
      },
      {
        heading: 'Launch-week takeaway',
        paragraphs: [
          'The highest-value co-op answer right now is simple: Slay the Spire 2 supports online co-op for up to 4 players, and it is already part of the live Early Access build. If your group wants the cleanest start, combine that answer with one first-run page and one starter-character page instead of trying to learn everything inside multiplayer itself.',
        ],
      },
    ],
    relatedLinks: [
      {
        href: '/news/slay-the-spire-2-launch-time-us-china',
        label: 'Launch hub: live status, FAQ, and first launch-week routes',
      },
      {
        href: '/news/slay-the-spire-2-first-run-guide-act-1-priorities',
        label: 'First-run guide for stable early decisions',
      },
      {
        href: '/news/best-starter-character-slay-the-spire-2-early-access',
        label: 'Best starter character if someone in the group wants the safest first pick',
      },
      {
        href: '/mechanics',
        label: 'Mechanics reference: Sly, Doom, Stars, Forge, and more',
      },
    ],
  },
  {
    slug: 'slay-the-spire-2-steam-deck-performance-guide',
    title: 'Slay the Spire 2 on Steam Deck: Performance and Common Fixes',
    excerpt: 'Slay the Spire 2 appears to run well for many Steam Deck players so far, but launch-week troubleshooting still matters. This page focuses on the practical question first: can you play comfortably on Deck now, and what should you try if you hit crashes, UI friction, or startup problems?',
    date: '2026-03-06',
    category: 'News',
    readTime: '7 min',
    featured: false,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/ss_01ff255192aea73e2fd9940cea4f613cb2919298.1920x1080.jpg?t=1770241822',
    url: 'https://store.steampowered.com/app/2868840/Slay_the_Spire_2/',
    source: 'StS2 Guide',
    sourceType: 'internal',
    updatedAt: '2026-03-06',
    intro: [
      'The practical Steam Deck question is not “what is the perfect setting preset” but “is Slay the Spire 2 playable on Deck right now, and what should I try first if it is not behaving well?”',
      'Early player feedback suggests the game can run well on Steam Deck, but launch-week stability guidance should stay conservative until more reports settle.',
    ],
    sections: [
      {
        heading: 'How Slay the Spire 2 is looking on Steam Deck so far',
        paragraphs: [
          'Early community feedback is encouraging rather than alarming. Players are already reporting that performance has been good so far on Steam Deck, which is the most useful short answer for launch week.',
          'That does not mean every Deck user will have the same experience. The correct launch-week framing is that Deck play looks viable now, but individual troubleshooting may still be needed around startup behavior, controls, or UI comfort.',
        ],
        bullets: [
          'Early Deck impressions are broadly positive',
          'Launch-week stability can still vary by user environment and build state',
          'Deck guidance should prioritize practical fixes over overconfident tuning claims',
        ],
      },
      {
        heading: 'First fixes to try if Deck play feels wrong',
        paragraphs: [
          'Start with the same lowest-cost checks that matter on desktop: confirm the latest build is installed, restart Steam, and verify game files. These steps are especially useful in the first 48 hours because launch hotfixes may already have changed the behavior you saw on your first boot.',
          'If the issue feels input-related rather than performance-related, test a clean relaunch before you start hunting for custom control workarounds. If the issue feels UI-related, note whether the problem is readability, touch interaction, or a hard rendering failure.',
        ],
        bullets: [
          'Update to the latest hotfix build first',
          'Restart Steam and relaunch the game',
          'Verify game files before deeper changes',
          'Separate performance issues from input or UI issues when testing',
        ],
      },
      {
        heading: 'Community-reported workarounds',
        paragraphs: [
          'Because launch-week information is still moving, the safest useful guidance is to summarize repeated community behavior rather than freeze one “best settings” answer too early. One early note from players is that touch screen input works on Steam Deck, which is useful if you are checking interface flexibility.',
          'For crashes or black screens that resemble desktop startup problems, use the known-issues flow first rather than assuming Deck-specific tuning is required.',
        ],
        bullets: [
          'Touch screen input is already being reported as working on Deck',
          'Use the desktop-style troubleshooting flow first for startup failures',
          'Wait for stronger report consensus before treating one custom preset as definitive',
        ],
      },
      {
        heading: 'When to wait for future patches',
        paragraphs: [
          'If your Deck issue survives a clean restart, file verification, and retesting on the newest build, the next move may be patience rather than endless tweaking. Launch-week patches are likely to continue, and some hardware-specific rough edges may resolve faster through official updates than through user-side experimentation.',
        ],
      },
      {
        heading: 'Launch-week FAQ',
        paragraphs: [
          'These short answers are the practical Deck version of the launch-week state of play.',
        ],
        bullets: [
          'Q: Is Slay the Spire 2 playable on Steam Deck right now? A: Early reports suggest yes, for many players, but week-one behavior can still vary.',
          'Q: Should I start with advanced Deck tuning? A: No. Update, restart Steam, and verify files first.',
          'Q: Is there one proven best preset already? A: Not yet. Launch-week guidance is still better framed as troubleshooting-first rather than one locked settings profile.',
        ],
      },
    ],
    relatedLinks: [
      {
        href: '/news/slay-the-spire-2-known-issues-and-fixes',
        label: 'Known issues and fixes: crash, black screen, freeze, and text problems',
      },
      {
        href: '/news/slay-the-spire-2-hotfix-patch-notes',
        label: 'Hotfix patch notes: what v0.98.1 fixed on day one',
      },
      {
        href: '/news/slay-the-spire-2-launch-time-us-china',
        label: 'Launch hub: live status and first launch-week routes',
      },
      {
        href: '/news',
        label: 'Browse more Slay the Spire 2 launch-week updates',
      },
    ],
  },
  {
    slug: 'best-starter-character-slay-the-spire-2-early-access',
    title: 'Best Starter Character in Slay the Spire 2 (Early Access)',
    excerpt: 'New to Slay the Spire 2 and not sure who to pick first? This practical guide compares Ironclad, Silent, Necrobinder, and Regent for early consistency, mistake tolerance, and first-10-run learning value.',
    date: '2026-03-05',
    category: 'Guide',
    readTime: '9 min',
    featured: true,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/ss_8f8dcd17d2dc8f228151f00ca17e59f2f65b9d85.1920x1080.jpg?t=1770241822',
    url: 'https://store.steampowered.com/app/2868840/Slay_the_Spire_2/',
    source: 'StS2 Guide',
    sourceType: 'internal',
    updatedAt: '2026-03-05',
    intro: [
      'If you are starting Slay the Spire 2 in Early Access, your first character should maximize learning speed and minimize run collapse from small mistakes.',
      'This guide ranks starter options by early consistency, defensive stability, and how forgiving each character feels in your first ten runs.',
    ],
    sections: [
      {
        heading: 'Short answer: pick Ironclad first',
        paragraphs: [
          'For most beginners, Ironclad is the safest first pick because his baseline sustain and straightforward combat plan reduce punishment for imperfect drafting and routing.',
          'He gives you cleaner feedback on fundamentals: damage pacing, block timing, and when to avoid overcommitting to elites.',
        ],
        bullets: [
          'Most forgiving early-game floor among the four known characters.',
          'Simple card evaluation: front-load damage, maintain block floor, add scaling later.',
          'Good for learning pathing and HP management without heavy mechanic overhead.',
        ],
      },
      {
        heading: 'How the other starters compare',
        paragraphs: [
          'Silent is strong but can punish sequencing mistakes if your discard and hand-management decisions are inconsistent.',
          'Necrobinder and Regent are high-upside but usually ask for more system understanding, so they are better as second or third picks after basic run discipline is stable.',
        ],
        bullets: [
          'Silent: high ceiling, medium beginner risk due to sequencing complexity.',
          'Necrobinder: strong control identity, but requires cleaner planning around Doom/Osty transitions.',
          'Regent: flexible and explosive, but Stars/Forge decision trees can overload early runs.',
        ],
      },
      {
        heading: 'Beginner-safe pick order for first 10 runs',
        paragraphs: [
          'Use this order if your goal is to improve quickly instead of chasing highlight runs in day one chaos.',
        ],
        bullets: [
          'Runs 1-4: Ironclad for core fundamentals and stable map decisions.',
          'Runs 5-7: Silent to practice sequencing and discard value.',
          'Runs 8-10: try Necrobinder or Regent once your early-game discipline is repeatable.',
        ],
      },
      {
        heading: 'Three rules that matter more than character choice',
        paragraphs: [
          'Character selection helps, but most early losses still come from universal decision mistakes. Keep these constraints active in every run.',
        ],
        bullets: [
          'Draft for immediate fight quality before speculative late-game combos.',
          'Route elites only when current damage plus defense can end fights on time.',
          'Preserve HP for flexibility; low HP narrows all future decisions.',
        ],
      },
      {
        heading: 'Where to go next',
        paragraphs: [
          'If you need deeper class details, use the character page first, then read mechanics to understand Sly, Doom, Stars, and Forge interactions.',
        ],
      },
    ],
    relatedLinks: [
      {
        href: '/characters',
        label: 'Character breakdowns: strengths, difficulty, and starter kits',
      },
      {
        href: '/mechanics',
        label: 'Mechanics reference: Sly, Doom, Stars, Forge, and more',
      },
      {
        href: '/news/slay-the-spire-2-launch-time-us-china',
        label: 'Launch-time hub with checklist and FAQ updates',
      },
    ],
  },
  {
    slug: 'slay-the-spire-2-first-run-guide-act-1-priorities',
    title: 'Slay the Spire 2 First Run Guide: Act 1 Priorities for Beginners',
    excerpt: 'A practical first-run guide for Slay the Spire 2 beginners. Learn what to prioritize in Act 1, when to take elite fights, and how to avoid common early mistakes in your first 10 runs.',
    date: '2026-03-05',
    category: 'Guide',
    readTime: '8 min',
    featured: true,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/ss_01ff255192aea73e2fd9940cea4f613cb2919298.1920x1080.jpg?t=1770241822',
    url: 'https://store.steampowered.com/app/2868840/Slay_the_Spire_2/',
    source: 'StS2 Guide',
    sourceType: 'internal',
    updatedAt: '2026-03-05',
    intro: [
      'If this is your first day with Slay the Spire 2, your goal is not to force a perfect build. The real goal is to make repeatable decisions that keep your run stable through Act 1.',
      'This guide focuses on practical priorities for beginners: preserving HP, drafting a playable deck curve, choosing safe routes, and avoiding the most common first-run mistakes.',
    ],
    sections: [
      {
        heading: 'Act 1 priorities: survival first, scaling second',
        paragraphs: [
          'Most early losses come from trying to scale too fast while your deck still cannot survive basic hallway fights. In Act 1, treat HP as your most limited resource.',
          'A stable Act 1 deck usually has enough early damage to end fights on time, enough block to avoid heavy chip damage, and at least one direction for mid-run scaling.',
        ],
        bullets: [
          'Priority 1: keep HP high enough to enter elites or the boss with flexibility.',
          'Priority 2: maintain a playable cost curve, especially 1-cost consistency.',
          'Priority 3: take scaling pieces only when your immediate fights stay manageable.',
        ],
      },
      {
        heading: 'Card draft rule for the first three rewards',
        paragraphs: [
          'Beginners often overvalue rarity and undervalue immediate utility. In the first few picks, card quality is less important than whether the card solves your current fight pattern.',
        ],
        bullets: [
          'Pick 1-2: take efficient damage or reliable block that improves your next two fights.',
          'Pick 3: start shaping direction, but avoid hard-committing to one archetype too early.',
          'Skip cards when all options lower deck consistency.',
        ],
      },
      {
        heading: 'When to fight elites in early runs',
        paragraphs: [
          'Elite fights are high value but also high variance for inexperienced players. Route into elites only when your deck and HP can support the risk.',
        ],
        bullets: [
          'Fight elites when you already have enough front-loaded damage and stable defense.',
          'Avoid elites if recent fights are already costing too much HP.',
          'Use campfires to recover consistency before taking high-risk nodes.',
        ],
      },
      {
        heading: 'Top 5 first-run mistakes',
        paragraphs: [
          'These mistakes appear repeatedly in launch-week runs and are easy to correct once recognized.',
        ],
        bullets: [
          'Taking flashy cards that do not solve current fights.',
          'Overrouting into elites without damage checks.',
          'Forcing one build after one lucky reward.',
          'Ignoring defensive turns against unknown enemy patterns.',
          'Copying final builds without learning transition cards.',
        ],
      },
      {
        heading: 'Use this as your first 10-run framework',
        paragraphs: [
          'For your first ten runs, optimize for decision quality, not win rate. Keep short notes on what consistently stabilizes Act 1, then refine from there.',
          'If you also need unlock-time and launch FAQ context, use the launch hub linked below.',
        ],
      },
    ],
    relatedLinks: [
      {
        href: '/news/slay-the-spire-2-launch-time-us-china',
        label: 'Launch time and first-24h checklist hub',
      },
      {
        href: '/mechanics',
        label: 'Core mechanics reference: Sly, Doom, Stars, Forge',
      },
      {
        href: '/characters',
        label: 'Compare characters and choose a beginner-friendly start',
      },
    ],
  },
  {
    slug: 'gamesradar-industry-impact',
    title: 'Indie Devs Adjust Release Schedules to Avoid StS2',
    excerpt: 'The highly anticipated sequel is causing other roguelike developers to adjust their release schedules. Developers fear losing players to "an absolute juggernaut in our own genre" when Slay the Spire 2 launches.',
    date: '2026-01-28',
    category: 'Analysis',
    readTime: '6 min',
    featured: true,
    image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=800&q=80',
    url: 'https://www.gamesradar.com/games/roguelike/slay-the-spire-2-pulls-a-silksong-scares-indie-devs-into-releasing-roguelike-ahead-of-schedule-in-fear-of-losing-players-to-an-absolute-juggernaut-in-our-own-genre/',
    source: 'GamesRadar+',
    updatedAt: '2026-01-28',
  },
  {
    slug: 'megacrit-regent-reveal',
    title: 'The Regent Revealed: Cosmic Sovereign',
    excerpt: 'Bow down to The Regent, Slay the Spire 2\'s second new playable character. Heir to the Throne of Stars, this cosmic monarch wields constellation powers and divine edicts.',
    date: '2025-12-11',
    category: 'News',
    readTime: '5 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80',
    url: 'https://www.megacrit.com/news/2025-12-11-neowsletter-issue-17/',
    source: 'Mega Crit Games',
    updatedAt: '2025-12-11',
  },
  {
    slug: 'pc-gamer-complete-guide',
    title: 'Slay the Spire 2: Key Details and Latest News',
    excerpt: 'Everything we know about Slay the Spire 2 so far, including release date, characters, gameplay mechanics, and what\'s new in the sequel. The game returns to the Spire 1,000 years after the first game.',
    date: '2025-11-26',
    category: 'Guide',
    readTime: '12 min',
    featured: true,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    url: 'https://www.pcgamer.com/games/card-games/slay-the-spire-2-guide/',
    source: 'PC Gamer',
    updatedAt: '2025-11-26',
  },
  {
    slug: 'megacrit-necrobinder-reveal',
    title: 'The Necrobinder Deep Dive: First New Character',
    excerpt: 'Mega Crit reveals detailed information about the Necrobinder, including her Soul mechanic, card alteration abilities, and how Osty the skeletal hand companion works in combat.',
    date: '2025-10-16',
    category: 'Guide',
    readTime: '8 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&q=80',
    url: 'https://www.megacrit.com/news/2025-10-16-neowsletter-issue-15/',
    source: 'Mega Crit Games',
    updatedAt: '2025-10-16',
  },
  {
    slug: 'steam-delay-announcement',
    title: 'Early Access Delayed to March 2026',
    excerpt: 'After internal discussion, Mega Crit has moved Slay the Spire 2\'s Early Access launch to a secret Thursday in March 2026. The delay allows for additional scope and polish.',
    date: '2025-09-11',
    category: 'Update',
    readTime: '3 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80',
    url: 'https://store.steampowered.com/news/app/2868840',
    source: 'Steam News',
    updatedAt: '2025-09-11',
  },
  {
    slug: 'ign-official-announcement',
    title: 'Slay the Spire 2 Officially Announced, Won\'t be in Unity',
    excerpt: 'Mega Crit has announced Slay the Spire 2, the sequel to the wildly popular indie that helped inspire an entire generation of digital deckbuilders. The game has fully migrated off Unity and will instead use Godot engine.',
    date: '2024-04-10',
    category: 'News',
    readTime: '4 min',
    featured: true,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80',
    url: 'https://www.ign.com/articles/slay-the-spire-2-officially-announced-first-gameplay-screens-revealed',
    source: 'IGN',
    updatedAt: '2024-04-10',
  },
];

export interface GameFeature {
  icon: string;
  title: string;
  description: string;
}

export const GAME_FEATURES: GameFeature[] = [
  {
    icon: '🎴',
    title: 'New Characters',
    description: 'Two returning favorites and two brand new characters, each with unique mechanics and playstyles.',
  },
  {
    icon: '⚔️',
    title: 'Expanded Combat',
    description: 'New keywords like Sly, Doom, and Forge add depth to strategic decision-making.',
  },
  {
    icon: '🗺️',
    title: 'Alternate Acts',
    description: 'Each act now has two versions, dramatically increasing replayability and strategic choices.',
  },
  {
    icon: '✨',
    title: 'Ancients System',
    description: 'Replace boss relics with powerful Ancient blessings that fundamentally alter your run.',
  },
];


// Game Mechanics
export interface GameMechanic {
  slug: string;
  name: string;
  icon: string;
  category: 'Core' | 'Character' | 'Advanced';
  description: string;
  details?: string;
  character?: string;
  examples?: string[];
}

export const GAME_MECHANICS: GameMechanic[] = [
  // Core Mechanics
  {
    slug: 'alternate-acts',
    name: 'Alternate Acts',
    icon: '🗺️',
    category: 'Core',
    description: 'Each act now features two distinct versions with different enemies, events, and challenges. Choose your path wisely as each route offers unique rewards and risks.',
    examples: ['Act 1A: The Exordium', 'Act 1B: The City'],
  },
  {
    slug: 'ancients-system',
    name: 'Ancients System',
    icon: '✨',
    category: 'Core',
    description: 'Powerful beings who offer blessings after boss fights, replacing the traditional Boss Relic system. Ancients provide transformative effects that can define your entire run.',
    examples: ['Ancient of Flame', 'Ancient of Frost', 'Ancient of Lightning'],
  },
  // Character-Specific Mechanics
  {
    slug: 'sly',
    name: 'Sly',
    icon: '🃏',
    category: 'Character',
    character: 'Silent',
    description: 'Cards with Sly automatically play when discarded, enabling powerful discard-based strategies and unexpected combos.',
    examples: ['Prepared', 'Reflex', 'Tactician'],
  },
  {
    slug: 'doom',
    name: 'Doom',
    icon: '💀',
    category: 'Character',
    character: 'Necrobinder',
    description: 'A debuff that kills enemies when accumulated Doom damage equals their current HP. Build up Doom for devastating finishing blows.',
    examples: ['Blight Strike', 'Scourge', 'Deathbringer'],
  },
  {
    slug: 'stars',
    name: 'Stars',
    icon: '⭐',
    category: 'Character',
    character: 'Regent',
    description: 'A resource that accumulates throughout combat. Spend Stars to power abilities, summon minions, and transform cards.',
    examples: ['Starfall', 'Constellation', 'Celestial Strike'],
  },
  {
    slug: 'forge',
    name: 'Forge',
    icon: '⚒️',
    category: 'Character',
    character: 'Regent',
    description: 'Create permanent artifacts that provide lasting benefits. Forge cards into powerful relics mid-combat.',
    examples: ['Forge Weapon', 'Forge Armor', 'Forge Talisman'],
  },
  {
    slug: 'minions',
    name: 'Minions',
    icon: '👥',
    category: 'Character',
    character: 'Regent',
    description: 'Summon allies to fight alongside you. Minions can block, attack, and provide utility effects.',
    examples: ['Summon Guard', 'Summon Archer', 'Summon Mage'],
  },
  // Advanced Mechanics
  {
    slug: 'enchantments',
    name: 'Enchantments',
    icon: '✨',
    category: 'Advanced',
    description: 'Persistent modifiers that can be applied to cards, altering their properties for the rest of the run. Unlike upgrades, Enchantments can add entirely new keywords.',
    examples: ['Add Ethereal', 'Add Replay', 'Add Retain'],
  },
  {
    slug: 'afflictions',
    name: 'Afflictions',
    icon: '🩸',
    category: 'Advanced',
    description: 'Negative effects that enemies can apply to your cards, making them harder to play or less effective. Manage Afflictions carefully to maintain deck efficiency.',
    examples: ['Cursed', 'Corrupted', 'Weakened'],
  },
  {
    slug: 'quest-cards',
    name: 'Quest Cards',
    icon: '📜',
    category: 'Advanced',
    description: 'Unplayable cards that require you to complete specific objectives before they can be used. Once completed, Quest Cards provide powerful rewards.',
    examples: ['Quest: Deal 50 damage', 'Quest: Block 100 damage', 'Quest: Play 20 cards'],
  },
];

// Relics
export interface Relic {
  name: string;
  rarity: 'Starter' | 'Common' | 'Uncommon' | 'Rare';
  character?: string;
  description: string;
}

export const RELICS: Relic[] = [
  // Starter Relics
  {
    name: "Burning Blood",
    rarity: "Starter",
    character: "Ironclad",
    description: "At the end of combat, heal 6 HP.",
  },
  {
    name: "Ring of the Snake",
    rarity: "Starter",
    character: "Silent",
    description: "At the start of each combat, draw 2 additional cards.",
  },
  {
    name: "Osty's Binding",
    rarity: "Starter",
    character: "Necrobinder",
    description: "Start each combat with Osty, your undead companion who absorbs damage.",
  },
  {
    name: "Crown of Stars",
    rarity: "Starter",
    character: "Regent",
    description: "Start each combat with 3 Stars.",
  },
  // Common Relics
  {
    name: "Bag of Preparation",
    rarity: "Common",
    description: "At the start of each combat, draw 2 additional cards.",
  },
  {
    name: "Anchor",
    rarity: "Common",
    description: "Start each combat with 10 Block.",
  },
  {
    name: "Ancient Coin",
    rarity: "Common",
    description: "Gain 15% more Gold from combat rewards.",
  },
  // Uncommon Relics
  {
    name: "Ornamental Fan",
    rarity: "Uncommon",
    description: "Every time you play 3 Attacks in a single turn, gain 4 Block.",
  },
  {
    name: "Kunai",
    rarity: "Uncommon",
    description: "Every time you play 3 Attacks in a single turn, gain 1 Dexterity.",
  },
  // Rare Relics
  {
    name: "Incense Burner",
    rarity: "Rare",
    description: "Every 6 turns, gain 2 Intangible.",
  },
  {
    name: "Prismatic Shard",
    rarity: "Rare",
    description: "Combat reward screens now contain cards from all characters.",
  },
  {
    name: "Dead Branch",
    rarity: "Rare",
    description: "Whenever you Exhaust a card, add a random card to your hand.",
  },
];
