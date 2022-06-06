const Player = require('../lib/Player');
const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');


// TEST 1: testing if the player object is created properly
test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});

// TEST 2: testing getStats() method
test("get player's stats as an object", () => {
    const player = new Player('Dave');
    
    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

// TEST 3: testing getInventory() method
test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.getInventory()).toEqual(expect.any(Array));

    player.inventory = [];
  
    expect(player.getInventory()).toEqual(false);
});

// TEST 4: testing getHealth() method
test("get player's health value", () => {
    const player = new Player('Dave');

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});

// TEST 5: testing isAlive() method
test("get player's health value", () => {
    const player = new Player('Dave');

    expect(player.isAlive()).toBeTruthy();
    
    player.health = 0;
    
    expect(player.isAlive()).toBeFalsy();
});

// TEST 6: testing reduceHealth() method
test("subtracts from player's health", () => {
    const player = new Player('Dave');
    const oldHealth = player.health;
  
    player.reduceHealth(5);
  
    expect(player.health).toBe(oldHealth - 5);
  
    player.reduceHealth(99999);
  
    expect(player.health).toBe(0);
});

// TEST 7: testing getAttackValue() method
test("gets player's attack value", () => {
    const player = new Player('Dave');
    player.strength = 10;
    
    expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});

// TEST 8: testing addPotion() method
test('adds a potion to the inventory', () => {
    const player = new Player('Dave');
    const oldCount = player.inventory.length;
  
    player.addPotion(new Potion());
  
    expect(player.inventory.length).toBeGreaterThan(oldCount);
});

// TEST 9: testing usePotion() method
test('uses a potion from inventory', () => {
    const player = new Player('Dave');
    player.inventory = [new Potion(), new Potion(), new Potion()];
    const oldCount = player.inventory.length;
  
    player.usePotion(1);
  
    expect(player.inventory.length).toBeLessThan(oldCount);
  });
