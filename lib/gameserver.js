
var gameserver = (function() {    
    function Game() {
        this.worlds = {};
    }
    
    Game.prototype.createWorld = function(width, height, name) {
        name = name || 'default';
            
        this.worlds[name] = new World(width, height, name);
    }
    
    Game.prototype.getWorld = function(name) {
        name = name || 'default';
        
        return this.worlds[name];
    }
    
    function World(width, height, name) {
        this.name = name;
        this.width = width;
        this.height = height;
    }
    
    return {
        Game: Game
    }
}());

if (typeof(window) === 'undefined') {
	module.exports = gameserver;
}

