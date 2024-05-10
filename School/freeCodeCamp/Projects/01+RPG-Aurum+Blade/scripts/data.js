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