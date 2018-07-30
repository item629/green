// monffee_index_test_adBox_slide.js

(function($){
  var adBox = $('#adBox');
  var indicator = adBox.find('.indicator');
  var indiLi = indicator.children('li');
  var slideBtn = adBox.find('.slide_btn');
  var prev = slideBtn.children('.prev_btn')[0];
  var next = slideBtn.children('.next_btn')[0];
  var banner = $('.slide_banner').children('ul');

  // indicator

  var i = 0;
  var indiLength = indiLi.length;

// 
  var Tab = function(i){
    indiLi.eq(i).addClass('select');
    indiLi.eq(i).siblings('li').removeClass('select');
    var v = i * -100 + '%'
    banner.stop().animate({marginLeft: v})
  };
// 

  Tab(i);

  indiLi.on('click', function(e){
    e.preventDefault();
    i = $(this).index();

    Tab(i);

  });

  slideBtn.find('button').on('click', function(e){
    e.preventDefault();
    var j = $(this)[0];

    if(j === prev && i > 0 ){
      i-=1;
    } else if(j === next && i < indiLength - 1) {
      i+=1;
    }; 

    Tab(i);
  });


  indiLi.find('a').on('focus', function(e){
    $(window).scrollTop(0);

  });

  slideBtn.find('a').on('focus', function(e){
    $(window).scrollTop(0);
    
  });



})(jQuery);