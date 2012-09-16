
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
        if (typeof(document) !== 'undefined')
            greencell.image = renderToCanvas(100, 50, function(context) { createCell(context, defworld.cellwidth, defworld.cellheight) });
        gdef.addElement(greencell);
        gdef.createGame = function() {
            var game = new gameserver.Game(gdef);
            var world = game.createWorld(defworld.width, defworld.height);
            world.cellwidth = defworld.cellwidth;
            world.cellheight = defworld.cellheight;
            for (var x = 0; x < defworld.width; x++)
                for (var y = 0; y < defworld.height; y++)
                    world.createCell(x, y, 'green_cell');
            
            return game;
        };
        return gdef;
    }

    function renderToCanvas(width, height, renderFunction) {
        var buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        renderFunction(buffer.getContext('2d'));
        return buffer;
    };

    function createCell(context, width, height)
    {
        var imagedata = context.getImageData(0, 0, width, height);
        var data = imagedata.data;
        
        for (var y = 0; y < height / 2; y++)
        {
            var t = Math.floor(width * y / height);
            for (var x = width / 2 - t; x < width / 2 + t; x++)
            {
                var k = (y * width + x) * 4;
                data[k + 1] = Math.floor(Math.random() * 128) + 127;
                data[k + 3] = 255;
                k = ((height - y -1) * width + x) * 4;
                data[k + 1] = Math.floor(Math.random() * 128) + 127;
                data[k + 3] = 255;
            }
        }
        
        context.putImageData(imagedata, 0, 0);
    }
    
    return {
        getGameDefinition: getGameDefinition
    }
}());

if (typeof(window) === 'undefined') {
	module.exports = simplegame;
}

