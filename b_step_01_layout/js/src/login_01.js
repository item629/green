(function($){
  //  .show_btn 클릭해서, form 영역을 보이고/사라지게 만들기

  var btn = $('.show_btn');
  var form = $('#member');

  btn.on('click',function(e){
    e.preventDefault();

    form.stop().slideToggle(500, function(){
      var formView = $(this).css('display');
      if(formView == 'none'){
        btn.find('button').text('열기');
        btn.find('button').addClass('close')
      } else {
        btn.find('button').text('닫기');
        btn.find('button').removeClass('close');      
      };

      // 슬라이드업을 먼저 실행한 후에 열기로 글자가 바뀌도록 한다

    });

  });
})(jQuery);