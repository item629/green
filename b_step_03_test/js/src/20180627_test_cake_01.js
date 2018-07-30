(function($){

  var miniPro = $('#miniProduct');
  var btn = $('#btn');
  var btnB = btn.children('button');
  var pervBtn = $('.l_btn');
  var nextBtn = $('.r_btn');
  var indicator = $('.indicator');
  var indiLi = indicator.children('li');
  var product = $('.product');
  var proLi = product.children('li');


  var thisIndex = 0;

  indiLi.on('click', function(e){
    e.preventDefault();
    var _this = $(this);
    var thisIndex = _this.index();

    indiLi.eq(thisIndex).addClass('active');
    indiLi.eq(thisIndex).siblings('li').removeClass('active');

  });


})(jQuery);