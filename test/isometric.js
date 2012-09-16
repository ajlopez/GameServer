
var isometric = require('../lib/isometric.js'),
    assert = require('assert');
    
// Get Isometric World

var world = new isometric.World(15, 15, 100, 50);
assert.ok(world);

// Get Cell 0,0 Center Position

var position = world.getCellCenterPosition(0, 0);
assert.ok(position);
assert.equal(0, position.x);
assert.equal(25, position.y);

// Get Cell 1,0 Center Position

var position = world.getCellCenterPosition(1, 0);
assert.ok(position);
assert.equal(50, position.x);
assert.equal(50, position.y);

// Get Cell 0,1 Center Position

var position = world.getCellCenterPosition(0, 1);
assert.ok(position);
assert.equal(-50, position.x);
assert.equal(50, position.y);

// Get Ordered Cells

var cells = world.getOrderedCellPositions();

assert.ok(cells);
assert.ok(Array.isArray(cells));
assert.equal(15 * 15, cells.length);

assert.equal(0, cells[0].x);
assert.equal(0, cells[0].y);
assert.equal(0, cells[1].x);
assert.equal(1, cells[1].y);
assert.equal(1, cells[2].x);
assert.equal(0, cells[2].y);

// Get Cell Coordinates from Position

var position = world.getCellCoordinates(0, 25);
assert.ok(position);
assert.equal(0, position.x);
assert.equal(0, position.y);

var position = world.getCellCoordinates(0, 10);
assert.ok(position);
assert.equal(0, position.x);
assert.equal(0, position.y);

var position = world.getCellCoordinates(-5, 5);
assert.ok(position);
assert.equal(0, position.x);
assert.equal(0, position.y);

var position = world.getCellCoordinates(5, 5);
assert.ok(position);
assert.equal(0, position.x);
assert.equal(0, position.y);

var position = world.getCellCoordinates(0, -5);
assert.ok(position);
assert.equal(-1, position.x);
assert.equal(-1, position.y);

var position = world.getCellCoordinates(-50, 55);
assert.ok(position);
assert.equal(0, position.x);
assert.equal(1, position.y);

