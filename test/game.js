
var gameserver = require('../'),
    assert = require('assert');

// Create Game
    
var game = new gameserver.Game();

assert.ok(game);

// Create Default World

var world = game.createWorld(10, 10);
assert.ok(world);

assert.equal('default', world.name);
assert.equal(10, world.width);
assert.equal(10, world.height);

// Get Default World

var world2 = game.getWorld();
assert.equal(world, world2);

// Get Default World by Name

var defaultworld = game.getWorld('default');
assert.equal(world, defaultworld);

// Get Unknown World

var unknown = game.getWorld('unknown');
assert.equal(null, unknown);

// Create World with Name

var sea = game.createWorld(20, 20, 'sea');

assert.ok(sea);
assert.notEqual(world, sea);
assert.equal('sea', sea.name);
assert.equal(20, sea.width);
assert.equal(20, sea.height);

// Review the existing worlds

assert.equal(sea, game.getWorld('sea'));
assert.equal(world, game.getWorld());
assert.equal(world, game.getWorld('default'));

