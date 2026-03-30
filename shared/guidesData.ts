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
    title: 'What Is Exhaust in Slay the Spire 2? Timing Guide (When to Thin and When to Stop)',
    description:
      'If you are asking what Exhaust means in Slay the Spire 2 or whether to Exhaust now or hold, this guide gives practical timing rules, over-thinning risk checks, and payoff setup patterns.',
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
      { href: '/cards/corruption', label: 'Should you force Corruption or stay on a safer Exhaust line?' },
      { href: '/guides/ironclad-early-build', label: 'Need an Ironclad route before full Exhaust commitment?' },
      { href: '/mechanics', label: 'Need quick definitions for Sly, Doom, Stars, and Forge first?' },
    ],
  },
  {
    slug: 'act1-route-priority',
    title: 'Act 1 Route Priority in Slay the Spire 2 (Elite Risk vs Safe Scaling)',
    description:
      'If your Act 1 routes keep collapsing, use this checklist to decide when to take elites, when to path safer, and how to preserve scaling into Act 2.',
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
      { href: '/guides/common-beginner-mistakes', label: 'Why does this route keep failing even with good cards?' },
      { href: '/guides/what-to-upgrade-first', label: 'Which campfire upgrade fixes your next two fights fastest?' },
      { href: '/characters', label: 'Character overview' },
    ],
  },
  {
    slug: 'regent-card-pool-priority',
    title: 'Regent Card Pool Priority in Slay the Spire 2 (All Regent Cards by Role)',
    description:
      'Use this Regent card pool guide to sort all Regent cards by role, not by raw rarity. It focuses on the exact picks that stabilize Act 1 and avoid Star-engine dead turns.',
    readTime: '9 min',
    updatedAt: '2026-03-30',
    primaryKeyword: 'regent card pool slay the spire 2',
    sections: [
      {
        heading: 'How to Read the Regent Card Pool Without Bricking Your Deck',
        points: [
          'Regent card quality is role-dependent: Star generation, Star payoff, defense conversion, and deck smoothing must stay in balance.',
          'In early acts, prioritize cards that both progress your plan and fix turn quality; pure setup cards are dangerous when your floor is still weak.',
          'A simple checkpoint is 2 to 3 reliable Star producers before adding expensive payoff cards that cannot function on empty Stars.',
        ],
      },
      {
        heading: 'Act 1 Priority Buckets (Draft Order That Holds Up Under Pressure)',
        points: [
          'First bucket: low-risk enablers such as Glow, Hidden Cache, and Shining Strike that improve both tempo and Star access.',
          'Second bucket: stabilizers like Cloak of Stars and Reflect so your scaling plan does not collapse in elite fights.',
          'Third bucket: commitment cards such as Genesis, Gamma Blast, and Alignment once your deck already has enough hands that can actually spend Stars.',
        ],
      },
      {
        heading: 'What to Skip Even When It Looks Strong',
        points: [
          'Skip duplicate high-cost payoff cards when your current list still misses basic block checks or draw consistency.',
          'Skip narrow Forge-only lines if your current relics and pathing reward flexible Star turns more than long setup windows.',
          'Skip vanity rare picks when they force awkward curves; Regent loses more runs to hand quality collapse than to low ceiling.',
        ],
      },
      {
        heading: 'Rare Card Discipline (Regent Rare Cards Are Not Auto-Picks)',
        points: [
          'Treat rare cards as role upgrades, not trophies: only take them when they replace an existing weak slot in your curve.',
          'Genesis is premium when your deck survives setup turns; it is mediocre when your current route punishes slow openings.',
          'Conqueror and The Smith scale hard in focused lists, but both underperform when you draft them before solving card flow and defense.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I draft every card that says Stars when building Regent?',
        answer:
          'No. Too many Star-only cards create hands with no conversion. Keep a balanced split between Star production, payoff, and defense so every hand can do something useful.',
      },
      {
        question: 'How many Regent rare cards should I usually keep in one run?',
        answer:
          'Most stable runs only need one to two rare cards that match the current shell. More than that is often win-more unless your draw and block base is already solved.',
      },
    ],
    relatedLinks: [
      { href: '/cards/character/regent', label: 'Need the full all Regent cards list before drafting?' },
      { href: '/guides/regent-stars-vs-forge-build-path', label: 'Not sure whether to commit to Stars or Forge this run?' },
      { href: '/guides/celestial-might-regent-guide', label: 'Trying to decide if Celestial Might is worth the slot now?' },
    ],
  },
  {
    slug: 'regent-stars-vs-forge-build-path',
    title: 'The Regent in Slay the Spire 2: Stars vs Forge Build Path Guide',
    description:
      'This Regent build guide compares Stars and Forge by real run checkpoints: when to commit, when to pivot, and how to avoid dead-end drafts in Slay the Spire 2.',
    readTime: '10 min',
    updatedAt: '2026-03-30',
    primaryKeyword: 'the regent sts2',
    sections: [
      {
        heading: 'Pick Your Core Identity by Floor 10, Not by Dream Deck',
        points: [
          'Stars path is stronger when your early rewards provide repeat Star generation and at least one reliable conversion card.',
          'Forge path is stronger when your draw sequence supports repeated Sovereign Blade access and you can afford setup turns.',
          'If both plans are half-built, stay hybrid one more act and draft floor cards before forcing either identity.',
        ],
      },
      {
        heading: 'Stars Route: What Good Turns Actually Look Like',
        points: [
          'A healthy Stars deck can generate Stars, spend Stars, and still defend in the same turn cycle.',
          'Core engine pieces usually include Glow, Hidden Cache, Shining Strike, then stronger payoff options like Gamma Blast or high-value spenders.',
          'When Stars hands feel clunky, fix sequencing first with draw and retain support before adding more expensive payoff cards.',
        ],
      },
      {
        heading: 'Forge Route: Build Around Blade Access, Not Just Forge Numbers',
        points: [
          'Forge scaling fails if Sovereign Blade access is inconsistent, so card flow tools such as Summon Forth are priority picks.',
          'Conqueror and Furnace are excellent only after your deck can survive the setup turns required to cash them in.',
          'The best Forge lists still keep lightweight defense and one secondary damage lane to avoid single-point failure.',
        ],
      },
      {
        heading: 'Pivot Rules Between Stars and Forge',
        points: [
          'Pivot from Forge to Stars when you keep missing Blade access but see repeatable Star economy cards and payoff.',
          'Pivot from Stars to Forge when your Stars generation is shallow but you already hold high-value Forge multipliers and Blade support.',
          'Never pivot by adding random top-end cards; remove weak links first so the new lane has room to function.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Stars always better than Forge for Regent?',
        answer:
          'No. Stars is often more flexible, but Forge wins plenty of runs when Blade access and setup windows are already solved by your draft and relic state.',
      },
      {
        question: 'When should I stop forcing a build and just stabilize?',
        answer:
          'If your next elite or boss check is likely to fail, stop forcing synergy and draft immediate floor cards first. Regent loses many runs to unstable midgame, not low ceiling.',
      },
    ],
    relatedLinks: [
      { href: '/guides/regent-card-pool-priority', label: 'Need a role-based Regent draft order before committing?' },
      { href: '/cards/character/regent', label: 'Open the Regent card list before full Forge commitment' },
      { href: '/mechanics', label: 'Need a quick Stars and Forge mechanic refresher first?' },
    ],
  },
  {
    slug: 'celestial-might-regent-guide',
    title: 'Celestial Might Regent Guide: When to Draft, Upgrade, and Skip',
    description:
      'A practical Celestial Might Regent guide for Slay the Spire 2. Learn when the card is a win condition, when it is bait, and how to slot it without hurting deck consistency.',
    readTime: '8 min',
    updatedAt: '2026-03-30',
    primaryKeyword: 'celestial might regent',
    sections: [
      {
        heading: 'What Celestial Might Is Supposed to Solve',
        points: [
          'Celestial Might is strongest as a payoff accelerator when your deck already produces stable Stars and can protect setup turns.',
          'It is not an early universal fixer; drafting it too early often worsens draw quality and delays survival upgrades.',
          'Treat it as a role card for closing combat windows, not as a standalone plan.',
        ],
      },
      {
        heading: 'Draft Timing Checklist',
        points: [
          'Draft now when you already have repeatable Star generation and one consistent defensive lane.',
          'Delay when your current list still loses to basic elite damage checks or suffers from hand clogging.',
          'Skip when your current run is clearly Forge-centric and Celestial Might does not improve the actual win line.',
        ],
      },
      {
        heading: 'Upgrade and Sequencing Rules',
        points: [
          'Upgrade priority rises when Celestial Might is your main conversion window; otherwise keep upgrades for stability cards first.',
          'Plan Celestial turns around guaranteed follow-up, not around hopeful draws, so the payoff actually converts into lethal or control.',
          'Pair with low-cost setup cards so the turn does not collapse if one premium payoff card is missing.',
        ],
      },
      {
        heading: 'Common Misplays That Make the Card Look Worse Than It Is',
        points: [
          'Playing it on low-resource turns with no conversion follow-up and then blaming card quality.',
          'Overcommitting to one flashy line instead of preserving a backup defensive path.',
          'Keeping too many expensive cards around it, creating turns where everything is powerful but nothing is playable.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Celestial Might mandatory in every Regent run?',
        answer:
          'No. It is a high-upside option, not a mandatory card. Many winning Regent runs prioritize consistency tools over one marquee payoff card.',
      },
      {
        question: 'Can Celestial Might work in both Stars and Forge shells?',
        answer:
          'It is usually better in Stars-focused shells. In Forge-heavy lists, take it only when the card clearly improves your real combat sequence rather than adding more setup load.',
      },
    ],
    relatedLinks: [
      { href: '/cards/celestial_might', label: 'Read Celestial Might card text and cost details' },
      { href: '/guides/regent-stars-vs-forge-build-path', label: 'Need the full Stars vs Forge decision framework?' },
      { href: '/cards/character/regent', label: 'Compare Celestial lines with the rest of the Regent card pool' },
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
