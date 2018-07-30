(function($){
  // headBox상단 고정

  var headBox = $('.head_box_wrap');
  var beforeTop = headBox.offset().top;

  $(window).on('scroll', function(e){

    var nowTop = $(window).scrollTop();


    if(beforeTop <= nowTop) {
      headBox.css({position: 'fixed', top: '0', bottom: 'auto'});
    } else { headBox.removeAttr('style'); }

  });


})(jQuery);