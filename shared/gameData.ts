import { POTIONS_GENERATED, RELICS_GENERATED } from './relicPotionData.generated';

export const CHARACTERS = [
  {
    slug: 'ironclad',
    name: 'Ironclad',
    title: 'The Relentless Warrior',
    description: 'Starter character focused on Strength scaling, Exhaust interactions, and controlled HP trade-offs.',
    image: 'https://assets.sts2guide.com/assets/sts2/characters/ironclad.webp',
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
    lore: 'Reference summary calibrated from local game extract assets and card metadata. No official narrative text is embedded in this bundle.',
    updatedAt: '2026-02-13',
  },
  {
    slug: 'silent',
    name: 'Silent',
    title: 'The Deadly Assassin',
    description: 'Unlock Step 2 character built around discard tempo, Sly triggers, Poison pressure, and Shiv volume turns.',
    image: 'https://assets.sts2guide.com/assets/sts2/characters/silent.webp',
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
    lore: 'Reference summary calibrated from local game extract assets and card metadata. No official narrative text is embedded in this bundle.',
    updatedAt: '2026-02-13',
  },
  {
    slug: 'necrobinder',
    name: 'Necrobinder',
    title: 'The Undead Summoner',
    description: 'Unlock Step 4 character centered on Doom setups, Osty interactions, and Soul resource conversion.',
    image: 'https://assets.sts2guide.com/assets/sts2/characters/necrobinder.webp',
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
    lore: 'Reference summary calibrated from local game extract assets and card metadata. No official narrative text is embedded in this bundle.',
    updatedAt: '2026-02-13',
  },
  {
    slug: 'regent',
    name: 'The Regent',
    title: 'Heir to the Throne of Stars',
    description: 'Unlock Step 3 character focused on Stars economy, Forge decisions, and minion timing windows.',
    image: 'https://assets.sts2guide.com/assets/sts2/characters/regent.webp',
    lore: 'Reference summary calibrated from local game extract assets and card metadata. No official narrative text is embedded in this bundle.',
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
  {
    slug: 'defect',
    name: 'Defect',
    title: 'The Broken Automaton',
    description: 'Unlock Step 5 character focused on Orb sequencing, Focus scaling, and setup-to-burst combat pacing.',
    image: 'https://assets.sts2guide.com/assets/sts2/characters/defect.webp',
    lore: 'Reference summary calibrated from local game extract assets and card metadata. No official narrative text is embedded in this bundle.',
    startingRelic: 'Cracked Core',
    startingDeck: [
      'Strike (4)',
      'Defend (4)',
      'Zap (1)',
      'Dualcast (1)',
    ],
    mechanics: [
      {
        name: 'Orbs',
        description: 'Channel Lightning, Frost, and Dark Orbs to generate recurring passive value and burst through evocation timing.',
      },
      {
        name: 'Focus',
        description: 'Scale Orb passive and evoke output with Focus buffs, turning setup turns into stronger late-combat control.',
      },
      {
        name: 'Sequencing',
        description: 'Defect rewards careful turn planning around channel, evoke, and hand tempo rather than pure front-loaded damage.',
      },
    ],
    playstyle: 'Defect plays around long-run efficiency: stabilize early with Frost and block tools, then convert into high-value turns via Focus scaling, Orb loops, and precise evoke timing.',
    difficulty: 'Advanced',
    hp: 75,
    gold: 99,
    updatedAt: '2026-03-10',
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
    slug: 'slay-the-spire-board-game-downfall-expansion-live',
    title: 'Slay the Spire Downfall Expansion Kickstarter Is Live (March 24): What StS2 Players Need to Know',
    excerpt: 'The Slay the Spire board game Downfall expansion Kickstarter is live as of March 24. This is not a Slay the Spire 2 gameplay patch, but it does affect current franchise discussion and update tracking intent.',
    date: '2026-03-24',
    category: 'News',
    readTime: '5 min',
    featured: true,
    image: 'https://clan.akamai.steamstatic.com/images/44971832/15b8306661e164d0fb11bad9a80377e1eda18911.png',
    url: 'https://store.steampowered.com/news/app/2868840/view/503978984819656657',
    source: 'Steam News',
    sourceType: 'internal',
    updatedAt: '2026-03-24',
    intro: [
      'Quick heads-up: this latest official update is about the board game, not a fresh StS2 balance patch.',
      'Still worth reading, though. It tells us where community attention is going next, even if it does not change your current run math today.',
    ],
    sections: [
      {
        heading: 'What happened on March 24',
        paragraphs: [
          'Steam posted a new announcement for app 2868840 confirming that the Downfall board game expansion campaign is now live.',
          'If you came here asking, "Did this change card balance in StS2 right now?" the short answer is no. This is franchise news, not a client patch.',
        ],
        bullets: [
          'Announcement type: board game expansion campaign launch',
          'Direct StS2 gameplay impact: none confirmed in this post',
          'Most useful player action: keep this as franchise context, then continue tracking digital patch notes',
        ],
      },
      {
        heading: 'Why this still matters to StS2 content strategy',
        paragraphs: [
          'Even without balance changes, posts like this shift what people search for and talk about for the next few days.',
          'Best move is simple: explain what changed, what did not, and point players straight to live StS2 patch coverage.',
        ],
      },
      {
        heading: 'What to read next if you only care about StS2 updates',
        paragraphs: [
          'If your goal is deckbuilding decisions and patch-impact reading, switch to the patch tracker and current mechanic guides. Those pages are the ones that change your run outcomes.',
        ],
        bullets: [
          'Open the StS2 patch tracker for timeline-level updates',
          'Check current mechanic guides before adjusting build assumptions',
          'Use relic and card entity pages for concrete post-patch decision support',
        ],
      },
    ],
    relatedLinks: [
      { href: '/news/slay-the-spire-2-steamdb-patch-tracker', label: 'Track the latest StS2 patch timeline' },
      { href: '/guides/exhaust-mechanic-explained', label: 'Read the exhaust mechanic guide' },
      { href: '/cards/hammer_time', label: 'Check Hammer Time card page' },
      { href: '/relics/book_of_five_rings', label: 'Check Book of Five Rings relic page' },
    ],
  },
  {
    slug: 'slay-the-spire-2-beta-patch-v0-100-0-highlights',
    title: 'Slay the Spire 2 Beta Patch Notes v0.100.0: Full Balance Highlights, Nerfs, and Meta Impact',
    excerpt: 'Slay the Spire 2 beta patch v0.100.0 is the first major post-launch balance pass. The core direction is reducing infinite loops, with broad card, relic, enemy, event, and multiplayer changes that shift early meta assumptions.',
    date: '2026-03-20',
    category: 'Update',
    readTime: '11 min',
    featured: true,
    image: 'https://clan.akamai.steamstatic.com/images/44971832/ef2c49f649628f6b0c3e7f916b71b8fa04927e64.png',
    url: 'https://store.steampowered.com/news/app/2868840/view/503978984819655259',
    source: 'Steam News',
    sourceType: 'internal',
    updatedAt: '2026-03-20',
    intro: [
      'v0.100.0 is the first big beta patch after launch, and yes, you can feel it.',
      'If you are still using launch-week assumptions, treat this patch like a reset and retest your core lines from scratch.',
    ],
    sections: [
      {
        heading: 'Patch direction: less infinite abuse, more controlled scaling',
        paragraphs: [
          'The dev note says it plainly: they want infinite loops to be harder to reach.',
          'There are visual and accessibility additions too, but run outcomes will mostly come from the card, relic, enemy, and event changes in this patch.',
        ],
      },
      {
        heading: 'High-impact gameplay areas to re-evaluate now',
        paragraphs: [
          'The important part is the breadth. This is not one flashy buff; multiple classes and relic lines got touched at once.',
        ],
        bullets: [
          'Card reworks and numbers changed across all major classes',
          'Relic economy and specific relic values adjusted (including Book of Five Rings)',
          'Enemy and event tuning changes can alter Act routing expectations',
          'Multiplayer-specific cards were also rebalanced',
        ],
      },
      {
        heading: 'How to adapt without overreacting',
        paragraphs: [
          'Do not rewrite your entire tier list after one run. Recheck Act 1 stability first, then update your archetype calls after a few solid samples.',
        ],
        bullets: [
          'Treat old infinite lines as lower reliability by default',
          'Prioritize repeatable block/damage curves before speculative combo pieces',
          'Use mechanics and card pages to validate changed assumptions quickly',
        ],
      },
    ],
    relatedLinks: [
      { href: '/news/slay-the-spire-2-steamdb-patch-tracker', label: 'Patch tracker timeline and impact log' },
      { href: '/guides/act1-route-priority', label: 'Act 1 route priorities after balance shifts' },
      { href: '/cards/danse_macabre', label: 'Danse Macabre card reference' },
      { href: '/relics/book_of_five_rings', label: 'Book of Five Rings relic reference' },
    ],
  },
  {
    slug: 'slay-the-spire-2-patch-v0-99-1-main-branch',
    title: 'Slay the Spire 2 Patch Notes v0.99.1 (Main Branch): Stability Fixes Merged from Beta',
    excerpt: 'The March 17 Slay the Spire 2 patch v0.99.1 moved earlier beta fixes to the main branch. This update is mostly stability, multiplayer sync, and localization cleanup for players who stayed on the default live branch.',
    date: '2026-03-17',
    category: 'Update',
    readTime: '7 min',
    featured: false,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/ss_8f8dcd17d2dc8f228151f00ca17e59f2f65b9d85.1920x1080.jpg?t=1770241822',
    url: 'https://store.steampowered.com/news/app/2868840/view/502852451136701666',
    source: 'Steam News',
    sourceType: 'internal',
    updatedAt: '2026-03-17',
    intro: [
      'v0.99.1 is the "okay, now main branch is safer" patch.',
    ],
    sections: [
      {
        heading: 'What changed in practice',
        paragraphs: [
          'Most of the patch is bug and stability work: controller behavior, crash reduction, multiplayer sync, and localization cleanup.',
          'It is not a meta-defining balance update, but it does remove a lot of launch-week friction.',
        ],
        bullets: [
          'Main-branch reliability increased through merged beta fixes',
          'Multiplayer and localization issues received broad cleanup',
          'Use this as the baseline before assessing newer beta balance shifts',
        ],
      },
      {
        heading: 'Who should care most',
        paragraphs: [
          'If you skipped beta or are still troubleshooting old launch bugs, this should be your first checkpoint.',
          'If your issue started before March 17, update first and retest before trying complicated workarounds.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/news/slay-the-spire-2-hotfix-patch-notes', label: 'Day-one hotfix context (v0.98.1)' },
      { href: '/news/slay-the-spire-2-known-issues-and-fixes', label: 'Known issues troubleshooting guide' },
      { href: '/news/slay-the-spire-2-beta-patch-v0-100-0-highlights', label: 'Read next: beta v0.100.0 changes' },
    ],
  },
  {
    slug: 'slay-the-spire-2-beta-hotfix-v0-99-1',
    title: 'Slay the Spire 2 Beta Hotfix v0.99.1 Patch Notes: Multiplayer Softlock Fixes',
    excerpt: 'The March 14 Slay the Spire 2 beta hotfix v0.99.1 targets specific multiplayer softlocks, including Breakthrough self-HP loss death states and Architect event end-state lock issues.',
    date: '2026-03-14',
    category: 'Update',
    readTime: '4 min',
    featured: false,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/ss_026b621a38b400c9f4080a7dd9152dd3050cbe2d.1920x1080.jpg?t=1770241822',
    url: 'https://store.steampowered.com/news/app/2868840/view/502852451136701250',
    source: 'Steam News',
    sourceType: 'internal',
    updatedAt: '2026-03-14',
    intro: [
      'This one is short and focused: fix specific multiplayer softlocks, fast.',
    ],
    sections: [
      {
        heading: 'What was fixed',
        paragraphs: [
          'Official notes call out two direct fixes: one tied to Breakthrough self-damage deaths, and one at the end of the Architect event in multiplayer.',
        ],
        bullets: [
          'Breakthrough self-HP loss death softlock fixed (multiplayer)',
          'Architect event end softlock fixed (multiplayer)',
        ],
      },
      {
        heading: 'How to use this information',
        paragraphs: [
          'If your group hit either of these exact lock states, this is the patch to retest first.',
          'If your issue is different, keep repro notes and compare against later main-branch updates.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/news/slay-the-spire-2-patch-v0-99-1-main-branch', label: 'Main-branch v0.99.1 rollout summary' },
      { href: '/news/slay-the-spire-2-multiplayer-coop-guide', label: 'Multiplayer setup and rules guide' },
      { href: '/news/slay-the-spire-2-known-issues-and-fixes', label: 'Known issues page for remaining failures' },
    ],
  },
  {
    slug: 'slay-the-spire-neowsletter-march-2026',
    title: 'The Neowsletter March 2026 (Slay the Spire 2): Key Signals, Priorities, and Next Update Focus',
    excerpt: 'The March 2026 Neowsletter is not a direct patch note, but it provides useful Slay the Spire 2 direction. It highlights team priorities, community discussion focus, and likely near-term update attention.',
    date: '2026-03-13',
    category: 'Analysis',
    readTime: '6 min',
    featured: false,
    image: 'https://www.megacrit.com/images/neowsletter_cover_march_2026_hu6024b048b79063ddf09a1d2ab345d1e7_504528_836x470_resize_q75_h2_lanczos_3.webp',
    url: 'https://www.megacrit.com/news/2026-3-13-neowsletter-issue-20/',
    source: 'Mega Crit',
    sourceType: 'internal',
    updatedAt: '2026-03-13',
    intro: [
      'It is easy to skip newsletters, but they often show priority signals before they show up in obvious patch patterns.',
      'You are not reading this for a secret buff. You are reading it to understand direction.',
    ],
    sections: [
      {
        heading: 'Why this newsletter belongs in your update watchlist',
        paragraphs: [
          'Patch notes tell you what changed. Newsletters tell you where the focus is moving. You want both.',
        ],
      },
      {
        heading: 'Practical use for content and players',
        paragraphs: [
          'Use newsletter context to decide which mechanic pages, class pages, and troubleshooting guides to refresh first.',
          'For players, it is a fast way to keep up without digging through every thread.',
        ],
        bullets: [
          'Pair newsletter context with patch tracker entries',
          'Refresh high-intent mechanic and starter guides after major messaging shifts',
          'Treat newsletter language as directional, then validate with live patch behavior',
        ],
      },
    ],
    relatedLinks: [
      { href: '/news/slay-the-spire-2-steamdb-patch-tracker', label: 'Patch tracker for concrete changelog history' },
      { href: '/guides/drawpile-mechanic-explained', label: 'Drawpile mechanic guide' },
      { href: '/guides/exhaust-mechanic-explained', label: 'Exhaust mechanic guide' },
    ],
  },
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
    slug: 'slay-the-spire-2-steam-charts-player-count',
    title: 'Slay the Spire 2 Steam Charts: Live Player Count, 24-Hour Peak, and Trend Read',
    excerpt: 'Track live Slay the Spire 2 Steam Charts numbers: current players, 24-hour peak, all-time peak, and what each movement means in Early Access.',
    date: '2026-03-11',
    category: 'News',
    readTime: '8 min',
    featured: false,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/ss_026b621a38b400c9f4080a7dd9152dd3050cbe2d.1920x1080.jpg?t=1770241822',
    url: 'https://steamcharts.com/app/2868840',
    source: 'StS2 Guide',
    sourceType: 'internal',
    updatedAt: '2026-03-11',
    intro: [
      'If you searched for “Slay the Spire 2 steam charts” or “player count”, you usually want one thing first: the latest numbers with a clear timestamp.',
      'This page keeps the answer practical: current players, 24-hour peak, and all-time peak, then a short interpretation of what the trend likely means for real players in Early Access.',
    ],
    sections: [
      {
        heading: 'Live player count snapshot (with timestamp)',
        paragraphs: [
          'As of 2026-03-11 07:00 UTC, SteamCharts showed around 264,766 players currently online, a 24-hour peak of 571,535, and an all-time peak of 574,638 for Slay the Spire 2.',
          'Use this block as a snapshot, not a fixed truth. These numbers change continuously, so the timestamp is as important as the number itself.',
        ],
        bullets: [
          'Current players (snapshot): 264,766',
          '24-hour peak (snapshot): 571,535',
          'All-time peak (snapshot): 574,638',
          'Data source: SteamCharts app page for 2868840',
        ],
      },
      {
        heading: 'How to read the trend without overreacting',
        paragraphs: [
          'In launch-month Early Access, daily spikes and dips are normal. Weekend activity, patch timing, and regional playtime overlap can move the chart sharply without meaning the game is suddenly healthy or suddenly dying.',
          'The better read is to watch repeated patterns over 7 to 14 days, then compare those changes with patch cadence and update quality.',
        ],
        bullets: [
          'Do not treat one-day movement as a long-term signal',
          'Watch 7-day and 14-day direction before drawing conclusions',
          'Interpret peaks together with patch and announcement timing',
        ],
      },
      {
        heading: 'What these numbers mean for players',
        paragraphs: [
          'For players, strong concurrent counts usually mean faster community discovery, faster bug reproduction cycles, and quicker strategy iteration. That matters more than hype framing.',
          'For co-op groups, active population also makes it easier to find fresh discussions and troubleshoot edge-case multiplayer behavior, even though matchmaking is not the official model right now.',
        ],
        bullets: [
          'Higher activity usually means faster guide and build iteration',
          'Patch-impact discussion tends to converge faster during high concurrency windows',
          'Use numbers as context, not as a substitute for your own run-level testing',
        ],
      },
      {
        heading: 'Method note: SteamCharts vs SteamDB',
        paragraphs: [
          'SteamCharts and SteamDB both track player activity, but they can show slightly different values at specific moments because of data collection timing and presentation choices.',
          'For editorial consistency, this page uses SteamCharts for headline snapshots and links SteamDB as a secondary verification source.',
        ],
        bullets: [
          'Primary snapshot source: SteamCharts',
          'Secondary cross-check source: SteamDB charts page',
          'Always read numbers together with timestamp',
        ],
      },
      {
        heading: 'FAQ',
        paragraphs: [
          'Short answers for the most common traffic-intent questions around this keyword.',
        ],
        bullets: [
          'Q: Does player count equal sales? A: No. Concurrent players and total units sold are different metrics.',
          'Q: Is one big peak enough to judge game health? A: No. Use multi-day trend plus patch quality context.',
          'Q: Why did my number not match exactly? A: Values move constantly and can vary by snapshot time and source.',
        ],
      },
    ],
    relatedLinks: [
      {
        href: '/news/slay-the-spire-2-steamdb-patch-tracker',
        label: 'SteamDB patch tracker: timeline and what each update changed',
      },
      {
        href: '/news/slay-the-spire-2-launch-time-us-china',
        label: 'Launch status and release-time reference hub',
      },
      {
        href: '/news/slay-the-spire-2-multiplayer-guide',
        label: 'Multiplayer guide: co-op rules, limits, and setup basics',
      },
      {
        href: '/news',
        label: 'Browse more Slay the Spire 2 launch-week and Early Access updates',
      },
    ],
  },
  {
    slug: 'slay-the-spire-2-steamdb-patch-tracker',
    title: 'Slay the Spire 2 SteamDB Patch Tracker: Latest Patch Notes, Timeline, and Impact',
    excerpt: 'Follow the Slay the Spire 2 SteamDB patch timeline with mapped official notes, so you can see exactly what changed for stability, localization, and co-op.',
    date: '2026-03-11',
    category: 'News',
    readTime: '9 min',
    featured: false,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/ss_8f8dcd17d2dc8f228151f00ca17e59f2f65b9d85.1920x1080.jpg?t=1770241822',
    url: 'https://steamdb.info/app/2868840/patchnotes/',
    source: 'StS2 Guide',
    sourceType: 'internal',
    updatedAt: '2026-03-11',
    intro: [
      'If you searched “Slay the Spire 2 steamdb”, your intent is usually patch tracking, not lore. This page is built as a practical patch timeline.',
      'We use SteamDB for patch indexing and official Steam/Mega Crit posts for meaning, so readers can separate confirmed fixes from interpretation.',
    ],
    sections: [
      {
        heading: 'How to use this patch tracker',
        paragraphs: [
          'Treat SteamDB as the fast index that tells you when updates landed, then read the matching official notes to understand what actually changed.',
          'That two-source method is more reliable than reading SteamDB entries alone, especially during active Early Access weeks.',
        ],
        bullets: [
          'Step 1: check SteamDB patch timeline for timing',
          'Step 2: map to official Steam community update notes',
          'Step 3: test impact in your own runs before changing build rules',
        ],
      },
      {
        heading: 'Known launch-week patch milestones',
        paragraphs: [
          'Early Access launched on March 5, 2026, then quickly received follow-up fixes. One of the earliest high-impact patches was v0.98.1, published on March 6, 2026.',
          'Official notes describe that hotfix as stability-focused: multiplayer progression lockout fixes, crash-path fixes, and localization fixes rather than meta-shifting balance changes.',
        ],
        bullets: [
          'Early Access launch: 2026-03-05',
          'Hotfix v0.98.1: 2026-03-06',
          'Patch class: stability and bug-fix focused',
        ],
      },
      {
        heading: 'What v0.98.1 changed (officially stated)',
        paragraphs: [
          'The official hotfix notes highlight a multiplayer progression bug where disconnect timing after Act 1 could block subsequent progression flow. The patch targets that directly.',
          'It also addresses multiple crash and localization paths, including unsupported-language fallback behavior and specific non-English text-related crash cases.',
        ],
        bullets: [
          'Co-op progression lockout fix after specific disconnect scenario',
          'Fast card-play and targeting-related crash fixes',
          'Localization and unsupported-language fallback fixes',
          'Not framed as a broad balance patch',
        ],
      },
      {
        heading: 'Player-facing impact: what to do after each patch',
        paragraphs: [
          'After a bug-fix patch, the best workflow is simple: update, reproduce your previous issue, and only then decide whether local troubleshooting is still needed.',
          'Do not over-adjust deck plans after stability patches. Save build-rule changes for patches that explicitly target card, relic, or encounter balance.',
        ],
        bullets: [
          'Update first, then re-test exact failure cases',
          'Separate stability fixes from balance and economy changes',
          'Keep a small personal changelog for your own repeatable issues',
        ],
      },
      {
        heading: 'FAQ',
        paragraphs: [
          'Short operational answers for patch-tracker search intent.',
        ],
        bullets: [
          'Q: Is SteamDB itself the official patch note source? A: No. It is a timeline/index source. Use official notes for semantics.',
          'Q: Why track both SteamDB and official notes? A: SteamDB is fast for timing, official notes are authoritative for meaning.',
          'Q: Should I rewrite builds after every patch? A: Only when patch notes indicate balance/system changes, not routine stability fixes.',
        ],
      },
    ],
    relatedLinks: [
      {
        href: '/news/slay-the-spire-2-hotfix-patch-notes',
        label: 'Hotfix breakdown: what v0.98.1 fixed in launch week',
      },
      {
        href: '/news/slay-the-spire-2-known-issues-and-fixes',
        label: 'Known issues and troubleshooting checklist',
      },
      {
        href: '/news/slay-the-spire-2-steam-charts-player-count',
        label: 'Steam Charts tracker: player count and trend interpretation',
      },
      {
        href: '/news',
        label: 'Browse all Slay the Spire 2 updates and guides',
      },
    ],
  },
  {
    slug: 'slay-the-spire-2-multiplayer-guide',
    title: 'Slay the Spire 2 Multiplayer Guide: Co-op Rules, Limits, and Setup',
    excerpt: 'A direct multiplayer FAQ for Slay the Spire 2. Covers what is officially confirmed about co-op, key launch-week limits, and the fastest setup checks for groups.',
    date: '2026-03-11',
    category: 'Guide',
    readTime: '8 min',
    featured: false,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/ss_8f8dcd17d2dc8f228151f00ca17e59f2f65b9d85.1920x1080.jpg?t=1770241822',
    url: 'https://store.steampowered.com/app/2868840/Slay_the_Spire_2/',
    source: 'StS2 Guide',
    sourceType: 'internal',
    updatedAt: '2026-03-11',
    intro: [
      'This page targets one specific search intent: “Does Slay the Spire 2 have multiplayer, and how does it work right now?”',
      'We keep the answer strict: official confirmation first, launch-week constraints second, and setup steps last.',
    ],
    sections: [
      {
        heading: 'Officially confirmed multiplayer facts',
        paragraphs: [
          'The Steam store page confirms Online Co-op and states support for up to 4 players. That is the core yes-or-no answer for multiplayer intent.',
          'Official launch communication also places co-op as a major sequel differentiator, so multiplayer is part of baseline feature expectation rather than a hidden mode.',
        ],
        bullets: [
          'Confirmed feature: Online Co-op',
          'Confirmed player count: up to 4 players',
          'Confirmed release state: part of active Early Access build',
        ],
      },
      {
        heading: 'Launch-week limits you should know',
        paragraphs: [
          'The official FAQ for launch-week clarified that co-op was Steam-friends based rather than open matchmaking at launch. That detail changes how groups should plan sessions.',
          'If your group expects public queue matchmaking by default, align expectations before session setup to avoid unnecessary troubleshooting.',
        ],
        bullets: [
          'Launch FAQ guidance: Steam friends first model',
          'Do not assume public random matchmaking flow',
          'Re-check patch notes for future matchmaking changes',
        ],
      },
      {
        heading: 'Fast setup checklist for groups',
        paragraphs: [
          'Before your first group session, sync build version across all players, then validate invites and session start on a clean restart.',
          'Most early failures are version mismatch or stale client state, not fundamental co-op absence.',
        ],
        bullets: [
          'All players update to latest build first',
          'Restart Steam once before session setup',
          'Confirm everyone can launch solo before joining group run',
          'If one user fails repeatedly, isolate by testing host swap',
        ],
      },
      {
        heading: 'When to use this page vs the co-op deep-dive page',
        paragraphs: [
          'Use this multiplayer page for direct yes/no and setup answers. Use the launch-week co-op deep-dive page when you need broader context, including what is confirmed versus still being validated.',
          'This split avoids keyword cannibalization and helps readers land on the shortest useful answer first.',
        ],
        bullets: [
          'This page: multiplayer keyword intent and setup',
          'Co-op deep-dive: broader launch-week interpretation',
          'Both pages are updated during Early Access changes',
        ],
      },
      {
        heading: 'FAQ',
        paragraphs: [
          'Fast answers for common multiplayer search queries.',
        ],
        bullets: [
          'Q: Does Slay the Spire 2 have multiplayer? A: Yes, official Online Co-op support is confirmed.',
          'Q: How many players can co-op support? A: Up to 4 players, per official store listing.',
          'Q: Is this a final 1.0 co-op ruleset? A: No. The game is in Early Access and rules/features can evolve.',
        ],
      },
    ],
    relatedLinks: [
      {
        href: '/news/slay-the-spire-2-co-op-guide-how-it-works',
        label: 'Co-op launch guide: what is confirmed and what is still being validated',
      },
      {
        href: '/news/slay-the-spire-2-known-issues-and-fixes',
        label: 'Known issues if your co-op session runs into crash or freeze',
      },
      {
        href: '/news/slay-the-spire-2-launch-time-us-china',
        label: 'Release-time and launch-status hub',
      },
      {
        href: '/news',
        label: 'More Slay the Spire 2 guides and update tracking',
      },
    ],
  },
  {
    slug: 'slay-the-spire-2-multiplayer-coop-guide',
    title: 'Slay the Spire 2 Multiplayer Co-op Guide: 4-Player Rules, Setup, and StS2 Tips',
    excerpt: 'A focused Slay the Spire 2 multiplayer co-op guide covering official 4-player support, launch-week setup steps, and practical StS2 tips before your first group run.',
    date: '2026-03-11',
    category: 'Guide',
    readTime: '7 min',
    featured: false,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/ss_8f8dcd17d2dc8f228151f00ca17e59f2f65b9d85.1920x1080.jpg?t=1770241822',
    url: 'https://store.steampowered.com/app/2868840/Slay_the_Spire_2/',
    source: 'StS2 Guide',
    sourceType: 'internal',
    updatedAt: '2026-03-11',
    intro: [
      'If your query is exactly “slay the spire 2 multiplayer co-op guide”, this page gives the shortest operational answer path: what is confirmed, what is constrained at launch, and what to check first.',
      'Use this as the quick multiplayer entry page, then move to deeper guides only if your group needs troubleshooting detail.',
    ],
    sections: [
      {
        heading: 'What is confirmed right now',
        paragraphs: [
          'The official store listing confirms online co-op and support for up to 4 players. That is the core answer for multiplayer intent.',
          'Treat this as launch-week operational guidance for the current Early Access build, not a final 1.0 ruleset.',
        ],
        bullets: [
          'Officially confirmed: Online Co-op',
          'Officially confirmed: Up to 4 players',
          'Current product stage: Early Access',
        ],
      },
      {
        heading: 'Fast group setup checklist',
        paragraphs: [
          'Most first-session failures are caused by version mismatch or stale client state. Confirm those first before deeper diagnosis.',
        ],
        bullets: [
          'All players update to latest build',
          'Restart Steam once before creating lobby',
          'Verify each player can enter solo run before group invite',
          'If connection fails repeatedly, switch host and retry',
        ],
      },
      {
        heading: 'Launch limits to keep in mind',
        paragraphs: [
          'Launch-week co-op guidance has been Steam-friends first, not open matchmaking-first. Set group expectations upfront.',
          'Check hotfix notes if your issue appeared during launch day, because multiplayer stability fixes are actively rolling out.',
        ],
        bullets: [
          'Do not assume public random matchmaking flow',
          'Use hotfix and known-issues pages for active issue status',
        ],
      },
    ],
    relatedLinks: [
      {
        href: '/news/slay-the-spire-2-multiplayer-guide',
        label: 'Multiplayer FAQ: co-op rules, limits, and setup',
      },
      {
        href: '/news/slay-the-spire-2-co-op-guide-how-it-works',
        label: 'Co-op deep dive: what is confirmed vs still being validated',
      },
      {
        href: '/news/slay-the-spire-2-hotfix-patch-notes',
        label: 'Hotfix patch notes for launch-week multiplayer issues',
      },
      {
        href: '/news/slay-the-spire-2-known-issues-and-fixes',
        label: 'Known issues and practical troubleshooting',
      },
    ],
  },
  {
    slug: 'slay-the-spire-2-release-date',
    title: 'Slay the Spire 2 Release Date: Early Access Date, Current Status, and What Changed',
    excerpt: 'Slay the Spire 2 release date is March 5, 2026 (Early Access). This page keeps the date/status answer explicit and links directly to launch updates, hotfixes, and next-step guides.',
    date: '2026-03-11',
    category: 'News',
    readTime: '6 min',
    featured: false,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/ss_026b621a38b400c9f4080a7dd9152dd3050cbe2d.1920x1080.jpg?t=1770241822',
    url: 'https://store.steampowered.com/app/2868840/Slay_the_Spire_2/',
    source: 'StS2 Guide',
    sourceType: 'internal',
    updatedAt: '2026-03-11',
    intro: [
      'If your search is “slay the spire 2 release date”, you likely want one clear answer first, not a long timeline.',
      'This page keeps release-date intent explicit, then routes you to launch-week pages that answer “what now?”',
    ],
    sections: [
      {
        heading: 'Direct answer',
        paragraphs: [
          'Slay the Spire 2 released into Early Access on March 5, 2026.',
          'The release is live on Steam, so this is no longer a pre-launch countdown question.',
        ],
        bullets: [
          'Release date: March 5, 2026',
          'Release model: Early Access (not full 1.0)',
          'Current status: live',
        ],
      },
      {
        heading: 'Why this page exists separately',
        paragraphs: [
          'Release-date intent is high-volume and narrow. A dedicated page reduces mismatch between keyword and landing answer.',
          'For practical launch decisions, continue to launch status, patch notes, and first-run guidance.',
        ],
        bullets: [
          'Date answer page: this URL',
          'Launch operations page: launch status hub',
          'Live changes page: hotfix and known-issues trackers',
        ],
      },
    ],
    relatedLinks: [
      {
        href: '/news/slay-the-spire-2-launch-time-us-china',
        label: 'Launch status and first-24-hours checklist',
      },
      {
        href: '/news/slay-the-spire-2-hotfix-patch-notes',
        label: 'Hotfix patch notes and launch fixes',
      },
      {
        href: '/news/slay-the-spire-2-steamdb-patch-tracker',
        label: 'SteamDB patch timeline and impact tracking',
      },
      {
        href: '/news/slay-the-spire-2-first-run-guide-act-1-priorities',
        label: 'First-run guide for launch week',
      },
    ],
  },
  {
    slug: 'best-starter-character-slay-the-spire-2-early-access',
    title: 'Best Starter Character in Slay the Spire 2: Early Access Guide',
    excerpt: 'Not sure who to pick first in Slay the Spire 2? This Early Access guide compares Ironclad, Silent, Necrobinder, and Regent for solo stability, co-op value, and first-10-run learning.',
    date: '2026-03-05',
    category: 'Guide',
    readTime: '11 min',
    featured: true,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/ss_8f8dcd17d2dc8f228151f00ca17e59f2f65b9d85.1920x1080.jpg?t=1770241822',
    url: 'https://store.steampowered.com/app/2868840/Slay_the_Spire_2/',
    source: 'StS2 Guide',
    sourceType: 'internal',
    updatedAt: '2026-03-06',
    intro: [
      'If you are starting Slay the Spire 2 in Early Access, your first character should maximize learning speed and minimize run collapse from small mistakes.',
      'This updated launch-week guide now looks at three different needs instead of one: the safest solo starter, the easiest character for complete beginners, and the most practical roles to bring into early co-op sessions.',
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
        heading: 'If you are completely new to deckbuilders, still start with Ironclad',
        paragraphs: [
          'Some launch-week players are not only new to Slay the Spire 2, but new to the whole deckbuilder rhythm. For that group, Ironclad remains the cleanest first answer because his card evaluations are easier to read and his mistakes are easier to recover from.',
          'The main value is not raw power. It is that Ironclad teaches fundamentals without asking you to learn discard timing, minion management, or Stars/Forge planning at the same time.',
        ],
        bullets: [
          'Best pure beginner pick: Ironclad',
          'Best second pick after basics: Silent',
          'Save Necrobinder and Regent until your Act 1 discipline feels repeatable',
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
        heading: 'Best starter roles for co-op groups',
        paragraphs: [
          'Co-op changes the question slightly. Your group does not always need every player to pick the easiest solo class. Instead, you want one player on the most stable baseline pick and then let the others choose how much complexity the group can absorb.',
          'That makes Ironclad the safest anchor pick in early co-op sessions, while Silent often works best as the second player for groups that already communicate well. Necrobinder and Regent are better once your group understands how much mechanic overhead it wants to manage in one run.',
        ],
        bullets: [
          'Safest co-op anchor: Ironclad',
          'Best co-op second pick for cleaner groups: Silent',
          'High-upside but higher-overhead co-op picks: Necrobinder and Regent',
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
          'If you need deeper class details, use the character page first, then read mechanics to understand Sly, Doom, Stars, and Forge interactions. If your real problem is early mistakes rather than class choice, move into the beginner-mistakes guide next.',
        ],
      },
    ],
    relatedLinks: [
      {
        href: '/news/slay-the-spire-2-top-10-beginner-mistakes',
        label: 'Top 10 beginner mistakes if your first runs keep collapsing early',
      },
      {
        href: '/news/slay-the-spire-2-what-to-upgrade-first',
        label: 'What to upgrade first if you want stronger early decisions',
      },
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
    slug: 'slay-the-spire-2-top-10-beginner-mistakes',
    title: 'Slay the Spire 2 Top 10 Beginner Mistakes in Early Access',
    excerpt: 'If your early Slay the Spire 2 runs keep collapsing, the problem is usually not bad luck. These are the 10 beginner mistakes hurting launch-week runs most often, along with the cleaner decisions that fix them.',
    date: '2026-03-06',
    category: 'Guide',
    readTime: '9 min',
    featured: false,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/ss_026b621a38b400c9f4080a7dd9152dd3050cbe2d.1920x1080.jpg?t=1770241822',
    url: 'https://store.steampowered.com/app/2868840/Slay_the_Spire_2/',
    source: 'StS2 Guide',
    sourceType: 'internal',
    updatedAt: '2026-03-06',
    intro: [
      'If your first Slay the Spire 2 runs feel unstable, the problem is usually not luck. It is usually one of a few repeatable beginner errors.',
      'This page is built for launch-week players who want a fast correction loop: spot the mistake, replace it with a better rule, and get more stable Act 1 and Act 2 runs immediately.',
    ],
    sections: [
      {
        heading: 'Short answer: beginners usually lose on decision quality, not on hidden tech',
        paragraphs: [
          'Most launch-week players do not need deeper secrets first. They need cleaner constraints on drafting, routing, upgrades, and greed.',
          'That is good news, because decision mistakes are easier to fix than hidden matchup knowledge.',
        ],
      },
      {
        heading: 'Mistakes 1 to 3: drafting problems',
        paragraphs: [
          'The most common early problem is drafting for a future deck while your current deck still cannot solve current fights. That usually shows up as weak hallway combat, bad elite timing, and panic upgrades.',
        ],
        bullets: [
          'Mistake 1: taking flashy rare cards that do not solve current fights.',
          'Mistake 2: forcing one archetype after one lucky reward.',
          'Mistake 3: refusing to skip weak card rewards that lower deck consistency.',
        ],
      },
      {
        heading: 'Mistakes 4 to 6: pathing and elite greed',
        paragraphs: [
          'Early pathing errors often come from treating every elite as mandatory value. In reality, early elites are only good when your current deck can end fights on time and preserve enough HP for the rest of the map.',
        ],
        bullets: [
          'Mistake 4: overrouting into elites without a damage check.',
          'Mistake 5: spending too much HP in hallway fights before a planned elite.',
          'Mistake 6: treating campfires as automatic upgrades when recovery is the better play.',
        ],
      },
      {
        heading: 'Mistakes 7 to 10: upgrades, defense, and copying final builds',
        paragraphs: [
          'The second major beginner trap is copying end-state logic too early. Final builds look clean because they already survived the hard middle, but new players often try to draft as if they are already there.',
        ],
        bullets: [
          'Mistake 7: upgrading the coolest card instead of the card that improves the next fights most.',
          'Mistake 8: undervaluing defensive turns against enemies you still do not understand.',
          'Mistake 9: taking too many setup cards before stabilizing basic tempo.',
          'Mistake 10: copying final builds without learning the bridge cards that got there.',
        ],
      },
      {
        heading: 'A better beginner rule set',
        paragraphs: [
          'If you want one launch-week framework, use this: draft for immediate fight quality, route elites only when your current deck is ready, and spend upgrades where they improve the next few combats rather than your dream deck.',
          'That one shift is usually enough to make your first ten runs visibly cleaner.',
        ],
      },
      {
        heading: 'What to read next',
        paragraphs: [
          'If your next question is about who to start with, go to the starter-character guide. If your next problem is upgrade order, use the upgrade-priority page.',
        ],
      },
    ],
    relatedLinks: [
      {
        href: '/news/best-starter-character-slay-the-spire-2-early-access',
        label: 'Best starter character if you want the safest first pick',
      },
      {
        href: '/news/slay-the-spire-2-what-to-upgrade-first',
        label: 'What to upgrade first for stronger early runs',
      },
      {
        href: '/news/slay-the-spire-2-first-run-guide-act-1-priorities',
        label: 'First-run guide for Act 1 priorities and route stability',
      },
      {
        href: '/news/slay-the-spire-2-launch-time-us-china',
        label: 'Launch hub with live status and launch-week routing',
      },
    ],
  },
  {
    slug: 'slay-the-spire-2-what-to-upgrade-first',
    title: 'Slay the Spire 2 What to Upgrade First: Early Access Priorities',
    excerpt: 'Not sure what to upgrade first in Slay the Spire 2? This launch-week guide explains how to think about early upgrades, when to prioritize damage versus defense, and which classes benefit most from simple early upgrade rules.',
    date: '2026-03-06',
    category: 'Guide',
    readTime: '8 min',
    featured: false,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/ss_01ff255192aea73e2fd9940cea4f613cb2919298.1920x1080.jpg?t=1770241822',
    url: 'https://store.steampowered.com/app/2868840/Slay_the_Spire_2/',
    source: 'StS2 Guide',
    sourceType: 'internal',
    updatedAt: '2026-03-06',
    intro: [
      'The wrong upgrade can make an early run feel worse than it should. The right upgrade often does not look flashy, but it improves the next three fights immediately.',
      'This launch-week page is built for the practical question first: what should beginners upgrade first if they want cleaner early runs instead of highlight turns.',
    ],
    sections: [
      {
        heading: 'Short answer: upgrade the card that changes the next few fights',
        paragraphs: [
          'In the first act, the best upgrade is usually the one that improves your immediate combat math. That can mean stronger front-loaded damage, a more efficient block card, or a key starter card that fixes tempo.',
          'Beginners often upgrade the most exciting card in the deck. The cleaner rule is to upgrade the card you expect to draw often and rely on soon.',
        ],
      },
      {
        heading: 'When to prioritize damage upgrades',
        paragraphs: [
          'Damage upgrades matter most when hallway fights are lasting too long, elites are becoming risky, or your deck lacks enough front-loaded output to punish vulnerable turns.',
          'If your early fights already feel slow, a damage upgrade often prevents more HP loss than a defensive upgrade would.',
        ],
        bullets: [
          'Prioritize damage when fights drag on too long',
          'Prioritize damage when your next route includes elites',
          'Prioritize damage when your deck has enough baseline defense already',
        ],
      },
      {
        heading: 'When to prioritize defense or consistency upgrades',
        paragraphs: [
          'Defense upgrades become better when you are bleeding too much HP in normal fights or when your deck already has enough damage but poor survivability. Consistency upgrades also matter when a single improved starter card smooths the whole deck.',
        ],
        bullets: [
          'Prioritize defense when hallway fights chip too much HP',
          'Prioritize defense when you already kill fast enough',
          'Prioritize consistency when one starter card upgrade improves many draws',
        ],
      },
      {
        heading: 'Simple launch-week class rules',
        paragraphs: [
          'You do not need a full card database to make better early upgrades. Use rough class rules until the deeper meta settles.',
        ],
        bullets: [
          'Ironclad: upgrade toward cleaner immediate damage or core survivability first.',
          'Silent: upgrade cards that make sequencing and tempo more stable, not just flashy payoff cards.',
          'Necrobinder: prefer upgrades that reduce early instability before chasing high-overhead Doom lines.',
          'Regent: early upgrades should simplify tempo before you lean too hard into Stars or Forge payoff.',
        ],
      },
      {
        heading: 'What to read next',
        paragraphs: [
          'If your problem is still broad run discipline, the beginner-mistakes page is the next best read. If your question is whether the problem is your class choice, use the starter-character guide.',
        ],
      },
    ],
    relatedLinks: [
      {
        href: '/news/slay-the-spire-2-top-10-beginner-mistakes',
        label: 'Top 10 beginner mistakes that make early runs collapse',
      },
      {
        href: '/news/best-starter-character-slay-the-spire-2-early-access',
        label: 'Best starter character if you want fewer early mistakes',
      },
      {
        href: '/news/slay-the-spire-2-first-run-guide-act-1-priorities',
        label: 'First-run guide for Act 1 priorities and routing',
      },
      {
        href: '/mechanics',
        label: 'Mechanics reference if you need system-level context first',
      },
    ],
  },
  {
    slug: 'slay-the-spire-2-first-run-guide-act-1-priorities',
    title: 'Slay the Spire 2 First Run Guide: Act 1 Priorities and StS2 Tips',
    excerpt: 'A practical first-run guide for Slay the Spire 2 beginners: Act 1 priorities, elite timing, and StS2 tips to avoid common early mistakes in your first 10 runs.',
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
  slug?: string;
  name: string;
  rarity: 'Starter' | 'Common' | 'Uncommon' | 'Rare' | 'Shop' | 'Ancient';
  character?: string;
  description: string;
  image?: string;
}

export const RELICS: Relic[] = RELICS_GENERATED;

export interface Potion {
  slug?: string;
  name: string;
  rarity: 'Common' | 'Uncommon' | 'Rare';
  character: 'Neutral' | 'Ironclad' | 'Silent' | 'Regent' | 'Necrobinder' | 'Defect';
  description: string;
  image?: string;
}

export const POTIONS: Potion[] = POTIONS_GENERATED;
