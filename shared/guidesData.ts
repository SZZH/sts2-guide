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
      'A practical Necrobinder common cards guide for Slay the Spire 2. Use it to sort the common pool into early stabilizers, engine support, and synergy pieces without turning every pick into a fixed ranking.',
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
    title: 'Retain in Slay the Spire 2: When to Hold Cards, When to Spend Them, and When Retain Starts Ruining Your Hand',
    description: 'How to use Retain cards to bank tempo, line up stronger multi-turn turns, and avoid dead-hand overholding.',
    readTime: '5 min',
    updatedAt: '2026-04-10',
    primaryKeyword: 'retain slay the spire 2',
    sections: [
      {
        heading: 'What Retain Actually Solves',
        points: [
          'Retain lets you carry specific card value into a better turn instead of forcing a weak tempo line right now.',
          'That makes Retain strongest in decks that have clear burst windows, cleaner setup turns, or one payoff card that matters more next turn than this turn.',
          'If holding a card does not improve your next turn quality, Retain is usually not buying tempo. It is only delaying a weak play.',
        ],
      },
      {
        heading: 'When to Hold Retain Cards',
        points: [
          'Hold Retain cards when the next fight pattern is obvious: a safer block check next turn, a better damage window, or a turn where energy converts more cleanly.',
          'Retain is also stronger when your opening hand already passes this turn floor, so you can bank value without dying for it.',
          'The practical question is simple: does holding this card improve the next turn more than spending it now improves this one?',
        ],
      },
      {
        heading: 'When Retain Starts Hurting',
        points: [
          'Retain becomes a trap when you keep low-impact cards too long and your hand stops finding the cards that actually solve the current fight.',
          'It also becomes worse in decks that already have awkward opening hands, because over-holding reduces your ability to redraw into cleaner turns.',
          'If your hand keeps feeling clogged, stop treating Retain as free value and ask whether you are preserving the wrong card for the wrong payoff window.',
        ],
      },
      {
        heading: 'Deck Rules That Keep Retain Useful',
        points: [
          'Use Retain as support for a real plan, not as the entire identity of the deck.',
          'Favor Retain when it protects one high-value turn, one defense checkpoint, or one setup card that actually changes the next combat cycle.',
          'If the deck does not have clear spend windows, Retain cards need stricter standards than they do in burst-oriented lists.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Retain a beginner-friendly mechanic in Slay the Spire 2?',
        answer: 'Yes, but only when you use it for clear next-turn value. Beginners get punished when they treat every Retain card like a free keep.',
      },
      {
        question: 'How many turns should I hold Retain cards before spending?',
        answer: 'Usually one to two turns. If you hold longer without a clear burst, defense, or setup payoff, hand quality usually gets worse instead of better.',
      },
      {
        question: 'How do I know whether a Retain hand is getting clogged?',
        answer: 'If your hand keeps preserving medium cards while missing damage, block, or draw you actually need, you are probably over-retaining and lowering redraw quality.',
      },
    ],
    relatedLinks: [
      { href: '/guides/how-to-evaluate-opening-hand', label: 'Check opening-hand quality before carrying cards into turn 2' },
      { href: '/guides/card-upgrade-priority', label: 'Upgrade the cards that make your Retain turns actually worth holding' },
      { href: '/mechanics', label: 'Compare Retain with other mechanic keywords before overcommitting' },
    ],
  },
  {
    slug: 'card-upgrade-priority',
    title: 'What to Upgrade First in Slay the Spire 2: Card Upgrade Priority for Act 1, Early Elites, and Unstable Runs',
    description: 'Use this Slay the Spire 2 upgrade priority guide to choose upgrades that fix real Act 1 fail states first, then scale into cleaner elite and boss turns.',
    readTime: '6 min',
    updatedAt: '2026-04-10',
    primaryKeyword: 'slay the spire 2 card upgrade priority',
    sections: [
      {
        heading: 'Upgrade Order That Actually Wins Early Runs',
        points: [
          'Upgrade stability first: the cards that stop your next elite, hallway, or boss check from collapsing.',
          'Upgrade payoff second: once the run already passes immediate damage and defense checks, upgrades that improve scaling become worth more.',
          'Luxury upgrades come last: if the upgrade only looks impressive in dream turns, it is usually not the campfire upgrade your current route needs.',
        ],
      },
      {
        heading: 'How to Judge the Next Upgrade',
        points: [
          'Ask which upgrade changes your next two fights, not which upgrade has the biggest number in a vacuum.',
          'A good early upgrade often fixes tempo, hand quality, or survival on awkward turns instead of simply adding ceiling.',
          'If the route is unstable, the best upgrade is usually the one that removes a fail state before it boosts long-game payoff.',
        ],
      },
      {
        heading: 'Class-Specific Biases',
        points: [
          'Ironclad usually values immediate floor and cleaner damage checks more than speculative scaling upgrades.',
          'Silent upgrades are often about sequencing and hand quality, because dead turns punish greedy setup harder.',
          'Defect upgrades should respect orb tempo first; slower scaling upgrades only become premium once the loop is already stable.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I upgrade attacks first in Slay the Spire 2?',
        answer: 'Only when your next path still fails damage checks. If the real problem is block, hand quality, or setup tempo, attack upgrades can be a trap.',
      },
      {
        question: 'What should I upgrade if my run is unstable?',
        answer: 'Upgrade the card that removes the next obvious fail state first, then return to scaling. Unstable runs usually lose because players upgrade ceiling before floor.',
      },
      {
        question: 'How do I know an upgrade is just luxury?',
        answer: 'If the upgrade only matters when your best-case line already happens, and does little for your weak or average turns, it is usually a luxury upgrade.',
      },
    ],
    relatedLinks: [
      { href: '/guides/act1-route-priority', label: 'Check route pressure before locking the wrong campfire upgrade' },
      { href: '/guides/how-to-evaluate-opening-hand', label: 'Use a turn-1 checklist to see whether an upgrade really fixes weak hands' },
      { href: '/guides/common-beginner-mistakes', label: 'Avoid the upgrade mistakes that quietly break stable runs' },
    ],
  },
  {
    slug: 'ironclad-early-build',
    title: 'Ironclad Early Build Guide for Slay the Spire 2: Safe Act 1 Damage, HP Management, and When to Pivot',
    description: 'A practical Ironclad early build guide for Slay the Spire 2 that focuses on safe Act 1 damage checks, manageable HP loss, and cleaner pivots into scaling.',
    readTime: '7 min',
    updatedAt: '2026-04-10',
    primaryKeyword: 'ironclad early build slay the spire 2',
    sections: [
      {
        heading: 'What Ironclad Early Game Actually Needs',
        points: [
          'Ironclad does not need a dream scaling package on floor one. It needs reliable damage, controllable HP loss, and enough floor to keep elite routes honest.',
          'Your first goal is passing early damage checks without turning every hallway into a recovery tax.',
          'A stable Ironclad run usually adds one clear scaling lane only after the basic floor is already solved.',
        ],
      },
      {
        heading: 'Act 1 Draft Priorities',
        points: [
          'Secure floor damage first so the deck can kill before HP bleed becomes the real boss.',
          'Add one scaling lane second, not three half-finished ones. Ironclad runs get messy fast when every pick is a future idea.',
          'Protect recovery windows by respecting campfire value and not overloading on self-damage before the deck can cash it in.',
        ],
      },
      {
        heading: 'When to Pivot Out of Greed',
        points: [
          'If the next elite still looks shaky, stop drafting vanity scaling and add one more immediate floor card.',
          'If HP loss is climbing faster than your damage is improving, your current build is not actually ahead even if the ceiling looks good.',
          'A clean pivot is usually about route survival first, not about abandoning your whole archetype.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Strength mandatory for Ironclad early runs?',
        answer: 'No. Strength is strong, but early consistency comes more from passing damage checks and controlling HP loss than from forcing one specific scaling lane.',
      },
      {
        question: 'What if my Ironclad damage is still low before elites?',
        answer: 'Trim greed, add one more reliable front-load line, and reconsider route risk before forcing heavier scaling picks.',
      },
      {
        question: 'How do I know I am over-greeding on Ironclad?',
        answer: 'If your picks look amazing in long fights but your next elite or hallway still threatens to cost too much HP, you are probably drafting too far ahead.',
      },
    ],
    relatedLinks: [
      { href: '/guides/act1-route-priority', label: 'Re-check elite risk when Ironclad damage still feels thin' },
      { href: '/guides/card-upgrade-priority', label: 'Use upgrade order to stabilize Ironclad breakpoints before scaling' },
      { href: '/cards/twin_strike', label: 'Check Twin Strike when you need a cleaner early multi-hit line' },
    ],
  },
  {
    slug: 'silent-early-build',
    title: 'Silent Early Build Guide for Slay the Spire 2: Safer Discard Tempo, Cleaner Hands, and Fewer Dead Starts',
    description: 'A practical Silent early build guide for Slay the Spire 2 focused on safer discard tempo, cleaner hand quality, and survival before greedy Sly spikes.',
    readTime: '7 min',
    updatedAt: '2026-04-10',
    primaryKeyword: 'silent early build slay the spire 2',
    sections: [
      {
        heading: 'What Silent Early Game Actually Rewards',
        points: [
          'Silent early runs reward hand quality and turn sequencing more than flashy payoff cards.',
          'The class feels strongest once discard improves tempo instead of just moving cards around for no real gain.',
          'That means your first job is not forcing Sly. It is making sure weak hands still produce defendable turns.',
        ],
      },
      {
        heading: 'Safe Draft Priorities',
        points: [
          'Fix hand quality first so discard effects improve real turn quality instead of creating new dead starts.',
          'Convert discard into tempo second by pairing it with damage, draw, or cleaner action sequencing.',
          'Delay greedier setup until the deck can survive average hands, not just high-roll ones.',
        ],
      },
      {
        heading: 'When Silent Starts Bricking',
        points: [
          'Silent bricks early when the deck adds too many setup or discard payoffs before it has enough floor to survive the first two turns.',
          'It also bricks when players treat every discard card as progress even though the hand still lacks damage or block conversion.',
          'If your opening turns keep doing card movement without stabilizing the fight, your build is not online yet.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I force Sly immediately on Silent?',
        answer: 'No. Build the engine first. Sly payoffs get much better once your hands already have enough floor to survive awkward turns.',
      },
      {
        question: 'How do I avoid dead hands in early Silent runs?',
        answer: 'Prioritize hand-quality tools and survival first, then add discard payoffs that actually convert those cleaner hands into tempo.',
      },
      {
        question: 'What is the most common early Silent mistake?',
        answer: 'Adding too much setup before the deck can pass average fight patterns. Silent usually loses more to weak openers than to low ceiling.',
      },
    ],
    relatedLinks: [
      { href: '/guides/how-to-evaluate-opening-hand', label: 'Check whether Silent opening hands are failing before blaming payoff cards' },
      { href: '/cards/dagger_throw', label: 'Use Dagger Throw when you need damage plus hand filtering in one slot' },
      { href: '/cards/tools_of_the_trade', label: 'Only take slower setup once Silent hand quality is already stable' },
    ],
  },
  {
    slug: 'defect-early-build',
    title: 'Defect Early Build Guide for Slay the Spire 2: Orb Tempo First, Scaling Second, and When to Stop Greeding',
    description: 'Use this Defect early build guide for Slay the Spire 2 to stabilize orb tempo first, then scale only after your first loop stops collapsing.',
    readTime: '7 min',
    updatedAt: '2026-04-10',
    primaryKeyword: 'defect early build slay the spire 2',
    sections: [
      {
        heading: 'What Defect Early Game Actually Needs',
        points: [
          'Defect early runs are mostly about making the first orb loop stable enough to survive normal fights without waiting forever for payoff.',
          'That means immediate tempo matters more than dream scaling until the deck can consistently produce useful early turns.',
          'If the first two turns are weak, the scaling plan often never gets enough time to matter.',
        ],
      },
      {
        heading: 'Draft Priorities That Keep Defect Stable',
        points: [
          'Stabilize the first loop before anything else by favoring cards that give immediate orb value or immediate tempo.',
          'Choose one orb identity early enough that the deck stops pulling in unrelated payoffs with no support.',
          'Scale with Focus timing only after the list already has enough floor to cash those slower turns in.',
        ],
      },
      {
        heading: 'When to Stop Greeding on Scaling',
        points: [
          'If your Defect hands keep waiting for turn three to become playable, you are probably taking scaling too early.',
          'A lot of early Defect losses come from overrating cards that look amazing later but do little for hallway and elite tempo now.',
          'When in doubt, take the card that makes the next combat smoother before the card that only improves a solved fight.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can Defect force late-game cards early?',
        answer: 'Usually no. Fix consistency and orb tempo first, then add greedier scaling once the deck stops failing ordinary early fights.',
      },
      {
        question: 'What is the safest early Defect card profile?',
        answer: 'Cards that combine immediate tempo with orb value tend to stabilize runs fastest because they help both this turn and the next loop.',
      },
      {
        question: 'How do I know a Defect run is scaling too greedily?',
        answer: 'If your hands keep promising future power while losing current tempo, you are probably drafting too much payoff before the loop is stable.',
      },
    ],
    relatedLinks: [
      { href: '/cards/ball_lightning', label: 'Start with Ball Lightning when you need a safer orb-tempo baseline' },
      { href: '/guides/card-upgrade-priority', label: 'Use upgrade order to fix Defect tempo before adding greedier scaling' },
      { href: '/cards/biased_cognition', label: 'Only lean on Biased Cognition once Defect burst windows are already real' },
    ],
  },
  {
    slug: 'how-to-evaluate-opening-hand',
    title: 'How to Evaluate Your Opening Hand in Slay the Spire 2: A Fast Turn-1 Checklist for Weak Starts and Safer Lines',
    description: 'Use this fast Slay the Spire 2 opening-hand checklist to judge weak starts, avoid trap turn-1 lines, and preserve cleaner outs for turn 2.',
    readTime: '5 min',
    updatedAt: '2026-04-10',
    primaryKeyword: 'slay the spire 2 opening hand',
    sections: [
      {
        heading: 'The Fast Turn-1 Checklist',
        points: [
          'Check lethal risk first so you do not talk yourself into a clever line that loses to the obvious damage pattern.',
          'Pick one line for this hand instead of pretending every resource can do two jobs at once.',
          'Preserve next-turn outs whenever possible, because many bad openings become recoverable if turn two is still live.',
        ],
      },
      {
        heading: 'What a Trap Hand Usually Looks Like',
        points: [
          'A trap hand spends energy but does not improve immediate survival, damage threshold, or next-turn redraw quality.',
          'Another common trap is spending key utility now even though holding it creates a cleaner two-turn sequence.',
          'If your line only looks good when the next draw is perfect, the hand is usually weaker than it feels.',
        ],
      },
      {
        heading: 'How to Recover From Weak Starts',
        points: [
          'Weak starts become less dangerous when you identify the one card or line that keeps the next turn playable.',
          'This usually means treating turn one as setup for a survivable combat cycle, not as a forced all-in tempo turn.',
          'The goal is not to maximize this hand. It is to stop this hand from collapsing the whole fight.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I always spend all energy on turn 1?',
        answer: 'No. Sometimes the best turn-one play is the line that preserves a key block, retain, or setup piece for a much cleaner turn two.',
      },
      {
        question: 'How do I tell if my opening hand is a trap?',
        answer: 'If the line spends resources without improving survival, damage threshold, or next-turn outs, it is usually a trap sequence even if it looks active.',
      },
      {
        question: 'What should I optimize first in a weak opening hand?',
        answer: 'Optimize the next two turns, not just the current one. A weaker-looking turn-one line is often correct if it keeps the fight recoverable.',
      },
    ],
    relatedLinks: [
      { href: '/guides/retain-mechanic-explained', label: 'Use Retain rules when a weak hand might be worth carrying forward' },
      { href: '/guides/card-upgrade-priority', label: 'Spot the upgrades that reduce weak opening hands instead of boosting dream turns' },
      { href: '/guides/common-beginner-mistakes', label: 'See the early-run mistakes that start with bad turn-1 decisions' },
    ],
  },
  {
    slug: 'common-beginner-mistakes',
    title: 'Common Slay the Spire 2 Beginner Mistakes and How to Fix Them Fast',
    description:
      'Pinpoint the early-run blind spots that derail progression and apply quick fixes for route choices, build pacing, and resource usage in Slay the Spire 2.',
    readTime: '7 min',
    updatedAt: '2026-04-10',
    primaryKeyword: 'sts2 beginner mistakes',
    sections: [
      {
        heading: 'Stop expanding your route before the base is stabilized',
        points: [
          'Over-greeding elites before you can defend the next campfire turns your path into a liability instead of a buffer.',
          'Route greed without a consistent block/damage baseline leaves you scrambling for energy in Act 1 and Act 2.',
          'Treat a safe Act 1 patch as permission to take a new route. If you are still learning the enemies, avoid extra branching.',
        ],
      },
      {
        heading: 'Choose upgrades and relics that shore up the fundamentals',
        points: [
          'Chasing the flashy upgrade wastes energy; focus on the cards that keep you alive through the next two combats.',
          'Don’t upgrade a card that keeps failing in your opening hand—fix the hand first and the upgrades follow.',
          'New relics are exciting but useless unless they support your deck’s defense and damage balance.',
        ],
      },
      {
        heading: 'Read the deck’s signals before locking in a build',
        points: [
          'Weak opening hands often mean you need to lean on retain, block, or setup, not riskier combo pieces.',
          'Forcing a build when your draw doesn’t cooperate is the fastest way to smash your consistency.',
          'When the run tells you to slow roll (low energy, no draw), revert to simple lines until a stronger corridor opens up.',
        ],
      },
      {
        heading: 'A quick recovery checklist for each failure',
        points: [
          'Pause and ask: Did I skip the Act 1 route priority or upgrade stability review? If yes, fix that first.',
          'Use the opening hand checklist to see if you are committing too hard to a single card.',
          'Lean on retain and exhaust mechanics to tuck away a bad turn instead of gambling on perfect draws.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What counts as a beginner mistake in Slay the Spire 2?',
        answer:
          'The most common ones are over-greeding your route, forcing costly upgrades before basic defense is stable, and ignoring the hand signals that say "slow down."',
      },
      {
        question: 'Can I recover from a run that already has a few mistakes?',
        answer:
          'Yes, but only if you stop adding new mistakes: stabilize your Act 1 route, reprioritize your upgrades, and treat the next few turns like a clean-up wave.',
      },
      {
        question: 'Should I chase new relics every time I hit a campfire?',
        answer:
          'Not unless they reinforce the fundamentals: block, draw, or a reliable damage line. A new relic that does nothing for your stability is a false positive.',
      },
      {
        question: 'How do I fix the upgrade path when Act 1 keeps failing?',
        answer:
          'Use a priority framework that locks the most stabilizing cards first, and keep enough energy to defend the bosses you will face in the next act.',
      },
      {
        question: 'Is there a shortcut to avoid wasting time on weak openings?',
        answer:
          'Yes, apply the opening-hand checklist, cut down to one solid line, and support it with retain or exhaust tools; that stops the rookie mistakes mid-turn.',
      },
    ],
    relatedLinks: [
      { href: '/guides/card-upgrade-priority', label: 'Use upgrade priority to patch shaky runs before the mistakes stack' },
      { href: '/guides/how-to-evaluate-opening-hand', label: 'Apply the opening-hand checklist before committing to risky lines' },
      { href: '/guides/act1-route-priority', label: 'Rebalance Act 1 route risk when consistency is still low' },
      { href: '/guides/retain-mechanic-explained', label: 'Use retain decisions to keep a bad turn salvageable' },
      { href: '/guides/exhaust-mechanic-explained', label: 'Lean on exhaust synergies when you need to recover from a fast mistake' },
    ],
  },
];

export function getGuideBySlug(slug: string) {
  return GUIDE_ARTICLES.find((guide) => guide.slug === slug);
}
