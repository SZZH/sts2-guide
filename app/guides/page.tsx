import { Metadata } from 'next';
import Link from 'next/link';
import { CHARACTERS } from '@/shared/gameData';

export const metadata: Metadata = {
  title: 'Build Guides | StS2 Guide',
  description: 'Expert deck building guides for all Slay the Spire 2 characters. Learn winning strategies, card synergies, and optimal builds for Ironclad, Silent, Necrobinder, and The Regent.',
  openGraph: {
    title: 'Build Guides | StS2 Guide',
    description: 'Expert deck building guides for all Slay the Spire 2 characters with winning strategies and card synergies.',
  },
};

interface Build {
  name: string;
  character: string;
  difficulty: '⭐' | '⭐⭐' | '⭐⭐⭐';
  strength: '⭐⭐⭐' | '⭐⭐⭐⭐' | '⭐⭐⭐⭐⭐';
  description: string;
  coreIdea: string;
  keyCards: string[];
  recommendedRelics: string[];
  strengths: string[];
  weaknesses: string[];
  tips: string[];
}

const BUILDS: Build[] = [
  // Ironclad Builds
  {
    name: 'Strength Scaling',
    character: 'ironclad',
    difficulty: '⭐⭐',
    strength: '⭐⭐⭐⭐⭐',
    description: 'Stack Strength to astronomical levels and crush enemies with overwhelming damage.',
    coreIdea: 'Build Strength early through cards like Aggression and Hellraiser, then leverage that Strength with multi-hit attacks and self-damage cards for explosive turns.',
    keyCards: ['Aggression', 'Hellraiser', 'Limit Break', 'Inflame', 'Spot Weakness', 'Heavy Blade'],
    recommendedRelics: ['Vajra', 'Girya', 'Chemical X', 'Pen Nib'],
    strengths: ['Incredible late-game scaling', 'Simple to execute', 'Crushes bosses', 'Consistent damage output'],
    weaknesses: ['Weak early game', 'Vulnerable to artifact removal', 'Requires time to set up', 'Struggles against fast enemies'],
    tips: [
      'Prioritize Strength gain in Act 1 to snowball into Acts 2 and 3',
      'Look for Limit Break to double your Strength stacks',
      'Pair with Exhaust synergies to thin your deck',
      'Self-damage cards like Hellraiser provide excellent value with high Strength',
    ],
  },
  {
    name: 'Exhaust Synergy',
    character: 'ironclad',
    difficulty: '⭐⭐⭐',
    strength: '⭐⭐⭐⭐',
    description: 'Use Exhaust mechanics to thin your deck while triggering powerful synergies.',
    coreIdea: 'Build around cards that benefit from Exhausting, using Feel No Pain for block and Dead Branch for card generation. Create a lean, powerful deck that cycles quickly.',
    keyCards: ['Feel No Pain', 'Dark Embrace', 'Burning Pact', 'Fiend Fire', 'Corruption', 'Second Wind'],
    recommendedRelics: ['Dead Branch', 'Charon\'s Ashes', 'Strange Spoon', 'Tough Bandages'],
    strengths: ['Excellent deck cycling', 'Strong defensive capabilities', 'Scales well into late game', 'Flexible strategy'],
    weaknesses: ['Relic dependent (Dead Branch)', 'Complex to pilot', 'Can brick without setup', 'Vulnerable to status effects'],
    tips: [
      'Dead Branch transforms this build from good to exceptional',
      'Corruption is the ultimate payoff card if you can survive without Defends',
      'Balance Exhaust cards with sustainable damage sources',
      'Dark Embrace provides crucial card draw to maintain tempo',
    ],
  },
  {
    name: 'Barricade Tank',
    character: 'ironclad',
    difficulty: '⭐⭐',
    strength: '⭐⭐⭐⭐',
    description: 'Stack massive amounts of Block and never lose it, becoming an unstoppable fortress.',
    coreIdea: 'Use Barricade to retain Block between turns, then stack it infinitely with Entrench and Body Slam for both defense and offense.',
    keyCards: ['Barricade', 'Entrench', 'Body Slam', 'Ghostly Armor', 'Blood Wall', 'Impervious'],
    recommendedRelics: ['Calipers', 'Runic Pyramid', 'Frozen Egg', 'Anchor'],
    strengths: ['Nearly invincible once set up', 'Unique playstyle', 'Crushes multi-turn fights', 'Block IS your damage'],
    weaknesses: ['Very slow to set up', 'Vulnerable before Barricade', 'Weak to artifact removal', 'Struggles in Act 1'],
    tips: [
      'Prioritize finding Barricade early - the build doesn\'t work without it',
      'Calipers relic makes you nearly unkillable',
      'Body Slam becomes your primary damage source',
      'Self-damage cards are risky but provide excellent Block generation',
    ],
  },

  // Silent Builds
  {
    name: 'Sly Discard',
    character: 'silent',
    difficulty: '⭐⭐⭐',
    strength: '⭐⭐⭐⭐⭐',
    description: 'Master the new Sly mechanic to play multiple cards per turn through strategic discarding.',
    coreIdea: 'Use Master Planner to grant Sly to powerful cards, then discard them with Calculated Gamble or Acrobatics to play them for free. Chain multiple Sly cards in a single turn for explosive combos.',
    keyCards: ['Master Planner', 'Flick Flack', 'Reflex', 'Calculated Gamble', 'Acrobatics', 'Prepared'],
    recommendedRelics: ['Tough Bandages', 'Gambling Chip', 'Tingsha', 'Runic Pyramid'],
    strengths: ['Highest combo potential', 'Incredible card advantage', 'Flexible and adaptive', 'Unique to StS2'],
    weaknesses: ['Very complex to pilot', 'Requires specific cards', 'Can brick without setup', 'Difficult for beginners'],
    tips: [
      'Master Planner is the core enabler - prioritize finding it',
      'Reflex is a free draw engine when combined with discard effects',
      'Plan your discards carefully to maximize Sly triggers',
      'Tough Bandages provides free damage on every discard',
    ],
  },
  {
    name: 'Poison Stack',
    character: 'silent',
    difficulty: '⭐⭐',
    strength: '⭐⭐⭐⭐',
    description: 'Apply massive Poison stacks and watch enemies melt over time.',
    coreIdea: 'Focus on Poison application cards early, then scale with Catalyst to multiply Poison stacks. Use defensive cards to survive while Poison does the work.',
    keyCards: ['Deadly Poison', 'Noxious Fumes', 'Catalyst', 'Bouncing Flask', 'Corpse Explosion', 'Envenom'],
    recommendedRelics: ['Snecko Skull', 'Toxic Egg', 'Kunai', 'Ornamental Fan'],
    strengths: ['Excellent boss killer', 'Scales infinitely', 'Energy efficient', 'Consistent strategy'],
    weaknesses: ['Slow against fast enemies', 'Weak in Act 1', 'Struggles with artifact', 'Requires defensive support'],
    tips: [
      'Catalyst is the key payoff - double your Poison for instant value',
      'Noxious Fumes provides passive Poison every turn',
      'Corpse Explosion clears multi-enemy fights efficiently',
      'Balance Poison application with defensive cards to survive',
    ],
  },
  {
    name: 'Shiv Spam',
    character: 'silent',
    difficulty: '⭐⭐',
    strength: '⭐⭐⭐⭐',
    description: 'Generate endless 0-cost Shivs and overwhelm enemies with sheer volume.',
    coreIdea: 'Use Blade Dance and Cloak and Dagger to flood your hand with Shivs, then boost their damage with Accuracy and After Image. Trigger relics and powers with every Shiv played.',
    keyCards: ['Blade Dance', 'Cloak and Dagger', 'Accuracy', 'After Image', 'Infinite Blades', 'Storm of Steel'],
    recommendedRelics: ['Kunai', 'Shuriken', 'Ornamental Fan', 'Tingsha', 'Ninja Scroll'],
    strengths: ['Explosive burst turns', 'Excellent relic synergies', 'Fun to pilot', 'Strong defensive scaling'],
    weaknesses: ['Hand size limitations', 'Relic dependent', 'Weak without setup', 'Vulnerable to Time Eater'],
    tips: [
      'Kunai and Shuriken are game-changing relics for this build',
      'After Image provides scaling Block with every Shiv',
      'Accuracy is crucial - +4 damage per Shiv adds up fast',
      'Storm of Steel can generate massive Shiv counts in one turn',
    ],
  },

  // Necrobinder Builds
  {
    name: 'Doom Control',
    character: 'necrobinder',
    difficulty: '⭐⭐',
    strength: '⭐⭐⭐⭐⭐',
    description: 'Stack Doom on enemies to punish their attacks and control the battlefield.',
    coreIdea: 'Apply Doom stacks to enemies before they attack, causing them to take massive damage when they try to hit you. Use Osty as a defensive wall while Doom does the work.',
    keyCards: ['Blight Strike', 'Deathbringer', 'Oblivion', 'Scourge', 'Doom Cascade', 'Inevitable End'],
    recommendedRelics: ['Doom Hourglass', 'Runic Pyramid', 'Frozen Eye', 'Sundial'],
    strengths: ['Punishes aggressive enemies', 'Excellent scaling', 'Strong defensive synergy', 'Unique mechanic'],
    weaknesses: ['Weak against defensive enemies', 'Requires setup time', 'Doom Hourglass dependent', 'Complex timing'],
    tips: [
      'Doom Hourglass is the ultimate payoff relic - gain energy when Doom triggers',
      'Stack Doom before enemies attack for maximum value',
      'Use Osty to absorb hits while Doom accumulates',
      'Doom Cascade can spread Doom to all enemies',
    ],
  },
  {
    name: 'Osty Tank',
    character: 'necrobinder',
    difficulty: '⭐',
    strength: '⭐⭐⭐⭐',
    description: 'Use Osty as an invincible shield while you set up your win condition.',
    coreIdea: 'Invest heavily in Osty\'s HP and damage output, using Bodyguard and Pull Aggro to redirect all damage to Osty. Heal Osty between fights and use it as your primary defensive tool.',
    keyCards: ['Bodyguard', 'Pull Aggro', 'Empower', 'Plague Carrier', 'Bone Armor', 'Skeletal Reinforcement'],
    recommendedRelics: ['Osty\'s Binding', 'Anchor', 'Torii', 'Tungsten Rod'],
    strengths: ['Beginner friendly', 'Consistent defense', 'Osty scales well', 'Forgiving gameplay'],
    weaknesses: ['Over-reliant on Osty', 'Weak if Osty dies', 'Limited scaling', 'Predictable'],
    tips: [
      'Always protect Osty - it\'s your primary defensive tool',
      'Empower makes Osty hit harder and tank better',
      'Bodyguard redirects all damage to Osty for one turn',
      'Heal Osty at campfires to maintain your defense',
    ],
  },
  {
    name: 'Soul Engine',
    character: 'necrobinder',
    difficulty: '⭐⭐⭐',
    strength: '⭐⭐⭐⭐',
    description: 'Generate endless Soul cards for massive card draw and energy advantage.',
    coreIdea: 'Use Carve Ghost and Grave Warden to generate Soul cards, then use them to draw through your deck and play long combo turns. Combine with Severance for energy generation.',
    keyCards: ['Carve Ghost', 'Grave Warden', 'Severance', 'Friendship', 'Soul Harvest', 'Spectral Chains'],
    recommendedRelics: ['Runic Pyramid', 'Bag of Preparation', 'Lantern', 'Ice Cream'],
    strengths: ['Incredible card draw', 'Long combo turns', 'Flexible strategy', 'High skill ceiling'],
    weaknesses: ['Complex to pilot', 'Energy hungry', 'Can brick', 'Requires specific cards'],
    tips: [
      'Souls provide +2 card draw each - use them to cycle your deck',
      'Severance converts Souls into energy for explosive turns',
      'Runic Pyramid lets you hoard Souls for a massive turn',
      'Balance Soul generation with actual win conditions',
    ],
  },

  // Regent Builds
  {
    name: 'Stars Accumulation',
    character: 'regent',
    difficulty: '⭐⭐⭐',
    strength: '⭐⭐⭐⭐⭐',
    description: 'Hoard Stars across multiple turns, then unleash devastating cosmic abilities.',
    coreIdea: 'Use Hidden Cache and Starlight to accumulate Stars without spending them. Save up 20+ Stars, then spend them all at once on Falling Stars or Celestial Barrage for massive burst damage.',
    keyCards: ['Hidden Cache', 'Starlight', 'Falling Stars', 'Celestial Barrage', 'Cosmic Alignment', 'Star Storm'],
    recommendedRelics: ['Stellar Compass', 'Ice Cream', 'Runic Pyramid', 'Bottled Stars'],
    strengths: ['Massive burst potential', 'Flexible timing', 'Scales infinitely', 'Unique resource system'],
    weaknesses: ['Weak early game', 'Requires patience', 'Vulnerable before payoff', 'Complex planning'],
    tips: [
      'Stars don\'t reset between turns - save them for critical moments',
      'Stellar Compass gives you 3 Stars every combat',
      'Ice Cream preserves unused energy for even bigger turns',
      'Plan 2-3 turns ahead to maximize Star efficiency',
    ],
  },
  {
    name: 'Forge Artifacts',
    character: 'regent',
    difficulty: '⭐⭐',
    strength: '⭐⭐⭐⭐',
    description: 'Create permanent artifacts that snowball into overwhelming advantage.',
    coreIdea: 'Use Forge cards to create Sovereign Blade and other artifacts early. Each Forge makes your blade stronger, creating a permanent scaling damage source that retains between turns.',
    keyCards: ['Forge', 'Sovereign Blade', 'Reforge', 'Master Smith', 'Tempered Steel', 'Blade Dance'],
    recommendedRelics: ['Runic Pyramid', 'Pen Nib', 'Kunai', 'Shuriken'],
    strengths: ['Permanent scaling', 'Retain synergies', 'Simple execution', 'Strong late game'],
    weaknesses: ['Slow to set up', 'Weak Act 1', 'Requires specific cards', 'Vulnerable to artifact removal'],
    tips: [
      'Forge early and often - each Forge adds permanent damage',
      'Sovereign Blade Retains, so you can save it for bosses',
      'Runic Pyramid lets you hold your blade indefinitely',
      'Combine with Strength gain for even more damage',
    ],
  },
  {
    name: 'Minion Swarm',
    character: 'regent',
    difficulty: '⭐⭐',
    strength: '⭐⭐⭐⭐',
    description: 'Summon an army of celestial minions to fight alongside you.',
    coreIdea: 'Use Summon Minion and Celestial Army to create temporary allies that attack and block for you. Unlike Necrobinder\'s Osty, Regent\'s minions are disposable but powerful.',
    keyCards: ['Summon Minion', 'Celestial Army', 'Minion Empowerment', 'Royal Guard', 'Astral Projection', 'Legion'],
    recommendedRelics: ['Champion Belt', 'Girya', 'Vajra', 'Chemical X'],
    strengths: ['Strong multi-enemy fights', 'Good defensive scaling', 'Flexible strategy', 'Fun to pilot'],
    weaknesses: ['Minions are temporary', 'Weak single-target', 'Energy hungry', 'Requires setup'],
    tips: [
      'Minions attack automatically - use them for passive damage',
      'Celestial Army summons multiple minions at once',
      'Minion Empowerment makes your minions hit harder',
      'Use minions to tank hits while you set up your win condition',
    ],
  },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(249,115,22,0.1),transparent_50%)]" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-purple-400 bg-clip-text text-transparent">
              Build Guides
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert strategies for every character. Learn proven builds, card synergies, and winning tactics to conquer the Spire.
            </p>
          </div>
        </div>
      </section>

      {/* Builds by Character */}
      {CHARACTERS.map((character) => {
        const characterBuilds = BUILDS.filter(b => b.character === character.slug);
        
        return (
          <section key={character.slug} className="py-12 px-4">
            <div className="container">
              <div className="mb-8">
                <Link
                  href={`/characters/${character.slug}`}
                  className="inline-flex items-center gap-3 group mb-4"
                >
                  <h2 className="text-3xl font-bold group-hover:text-orange-400 transition-colors">
                    {character.name}
                  </h2>
                  <span className="text-sm text-muted-foreground">→ View Character</span>
                </Link>
                <p className="text-muted-foreground">{character.description}</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {characterBuilds.map((build) => (
                  <div
                    key={build.name}
                    className="group bg-card border border-border rounded-lg p-6 hover:border-orange-500/50 transition-all duration-300"
                  >
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
                        {build.name}
                      </h3>
                      <div className="flex gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Difficulty: </span>
                          <span>{build.difficulty}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Strength: </span>
                          <span>{build.strength}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">{build.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-orange-400 mb-2">Core Idea</h4>
                        <p className="text-sm text-muted-foreground">{build.coreIdea}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-orange-400 mb-2">Key Cards</h4>
                        <div className="flex flex-wrap gap-1">
                          {build.keyCards.map((card) => (
                            <span
                              key={card}
                              className="text-xs px-2 py-1 bg-background border border-border rounded"
                            >
                              {card}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-orange-400 mb-2">Recommended Relics</h4>
                        <div className="flex flex-wrap gap-1">
                          {build.recommendedRelics.map((relic) => (
                            <span
                              key={relic}
                              className="text-xs px-2 py-1 bg-purple-500/10 border border-purple-500/30 rounded"
                            >
                              {relic}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-green-400 mb-2">Strengths</h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {build.strengths.map((strength, i) => (
                            <li key={i}>• {strength}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-red-400 mb-2">Weaknesses</h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {build.weaknesses.map((weakness, i) => (
                            <li key={i}>• {weakness}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-blue-400 mb-2">Tips</h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {build.tips.map((tip, i) => (
                            <li key={i}>• {tip}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-purple-500/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Climb the Spire?</h2>
            <p className="text-muted-foreground mb-8">
              These builds are starting points - experiment, adapt, and create your own strategies. The best build is the one that works for your playstyle.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/characters"
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
              >
                View Characters
              </Link>
              <Link
                href="/mechanics"
                className="px-6 py-3 bg-card border border-border hover:border-orange-400 font-semibold rounded-lg transition-colors"
              >
                Learn Mechanics
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
