
// (function($) {

//   var slideBox = $('.slide_box');
//   var slideT = slideBox.children('dt');
//   var slideBtn = slideBox.children('.slide_btn');
//   var slideCon = slideBox.children('.slide_content');

//   var slideA = slideBtn.children('a');
//   var slideS = slideBtn.children('span');

//   slideBtn.on('click', function(e){
//     e.preventDefault();

//     slideBtn.removeClass('active');
//     $(this).addClass('active');


//     var view = $(this).next('dd').css('display');
//     if(view === 'none'){
//       $(this).next('dd').show();
//     } else {
//       $(this).next('dd').hide();
//     }

//     var col = $(this).prev('dt').css('backgroundColor');

//     if(col === '#067') {
//       $(this).prev('dt').css({'backgroundColor':'#078'});
//     }

//   })



// })(jQuery);

// =======내가 혼자 한 것 ㅠㅠ

(function($){

  // .accordion
  var accordion = $('.accordion');
  var title = accordion.find('dt');
  
  var timed = 500;
  var beforeColor = '#067';
  var afterColor = '#047';


  // 처음부터 첫번째 내용은 보여지고 싶을 때에는 이렇게 작성한다!
  // 완벽한 표현 방법은 아님
  title.eq(0).nextAll().show();
  title.eq(0).css({backgroundColor:afterColor})



  // dt 클릭시 형제 dd를 보이게 만들기
  title.on('click', function(e) {
    e.preventDefault();
    var mydt = $(this)

    // step01 $(this).siblings('dd'); 도 사용 가능함
    // $(this).nextAll('dd').addClass('active');
    // 선택한 것의 부모의 다른 dl의 자식인 dd들 active 삭제
    // $(this).parent().siblings('dl').children('dd').removeClass('active');

    // step02
    // title.removeClass('active');
    // $(this).addClass('active');

    // step03
    // title.nextAll().hide();을 사용해도 된다    
    // $(this).parent().siblings('dl').children('dd').slideUp(500);
    // $(this).nextAll().slideDown(500);

    // $(this).parent().siblings('dl').children('dd').fadeOut(500);
    // $(this).nextAll().fadeIn(500);

    // $(this).parent().siblings('dl').children('dd').hide(500);
    // $(this).nextAll().show(500);

    //  step04 열렸을 경우 다시 사라지게 하기
    mydt.parent().siblings('dl').children('dd').slideUp(timed);
    //  현재 선택하는 dt의 뒤의 dd가 열렸는가?

    var thisNext = mydt.nextAll().css('display');
    if( thisNext === 'block'){
      mydt.nextAll().slideUp(timed);
    } else {
      mydt.nextAll().slideDown(timed);
    }

    // 위와 동시에 타이틀 색상 바꾸기 css를 설정해서 할 경우
    // title.removeClass('active');
    // $(this).addClass('active');

    // 다른 방법
    title.css({backgroundColor: beforeColor});
    mydt.css({backgroundColor: afterColor});

    if( thisNext === 'block'){
      mydt.css({backgroundColor:beforeColor});
    } else {
       mydt.css({backgroundColor:afterColor});
    }

  })




})(jQuery);