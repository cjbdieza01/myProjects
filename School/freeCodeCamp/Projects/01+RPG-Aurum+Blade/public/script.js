let xp = 0;
let gold = 2500;
let health = 200;
let atk = 10;
let def = 5;
let maxHealth = 2500;
let inventory = [];
let monsterHealth;
let loots;

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const text = document.querySelector("#text");
const levelText = document.querySelector("#levelText");
const xpText = document.querySelector("#xpText");
const goldText = document.querySelector("#goldText");
const atkText = document.querySelector("#atkText");
const defText = document.querySelector("#defText");
const healthText = document.querySelector("#healthText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const weaponLists = document.querySelector("#weapons");
const armorLists = document.querySelector("#armors");
const monsterField = document.querySelector("#monsterField");
const bag = document.querySelector("#bagText");
const combat = document.querySelector("#xcv");
combat.classList.add("hide");
bag.innerText = inventory;
healthText.innerText = health;
goldText.innerText = gold;
atkText.innerText = atk;

const stick = document.querySelector("#stick");
const knife = document.querySelector("#knife");
const steelSword = document.querySelector("#steelSword");
const silverSword = document.querySelector("#silverSword");
const goldenSword = document.querySelector("#golderSword");
const dragonSword = document.querySelector("#dragonSword");

const slime = document.querySelector("#slime");
const lizzard = document.querySelector("#lizzard");
const fangedBeast = document.querySelector("#fangedBeast");
const wolf = document.querySelector("#fangedBeast");
const threeHeadedSnake = document.querySelector("#threeHeadedSnake");
const robot = document.querySelector("robot");
const dragon = document.querySelector("#dragon");

const weapons = [
  {
    name: "Stick",
    atk: 50,
  },
  {
    name: "Knife",
    atk: 100,
  },
  {
    name: "Steel Sword",
    atk: 200,
  },
  {
    name: "Bronze Sword",
    atk: 300,
  },
  {
    name: "Silver Sword",
    atk: 500,
  },
  {
    name: "Golden Sword",
    atk: 700,
  },
  {
    name: "Dragon Sword",
    atk: 1000,
  },
];

const armor = [
  {
    name: "Wooden Armor",
    def: 50,
  },
  {
    name: "Steel Armor",
    def: 100,
  },
  {
    name: "Silver Armor",
    def: 300,
  },
  {
    name: "Bronze Armor",
    def: 500,
  },
  {
    name: "Golden Armor",
    def: 700,
  },
  {
    name: "Dragon Armor",
    def: 1000,
  },
];

const monsters = [
  {
    name: "Slime",
    power: 50,
    health: 100,
  },
  {
    name: "Lizzard",
    power: 100,
    health: 2000,
  },
  {
    name: "Fanged Beast",
    power: 300,
    health: 6000,
  },
  {
    name: "Wolf",
    power: 500,
    health: 10000,
  },
  {
    name: "Three Headed Snake",
    power: 1000,
    health: 20000,
  },
  {
    name: "Robot",
    power: 1500,
    health: 30000,
  },
  {
    name: "Dragon",
    power: 2000,
    health: 50000,
  },
];

const scene = [
  {
    name: "town",
    buttonText: [
      "Go to Store",
      "Go to Dungeon",
      "Slot Machine",
      "Back to Town",
    ],
    buttonFunc: [goStore, goDungeon, goMachine],
    text: "You are in the Town",
  },
  {
    name: "store",
    buttonText: ["Buy Health(50)", "Buy Weapon", "Buy Armor", "Back to Town"],
    buttonFunc: [buyHealth, buyWeapon, buyArmor, goTown],
    text: "What do you want to buy?",
  },
  {
    name: "dungeon",
    buttonText: ["Easy", "Medium", "Hard", "Back to town"],
    buttonFunc: [easyMonster, mediumMonster, hardMonster, goTown],
    text: "You are in the dungeon. Select Monster Level",
  },
  {
    name: "machine",
    buttonText: ["2", "8", "Go to Town"],
    buttonFunc: [pickTwo, pickEight, goTown],
    text: "This is Slot Machine, You can win randomly!",
  },
];

button1.onclick = goStore;
button2.onclick = goDungeon;
button3.onclick = goMachine;
button4.onclick = goTown;

stick.onclick = buyStick;
knife.onclick = buyKnife;

woodenArmor.onclick = buyWoodenArmor;

function update(location) {
  button4.style.display = "none";
  weaponLists.style.display = "none";
  armorLists.style.display = "none";
  monsterField.style.display = "none";
  button1.innerText = location.buttonText[0];
  button2.innerText = location.buttonText[1];
  button3.innerText = location.buttonText[2];
  button4.innerText = location.buttonText[3];
  button1.onclick = location.buttonFunc[0];
  button2.onclick = location.buttonFunc[1];
  button3.onclick = location.buttonFunc[2];
  text.innerText = location.text;
}

function updateStats() {
  goldText.innerText = gold;
  healthText.innerText = health;
  atkText.innerText = atk;
  defText.innerText = def;
}

// Destination
function goStore() {
  update(scene[1]);
  button4.style.display = "inline-block";
}

function goDungeon() {
  update(scene[2]);
  button4.style.display = "inline-block";
}

function goMachine() {
  console.log("Machine");
}

function goTown() {
  // armorLists.style.display = "none";
  button4.style.display = "none";
  update(scene[0]);
}

// Store menu
function buyHealth() {
  weaponLists.style.display = "none";
  text.style.display = "block";

  if (gold >= 50) {
    if (health < maxHealth) {
      const healthToBuy = Math.min(50, maxHealth - health);

      text.innerText = `You bought ${healthToBuy} Health`;
      health += healthToBuy;
      gold -= 50;
      updateStats();
    } else {
      text.innerText = "Health Full";
      healthText.innerText = health;
    }
  } else {
    weaponLists.style.display = "none";
    text.style.display = "block";
    text.innerText = "Not enough gold";
  }
}

function buyWeapon() {
  armorLists.style.display = "none";
  weaponLists.style.display = "block";
}

// Machine
function pickTwo() {
  console.log("Pick Two");
}

function pickEight() {
  console.log("Pick Eight");
}

function buyArmor() {
  weaponLists.style.display = "none";
  armorLists.style.display = "block";
}

// Weapon Store
function buyStick() {
  let stickPrice = 500;
  if (gold >= stickPrice) {
    let boughtWeapon = weapons[0];
    gold -= stickPrice;
    inventory.push(boughtWeapon);
    atk += boughtWeapon.atk;
    text.innerText = `You bought ${boughtWeapon.name}`;
    text.style.display = "block";
    bag.innerText += boughtWeapon.name + "\n";
    updateStats();
  } else {
    text.innerText = "You don't have enough gold";
  }
}

function buyKnife() {
  let knifePrice = 1000;
  if (gold >= knifePrice) {
    let boughtWeapon = weapons[1];
    gold -= knifePrice;
    inventory.push(boughtWeapon);
    atk += boughtWeapon.atk;
    text.style.display = "block";
    text.innerText = `You bought ${boughtWeapon.name}`;
    bag.innerText += boughtWeapon.name + "\n";
    updateStats();
  } else {
    text.innerText = "You don't have enough gold!";
  }
}

// Armor Store
function buyWoodenArmor() {
  let woodenArmorPrice = 1000;
  if (gold >= woodenArmorPrice) {
    let boughtArmor = armor[0];
    gold -= woodenArmorPrice;
    inventory.push(boughtArmor);
    def += boughtArmor.def;
    text.style.display = "block";
    text.innerText = `You bought ${boughtArmor.name}`;
    bag.innerText += boughtArmor.name + "\n";
    updateStats();
  } else {
    text.innerText = "You don't have enough gold";
  }
}

let monsterButton = monsterField.querySelectorAll(".monsterButton");
function removeMediumMonstersClass() {
  for (let x = 0; x < monsterButton.length; x++) {
    monsterButton[x].classList.remove("mediumMonsters");
  }
}

function removeEasyMonsterClass() {
  for (let x = 0; x < monsterButton.length; x++) {
    monsterButton[x].classList.remove("easyMonsters");
  }
}

function removeHardMonstersClass() {
  for (let x = 0; x < monsterButton.length; x++) {
    monsterButton[x].classList.remove("hardMonsters");
  }
}

// Selecting monster to fight
let monsterToFight;

function easyMonster() {
  monsterField.style.display = "block";
  removeHardMonstersClass();
  removeMediumMonstersClass();
  monsterButton.forEach(function (e) {
    e.classList.add("easyMonsters");
  });
  console.log(monsterButton);
  const monsterButtons = document.querySelectorAll(
    ".monsterButton.easyMonsters"
  );
  monsterButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      handleMonsterButtonClick(index);
    });
  });

  function handleMonsterButtonClick(index) {
    console.log(`Button at index ${index} clicked.`);
    combat.classList.remove("hide");
    const clickedMonster = monsters[index];
    monsterToFight = clickedMonster.power;
    text.innerText = `You are fighting ${clickedMonster.name}. Get ready!`;
  }
}

function mediumMonster() {
  monsterField.style.display = "block";
  removeEasyMonsterClass();
  removeHardMonstersClass();
  monsterButton.forEach(function (element) {
    element.classList.add("mediumMonsters");
  });
}

function hardMonster() {
  monsterField.style.display = "block";
  removeEasyMonsterClass();
  removeMediumMonstersClass();
  monsterButton.forEach(function (element) {
    element.classList.add("hardMonsters");
  });
}

function fighting() {
  if (health >= monsterToFight) {
  }
}
