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
      'Slay the Spire 2 is now live in Early Access. If you are landing here after release, use this page as a launch-week hub rather than only a pre-release time converter.',
      'For players still searching launch time, the practical conversion remains the same: March 5, 2026 at 10:00 AM in US Pacific Time and March 6, 2026 at 2:00 AM in China Standard Time. The game is already out, so the better question now is what to read next and how to start well.',
    ],
    sections: [
      {
        heading: 'Slay the Spire 2 release status: out now in Early Access',
        paragraphs: [
          'The key launch-week update is simple: Slay the Spire 2 is out now in Early Access. If you reached this page through searches like “Slay the Spire 2 out now”, “early access live”, or “launch status”, you can treat the release as active rather than upcoming.',
          'That changes what this page should do for users. Instead of stopping at launch timing, it should route players toward the pages that answer immediate post-launch questions: mechanics, starter character choice, and first-run priorities.',
        ],
        bullets: [
          'Current status: live in Steam Early Access',
          'Release date: March 5, 2026',
          'Best next reads: mechanics guide, starter character guide, first-run priorities',
        ],
      },
      {
        heading: 'Slay the Spire 2 launch time',
        paragraphs: [
          'For the two regions most people keep asking about, the launch-time conversion is simple. In US Pacific Time, the practical unlock-time conversion used here is March 5, 2026 at 10:00 AM. In China Standard Time, that becomes March 6, 2026 at 2:00 AM.',
          'If you are posting in communities or sharing launch details with friends, it is safer to describe the time as a useful conversion rather than an officially locked statement. That keeps the wording accurate while still giving players a clear expectation.',
        ],
        bullets: [
          'US Pacific Time: March 5, 2026, 10:00 AM',
          'China Standard Time: March 6, 2026, 2:00 AM',
          'Confirmed date: Early Access begins on March 5, 2026',
        ],
      },
      {
        heading: 'What is confirmed so far',
        paragraphs: [
          'The most important confirmed fact is that Slay the Spire 2 launched into Early Access, not as a full 1.0 release. That matters because a lot of first-week discussion will be shaped by what is present at launch and what still feels intentionally unfinished.',
          'The other broadly established point is that the sequel is still rooted in the same roguelike deckbuilder loop that made the first game work: pathing, combat sequencing, deck shaping, scaling, and adaptation from run to run.',
        ],
        bullets: [
          'Early Access went live on March 5, 2026',
          'The game remains a roguelike deckbuilder at its core',
          'Character-specific mechanics appear to be a larger focus in the sequel',
          'Early discussion will likely center on characters, mechanics, and content volume',
        ],
      },
      {
        heading: 'Known characters and mechanics',
        paragraphs: [
          'At a high level, the sequel already looks more character-driven than Slay the Spire 1 did in its earliest impressions. Returning characters like Ironclad and Silent are joined by newly revealed characters such as Necrobinder and The Regent, giving players more obvious hooks for theorycrafting before launch.',
          'Mechanically, the sequel has also drawn attention for systems like Sly, Doom, Stars, Forge, and other character-tied interactions. That does not automatically guarantee better balance or more depth, but it does suggest that player discussion will move quickly from basic first impressions into matchup questions, deck identity, and synergy exploration.',
        ],
      },
      {
        heading: 'How Slay the Spire 2 may differ from Slay the Spire 1',
        paragraphs: [
          'The original Slay the Spire had to prove that its structure worked. Slay the Spire 2 is in a different position. Players already trust the genre loop, so the sequel will be judged more on whether its new characters, mechanics, and run variety create fresh decision space.',
          'That is why launch week will probably not just be about whether the game is fun. People will also be testing whether each character feels distinct enough, whether the new mechanics stay interesting after a few runs, and whether the Early Access content pool is broad enough to support replayability immediately.',
        ],
      },
      {
        heading: 'What to expect during the first week',
        paragraphs: [
          'If the launch follows the usual pattern for system-heavy deckbuilders, the first wave of opinions will change fast. Early tier lists are likely to be unstable, and some mechanics that look weak at first may get reevaluated once players understand their support pieces and scaling patterns.',
          'The most useful early discussions will probably be the ones that share actual run observations: which characters feel coherent, which mechanics open up real build paths, and whether the Early Access version already has enough variety to keep repeated runs feeling fresh.',
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
          'The highest-value launch-week path is not the same for every user. If you are completely new, go to the first-run guide. If you are choosing a class, go to the starter character guide. If your question is about systems or keywords like Sly, Doom, Stars, or Forge, go to mechanics.',
        ],
        bullets: [
          'Need the beginner route? Read the first-run guide.',
          'Need the short answer on class choice? Read the best starter character guide.',
          'Need wiki-style system explanations? Read the mechanics page.',
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
