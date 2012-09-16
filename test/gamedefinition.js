
var gameserver = require('../'),
    assert = require('assert');

// Create Game Definition
    
var gamedef = new gameserver.GameDefinition();

assert.ok(gamedef);

// Create Element

var element = new gameserver.Element('house');

assert.ok(element);
assert.equal('house', element.name);

// Add Element

gamedef.addElement(element);

var retrieved = gamedef.getElement('house');

assert.equal(element, retrieved);

assert.ok(!gamedef.getElement('unknown'));

