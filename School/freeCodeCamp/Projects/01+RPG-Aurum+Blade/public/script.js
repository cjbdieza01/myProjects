let xp = 0;
let gold = 1500;
let health = 100;
let atk = 10;
let def = 5;
let fighting;
let inventory = ["Wooden Stick"];
let monsterHealth;

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

const weapons = [
    {
        name: "Stick",
        atk: 5
    },
    {
        name: "Knife",
        atk: 10
    },
    {
        name: "Steel Sword",
        atk: 20
    },
    {
        name: "Bronze Sword",
        atk: 30
    },
    {
        name: "Silver Sword",
        atk: 50
    },
    {
        name: "Golden Sword",
        atk: 70
    },
    {
        name: "Dragon Sword",
        atk: 100
    }
];

const armor = [
    {
        name: "Wooden Armor",
        def: 5
    },
    {
        name: "Steel Armor",
        def: 10
    },
    {
        name: "Silver Armor",
        def: 30
    },
    {
        name: "Bronze Armor",
        def: 50
    },
    {
        name: "Golden Armor",
        def: 70
    },
    {
        name: "Dragon Armor",
        def: 100
    }
]

const monsters = [
    {
        name: "Slime",
        power: 5,
        health: 10
    },
    {
        name: "Lizzard",
        power: 10,
        health: 20
    },
    {
        name: "Fanged Beast",
        power: 30,
        health: 60
    },
    {
        name: "Wolf",
        power: 50,
        health: 100
    },
    {
        name: "Three Headed Snake",
        power: 100,
        health: 200
    },
    {
        name: "Robot",
        power: 150,
        health: 300
    },
    {
        name: "Dragon",
        power: 200,
        health: 500
    }
];

const scene = [
    {
        name: "town",
        buttonText: ["Go to Store", "Go to Dungeon", "Slot Machine", "Back to Town"],
        buttonFunc: [goStore, goDungeon, goMachine],
        text: "You are in the Town"
    },
    {
        name: "store",
        buttonText: ["Buy Health(50)", "Buy Weapon", "Buy Armor", "Back to Town"],
        buttonFunc: [buyHealth, buyWeapon, buyArmor, goTown],
        text: "What do you want to buy?"
    },
    {
        name: "dungeon",
        buttonText: ["Easy", "Medium", "Hard"]
    },
    {
        name: "machine",
        buttonText: ["2", "8", "Go to Town"],
        buttonFunc: [pickTwo, pickEight, goTown],
        text: "This is Slot Machine, You can win randomly!"
    }
];

button1.onclick = goStore;
button2.onclick = goDungeon;
button3.onclick = goMachine;
button4.onclick = goTown;

function update(location) {
    button4.style.display = "none";
    weaponLists.style.display = "none";
    button1.innerText = location.buttonText[0];
    button2.innerText = location.buttonText[1];
    button3.innerText = location.buttonText[2];
    button4.innerText = location.buttonText[3];
    button1.onclick = location.buttonFunc[0];
    button2.onclick = location.buttonFunc[1];
    button3.onclick = location.buttonFunc[2];
    text.innerText = location.text;
}

function goStore() {
    update(scene[1]);
    button4.style.display = "inline-block";

}

function goDungeon() {
    console.log("Dungeon");
}

function goMachine() {
    console.log("Machine");
}

function goTown() {
    update(scene[0]);
    button4.style.display = "none";
}

function buyHealth() {
    if (gold >= 50) {
        health += 50;
    gold -= 50;
    weaponLists.style.display = "none";
    text.style.display = "block";
    text.innerText = "You bought 50 Health";
    goldText.innerText = gold;
    healthText.innerText = health;
    } else {
        weaponLists.style.display = "none"
        text.style.display = "block";
        text.innerText = "Not enough gold";
    }
    
}

function buyWeapon() {
    text.style.display = "none";
    weaponLists.style.display = "block"

}

function buyArmor() {
    console.log("Buy Armor")
}

function pickTwo() {
    console.log("Pick Two")
}

function pickEight() {
    console.log("Pick Eight");
}

function buyKnife() {

}