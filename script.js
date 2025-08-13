// ===============================
// RPG Quest Inspirational Generator
// ===============================

// Pools of data
const heroes = [
  "Branna Willowstep (a resourceful herbalist with a knack for diplomacy)",
    "Thornel (Clayroot stoic builder who dreams of ancient architecture)",
    "Mira Sunveil (optimistic trader with a mysterious past)",
    "Eldon Farreach (cartographer obsessed with mapping the unknown)",
    "Kaelin Hearthsong (bard who records the tales of every villager)",
    "Tova Grainwhistle (miller turned adventurer after a strange dream)",
    "Rurik Stonehand (blacksmith who believes the caves hold magical ore)",
    "Sylvi Emberlane (firekeeper who communes with the spirits of the land)",
    "Venn Hollowstride (fearless spelunker with glowing tattoos)",
    "Nyra Deepgleam (cave-dwelling mystic who speaks in riddles)",
    "Jorik Mossmantle (exiled noble who found purpose underground)",
    "Lazra Echothorn (rogue who hears whispers from the walls)",
    "Fenrik Gloomroot (fungus farmer with uncanny knowledge of cave beasts)",
    "Iska Veilborn (orphan raised by subterranean creatures)",
    "Drenna Shardwake  (crystal hunter drawn to the cave’s pulsing light)",
    "Orren Blacktrail  (former surface guard turned cave protector)",
    ];

const challenges = [
    "A Storm-Damaged Granary – Branna Willowstep must rally villagers to salvage food before it spoils.",
    "Trade Caravan Delay – Mira Sunveil negotiates with impatient merchants while calming worried townsfolk.",
    "Strange Lights in the Sky – Eldon Farreach investigates celestial phenomena that disrupt sleep cycles.",
    "Festival of Forgotten Songs – Kaelin Hearthsong must recover lost verses from cave dwellers to complete the ritual.",
    "Sabotaged Tools – Thornel Clayroot uncovers a saboteur among the builders, risking the village’s expansion.",
    "A Child’s Disappearance – Tova Grainwhistle leads a search party into the woods, guided only by dreams.",
    "Ore Shortage – Rurik Stonehand must barter with cave miners for rare metals or risk halting production.",
    "Spirit Uprising – Sylvi Emberlane must appease elemental spirits angered by surface expansion.",
    "Echoing Voices – Venn Hollowstride follows mysterious echoes that lead to a hidden chamber… or a trap.",
    "Crystal Fever – Drenna Shardwake must cure a team member afflicted by a glowing crystal’s influence.",
    "Beast in the Vents – Fenrik Gloomroot tracks a cave beast disrupting airflow and threatening fungus crops.",
    "Cave Collapse – Jorik Mossmantle organizes a rescue after a tunnel collapses during an expedition.",
    "Ancient Puzzle Door – Lazra Echothorn deciphers a riddle that guards a forgotten vault.",
    "Subterranean Treaty – Nyra Deepgleam negotiates peace between rival cave factions.",
    "The Singing Pool – Iska Veilborn must resist the hypnotic pull of a magical underground lake.",
    "Shadow Stalker – Orren Blacktrail defends explorers from a creature that only attacks in complete darkness.",
];

const inspirations = [
    "A village is not built with stone, but with stories shared beneath the stars.",
    "Even the smallest lantern can guide a soul through the longest night.",
    "To plant a seed is to believe in tomorrow’s laughter.",
    "Courage is not the absence of fear—it’s the choice to build anyway.",
    "The wind may change, but the heart of the home remains.",
    "Kindness is the currency that never devalues in trade or time.",
    "A roof shelters the body; a tale shelters the spirit.",
    "The strongest walls are built from trust, not timber.",
    "Below the surface lies not danger, but the truth we buried to survive.",
    "Darkness reveals what daylight hides—your strength, your scars, your story.",
    "Every echo is a memory waiting to be heard.",
    "The deeper you go, the more you find yourself.",
    "Crystals may light the way, but it’s your choices that shape the path.",
    "In the silence of the deep, even a whisper becomes prophecy.",
    "The cave does not test your strength—it reflects it.",
    "To descend is not to fall, but to rise in understanding.",
];

// Random selection function
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Generate RPG quest prompt
function generateQuestQuote() {
  const hero = getRandomItem(heroes);
  const challenge = getRandomItem(challenges);
  const inspiration = getRandomItem(inspirations);

  return `${hero} ${challenge}. ${inspiration}`;
}

// Output a new quest each run
console.log(generateQuestQuote());
