
var gameserver = (function() {    
    function Game(gdef) {
        this.gamedefinition = gdef;
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
        this.cells = new Array(width);
        
        for (var k = 0; k < width; k++)
            this.cells[k] = new Array(height);
    }
    
    World.prototype.createCell = function(x, y, base) {
        var cell = new Cell(this, x, y, base);
        this.cells[x][y] = cell;
        return cell;
    }
    
    World.prototype.getCell = function(x, y) {
        if (!this.cells[x])
            return null;
            
        return this.cells[x][y];
    }
    
    function Cell(world, x, y, base) {
        this.world = world;
        this.x = x;
        this.y = y;
        this.base = base;
    }
    
    function GameDefinition() {
        this.elements = {}
    }
    
    GameDefinition.prototype.addElement = function(element) {
        this.elements[element.name] = element;
    }
    
    GameDefinition.prototype.getElement = function(name) {
        return this.elements[name];
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

