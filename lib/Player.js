const Potion = require('../lib/Potion');

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];

    // returns an object with various player properties
    Player.prototype.getStats = function () {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };

    // reduces player's health when damaged
    Player.prototype.reduceHealth = function (health) {
        this.health -= health;

        if (this.health < 0) {
            this.health = 0;
        }
    };

    // returns the inventory array or false if empty
    Player.prototype.getInventory = function () {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    };

    // returns a string displaying a quick sentence about the player's health remaining
    Player.prototype.getHealth = function () {
        return `${this.name}'s health is now ${this.health}!`;
    };

    // checks if the player has 0 Health
    Player.prototype.isAlive = function () {
        if (this.health === 0) {
            return false;
        }

        return true;
    };
};

module.exports = Player;