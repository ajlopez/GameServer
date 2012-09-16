
var gameserver = (function() {    
    function Game() {
        this.worlds = {};
    }
    
    Game.prototype.createWorld = function(width, height, name) {
        name = name || 'default';
            
        var world = new World(width, height, name);
        this.worlds[name] = world;
        
        return world;
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
    
    function GameDefinition() {
    }
    
    function Element(name) {
        this.name = name;
    }
    
    return {
        Game: Game,
        GameDefinition: GameDefinition,
        Element: Element
    }
}());

if (typeof(window) === 'undefined') {
	module.exports = gameserver;
}

