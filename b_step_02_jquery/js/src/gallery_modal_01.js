// gallery_modal_01.js

(function($){
  var mdBox   = $('.modal_box');
  var mdBg    = $('.modal_bg');
  var list    = $('.list').children('li');

  // css를 먼저 불러온 뒤 js 적용되기 때문에, css에서 display: none;을 하지 않으면
  // 페이지를 불러올 때 미세하게 잔상이 보이게 된다
  mdBox.hide();
  mdBg.hide();

  // 이미지 위치에 대한 주고 : 기준 위치는 html 문서
  var addr = "../img/gallery";
  var useImg = ["j01.jpg", "j02.jpg", "j03.jpg", "j04.jpg", "j05.jpg", "j06.jpg", "j07.jpg", "j08.jpg", "j09.jpg", "j10.jpg"];
  var useImgBig = ["j01_big.jpg", "j02_big.jpg", "j03_big.jpg", "j04_big.jpg", "j05_big.jpg", "j06_big.jpg", "j07_big.jpg", "j08_big.jpg", "j09_big.jpg", "j10_big.jpg"];

  for(var i = 0 ; i < list.length ; i += 1) {
  list.eq(i).children('a').css({backgroundImage: 'url(' + addr + useImg[i] ')'});
  };

  // forEach() javascript5 : value 먼저, index가 다음으로
  // $.each() jQuery : utility : index 먼저, value가 다음으로 순서한다.
  // $.each(여러개의 순서 또는 각각 처리하는 것, function(순서, 값){})

  /*
    useImg.forEach(function(value,index){
      console.log("js-i는:" + index, 'v는:' + value);
    })
  */

    // $.each(useImg, function(index, value){
    //   console.log("i는:" + index, 'v는' + value);
    // });

  // list 클릭시 모달창 띄워서 처리
  list.on('click',['a'],function(e){
    e.preventDefault();
    var thisI = $(this).index();

    mdBox.css({backgroundImage: 'url(' + addr + useImgBig[thisI] + ')'});
    mdBox.fadeIn();
    mdBg.fadeIn();
  });

  mdBg.on('click', function(){
    mdBox.fadeOut();
    mdBg.fadeOut();
  });

})(jQuery);