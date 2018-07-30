//  tabMenu_01.js

(function($){
  // tab_box 내의 li 클릭시
  var tabBox = $('.tab_box');
  var tabLi  = tabBox.find('li');
  var tabText = $('.tab_text').children('div');

  tabLi.on('click', function(e){
    e.preventDefault();
  // 선택한 li에 .select 적용
    var i = $(this).index();


    tabLi.eq(i).addClass('select');
    tabLi.eq(i).siblings().removeClass('select');

  // teb_text내의 순서에 맞는 내용에 .select 적용
    tabText.eq(i).addClass('select');
    tabText.eq(i).siblings().removeClass('select');
    

  });
})(jQuery);