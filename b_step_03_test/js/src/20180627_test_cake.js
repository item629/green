//  20180627_test_cake.js

(function($){
  var mizniPro = $('#miniProduct');
  var btn      = $('#btn');
  var btnB     = btn.children('button');
  var lBtn     = $('.l_btn');
  var rBtn     = $('.r_btn');
  var indi     = $('.indicator');
  var indiLi   = indi.children('li');
  var proWrap  = $('.product_wrap');
  var product  = $('.product');
  var proLi    = product.children('li');

  var i = 0;
  var thisIndex = 0;
  // thisIndex가 0인 이유는 indicator의 가장 첫번째 버튼의 console 값이 0이기 때문에
  // + 1씩 더하면 옆의 버튼의 console값과 같아진다
  var proLiLength = proLi.length;
  // 보여지는 내용이 몇 개가 있는지 파악해서 변수로 지정한다

  var Run = function(i){
    proLi.eq(i).find('a').attr({tabIndex:0});
    proLi.eq(i).siblings('li').find('a').attr({tabIndex:-1});
    indiLi.eq(i).addClass('active');
    indiLi.eq(i).siblings('li').removeClass('active');
    var marginL = i * -100 + '%';
    product.stop().animate({marginLeft:marginL});
  }

  Run(i);
  // indicator를 눌렀을 때 내용이 옆으로 슬라이드 되도록 한다
  indiLi.on('click', function(e){
    e.preventDefault();
      // 키보드만으로도 사용할 수 있도록 포커싱이 되게 하려면 
      // button,a,input 등의 태그를 사용해야하지만 그 이벤트는 사용하지 않을 것이기 때문에    
    var _this = $(this);
    var thisIndex = _this.index();

    Run(thisIndex);
  });


  btnB.on('click', function(e){
    e.preventDefault();
    // $(this) -> 내가 선택한 버튼(왼or오른쪽)의 [배열되어있는 속성값]중 첫번째
    // console.log($(this)[0]); -> console 창에 나오는 값, $('.r_btn') or $('.l_btn)
    var _this = $(this)[0];

    if(_this === rBtn[0] && i < proLiLength-1) {
      i += 1;
      // 가장 상단에 변수로 지정해둔 i = 0; 참고
    } else if(_this === lBtn[0] && i > 0) {
      i -= 1;
    };

    Run(i);

  });

})(jQuery);