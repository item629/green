(function($){
  // headBox상단 고정

  var headBox = $('.head_box_wrap');
  var beforeTop = headBox.offset().top;

  $(window).on('scroll', function(e){

    var nowTop = $(window).scrollTop();


    if(beforeTop <= nowTop) {
      // headBox.css({position: 'fixed', top: '0', bottom: 'auto'});
      headBox.addClass('fixed');
    } else {
      // headBox.removeAttr('style');
      headBox.removeClass('fixed');
    }

  });

  // 하위 메뉴 숨겼다가 보이게 하기

  var headNav   = headBox.find('ul').children('li');
  var headOl    = headBox.find('ol');
  var olLink    = headOl.find('a');
  var headChild = headBox.children('#headBox');
  var headnavA  = headNav.find('a');
  var timed     = 500;
  var win       = $(window);
  var wh        = $(window).outerHeight();

  headOl.hide();

  headNav.on('mouseenter', function(e){
    // 스크롤의 위치를 확인해라

    var st = $(window).scrollTop();
    // console.log(wh, st);

    if(wh/2 > st) {
      headChild.addClass('top');
      headOl.addClass('top'); 
    } else {
      headChild.removeClass('top');
      headOl.removeClass('top'); 
    }

    headOl.stop().slideDown(timed);
    headChild.addClass('show');
  });

  headNav.on('mouseleave', function(e){
    headOl.stop().slideUp(timed);
    headChild.removeClass('show');
  });

  headnavA.on('focus', function(e){
    // headOl.stop().slideDown(timed);
    // headChild.addClass('show');

    headNav.trigger('mouseenter');


    // trigger 라는 기능은 방아쇠라는 의미로,
    // 미리 만들어진 이벤트 기능을 수행할 수 있도록 처리한다
  });

  olLink.eq(-1).on('blur', function(e){
    // headOl.stop().slideUp(timed);
    // headChild.removeClass('show');

    headNav.trigger('mouseleave');
  });


})(jQuery);