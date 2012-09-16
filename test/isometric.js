
var isometric = require('../lib/isometric.js'),
    assert = require('assert');
    
// Get Isometric World

var world = new isometric.World(100, 50);
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

