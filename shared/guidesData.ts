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
    title: 'What Is Exhaust in Slay the Spire 2? When to Use It, When to Stop, and What Players Mean by "Remove Exhaust"',
    description:
      'If you are asking what Exhaust means in Slay the Spire 2, when to use it, or what players usually mean by "remove exhaust," this guide gives practical timing rules, over-thinning checks, and a clear way to tell whether your deck is actually becoming an Exhaust build.',
    readTime: '8 min',
    updatedAt: '2026-04-01',
    primaryKeyword: 'exhaust mechanic slay the spire 2',
    sections: [
      {
        heading: 'What Exhaust Actually Does',
        points: [
          'Exhaust removes a card from your deck for the rest of the current combat, so it changes your later draw quality rather than only your current turn.',
          'That is why players often describe Exhaust as deck shaping: weak or temporary cards leave circulation, and stronger hands appear more often later.',
          'The mechanic is not automatically good or bad. Its value depends on whether the card you remove was hurting future hands more than it was helping right now.',
        ],
      },
      {
        heading: 'When Exhaust Usually Helps',
        points: [
          'Exhaust tends to help most once your deck already has replacements for starter cards and can afford to improve hand quality over multiple turns.',
          'In longer fights, selective Exhaust often functions like slow scaling because each future draw has a better chance to hit your real payoff cards.',
          'Many players also start valuing Exhaust more once their deck has draw, payoff cards, or relic/card text that explicitly rewards exhausted cards.',
        ],
      },
      {
        heading: 'When Exhaust Starts Hurting You',
        points: [
          'The most common failure pattern is thinning too fast in short elite or high-pressure fights and accidentally deleting your own defensive floor.',
          'Exhaust also underperforms when players chase the idea of an Exhaust deck before they actually have draw support, payoff text, or enough card quality to benefit from thinning.',
          'If your deck is already small, flat, or low on replacement quality, further Exhaust can make hands less stable instead of more stable.',
        ],
      },
      {
        heading: 'What Players Usually Mean by "Remove Exhaust"',
        points: [
          'Most searches for "remove exhaust" are not really asking for a hidden game system that cancels Exhaust. They are usually asking how to reduce the downside of exhausting too many cards too early.',
          'In practice, that question is usually about pacing: stop deleting cards before your deck has enough replacement value, draw support, or payoff for doing so.',
          'So the useful answer is not "how do I undo Exhaust," but "how do I avoid exhausting the wrong cards, at the wrong time, in the wrong fight?"',
        ],
      },
      {
        heading: 'What Counts as an Exhaust Build',
        points: [
          'A deck is not an Exhaust build just because it contains a few cards that Exhaust. The mechanic has to be doing real structural work for your deck.',
          'In most runs, that means Exhaust is improving hand quality on purpose, and the deck also contains enough draw, payoff, or scaling to benefit from the cards leaving circulation.',
          'If Exhaust is only appearing incidentally while your real plan comes from elsewhere, it is better to think of it as support text rather than the identity of the deck.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should beginners force an Exhaust build on early runs?',
        answer:
          'Usually no. A safer approach is to learn selective Exhaust first, then move toward heavier Exhaust synergies only when your deck already has enough draw, payoff, or replacement quality.',
      },
      {
        question: 'Does Exhaust always mean late-game scaling?',
        answer:
          'Not always. In some fights it simply improves hand quality or removes weak openers. The scaling side becomes more obvious once the fight is long enough for better future draws to matter.',
      },
      {
        question: 'What does "remove exhaust" usually mean in player searches?',
        answer:
          'Most of the time, players are asking how to avoid the downside of over-thinning a deck, not how to reverse the mechanic itself. The practical fix is better pacing and better target selection.',
      },
      {
        question: 'How do I know if my deck is actually an Exhaust build?',
        answer:
          'Ask whether Exhaust is central to your deck becoming better over time. If the answer depends on draw support, payoff effects, and repeated hand-quality improvement, then the deck is likely leaning into Exhaust as a real plan.',
      },
    ],
    relatedLinks: [
      { href: '/guides/ironclad-early-build', label: 'Need an Ironclad route before heavier Exhaust commitment?' },
      { href: '/mechanics', label: 'Need the full mechanics page before comparing Exhaust to other systems?' },
      { href: '/cards', label: 'Browse the card database if you want to inspect current Exhaust-related cards.' },
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
    title: 'Celestial Might in Slay the Spire 2: When It Wins Runs, When It Is Bait, and When Regent Should Skip It',
    description:
      'A practical Celestial Might guide for Slay the Spire 2. Learn when Regent decks should treat it as real payoff, when it is just bait, and why it is not a universal early draft.',
    readTime: '8 min',
    updatedAt: '2026-04-01',
    primaryKeyword: 'celestial might sts2',
    sections: [
      {
        heading: 'What Celestial Might Actually Solves',
        points: [
          'Celestial Might is usually discussed as a payoff card, not as a card that fixes weak early turns by itself.',
          'It reads best in decks that already know how they are surviving and only need a cleaner way to convert setup into pressure.',
          'Treat it as a closing tool for a working shell, not as proof that your run suddenly has a plan.',
        ],
      },
      {
        heading: 'When It Deserves the Draft Slot',
        points: [
          'Draft it when Regent already has one stable lane, enough setup support, and a real reason to convert those turns into payoff.',
          'Delay it when the deck still fails basic elite checks or keeps producing awkward hands with too much setup and not enough floor.',
          'Skip it when the current run is winning by cleaner Forge lines or by simpler mid-cost sequencing that Celestial Might does not actually improve.',
        ],
      },
      {
        heading: 'When It Starts to Become Bait',
        points: [
          'It becomes bait when the card looks like payoff but the rest of the deck still lacks stable block, draw quality, or a clean Stars shell.',
          'It also becomes bait when players take it just because the text looks explosive, even though their real losses still come from tempo and survival gaps.',
          'If adding Celestial Might only increases setup load without fixing the combat pattern you are losing to, it is probably the wrong draft now.',
        ],
      },
      {
        heading: 'How Players Usually Judge the Card',
        points: [
          'Players usually rate Celestial Might higher once the deck already has enough room to spend turns on payoff instead of patching over weak floors.',
          'Most of the disagreement around the card comes from runs where it is drafted too early and then blamed for problems it never claimed to solve.',
          'A useful test is simple: if Regent still needs consistency help, Celestial Might is often a luxury; if the shell is already stable, it can become a real closer.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Celestial Might good in Slay the Spire 2?',
        answer:
          'It can be, but mostly in decks that already have the support to cash it in. It is usually worse when drafted as an early rescue card.',
      },
      {
        question: 'When should Regent players draft Celestial Might?',
        answer:
          'Draft it once your run already has enough stability to spend a slot on payoff. If the deck still needs floor, block, or cleaner sequencing, keep solving those first.',
      },
      {
        question: 'Is Celestial Might only good in Stars shells?',
        answer:
          'It is usually easier to justify there, but the real question is not the label of the shell. The real question is whether the card improves your actual combat sequence instead of adding one more expensive dream turn.',
      },
    ],
    relatedLinks: [
      { href: '/cards/celestial_might', label: 'Read Celestial Might card text before deciding where it fits' },
      { href: '/guides/regent-stars-vs-forge-build-path', label: 'Need the full Stars vs Forge decision framework first?' },
      { href: '/cards/character/regent', label: 'Compare Celestial lines with the rest of the Regent card pool' },
    ],
  },
  {
    slug: 'necrobinder-common-cards',
    title: 'Necrobinder Common Cards in Slay the Spire 2: Which Ones Stabilize Early Runs and Which Ones Only Support Synergy',
    description:
      'A practical Necrobinder common cards guide for Slay the Spire 2. Use it to sort the common pool into early stabilizers, engine support, and synergy pieces without turning every pick into a tier list.',
    readTime: '9 min',
    updatedAt: '2026-04-01',
    primaryKeyword: 'necrobinder common cards',
    sections: [
      {
        heading: 'How to Read Necrobinder Common Cards Without Forcing a Fake Archetype',
        points: [
          'Necrobinder commons are easier to read by job than by hype: some cards stabilize runs, some support Osty tempo, and some only make sense once a Doom or Soul lane already exists.',
          'That matters because early Necrobinder losses usually come from weak floors and awkward turns, not from failing to draft one flashy payoff.',
          'Use the common pool as a map for how the character survives its first acts, not as a shortcut to a fixed best deck.',
        ],
      },
      {
        heading: 'Commons That Mainly Stabilize Early Runs',
        points: [
          'Cards like Defy, Negative Pulse, Grave Warden, and Pull Aggro are easiest to read as floor tools because they help you survive turns that would otherwise collapse.',
          'Afterlife, Invoke, and Wisp also fit this group when the run still needs smoother turns more than it needs higher ceiling.',
          'These picks are usually easier to justify than speculative synergy cards when elite checks and HP pressure are still the real problem.',
        ],
      },
      {
        heading: 'Commons That Look Better Once a Lane Already Exists',
        points: [
          'Scourge leans toward Doom support, while Poke, Snap, and Flatten read more clearly once you already know Osty is part of the combat plan.',
          'Blight Strike, Fear, Defile, Reave, Reap, Graveblast, Sculpting Strike, Drain Power, and Sow are easier to draft once you know whether the deck needs pressure, spread damage, or conversion turns.',
          'These cards are not bad early by default, but they become much easier to evaluate after the run already has one stable lane.',
        ],
      },
      {
        heading: 'The Common-Pool Mistake New Necrobinder Runs Keep Repeating',
        points: [
          'The common mistake is reading every common as either weak filler or mandatory synergy, when many of them are just role players that depend on what the deck is still missing.',
          'Another common trap is chasing a Doom, Osty, or Soul identity before the deck has enough floor to survive the fights that come before the payoff.',
          'A safer reading order is simple: secure survival first, then add support pieces, then let the run decide which commons become real glue.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What counts as a Necrobinder common card in Slay the Spire 2?',
        answer:
          'This page uses the current local card pool and looks only at Necrobinder cards marked common, not starter, uncommon, or rare.',
      },
      {
        question: 'Are Necrobinder commons supposed to be ranked?',
        answer:
          'Not here. The goal is to sort them by role so you can read draft context more clearly, not to pretend one fixed ranking survives every run state.',
      },
      {
        question: 'Which Necrobinder commons should I review first?',
        answer:
          'Start with the commons that help you survive awkward early turns, then review the ones that only become strong after Doom, Osty, or Soul lines are already making sense.',
      },
    ],
    relatedLinks: [
      { href: '/cards/character/necrobinder', label: 'Open the full Necrobinder card pool before narrowing to commons' },
      { href: '/characters/necrobinder', label: 'Need the broader Necrobinder character overview first?' },
      { href: '/mechanics', label: 'Refresh Doom and other core mechanics before reading commons as synergy tools' },
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
