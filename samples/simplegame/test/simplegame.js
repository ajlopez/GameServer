
var simplegame = require('../simplegame.js'),
    assert = require('assert');

// Get Game Definition
    
var gamedef = simplegame.getGameDefinition();

assert.ok(gamedef);

// Get Default World Definition

var defworld = gamedef.getElement('default_world');

assert.ok(defworld);
assert.equal('default_world', defworld.name);

assert.equal(15, defworld.width);
assert.equal(15, defworld.height);
assert.equal(100, defworld.cellwidth);
assert.equal(50, defworld.cellheight);

// Get Simple Cell Element

var greencell = gamedef.getElement('green_cell');

assert.ok(greencell);

// Create Game

var game = gamedef.createGame();

assert.ok(game);

// Get Default World

var world = game.getWorld();

assert.ok(world);
assert.equal(15, world.width);
assert.equal(15, world.height);

// Get Cell

var cell = world.getCell(2, 3);

assert.ok(cell);
assert.equal(2, cell.x);
assert.equal(3, cell.y);
assert.equal('green_cell', cell.base);


