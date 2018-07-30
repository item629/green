(function($){
  var galBox = $('.gall_box');
  var galLink = galBox.children('a');
  var list = $('.list');
  var listImg = list.find('li');

  // step 1st 이미지 가져오기

  // listImg.on('click', function(e){
  //   e.preventDefault();
  //   var img = $(this).find('img');
  //   var imgSrc = img.attr('data-src');

  //   galBox.css({backgroundImage: 'url('+ imgSrc +')',
  //               backgroundRepeat: 'no-repeat',
  //               backgroundSize: 'cover'})


  // });


  //  step 2nd js를 통해 목록을 만들어서 사용하기
  var addr = '../img/gallery/';
  var link = ['j01_big', 'j02_big', 'j03_big', 'j04_big', 'j05_big'];
  var href = ['naver.com', 'daum.net', 'google.com', 'greenart.co.kr', 'nate.com']
  var myImg = [
    {'thum': 'j01',  'img': 'j01_big',  'href': 'naver.com',    'narr' : '이미지 설명 01'},
    {'thum': 'j02',  'img': 'j02_big',  'href': 'daum.net',     'narr' : '이미지 설명 02'},
    {'thum': 'j03',  'img': 'j03_big',  'href': 'google.com',   'narr' : '이미지 설명 03'},
    {'thum': 'j04',  'img': 'j04_big',  'href': 'greenart.com', 'narr' : '이미지 설명 04'},
    {'thum': 'j05',  'img': 'j05_big',  'href': 'nate.com',     'narr' : '이미지 설명 05'}
    ];

  var imgSet = function(i){
    galBox.css({backgroundImage: 'url('+ addr + myImg[i].img + '.jpg' +')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'});

    galBox.find('a').attr({href: 'http://'+myImg[i].href,
                          target: '_blank',
                          title: myImg[i].narr});
    galBox.find('a').text(myImg[i].narr);     
  }

 // for(반복) ---

    for(var j = 0 ; j < myImg.length ; j += 1){
    listImg.eq(j).children('a').css({backgroundImage: 'url(' + addr + myImg[j].thum + '.jpg' +')',
                       backgroundRepeat: 'no-repeat',
                       backgroundSize: 'cover',
                       transition: 'all 400ms'});
    }

    listImg.children('a').on('mouseenter focus', function(){
      $(this).css({transform: 'scale(1.2)'});
    });

    listImg.children('a').on('mouseleave blur', function(){
      $(this).css({transform: 'scale(1)'});
    });
 // ---



  imgSet(0);

  listImg.on('click', function(e){
    e.preventDefault();
    var i = $(this).index();

    imgSet(i);
  });

})(jQuery);