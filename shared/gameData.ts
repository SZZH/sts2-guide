export const CHARACTERS = [
  {
    slug: 'ironclad',
    name: 'Ironclad',
    title: 'The Relentless Warrior',
    description: 'A battle-hardened warrior who channels raw strength and fury, sacrificing health for devastating power.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663030533337/RMpJqbmNiKHBzgXL.jpg',
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
  },
  {
    slug: 'silent',
    name: 'Silent',
    title: 'The Deadly Assassin',
    description: 'A cunning rogue who strikes from the shadows, wielding poison, shivs, and the new Sly mechanic for devastating combos.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663030533337/YmQjpXHVzMgBdWRN.jpg',
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
  },
  {
    slug: 'necrobinder',
    name: 'Necrobinder',
    title: 'The Undead Summoner',
    description: 'A dark sorceress who commands death itself, manipulating souls and wielding her skeletal companion Osty to overwhelm foes.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663030533337/HdWLNbmRXgqVpjKz.jpg',
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
    startingDeck: [
      'Strike (5)',
      'Defend (4)',
      'Blight Strike (1)',
      'Bodyguard (1)',
    ],
  },
  {
    slug: 'regent',
    name: 'The Regent',
    title: 'Heir to the Throne of Stars',
    description: 'Heir to the Throne of Stars. Accumulates Stars, Forges artifacts, and commands Minions in battle.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663030533337/xhLNBdQkYmRzJWVg.jpg',
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
}

export const NEWS_ARTICLES: NewsArticle[] = [
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
    source: 'GamesRadar+'
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
    source: 'Mega Crit Games'
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
    source: 'PC Gamer'
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
    source: 'Mega Crit Games'
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
    source: 'Steam News'
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
    source: 'IGN'
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
  category: 'Core' | 'Character' | 'Advanced';
  description: string;
  character?: string;
  examples?: string[];
}

export const GAME_MECHANICS: GameMechanic[] = [
  // Core Mechanics
  {
    slug: 'alternate-acts',
    name: 'Alternate Acts',
    category: 'Core',
    description: 'Each act now features two distinct versions with different enemies, events, and challenges. Choose your path wisely as each route offers unique rewards and risks.',
    examples: ['Act 1A: The Exordium', 'Act 1B: The City'],
  },
  {
    slug: 'ancients-system',
    name: 'Ancients System',
    category: 'Core',
    description: 'Powerful beings who offer blessings after boss fights, replacing the traditional Boss Relic system. Ancients provide transformative effects that can define your entire run.',
    examples: ['Ancient of Flame', 'Ancient of Frost', 'Ancient of Lightning'],
  },
  // Character-Specific Mechanics
  {
    slug: 'sly',
    name: 'Sly',
    category: 'Character',
    character: 'Silent',
    description: 'Cards with Sly automatically play when discarded, enabling powerful discard-based strategies and unexpected combos.',
    examples: ['Prepared', 'Reflex', 'Tactician'],
  },
  {
    slug: 'doom',
    name: 'Doom',
    category: 'Character',
    character: 'Necrobinder',
    description: 'A debuff that kills enemies when accumulated Doom damage equals their current HP. Build up Doom for devastating finishing blows.',
    examples: ['Blight Strike', 'Scourge', 'Deathbringer'],
  },
  {
    slug: 'stars',
    name: 'Stars',
    category: 'Character',
    character: 'Regent',
    description: 'A resource that accumulates throughout combat. Spend Stars to power abilities, summon minions, and transform cards.',
    examples: ['Starfall', 'Constellation', 'Celestial Strike'],
  },
  {
    slug: 'forge',
    name: 'Forge',
    category: 'Character',
    character: 'Regent',
    description: 'Create permanent artifacts that provide lasting benefits. Forge cards into powerful relics mid-combat.',
    examples: ['Forge Weapon', 'Forge Armor', 'Forge Talisman'],
  },
  {
    slug: 'minions',
    name: 'Minions',
    category: 'Character',
    character: 'Regent',
    description: 'Summon allies to fight alongside you. Minions can block, attack, and provide utility effects.',
    examples: ['Summon Guard', 'Summon Archer', 'Summon Mage'],
  },
  // Advanced Mechanics
  {
    slug: 'enchantments',
    name: 'Enchantments',
    category: 'Advanced',
    description: 'Persistent modifiers that can be applied to cards, altering their properties for the rest of the run. Unlike upgrades, Enchantments can add entirely new keywords.',
    examples: ['Add Ethereal', 'Add Replay', 'Add Retain'],
  },
  {
    slug: 'afflictions',
    name: 'Afflictions',
    category: 'Advanced',
    description: 'Negative effects that enemies can apply to your cards, making them harder to play or less effective. Manage Afflictions carefully to maintain deck efficiency.',
    examples: ['Cursed', 'Corrupted', 'Weakened'],
  },
  {
    slug: 'quest-cards',
    name: 'Quest Cards',
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
