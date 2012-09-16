
var isometric = (function() {
    function World(width, height, cellwidth, cellheight) {
        this.getCellCenterPosition = function(x, y) {
            var cellx = 0;           
            var celly = cellheight/2;
            
            cellx += cellwidth/2 * (x - y);
            celly += cellheight/2 * (y + x);
            
            return { x: cellx, y: celly };
        }
        
        this.getCellCoordinates = function(positionx, positiony) {
            var x = positionx / cellwidth + positiony / cellheight;
            var y = positiony / cellheight - positionx / cellwidth;
            
            return { x: Math.floor(x), y: Math.floor(y) }
        }
        
        this.getOrderedCellPositions = function() {
            var positions = [];
            
            for (var k = 0; k <= width + height - 2; k++)
                for (var j = k; j >= 0; j--) {
                    var x, y;
                    
                    y = j;
                    x = k - j;
                    
                    if (y >= height || x >= width)
                        continue;
                        
                    positions.push({x : x, y: y});
                 }            
            
            return positions;
        }
    }
    
	return {
        World: World
	}
}());

if (typeof(window) === 'undefined') {
	module.exports = isometric;
}
