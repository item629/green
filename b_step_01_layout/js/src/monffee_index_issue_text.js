
(function($){


  // 일정한 시간마다 세팅한다
  // var st = setInterval(function(~){~~}, 3000);,
  // clearInterval(st)
  // 1st
  // 재생 버튼 클릭하면 > st
  // 일시정지 버튼 클릭하면 > st clear
  // 2nd
  // 영역 > 마우스 올리면 st clear
  // 영역 > 마우스 벗어나면 st
  // 3nd
  // indicator에 focus 되면 st clear

  // 마지막 banner에서 첫번째 banner로 돌아갈 때!
  // 가장 마지막에 첫번째 banner를 clone()해서 첫번째 banner로 animate 가 아닌 css로 빠른 시간에 넘어간다



  // issue banner 영역에서 마지막 위치에 첫 배너를 복제하여 배치
  var isBan = $('.issue_banner');
  var idLiClone = isBan.find('li').eq(0).clone();
  isBan.children('ul').append(idLiClone);

  var isBanLen = isBan.find('li').length;
  isBan.children('ul').css({width: isBanLen * 100 + '%'});

  //  indicator 클릭시 배너 이동
  var issueBtn = $('.issue_text').children('.btn');
  var indi = issueBtn.find('.indicator');
  var indiLi = indi.children('li');
  var i = 0;


  // 
  var Tab = function(i) {
    indiLi.eq(i).addClass('active');
    indiLi.eq(i).siblings('li').removeClass('active');
    // 배너의 개수를 파악해서 최대 개수 위치에 오면 처음으로 이동
    var num = i;
    
    if( i < isBanLen - 1 ) {
      num = i * -100 + '%'
      isBan.children('ul').animate({marginLeft: num});
    } else if( i == isBanLen - 1 ) {
      num = i * -100 + '%'
        indiLi.eq(0).addClass('active');
        indiLi.eq(0).siblings('li').removeClass('active');
      isBan.children('ul').animate({marginLeft: num}, function(){
        $(this).css({marginLeft:0}, 50);
        i = 0;
      });      
    }
  }
  // 


  Tab(i);

  indiLi.on('click', function(e){
    e.preventDefault();
    i = $(this).index();

    Tab(i);
  });

  var timed = 2000;
  var setStart;

// setInterval( function(){} , 시간);
// clearInterval (setInterval이름)

  // startSlide 라는 함수를 만들어서 실행하면 그 안에 있는 setStart에 값을 부여한다
  // startSlide를 실행한 뒤에 원하는 조건에 clearInterval으로 setStart 내부의 값을 지워주면
  // 슬라이드 되던 것이 멈춘다. 그 뒤에 다시 원하는 조건에서 벗어나면 다시 슬라이드가 시작되도록
  // 다시 startSlide를 실행하게 만든다!
  var startSlide = function(){
                  setStart = setInterval(function(){
                                (i < isBanLen -1) ? i += 1 : i = 1; 
                                Tab(i); }, timed);
  };


  var stopSlide = function() {clearInterval( setStart ); };
  startSlide();

  // issue.on('mouseenter', function(){
  //   clearInterval( setStart );
  // });

  // issue.on('mouseleave', function(){
  //   startSlide();
  // });
  // ----------------------------------------------------------------------------------



  var issue = $('.issue_text');
  var play = issue.find('.play');
  var pause = issue.find('.pause');
  play.addClass('active');

  issue.off('mouseleave');
  issue.on('mouseleave', function(){
    // event.stopPropagation();
    stopSlide();
    startSlide();
    play.addClass('active');
    pause.removeClass('active');

  });

  issue.on('mouseenter', function(){
    stopSlide();
    pause.addClass('active');
    play.removeClass('active');
  });

  play.off('click');
  play.on('click', function(e){
    e.preventDefault();
    issue.trigger('mouseleave');
  });

  pause.on('click', function(e){
    e.preventDefault(); 
    issue.trigger('mouseenter');
  });


})(jQuery);