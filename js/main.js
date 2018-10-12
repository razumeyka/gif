$(document).ready(function(){
    
    function moveicons() {
        var elem = $('.gif');
        var w = elem.width(); 
        elem.css('height',w*2+'px');
        var h = elem.height();
        elem.mouseover(function(){  
            var i = 0;
            var step = 300;
            setInterval(function() {
                i++;
                step = 300 * i;
                elem.css('background-position-y', step + 12 + 'px');
            }, 500);
        });
        elem.mouseout(function(){ 
            clearInterval();
        });
    };
    
});