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

const challenges = [];

const inspirations = [];

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
