// rwd_gnb_01.js

(function($){
  var winW = $(window).outerWidth();

  var gnbBtn = $('.gnb_btn');
  var gnb = $('#gnb');


  if(winW < 480) {
  gnbBtn.on('click', function(){
    gnb.stop().fadeToggle();
    $(this).children('button').toggleClass('active');
  });
  }

  else if(winW < 1366) {
  gnbBtn.on('click', function(){
    gnb.stop().slideToggle();
    $(this).children('button').toggleClass('active');
  });  
  }

  //  -----------------------


  $(window).on('resize', function(e){
    var nowW = $(window).outerWidth();

    if(winW !== nowW) {
      location.reload() 
    }
  });

})(jQuery);