// jquery_indicator_03_1.js


(function($){
// step1 화면스크롤(300px 이상 움직였을 경우) top 버튼이 나타나게 
  
  // 변수 선언
  var topBtn     = $('.top_btn');
  var headBox    = $('#headBox');
  // headBox 떨어진 거리 미리 계산
  var headOffset = headBox.offset().top;
  var headT      = headBox.css('top');

  // 크기값을 가져오는 메소드
  // 기본 높이값 파악:                   선택자.height();
  // padding값 포함한 높이값 파악:        선택자.innerHeight();
  // border값을 포함한 높이값 파악:       선택자.outerHeight();
  // margin값을 포함한 높이값 파악:       선택자.outerHeight(ture);
  // 선택자.width(ture);
  // 선택자.innerWidth();
  // 선택자.outerWidth();
  // 선택자.outerWidth(ture);

  $(window).on('scroll', function(){
    // 300px 이상인지 파악하기 위한 조건
    var winTop = $(window).scrollTop();
    // document, html,body 를 넣어도 된다!
    // console.log(winTop); 확인

    if(winTop > 300){
      topBtn.show();
    } else {
      topBtn.hide();
    }
    // 위와 같은 결과가 나옴 / 조건문이 아님
    // 3항 연산자(winTop > 300) ? topBtn.show() : topBtn.hide();
    // 3항 연산자가 속도 더 빠름 조건 ? 참인경우실행 : 거짓인경우실행;


  });


  // step2 화면 스크롤 시 header 상단에 고정
  $(window).on('scroll', function(){

    var winTop = $(window).scrollTop();
    
    if (winTop >= headOffset) {
      //상단에 고정시켜라
      // headBox.css({position:'fixed', top: '0'});
      headBox.addClass('fixed');
    } else {
      // 고정값을 주어라
      // headBox.css({position:'absolute', top: headT});
      // headBox.removeAttr('style');
      headBox.removeClass('fixed');
    };

  });


})(jQuery);