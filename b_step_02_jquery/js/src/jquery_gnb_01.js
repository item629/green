//  jquery_gnb_01.js


(function($){

  // header에 마우스 올라가면 gnb 하위 메뉴가 나타나게 만들기
  // 1. addClass/removeClass

  var headBox = $('#headBox');

  // headBox
  // .on('mouseenter', function(){
  //   $(this).addClass('view');
  // })
  // .on('mouseleave', function(){
  //   $(this).removeClass('view');
  // });


  // 3. 배경 영역을 생성
  var nav = $('#gnb');
  nav.after('<div class="nav_bg"></div>');
  var navBg = $('.nav_bg');
  navBg.css({marginLeft: '-15px', position: 'absolute', top: '6.25rem' , width: 'inherit', height: '15rem',
             backgroundColor: 'rgba(0,255,100,0.5)', display: 'none'});

  // 2.slideUp/slideDown

  var _this = $(this);


  var slideShow = function(){
    headBox.find('ol').stop().slideDown();
    navBg.slideDown();
  }

  var slideHide = function(){
    headBox.find('ol').stop().slideUp();
    navBg.slideUp();
  }

  // var Tab = function(c) {
  //   c.find('ol').stop().slideDown();
  //   navBg.slideDown();
  // }

  // var Tag = function(k) {
  //   k.find('ol').stop().slideUp();
  //   navBg.slideUp();
  // }

  headBox.find('ol').hide();

  headBox
  .on('mouseenter', function(){
    slideShow();
    // $(this).find('ol').stop().slideDown();
    // navBg.slideDown();
  })
  .on('mouseleave', function(){
    slideHide();
    // $(this).find('ol').stop().slideUp();
    // navBg.slideUp();
  });

  var gnb = $('#gnb');
  var gnbUlA = gnb.children('ul').children('li').children('a');
  var gnbOlLastA = gnb.find('ol').find('li').eq(-1).find('a');


  gnbUlA
  .on('focus', function(){
    slideShow();
    // headBox.find('ol').stop().slideDown();
    // navBg.slideDown();
  });

  gnbOlLastA
  .on('blur', function(){
    slideHide();
    // headBox.find('ol').stop().slideUp();
    // navBg.slideUp();
  });  


})(jQuery);