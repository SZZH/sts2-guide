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
    slug: 'necrobinder',
    name: 'Necrobinder',
    title: 'Master of Death',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663030533337/aLFsveEAGLkukWZA.png',
    color: '#a855f7',
    description: 'A pale necromancer who commands the power of death itself, summoning spectral minions and binding souls to do their bidding.',
    lore: 'Once a renowned healer, the Necrobinder crossed forbidden boundaries in their quest to conquer death. Now wielding powers that blur the line between life and the grave, they ascend the Spire seeking the ultimate secret: true resurrection. Their spectral servants whisper of ancient pacts and prices yet to be paid.',
    startingRelic: 'Bone Phylactery',
    startingDeck: [
      'Strike (5)',
      'Defend (4)',
      'Raise Dead (1)',
      'Soul Siphon (1)',
    ],
    mechanics: [
      {
        name: 'Summon',
        description: 'Create spectral minions that fight alongside you. Minions have their own HP and attack automatically each turn.',
      },
      {
        name: 'Bind',
        description: 'Attach souls to enemies or allies, creating powerful synergies. Bound enemies take extra damage when minions attack.',
      },
      {
        name: 'Decay',
        description: 'Apply stacks of Decay to enemies. At the end of their turn, they lose HP equal to their Decay stacks, which then reduce by 1.',
      },
    ],
    playstyle: 'The Necrobinder excels at building an army of spectral minions while weakening enemies with Decay effects. Focus on cards that summon minions early, then use Bind effects to create devastating combos. Manage your minion count carefully — too many can clog the battlefield, but too few leaves you vulnerable. Decay effects provide excellent scaling damage for longer fights.',
    difficulty: 'Intermediate',
    hp: 68,
    gold: 99,
  },
  {
    slug: 'the-regent',
    name: 'The Regent',
    title: 'Cosmic Sovereign',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663030533337/oVNAoBeWWaXsPyYX.png',
    color: '#3b82f6',
    description: 'A regal cosmic monarch who wields the power of constellations, issuing divine edicts and channeling cosmic energy.',
    lore: 'Born under a celestial alignment that occurs once every thousand years, The Regent was destined to rule the stars themselves. They ascend the Spire not for personal gain, but to restore cosmic balance and reclaim their throne among the heavens. Each edict they issue reshapes reality itself, and their blade cuts through the fabric of space.',
    startingRelic: 'Crown of Stars',
    startingDeck: [
      'Strike (5)',
      'Defend (4)',
      'Royal Decree (1)',
      'Starfall (1)',
    ],
    mechanics: [
      {
        name: 'Edict',
        description: 'Issue powerful royal decrees that modify combat rules. Edicts remain active for several turns and affect both you and enemies.',
      },
      {
        name: 'Constellation',
        description: 'Form patterns with your played cards. Completing constellations grants powerful bonus effects and cosmic energy.',
      },
      {
        name: 'Cosmic Energy',
        description: 'A special resource that builds as you complete constellations. Spend it to activate devastating cosmic powers.',
      },
    ],
    playstyle: 'The Regent requires strategic planning and pattern recognition. Focus on completing constellations by playing cards in specific sequences. Edicts can swing battles in your favor, but timing is crucial — some edicts have drawbacks that affect you as well. Build up Cosmic Energy through constellation completion, then unleash it at critical moments. This character rewards players who can think several turns ahead.',
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
  url: string; // External link to original article
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
    title: 'New Characters',
    description: 'Master unique playstyles with the Necrobinder and The Regent, each featuring distinct mechanics and strategies.',
  },
  {
    icon: '🃏',
    title: '300+ Cards',
    description: 'Build powerful decks from an expanded card pool with new synergies, combos, and strategic depth.',
  },
  {
    icon: '🗺️',
    title: 'Revamped Map',
    description: 'Navigate a redesigned Spire with new event types, branching paths, and strategic decision points.',
  },
  {
    icon: '🎨',
    title: 'Godot Engine',
    description: 'Built on open-source Godot engine after migrating from Unity, ensuring better performance and mod support.',
  },
];
