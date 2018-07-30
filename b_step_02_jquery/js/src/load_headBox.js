(function($){
        var headBox = $('#headBox');

        headBox.on('mouseenter', function(){
          headBox.stop().animate({backgroundColor: '#333'});
        });

        headBox.on('mouseleave', function(){
          headBox.stop().animate({backgroundColor: '#f06'});
        });
})(jQuery);