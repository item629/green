//  scroll_01.js

(function($){
  var sideMenu      = $('#sideMenu');
  var sideLi        = sideMenu.find('li');
  var scrollBox     = $('.scroll_menu');
  var timed         = 1000;
  $('html, body').animate({scrollTop:0}, timed/10);
  sideLi.eq(0).addClass('select');

  // sideLi를 클릭시 순서값을 파악해서 스크롤이 이동하게 한다
  sideLi.on('click', function(e){
    e.preventDefault();

    var i   = $(this).index();
    var ot  = scrollBox.eq(i).offset().top;

    sideLi.eq(i).addClass('select');
    sideLi.eq(i).siblings('li').removeClass('select');

    $('html, body').animate({scrollTop:ot}, timed)


  });


})(jQuery);