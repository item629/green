(function($){

  var topBtn = $('.top_btn')
  // 브라우저의 스크롤 기능
  $(window).on('scroll', function(e){
    // console.log( $(this).scrollTop() );

    var thisTop = $(this).scrollTop();

    if (thisTop < 500) {
      topBtn.stop().fadeOut();
    } else {
      topBtn.stop().fadeIn();
    };
  });


  topBtn.on('click', function(e){
    e.preventDefault();

    // $(window).scrollTop(0); - 한번에 이동

    $('html, body').animate({scrollTop:0});
    // 부드럽게 이동

  });

  // navigation 영역 클릭시 위치 이동

  var headBox = $('#headBox');
  var headUl = headBox.children('ul');
  var headList = headUl.children('li');


  headList.on('click', function(e){
    // li 내부에 a가 가지는 기본 이벤트(이동) 제거
    e.preventDefault();

    // 검증(선택된 요소의 자식인 a의 속성 href 값을 파악)
    // console.log( $(this).children('a').attr('href') );

    // 검증된 속성값을 선택자로 변경 
    var thisLink = $(this).children('a').attr('href');
    // 선택자의 위치가 상단에서 얼만큼 떨어져있는지 파악
    var thisOffset = $(thisLink).offset().top;

    console.log(thisOffset);

    $('html, body').animate({scrollTop:thisOffset}, 500);
  });
})(jQuery);