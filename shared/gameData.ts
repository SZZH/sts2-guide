// Game data for Slay the Spire 2

export const LAUNCH_DATE = new Date('2026-03-13T00:00:00Z');

export interface Character {
  slug: string;
  name: string;
  title: string;
  image: string;
  color: string;
  description: string;
  lore: string;
  startingRelic: string;
  startingDeck: string[];
  mechanics: Array<{ name: string; description: string }>;
  playstyle: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  hp: number;
  gold: number;
}

export const CHARACTERS: Character[] = [
  {
    slug: 'ironclad',
    name: 'Ironclad',
    title: 'The Relentless Warrior',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663030533337/UECVXLNqwFQBvvos.jpg',
    color: '#dc2626',
    description: 'A battle-hardened warrior who channels raw strength and fury, sacrificing health for devastating power.',
    lore: 'The Ironclad returns to the Spire, his golden helm gleaming with the scars of countless battles. A thousand years have passed since his kind last climbed these cursed halls, yet the call of combat burns as fiercely as ever. He seeks not glory or treasure, but the ultimate test of strength that only the Spire can provide.',
    startingRelic: 'Burning Blood',
    startingDeck: [
      'Strike (5)',
      'Defend (4)',
      'Bash (1)',
    ],
    mechanics: [
      {
        name: 'Strength',
        description: 'Stack Strength to increase attack damage. Many Ironclad cards gain power from high Strength values.',
      },
      {
        name: 'Exhaust',
        description: 'Remove cards from your deck for the rest of combat. Exhaust synergies provide powerful effects when cards are exhausted.',
      },
      {
        name: 'Self-Damage',
        description: 'Trade HP for powerful effects. Cards that cost health often provide exceptional value or strength gains.',
      },
    ],
    playstyle: 'Ironclad excels at direct, aggressive strategies. Build Strength early to scale your damage, and use Exhaust synergies to streamline your deck. Self-damage cards offer incredible power, but require careful HP management. Best suited for players who enjoy straightforward, high-impact gameplay with explosive damage potential.',
    difficulty: 'Intermediate',
    hp: 80,
    gold: 99,
  },
  {
    slug: 'silent',
    name: 'Silent',
    title: 'The Deadly Assassin',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663030533337/iYwmgGcugdkMSniR.jpg',
    color: '#16a34a',
    description: 'A cunning rogue who strikes from the shadows, wielding poison, shivs, and the new Sly mechanic to devastating effect.',
    lore: 'Beneath her skull mask, the Silent watches and waits. She has returned to the Spire with new tricks learned over a millennium of shadows. The ancient halls whisper secrets to those patient enough to listen, and she has mastered the art of turning weakness into deadly opportunity. Her blades flash in darkness, and her poisons flow like whispered promises.',
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
        description: 'NEW MECHANIC: When you discard a card with Sly, it automatically plays for free. Transform discarding from a cost into a powerful advantage.',
      },
      {
        name: 'Poison',
        description: 'Apply Poison to enemies. At the end of their turn, they lose HP equal to their Poison and Poison decreases by 1.',
      },
      {
        name: 'Shiv',
        description: 'Generate 0-cost attack cards that deal damage and trigger combo effects. Build massive chains of attacks in a single turn.',
      },
    ],
    playstyle: 'Silent rewards careful planning and combo execution. The new Sly mechanic turns discarding into a tactical advantage, allowing you to play multiple cards per turn. Poison provides excellent scaling damage for long fights, while Shiv generation enables explosive burst turns. Master the art of chaining cards together and manipulating your hand for maximum efficiency.',
    difficulty: 'Advanced',
    hp: 70,
    gold: 99,
  },
  {
    slug: 'necrobinder',
    name: 'Necrobinder',
    title: 'Master of Death',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663030533337/IhxzgFoKVFYaaDVz.jpg',
    color: '#a855f7',
    description: 'A pale necromancer who commands the power of death itself, binding souls and wielding Doom alongside her skeletal companion Osty.',
    lore: 'Once a renowned healer, the Necrobinder crossed forbidden boundaries in their quest to conquer death. Now wielding powers that blur the line between life and the grave, they ascend the Spire seeking the ultimate secret: true resurrection. Their spectral servants whisper of ancient pacts and prices yet to be paid. Osty, their skeletal hand companion, serves as both shield and weapon.',
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
        description: 'NEW MECHANIC: Apply Doom stacks to enemies. When they attempt to attack, Doom triggers first, dealing damage and reducing by 1. Delay and punish enemy actions.',
      },
      {
        name: 'Osty',
        description: 'Your skeletal hand companion with its own HP pool. Osty can block damage, attack enemies, and be empowered by your cards. Protect Osty to maintain your advantage.',
      },
      {
        name: 'Souls',
        description: 'Generate Soul cards that provide energy and card draw. Souls are the currency of death, fueling your most powerful abilities.',
      },
    ],
    playstyle: 'Necrobinder excels at controlling the battlefield through Doom and Osty synergies. Stack Doom on enemies to punish their attacks, while using Osty as a defensive wall and offensive tool. Soul generation provides incredible card draw and energy, enabling long combo turns. Balance protecting Osty with aggressive Doom application for optimal results.',
    difficulty: 'Intermediate',
    hp: 68,
    gold: 99,
  },
  {
    slug: 'regent',
    name: 'The Regent',
    title: 'Cosmic Sovereign',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663030533337/yHPdwwbYirYDUfys.jpg',
    color: '#3b82f6',
    description: 'A regal cosmic monarch who wields the power of constellations, channeling Stars energy and forging powerful artifacts.',
    lore: 'Born under a celestial alignment that occurs once every thousand years, The Regent was destined to rule the stars themselves. They ascend the Spire not for personal gain, but to restore cosmic balance and reclaim their throne among the heavens. Each edict they issue reshapes reality itself, and their blade cuts through the fabric of space. The constellations bend to their will.',
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
];

export interface GameFeature {
  icon: string;
  title: string;
  description: string;
}

export const GAME_FEATURES: GameFeature[] = [
  {
    icon: '👥',
    title: '4 Unique Characters',
    description: 'Master distinct playstyles with Ironclad, Silent, Necrobinder, and The Regent, each featuring unique mechanics.',
  },
  {
    icon: '🃏',
    title: '300+ Cards',
    description: 'Build powerful decks from an expanded card pool with new synergies, combos, and strategic depth.',
  },
  {
    icon: '⚡',
    title: 'New Mechanics',
    description: 'Experience innovative systems like Sly, Doom, Stars, and Forge that transform how you approach combat.',
  },
  {
    icon: '🎨',
    title: 'Godot Engine',
    description: 'Built on open-source Godot engine after migrating from Unity, ensuring better performance and mod support.',
  },
];

// Game Mechanics
export interface GameMechanic {
  slug: string;
  name: string;
  icon: string;
  category: 'Core' | 'Character' | 'Advanced';
  description: string;
  details: string;
  characters?: string[];
}

export const GAME_MECHANICS: GameMechanic[] = [
  {
    slug: 'sly',
    name: 'Sly',
    icon: '🎭',
    category: 'Character',
    description: 'When you discard a card with Sly, it automatically plays for free.',
    details: 'Sly is Silent\'s signature mechanic in StS2. It transforms discarding from a drawback into a powerful advantage. Cards with Sly can be intentionally discarded to trigger their effects without spending energy. This creates unique deck-building opportunities where you want cards that help you discard, and cards with Sly that benefit from being discarded. Master Planner and similar cards can grant Sly to other cards, opening up complex combo possibilities.',
    characters: ['silent'],
  },
  {
    slug: 'doom',
    name: 'Doom',
    icon: '💀',
    category: 'Character',
    description: 'Apply Doom stacks to enemies. When they attack, Doom triggers first, dealing damage.',
    details: 'Doom is Necrobinder\'s signature mechanic. It functions as a delayed damage effect that punishes enemy actions. When an enemy with Doom attempts to attack, the Doom triggers first, dealing damage equal to the Doom stacks and reducing Doom by 1. This creates a defensive playstyle where you can neutralize or severely weaken enemy attacks before they land. Doom synergizes well with cards that increase enemy intent or force them to attack.',
    characters: ['necrobinder'],
  },
  {
    slug: 'stars',
    name: 'Stars',
    icon: '⭐',
    category: 'Character',
    description: 'A special resource that accumulates as you play cards. Spend Stars on powerful cosmic abilities.',
    details: 'Stars is The Regent\'s unique resource system. You gain Stars by playing cards (amount varies by card), and can spend accumulated Stars to activate powerful effects, forge artifacts, or summon celestial minions. Managing your Stars economy is crucial - spend too early and you miss scaling opportunities; hoard too long and you may not survive. The best Regent players know exactly when to cash in their Stars for maximum impact.',
    characters: ['regent'],
  },
  {
    slug: 'forge',
    name: 'Forge',
    icon: '🔨',
    category: 'Character',
    description: 'Create permanent artifacts that provide ongoing benefits throughout combat.',
    details: 'Forge is The Regent\'s artifact creation system. By spending Stars and playing Forge cards, you create permanent items that remain active for the entire combat. These artifacts stack with each other and provide powerful ongoing effects like bonus damage, extra card draw, or energy generation. Building a strong Forge engine early can snowball into overwhelming advantage, but requires surviving long enough to set up.',
    characters: ['regent'],
  },
  {
    slug: 'enchantments',
    name: 'Enchantments',
    icon: '✨',
    category: 'Advanced',
    description: 'Permanent modifications to cards that persist across combats.',
    details: 'Enchantments are a new system in StS2 that allows you to permanently modify cards in your deck. Unlike upgrades, enchantments can be applied multiple times and come in many varieties. You might add damage, reduce cost, add keywords, or completely transform a card\'s effect. Enchantments are acquired through events, shops, and special relics. They provide a new layer of deck customization beyond simple upgrades.',
  },
  {
    slug: 'afflictions',
    name: 'Afflictions',
    icon: '🩹',
    category: 'Advanced',
    description: 'Negative effects that enemies can apply to your cards, weakening them.',
    details: 'Afflictions are the dark mirror of Enchantments. Certain enemies and events can curse your cards with Afflictions - negative modifications that persist across combats. A card might have its cost increased, damage reduced, or gain an undesirable keyword. Managing Afflictions becomes crucial in longer runs. Some shops and events offer Affliction removal, and certain relics can prevent or even benefit from Afflictions.',
  },
  {
    slug: 'quest-cards',
    name: 'Quest Cards',
    icon: '📜',
    category: 'Advanced',
    description: 'Special cards that require completing objectives before they can be played.',
    details: 'Quest Cards are powerful cards that start locked and require you to complete specific objectives during combat to unlock them. For example, "Deal 30 damage in a single turn" or "Play 5 Skills this combat". Once unlocked, Quest Cards typically provide exceptional value. They add a mini-game element to combat, encouraging you to build towards completing quests while managing immediate threats.',
  },
  {
    slug: 'alternate-acts',
    name: 'Alternate Acts',
    icon: '🗺️',
    category: 'Core',
    description: 'Each Act has two different versions with unique enemies, events, and bosses.',
    details: 'StS2 introduces branching paths at the Act level. After completing Act 1, you choose between two different versions of Act 2, each with distinct enemies, events, and a different boss. This doubles the variety of encounters and creates meaningful strategic decisions about which path suits your deck better. Some relics and cards are only available in specific Act variations, encouraging multiple runs to see all content.',
  },
  {
    slug: 'ancients',
    name: 'Ancients',
    icon: '🏛️',
    category: 'Core',
    description: 'Powerful beings that replace Boss Relics, offering choices with trade-offs.',
    details: 'The Ancients system replaces traditional Boss Relics. After defeating a boss, you encounter an Ancient - a powerful entity that offers you a choice of boons. Each Ancient has a different personality and offers different types of rewards. Some might offer powerful relics with drawbacks, others might modify your deck directly, and some might offer unique permanent upgrades. The Ancient you encounter is partially random, adding variety to each run.',
  },
];

// Relics
export interface Relic {
  slug: string;
  name: string;
  rarity: 'Starter' | 'Common' | 'Uncommon' | 'Rare';
  character?: string;
  description: string;
  flavor: string;
}

export const RELICS: Relic[] = [
  {
    slug: 'burning-blood',
    name: 'Burning Blood',
    rarity: 'Starter',
    character: 'ironclad',
    description: 'At the end of combat, heal 6 HP.',
    flavor: 'The heart of a demon still beats within.',
  },
  {
    slug: 'ring-of-the-snake',
    name: 'Ring of the Snake',
    rarity: 'Starter',
    character: 'silent',
    description: 'At the start of each combat, draw 2 additional cards.',
    flavor: 'Made from a fossilized snake that bit its own tail.',
  },
  {
    slug: 'ostys-binding',
    name: 'Osty\'s Binding',
    rarity: 'Starter',
    character: 'necrobinder',
    description: 'Start each combat with Osty, your skeletal hand companion.',
    flavor: 'A pact sealed in bone and shadow.',
  },
  {
    slug: 'stellar-compass',
    name: 'Stellar Compass',
    rarity: 'Starter',
    character: 'regent',
    description: 'Start each combat with 3 Stars.',
    flavor: 'It points not north, but to destiny.',
  },
  {
    slug: 'doom-hourglass',
    name: 'Doom Hourglass',
    rarity: 'Rare',
    character: 'necrobinder',
    description: 'Whenever Doom triggers, gain [E].',
    flavor: 'Time runs out for all things.',
  },
  {
    slug: 'vajra',
    name: 'Vajra',
    rarity: 'Common',
    character: 'ironclad',
    description: 'At the start of each combat, gain 1 Strength.',
    flavor: 'Forged in the heart of a fallen star.',
  },
  {
    slug: 'kunai',
    name: 'Kunai',
    rarity: 'Uncommon',
    character: 'silent',
    description: 'Every time you play 3 Attacks in a single turn, gain 1 Dexterity.',
    flavor: 'A relic from a foreign land. The blade is unnaturally sharp.',
  },
  {
    slug: 'ancient-coin',
    name: 'Ancient Coin',
    rarity: 'Common',
    description: 'Gain 15% more Gold from combat rewards.',
    flavor: 'A coin of unknown origin. It feels warm to the touch.',
  },
  {
    slug: 'bag-of-marbles',
    name: 'Bag of Marbles',
    rarity: 'Common',
    description: 'At the start of each combat, apply 1 Vulnerable to ALL enemies.',
    flavor: 'Perfect for setting traps.',
  },
  {
    slug: 'bottled-stars',
    name: 'Bottled Stars',
    rarity: 'Uncommon',
    character: 'regent',
    description: 'Upon pickup, choose a card. Start each combat with that card in your hand.',
    flavor: 'Starlight preserved in crystal.',
  },
  {
    slug: 'dead-branch',
    name: 'Dead Branch',
    rarity: 'Rare',
    description: 'Whenever you Exhaust a card, add a random card to your hand.',
    flavor: 'A branch from a tree that died long ago.',
  },
  {
    slug: 'prayer-wheel',
    name: 'Prayer Wheel',
    rarity: 'Rare',
    description: 'Normal combats reward an additional card reward.',
    flavor: 'Spinning it is said to bring good fortune.',
  },
];
