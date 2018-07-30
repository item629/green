// jquery_basic_02.js

(function($){
  // h1
  var h1 = $('h1');
  h1.html('<a></a>');

  var h1InA = h1.children('a');

  h1InA.attr({href:'http://naver.com', 
              title:'go to naver',
              target:'_blank'});

  h1InA.text('naver로 이동하는 버튼을 생성');

  h1InA.css({padding:'0.5rem 2rem', 
             backgroundColor:'#f06', 
             color:'#fff',
             fontSize: '1rem'});

  var h1InABg = h1InA.css('backgroundColor');

  h1InA
    .on('mouseenter', function(){
      $(this).stop().animate({backgroundColor:'#457'});
    })
    .on('mouseleave', function(){
      $(this).stop().animate({backgroundColor:h1InABg});
    });

  h1.css({float:'left'});
  h1.wrap('<header></header>');
  h1.parent('header').attr({id:'headBox'});

  var headBox = $('#headBox');
  headBox.css({backgroundColor: '#ccc', padding: '1rem', width: '100%',
               height: '5rem'});

  // append and appendTo
  var pend = $('.pend');
  pend.html('<li class="base">기준이 되는 요소를 삽입</li>')
  $('.base').css({backgroundColor: '#a65'});

  // append
  pend.append('<li class="after1">뒤에 첫번째 리스트를 생성</li>');
  pend.append('<li>뒤에 두번째 리스트를 생성</li>');
  pend.append('<li>뒤에 세번째 리스트를 생성</li>');
  pend.append('<li>뒤에 네번째 리스트를 생성</li>');
  pend.append('<li>뒤에 다섯번째 리스트를 생성</li>');

  // prepend

  pend.prepend('<li>base 앞에 첫번째 리스트를 생성</li>');
  pend.prepend('<li>base 앞에 두번째 리스트를 생성</li>');
  pend.prepend('<li>base 앞에 세번째 리스트를 생성</li>');
  pend.prepend('<li>base 앞에 네번째 리스트를 생성</li>');
  pend.prepend('<li>base 앞에 계~속번째 리스트를 생성</li>');

  // appendTo()
  // $('after1').appendTo('.after1');
  $('<li>appendTo를 이용하여 삽입</li>').appendTo(pend);
  $('<li>appendTo를 이용하여 두번째 삽입</li>').appendTo(pend);
  $('<li>appendTo를 이용하여 세번째 삽입</li>').appendTo(pend);
  $('<li>appendTo를 이용하여 네번째 삽입</li>').appendTo(pend);
  $('<li>appendTo를 이용하여 다섯번째 삽입</li>').appendTo(pend);
  pend.append('<li>append를 이용 다시 삽입<li>');

  // prependTo()
  $('<li>prependTo를 이용하여 앞에 삽입</li>').prependTo(pend);
  $('<li>prependTo를 이용하여 앞에 또 삽입</li>').prependTo(pend);

  // append와 prepend는 선택자의 내부 앞과 뒤에 생성하는 기능
  // 생성을 요구시에는 요소의 모양 그대로 ( <li></li> )사용,
  // 요소(태그)의 모양을 그대로 사용하지 않고 처리하면 이동의 의미를 가짐

  var conBox = $('#contentBox');
  conBox.css({backgroundColor: '#fac', padding: '1rem'});
  conBox.children('.base').css({border:'1px solid #777', padding: '1rem'});

  var fr = $('.first');
  var ls = $('.last');
  fr.css({backgroundColor:'#fa0'});
  ls.css({backgroundColor:'#0af'});

  conBox.children('.base').on('click', function(){
    conBox.prepend(fr);
    conBox.append(ls);
  })

  // -----------

  var news = $('#newsBox');
  var newsBase = news.children('.base');
  news.css({padding:'1rem', marginTop: '0.5rem', backgroundColor: '#faa'});
  newsBase.css({backgroundColor:'#0af', margin: '0.4rem auto', textAlign: 'center'});

  // newsBase 이전과 이후에 생성
  newsBase.before('<p>.base 이전에 내용이 생성되었습니다.</p>');
  newsBase.after('<p>.base 이후에 내용이 생성되었습니다.</p>');


})(jQuery);