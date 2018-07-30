
// gallery_modal_02.js

(function($){
  var mdBox = $('.modal_box');
  var mdBg = $('.modal_bg');
  var list = $('.list').children('li');

  mdBox.hide();
  mdBg.hide();

  var addr = "../img/gallery/";
  var useImg = ["j01.jpg", "j02.jpg", "j03.jpg", "j04.jpg", "j05.jpg", "j06.jpg", "j07.jpg", "j08.jpg", "j09.jpg", "j10.jpg"];
  var useImgBig = ["j01_big.jpg", "j02_big.jpg", "j03_big.jpg", "j04_big.jpg", "j05_big.jpg", "j06_big.jpg", "j07_big.jpg", "j08_big.jpg", "j09_big.jpg", "j10_big.jpg"];  
  // var useImg = [
  //               {"thum" : "j1.jpg", "big" : "j01_big.jpg"},
  //               {"thum" : "j2.jpg", "big" : "j01_big.jpg"},
  //               {"thum" : "j3.jpg", "big" : "j01_big.jpg"},
  //               {"thum" : "j4.jpg", "big" : "j01_big.jpg"},
  //               {"thum" : "j5.jpg", "big" : "j01_big.jpg"},
  //               {"thum" : "j6.jpg", "big" : "j01_big.jpg"},
  //               {"thum" : "j7.jpg", "big" : "j01_big.jpg"},
  //               {"thum" : "j8.jpg", "big" : "j01_big.jpg"},
  //               {"thum" : "j9.jpg", "big" : "j01_big.jpg"},
  //               {"thum" : "j10.jpg", "big" : "j01_big.jpg"}
  //              ];

  // 일정한 순서가 있는 값의 경우는 반복문으로 처리할 수 있다.
   // var useImg = [];

   // t가 10보다 작으면 t에 1씩 더해라 
  // for(var t = 0 ; t < 10 ; t += 1) {
    // useImg의 t번째 배열값 t = 0
    // useImg[t] = {};
    // at 는 t에 1을 더한 값 t + 1 = 1
    // var at = t + 1 ;

    // at가 10보다 작으면 at는 0+at 아니면 at는 at
  //   (at < 10) ? at = '0' + at : at = at ; /*1 < 10 ? at = 0 + 1*/
  //   useImg[t].thum = 'j' + at + '.jpg';  /*useImg[1].thum = j01.jpg*/
  //   useImg[t].big  = 'j' + at + '_big.jpg'; /*useImg[1].big = j01_big.jpg*/
  // }
  
  //  for(var t = 1 ; t <= 10 ; t += 1 ) {
  //     useImg[t].thum = 'j' + t + '.jpg' ;
  //     useImg[t].big = 'j' + t + '_big.jpg' ;
  // }

  for(var i = 0 ; i < list.length ; i += 1 ){
    list.eq(i).children('a').css({backgroundImage: 'url(' + addr + useImg[i] +')'});
  };

  var close;

  list.on('click',['a'], function(e){
    e.preventDefault();
    var thisI = $(this).index();
    mdBox.css({backgroundImage: 'url(' + addr + useImgBig[thisI] + ')'});
    mdBox.prepend('<div class="close"><button type="button">닫기</button></div>');
    
    $('.close').css({position:'absolute', top: 0, right: 0, padding:'1rem', backgroundColor: 
      '#fff'});


    mdBox.fadeIn(function(){
      $('.close').find('button').focus();
    });
    mdBg.fadeIn();


    close = $('.close');
    close.on('click', function(){
      mdBox.fadeOut(function(){
        $(this).find('.close').remove();
      });
      mdBg.fadeOut();
    });
    
  });

  mdBg.on('click', function(){
    mdBox.fadeOut(function(){
      $(this).children('.close').remove();
    });
    mdBg.fadeOut();
  });

})(jQuery);