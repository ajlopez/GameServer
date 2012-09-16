
var isometric = (function() {
    function World(cellwidth, cellheight) {
        this.getCellCenterPosition = function(x, y) {
            var cellx = 0;           
            var celly = cellheight/2;
            
            cellx += cellwidth/2 * (x - y);
            celly += cellheight/2 * (y + x);
            
            return { x: cellx, y: celly };
        }
    }
    
	return {
        World: World
	}
}());

if (typeof(window) === 'undefined') {
	module.exports = isometric;
}
