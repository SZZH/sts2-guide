export type GuideSection = {
  heading: string;
  points: string[];
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type GuideArticle = {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  updatedAt: string;
  primaryKeyword: string;
  sections: GuideSection[];
  faqs: GuideFaq[];
  relatedLinks: { href: string; label: string }[];
};

export const GUIDE_ARTICLES: GuideArticle[] = [
  {
    slug: 'drawpile-mechanic-explained',
    title: 'Draw Pile Mechanics Explained in Slay the Spire 2',
    description:
      'Learn how draw pile sequencing affects consistency, setup turns, and win conditions in Slay the Spire 2.',
    readTime: '6 min',
    updatedAt: '2026-03-17',
    primaryKeyword: 'drawpile slay the spire 2',
    sections: [
      {
        heading: 'What Draw Pile Control Actually Solves',
        points: [
          'Draw pile manipulation reduces dead turns by increasing access to core cards.',
          'It is strongest in decks that rely on one payoff card plus cheap setup cards.',
          'Control cards are only valuable when they improve your next two turns, not just this turn.',
        ],
      },
      {
        heading: 'When to Prioritize Draw Tools',
        points: [
          'Prioritize draw tools when your deck has strong synergy but inconsistent order.',
          'Skip extra draw when hand quality is already low and you lack energy conversion.',
          'Pair draw engines with cost reduction or energy gain to avoid overdraw traps.',
        ],
      },
      {
        heading: 'Common Mistakes',
        points: [
          'Taking every draw card and diluting actual win-condition density.',
          'Adding draw without adding defensive floor in Act 1.',
          'Ignoring discard/exhaust side effects when forcing cycle speed.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is draw pile control always better than direct damage in early acts?',
        answer: 'No. Early fights still require immediate damage or block checks. Add control only after those checks are stable.',
      },
      {
        question: 'Which class benefits most from draw pile tools?',
        answer: 'Silent and Defect usually convert draw into tempo fastest, but all classes can use it if the deck has clear payoffs.',
      },
    ],
    relatedLinks: [
      { href: '/cards', label: 'Browse all cards' },
      { href: '/cards/bullet_time', label: 'Read Bullet Time card details' },
      { href: '/guides/card-upgrade-priority', label: 'Card upgrade priority guide' },
    ],
  },
  {
    slug: 'exhaust-mechanic-explained',
    title: 'Exhaust Mechanic Guide for Slay the Spire 2',
    description:
      'Understand when Exhaust improves consistency, how to avoid over-thinning, and how to build around key Exhaust payoffs.',
    readTime: '6 min',
    updatedAt: '2026-03-17',
    primaryKeyword: 'exhaust mechanic slay the spire 2',
    sections: [
      {
        heading: 'Why Exhaust Is a Tempo Tool',
        points: [
          'Exhaust removes low-impact cards so each future draw step has higher average quality.',
          'In long fights, this becomes an indirect scaling engine when paired with payoff relics/cards.',
          'Treat Exhaust as deck-shaping, not random card deletion.',
        ],
      },
      {
        heading: 'Best Use Cases',
        points: [
          'Use Exhaust to remove starter cards after you have replacements.',
          'Target temporary or low-scaling cards first in boss fights.',
          'Keep at least one emergency block line before aggressive thinning.',
        ],
      },
      {
        heading: 'Failure Patterns',
        points: [
          'Exhausting too fast in short elite fights and losing defensive floor.',
          'Building around Exhaust without enough draw to see payoffs.',
          'Forcing Exhaust in decks that already have low card quality variance.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should beginners build Exhaust on first runs?',
        answer: 'Only partially. Learn selective Exhaust first, then commit to full synergy once your deck can recover hand size.',
      },
      {
        question: 'Does Exhaust always mean late-game scaling?',
        answer: 'Not always. It can also be a short-fight stabilization tool if used on weak openers.',
      },
    ],
    relatedLinks: [
      { href: '/cards/corruption', label: 'Corruption card guide' },
      { href: '/guides/ironclad-early-build', label: 'Ironclad early build guide' },
      { href: '/relics', label: 'Relic database' },
    ],
  },
  {
    slug: 'act1-route-priority',
    title: 'Act 1 Route Priority in Slay the Spire 2',
    description:
      'A practical Act 1 route framework: when to fight elites, when to take safer nodes, and how to protect first-run consistency.',
    readTime: '7 min',
    updatedAt: '2026-03-17',
    primaryKeyword: 'slay the spire 2 act 1 route',
    sections: [
      {
        heading: 'Act 1 Objective',
        points: [
          'Your objective is not max risk; it is stable scaling into Act 2.',
          'Prioritize routes that give one power spike plus one safety valve.',
          'Pick fights that improve deck quality, not just relic count.',
        ],
      },
      {
        heading: 'Routing Heuristics',
        points: [
          'Take early combats to fix deck tempo, then evaluate elite viability.',
          'Avoid back-to-back high-risk nodes without campfire recovery.',
          'If your deck misses damage checks, value card rewards over event variance.',
        ],
      },
      {
        heading: 'When to Pivot',
        points: [
          'Pivot to safer lines when HP falls below your expected elite threshold.',
          'Pivot to aggressive lines only after one clear scaling package is online.',
          'Use shops to patch immediate weaknesses, not to chase dream builds.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How many elites should I aim for in Act 1?',
        answer: 'For early consistency, 1 is often enough. Push 2 only when your deck already passed core damage and defense checks.',
      },
      {
        question: 'Should I skip cards in Act 1?',
        answer: 'Yes. Skip when options do not improve your next few fights or disrupt your current plan.',
      },
    ],
    relatedLinks: [
      { href: '/guides/common-beginner-mistakes', label: 'Common beginner mistakes' },
      { href: '/guides/what-to-upgrade-first', label: 'What to upgrade first' },
      { href: '/characters', label: 'Character overview' },
    ],
  },
  {
    slug: 'retain-mechanic-explained',
    title: 'Retain Mechanic Explained in Slay the Spire 2',
    description: 'How to use Retain cards to bank tempo and line up stronger multi-turn turns.',
    readTime: '5 min',
    updatedAt: '2026-03-17',
    primaryKeyword: 'retain slay the spire 2',
    sections: [
      { heading: 'Retain Fundamentals', points: ['Retain stores future tempo.', 'Retain is strongest with burst windows.'] },
      { heading: 'Deck Construction', points: ['Avoid over-retaining low-impact cards.', 'Use retain as setup, not as a full plan.'] },
    ],
    faqs: [{ question: 'Is Retain a beginner mechanic?', answer: 'Yes, but only when paired with simple payoff timing.' }],
    relatedLinks: [{ href: '/cards', label: 'Card database' }],
  },
  {
    slug: 'card-upgrade-priority',
    title: 'Card Upgrade Priority for Early Access Runs',
    description: 'A role-based upgrade order that improves consistency instead of chasing high-roll outcomes.',
    readTime: '6 min',
    updatedAt: '2026-03-17',
    primaryKeyword: 'slay the spire 2 card upgrade priority',
    sections: [
      { heading: 'Upgrade Order', points: ['Stability first.', 'Payoff second.', 'Luxury upgrades last.'] },
      { heading: 'Class Nuance', points: ['Ironclad favors immediate floor.', 'Silent values sequencing.'] },
    ],
    faqs: [{ question: 'Should I upgrade attacks first?', answer: 'Only if your next route fails damage checks.' }],
    relatedLinks: [{ href: '/guides/act1-route-priority', label: 'Act 1 route guide' }],
  },
  {
    slug: 'ironclad-early-build',
    title: 'Ironclad Early Build Guide (StS2)',
    description: 'A practical Ironclad early-game path with stable damage, manageable HP loss, and scalable pivots.',
    readTime: '7 min',
    updatedAt: '2026-03-17',
    primaryKeyword: 'ironclad early build slay the spire 2',
    sections: [{ heading: 'Core Path', points: ['Secure floor damage.', 'Add one scaling lane.', 'Protect recovery windows.'] }],
    faqs: [{ question: 'Is Strength build mandatory?', answer: 'No. Strength is strong but not required for early consistency.' }],
    relatedLinks: [{ href: '/cards/accelerant', label: 'Compare with other class scaling cards' }],
  },
  {
    slug: 'silent-early-build',
    title: 'Silent Early Build Guide (StS2)',
    description: 'Silent early-game setup focused on sequencing, discard tempo, and survival consistency.',
    readTime: '7 min',
    updatedAt: '2026-03-17',
    primaryKeyword: 'silent early build slay the spire 2',
    sections: [{ heading: 'Core Path', points: ['Fix hand quality first.', 'Convert discard into tempo.', 'Do not over-greed setup.'] }],
    faqs: [{ question: 'Should I force Sly immediately?', answer: 'No. Build the engine first, then push Sly conversions.' }],
    relatedLinks: [{ href: '/cards/abrasive', label: 'Abrasive card details' }],
  },
  {
    slug: 'defect-early-build',
    title: 'Defect Early Build Guide (StS2)',
    description: 'Defect early routing and build priorities with orb tempo and scaling checkpoints.',
    readTime: '7 min',
    updatedAt: '2026-03-17',
    primaryKeyword: 'defect early build slay the spire 2',
    sections: [{ heading: 'Core Path', points: ['Stabilize first loop.', 'Choose one orb identity early.', 'Scale with focus timing.'] }],
    faqs: [{ question: 'Can Defect force late-game cards early?', answer: 'Usually no. Fix consistency before greedy payoffs.' }],
    relatedLinks: [{ href: '/cards/biased_cognition', label: 'Biased Cognition card details' }],
  },
  {
    slug: 'how-to-evaluate-opening-hand',
    title: 'How to Evaluate Your Opening Hand in StS2',
    description: 'A simple opening-hand framework for safer first turns and fewer avoidable losses.',
    readTime: '5 min',
    updatedAt: '2026-03-17',
    primaryKeyword: 'slay the spire 2 opening hand',
    sections: [{ heading: 'Turn-1 Checklist', points: ['Check lethal risk.', 'Pick one line.', 'Preserve next-turn outs.'] }],
    faqs: [{ question: 'Should I always play all energy turn 1?', answer: 'No. Sometimes holding a key block/utility line is better.' }],
    relatedLinks: [{ href: '/guides/act1-route-priority', label: 'Act 1 routing framework' }],
  },
  {
    slug: 'common-beginner-mistakes',
    title: 'Common Slay the Spire 2 Beginner Mistakes',
    description: 'The most common early-run errors and quick fixes to stabilize your progression.',
    readTime: '6 min',
    updatedAt: '2026-03-17',
    primaryKeyword: 'slay the spire 2 beginner mistakes',
    sections: [{ heading: 'Top Errors', points: ['Over-greeding elites.', 'Forcing builds.', 'Ignoring route context.'] }],
    faqs: [{ question: 'Can one mistake ruin a run?', answer: 'Usually not. Chains of small mistakes are the bigger issue.' }],
    relatedLinks: [{ href: '/guides/card-upgrade-priority', label: 'Upgrade priority guide' }],
  },
];

export function getGuideBySlug(slug: string) {
  return GUIDE_ARTICLES.find((guide) => guide.slug === slug);
}
