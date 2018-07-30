// galleria_01.js

(function($) {

  //.indicator_selector_btn 의 자식 li
  var indiSel = $('.indi_selector_btn');
  var indiLi = indiSel.children('li');

  //.ad_banner 자식 div
  var adBanner = $('.ad_banner');
  var adDiv = adBanner.children('div');


  //몇번째 라고 지칭하는 것 eq(2)
  //몇번째인지 확인하는 것 index()

  // indiLi를 클릭하면 
  indiLi.click(function(){
    // 1 indiLi에 클래스 이름 active를 첨부
    // indiLi.addClass('active');

    // 1-1. indiLi 중에서 선택한 것 $(this)에 클래스 active를 첨부
    // $(this).addClass('active');
    // 2. indiLi에 클래스 이름 active를 빼기 
    // indiLi.removeClass('active');
    // 3. indiLi에 부여된 클래스이름('active')를 일단 빼고, 동시에 선택한 것에만 ('active')를 적용 
    indiLi.removeClass('active');
    $(this).addClass('active');

    // 선택한 순서값 검증
    var thisI = $(this).index()
    console.log(thisI);

    // 1. adDiv의 클래스 이름('active')를 빼기
    // adDiv.removeClass('active');
    // 2. adDiv의 0번째에 ('active')를 부여
    // adDiv.eq(0).addClass('active');
    // 2-1. adDiv에 선택한 순서에 맞는 위치에 ('active') 적용
    // adDiv.eq(thisI).addClass('active');
    // 3. adDiv 중 class이름 'active'는 빼고, 동시에 선택한 순서(indiLi의 index())에 맞는
    // adDiv에는 ('active')를 적용

    var i = $(this).index(); //선택한 순서를 i라고 정의
    adDiv.removeClass('active'); //삭제
    adDiv.eq(i).addClass('active'); //i에 active를 적용



  });
})(jQuery);