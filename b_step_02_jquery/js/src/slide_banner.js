// slide_banner

(function($) {


// slide_btn 내부 버튼 요소를 변수
// indicator 선택자 변수로 처리
  var banner   = $('.banner');

  var slideBtn = $('.slide_btn');
  var prevBtn = slideBtn.children('.prev_btn');
  var nextBtn = slideBtn.children('.next_btn');
  var slideView = slideBtn.children('button');

  var bannerUl = $('.indicator');
  var banLi    = bannerUl.children('li');
  // banner_wrap 내부 div 선택자를 변수로 처리 
  var bannerWarp = $('.banner_wrap');
  var bannerIn = bannerWarp.children('div');

  // 순서를 만드는 변수를 생성(indicator, slide_btn의 기능에도 영향이 있다)
  var i = 0;

//----------------------------------------------------

// crtl_shift_{ or }
  // banLi 클릭하면, 
  banLi.click(function(e){
    e.preventDefault();
  // 선택되지 않은 요소에서는 클래스 이름을 제거
  banLi.removeClass('active');
  // #(this).siblings('li').removeClass('active');
  //해당 요소에 클래스 이름을 부여('active')
  $(this).addClass('active');

  // 선택된 요소의 순서값 파악
  // 광고 배너의 클래스 이름을 제거
  // 선택요소와 동일한 위치의 광고배너에 클래스 이름 부여

  // 1st ==============================
  // var i = $(this).index();
  // console.log(i); //검증:순서값 파악

  // bannerIn.removeClass('active')
  // bannerIn.eq(i).addClass('active')
  // ======================

  // 2nd ==============================
  // .banner_wrap을 css로 margin-left 값을 0 or -100% oe -200% 값으로 이동 처리
  // bannerWarp.css({'marginLeft' : '-100%'});
  // .banner_wrap 에서 cs의 margin-left 값을
  // indicator의 순서값 -100%만큼 곱한 값으로 처리
  i = $(this).index();
  var n = i * -100;
  var per = n + '%';
  // bannerWarp.css({marginLeft:per});
  bannerWarp.animate({marginLeft:per});

  // 순서값 i에 대한 내용으로 순서에 맞게 변경
  banLi.eq(i).addClass('active');
  banLi.eq(i).siblings('li').removeClass('active');
  });

  // 3nd ====================================
  // .slide_btn의 버튼 요소를 선택했을 경우
  // 광고 배너의 이전 이미지와 다음 이미지의 내용이 보이게 만들기
  slideView.on('click', function(e){
    e.preventDefault();

    console.log($(this));

  });

  // nextBtn과 prevBtn 클릭 시 1씩 수치가 올라가거나 떨어지게 처리
  // 단, 배너의 숫자 최대치 이상은 생성하지 않게 처리


  nextBtn.on('click', function(e){
    e.preventDefault();
    // ++ 1씩 더하기
    // -- 1씩 빼기
    if( i < 2) { i += 1; }
    var n = i * -100;
    var per = n + '%';
    bannerWarp.animate({marginLeft:per});
      // 순서값 i에 대한 내용으로 순서에 맞게 변경
    banLi.eq(i).addClass('active');
    banLi.eq(i).siblings('li').removeClass('active');

  });

  prevBtn.on('click', function(e){
    e.preventDefault();
    // ++ 1씩 더하기
    // -- 1씩 빼기
    if( i > 0 ) { i -= 1; }
    var n = i * -100;
    var per = n + '%';
    bannerWarp.animate({marginLeft:per});
      // 순서값 i에 대한 내용으로 순서에 맞게 변경
    banLi.eq(i).addClass('active');
    banLi.eq(i).siblings('li').removeClass('active');

  });


  

})(jQuery);