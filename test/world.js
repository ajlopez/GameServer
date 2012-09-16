
var gameserver = require('../'),
    assert = require('assert');

// Create Default World
    
var game = new gameserver.Game();
var world = game.createWorld(10, 10);
assert.ok(world);

// Create Cell

var cell = world.createCell(2, 3, 'green_cell');

assert.ok(cell);
assert.equal(world, cell.world);
assert.equal(2, cell.x);
assert.equal(3, cell.y);
assert.equal('green_cell', cell.base);

var retrieved = world.getCell(2, 3);

assert.ok(retrieved);
assert.equal(cell, retrieved);