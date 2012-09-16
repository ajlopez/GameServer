
var gameserver;

if (typeof(gameserver) === 'undefined')
	gameserver = require('../../');

var simplegame = (function() {  
    function getGameDefinition() {
        var gdef = new gameserver.GameDefinition();
        var defworld = new gameserver.Element('default_world');
        defworld.width = 15;
        defworld.height = 15;
        defworld.cellwidth = 100;
        defworld.cellheight = 50;
        gdef.addElement(defworld);
        var greencell = new gameserver.Element('green_cell');
        gdef.addElement(greencell);
        return gdef;
    }
    
    return {
        getGameDefinition: getGameDefinition
    }
}());

if (typeof(window) === 'undefined') {
	module.exports = simplegame;
}

