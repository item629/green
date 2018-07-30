// jquery_indicator_03.js


(function($){


// 변수 선언
  var wrap        = $('#wrap');
  var adBan       = wrap.children('.adbanner');
  var headBox     = $('#headBox');
  var nav         = $('#gnb');



  var indiWrap    = adBan.children('.indicator_wrap');
  var indicator   = indiWrap.children('.indicator');
  var indiLi      = indicator.children('li');
  var slide       = indiWrap.children('.slide_btn');
  var slideBtn    = slide.children('button');
  var prevBtn     = slide.children('.prev_btn');
  var nextBtn     = slide.children('.next_btn');

  var banWrap     = adBan.children('.banner_wrap');
  var banner      = banWrap.children('.banner');
  var banLi       = banner.children('li');



  nav.after('<div class="nav_bg"></div>');
  var navBg       = $('.nav_bg');
  navBg.css({marginLeft: '-16px', position: 'absolute', top: '6.25rem' , width: 'inherit', height: '15rem',
             backgroundColor: 'rgba(85,85,85,0.5)', display: 'none'});

// 
  var slideShow = function(){
    headBox.find('ol').stop().slideDown();
    navBg.stop().slideDown();
  }

  var slideHide = function(){
    headBox.find('ol').stop().slideUp();
    navBg.stop().slideUp();
  }
// 

  // header에 마우스 올라가면 gnb 하위 메뉴가 나타나게 만들기

  headBox.find('ol').hide();

  headBox
  .on('mouseenter', function(){
    slideShow();
  })
  .on('mouseleave', function(){
    slideHide();
  });

  var gnb = $('#gnb');
  var gnbUlA = gnb.children('ul').children('li').children('a');
  var gnbOlLastA = gnb.find('ol').find('li').eq(-1).find('a');

  gnbUlA
  .on('focus', function(){
    slideShow();
  });

  gnbOlLastA
  .on('blur', function(){
    slideHide();
  }); 

  wrap.on('click', function(){
    slideHide();    
  });


// 
  var v           = 0;
  var timed       = 1000;
  var banLength   = banLi.length;
  var easing      = 'easeInOutBack';


//
  var Tab         = function(v){
    indiLi.eq(v).addClass('active');
    indiLi.eq(v).siblings('li').removeClass('active');
    banLi.eq(v).find('a').attr({tabIndex:0});
    banLi.eq(v).siblings('li').find('a').attr({tabIndex:-1}); 
    var i = v * -100 + '%';
    banner.stop().animate({marginLeft:i}, timed/*, easing*/);
  }
// 


  indiLi.on('click', function(e){
    e.preventDefault();

    var _this   = $(this)
    v           = $(this).index();
    // $(this).index(); 값은 var를 쓰지 않아야 함!
    // 상단에서 v = 0이라고 선언했음
    // $(this).index(); = 0 이 된다

    // console.log(v);

    Tab(v);

  });

  slideBtn.on('click', function(e){
    e.preventDefault();

    var _this = $(this)[0]

    if( _this === nextBtn[0] && v < banLength - 1 ){
      v += 1;
      // console.log('다음 보기');
    } else if( _this === prevBtn[0] && v > 0 ){
      // console.log('이전 보기');
      v -= 1;
    };

    Tab(v);

  });


// 아래에서 사용하려면 이렇게 사용해야한다
  // function Tab(v){
  //   indiLi.eq(v).addClass('active');
  //   indiLi.eq(v).siblings('li').removeClass('active');
  //   banLi.eq(v).find('a').attr({tabIndex:0});
  //   banLi.eq(v).siblings('li').find('a').attr({tabIndex:-1}); 
  //   var i = v * -100 + '%';
  //   banner.stop().animate({marginLeft:i}, timed);    
  // }

})(jQuery);