// jquery_indicator_01.js

(function($){ 
  $('.product').wrap('<div class="product_wrap"></div>');
  var product = $('.product')
  var proWrap = $('.product_wrap');
  // indicator 클릭시 해당 버튼 색칠
  var indi = $('.indicator').children('li');
  // 공통으로 쓰기 위해 밖으로 변수를 빼준다
  var thisIndex = 0;

  proWrap.css({width: '100%', height: '100%', overflow: 'hidden'});
  // 1. product 영역에서 일부 키보드 탭이 반응하지 않도록 처리
  // 강제로 tabIndex를 꺼버리는 것!
  product.find('a').attr({tabIndex:-1});
  product.children('li').eq(thisIndex).children('a').attr({tabIndex:0});

  // 클릭했을 때 색상이 변경되며 선택된 영역이 보이도록 하기
  indi.on('click', function(e){
    e.preventDefault();
    var _this = $(this);
    _this.addClass('active');
    _this.siblings('li').removeClass('active');

    var thisIndex = _this.index();
    var i = thisIndex * -100 + '%';
    product.stop().animate({marginLeft:i});

    product.children('li').children('a').attr({tabIndex:-1});
    product.children('li').eq(thisIndex).children('a').attr({tabIndex:0});

  });

})(jQuery);