
var gameserver = require('../'),
    assert = require('assert');

// Create Game
    
var game = new gameserver.Game();

assert.ok(game);

// Create Default World

game.createWorld(10, 10);

// Get Default World

var world = game.getWorld();

assert.ok(world);
assert.equal('default', world.name);

// Get Default World by Name

var defaultworld = game.getWorld('default');
assert.equal(world, defaultworld);

// Get Unknown World

var unknown = game.getWorld('unknown');
assert.equal(null, unknown);
