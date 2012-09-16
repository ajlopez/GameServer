
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
