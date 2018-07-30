// jquery_indicator_02.js


(function($){
  var miniPro     = $('#miniProduct');
  var indicator   = miniPro.children('.indicator');
  var indiLi      = indicator.children('li');
  var product     = $('.product');
  var timed       = 500;
  var productLi = product.children('li');


  // tabIndex의 경우 1차 처리
  // function TabIndex(){} 아래의 방법을 권장함
  // var TabIndex = function(tabi){
  //   productLi.eq(tabi).children('a').attr({tabIndex:0});
  //   productLi.eq(tabi).siblings('li').children('a').attr({tabIndex:-1});
  // };

  // var t = 0;
  // TabIndex(t);

  // indiLi.on('click', function(e){
  //   e.preventDefault();

  //   var _this = $(this)

  //   _this.addClass('active');
  //   _this.siblings('li').removeClass('active');

  //   var thisI = _this.index();
  //   var i = thisI * -100 + '%';
  //   product.stop().animate({marginLeft:i}, timed);

  //   TabIndex(thisI);

  // });
  // 선택한 indicator색상 변경 및 선택한 이미지 보여주기


  // step 2 좌우 버튼 클릭으로 슬라이딩 처리하기

  var sB = $('.slide_btn');
  var sBBtn = sB.children('button');
  var prevBtn = $('.prev_btn');
  var nextBtn = $('.next_btn');

  // 오른버튼 클릭할 경우
  var num = 0;
  var productLength = productLi.length;
  // nextBtn.on('click', function(e){
  //   e.preventDefault();
  //   if(num < productLength-1) {
  //   num += 1;
  //   }

  //   var i = num * -100 + '%';
  //   product.stop().animate({marginLeft:i});
  // });

  // prevBtn.on('click', function(e){
  //   e.preventDefault();
  //   if(num > 0) {
  //   num -= 1;
  //   }

  //   var i = num * -100 + '%';
  //   product.stop().animate({marginLeft:i});
  // });

  // 동시에 처리하기


  // tabIndex 기능 다시 한 번 익히기

  // var Ti = function(ti){
  //   productLi.eq(ti).children('a').attr({tabIndex:0});
  //   productLi.eq(ti).siblings('li').children('a').attr({tabIndex:-1});
  // }

  // Ti(0)
  // // console.log(nextBtn)

  // sBBtn.on('click', function(e){
  //   // console.log(e.currentTarget);

  //   var _this = $(this)[0]
  //   // 선택된 버튼이 nextBtn이고, 전체 개수보다 하나 작은 수(4)이면 변수 num에 1씩 더해라
  //   if(_this == nextBtn[0] && num < productLength-1) {
  //     // console.log(nextBtn);
  //     num += 1;
  //   // 선택된 버튼이 prevtBtn이고, 0보다 큰 수면 변수 num에 1씩 빼라
  //   } else if(_this == prevBtn[0] && num > 0) {
  //     // console.log(prevBtn);
  //     num -= 1;
  //   }
  //   // console.log(num);
  //   Ti(num);
  //   var i = num * -100 + '%';
  //   product.stop().animate({marginLeft:i});

  // });

  // step3 좌우 슬라이드 버튼과 indicator 합치기

    // tabIndex

    var Tab = function(i){
      productLi.eq(i).find('a').attr({tabIndex:0});
      productLi.eq(i).siblings('li').find('a').attr({tabIndex:-1});
      indiLi.eq(i).addClass('active');
      indiLi.eq(i).siblings('li').removeClass('active');
      var n = i * -100 + '%';
      product.stop().animate({marginLeft:n});
    }

    Tab(num);

    // indicator
    indiLi.on('click', function(e){
      e.preventDefault();

      var _t = $(this);
      num = _t.index();
      Tab(num);
    });

     sBBtn.on('click', function(e){
      e.preventDefault(); 

      var _t = $(this)[0];

      if(_t === nextBtn[0] && num < productLength-1){
        num += 1;
      } else if(_t === prevBtn[0] && num > 0){
        num -= 1;
      };

      Tab(num);
     });


})(jQuery);