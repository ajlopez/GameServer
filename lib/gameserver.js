
var gameserver = (function() {
    function Game() {
    }
    
    return {
        Game: Game
    }
}());

if (typeof(window) === 'undefined') {
	module.exports = gameserver;
}

