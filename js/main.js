$(document).ready(function(){    
    function moveicons() {
        var elem = $('.gif');
        var w = elem.width(); 
        elem.css('height',w*2+'px');
        var h = elem.height();
        elem.mouseover(function(){  
            var i = 0;
            var step = 300;
            setTimeout (function() {
                i++;
                step = 300 * i;
                elem.css('background-position','-10px'+step+12+'px');
            }, 200);
        });
        elem.mouseout(function(){ 
            clearTimeout();
        });
    };    
});