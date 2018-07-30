// jqeury_event_01.js


(function($){
  var mouseArea = $('.mouse');
  var mouseBg = mouseArea.css('backgroundColor');
  var i = 0;
  // 마우스 올렸을 경우
  mouseArea
  .on('mouseenter', function(){
    $(this).css({'backgroundColor' : '#dfdf77'});
  })
  .on('mouseleave', function(){
    $(this).css({'backgroundColor' : mouseBg});
  })
  .on('mousedown', function(e){
    // i += 1;
    var w = e.which;
    // e.which에서 마우스 왼쪽 1
    // 마우스 가운데 휠 클릭은 2
    // 마우스 오른쪽은 3

    // e.button에서
    // 마우스 왼쪽 0
    // 마우스 가운데 휠 클릭은 1
    // 마우스 오른쪽 2

    var m;

    // if(w === 1){m = '왼쪽 버튼';
    // } else if(w === 2){m = '가운데 버튼';
    // } else if(w === 3){m = '오른쪽 버튼';
    // } else {m = '기타 버튼';}

    // 조건분기
    switch(w){
      case 1:
      m = '왼쪽 버튼';
      break;
      case 2:
      m = '가운데 버튼';
      break;
      case 3:
      m = '오른쪽 버튼';
      break;
      default:
      m = '기타 버튼';
    }

    $(this).html('<p>마우스 ' + m + '를 클릭하였습니다.</p>');
  })
  .on('mouseup', function(e){
    $(this).html('<p>마우스를 올렸습니다.</p>');
  });

  var mt = parseInt($('.move').css('marginTop'));
  var ml = parseInt($('.move').css('marginLeft'));

  mouseArea
  .on('mousemove', function(e){
    // console.log(e.clientX);
    // clientX : 브라우저의 document값을(스크롤 영역 무시) 기준으로 좌표 체크
    // clientY
    // console.log(e.offsetX);
    // offsetX : 주어진 선택자의 영역을 기준으로 좌표를 체크
    // offsetY
    // console.log(e.offsetX);
    // screenX : 모니터의 화면영역을 기준으로 좌표 체크
    // screexY

    // pageX : 브라우저의 document 기준으로 좌표 체크
    // pageY

    // 간단 테스트

    var thisCh = $(this).children('.move');
    var thisX = e.offsetX/5;
    var thisY = e.offsetY/5;

    thisCh.css({marginLeft: ml-thisX, marginTop : mt-thisY });
  });


})(jQuery);