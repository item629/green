// jquery_basic_03.js

(function($){
  var wrap = $('.wrap');
  wrap.css({
    width:'100%',
    height:'auto'});

  wrap.html('<header>');
  wrap.children('header').attr({id:'headBox'});

  var headBox = $('#headBox');
  headBox.css({
    margin:'auto',
    width:'60rem',
    height:'100px',
    backgroundColor:'#ccc'});

  headBox.wrap('<div class="head_wrap">');
  var headBg = headBox.css('backgroundColor');
  headBox.parent().css({
    width:'100%',
    heidht:'auto',
    backgroundColor:headBg});

  //  headBox 기준으로 h1, nav생성
  headBox.html('<h1>');
  $('h1').after('<nav id="navBox">');

  var h1 = $('h1');
  var navBox = $('#navBox');

  h1.css({
    width:'150px',
    height:'100%',
    backgroundColor:'#fa0',
    float:'left'});
  navBox.css({
    marginTop:'50px',
    float:'right',
    width:'600px',
    height:'50%',
    backgroundColor:'#0af'});

  // h1내부에 링크기능 첨부

  h1.html('<a href="#">');
  h1.children('a').html('<span class="hidden">');
  h1.find('span').text('jQuery를 이용한 텍스트 생성');
  h1.children('a') .css({
    display:'block',
    width:'100%',
    height:'100%'});

  // nav 내부에 ul 생성, 내부에 li 3개 생성, 내부에 링크(네이버, 다음, 구글 처리)
  navBox.html('<ul>');
  var navUl = navBox.children('ul');
  navUl.css({
    width:'100%',
    height:'100%',
    backgroundColor:'#ff0'});

  var linkText = ['Naver', 'Daum', 'Google'];
  var linkValue = ['naver.com', 'daum.net', 'google.com'];
  var linkLength = linkText.length;

  // 공통내용의 반복사용일 경우에는 for를 이용한다
  for(var i = 0; i < linkLength ; i += 1){
    navUl.append('<li><a href="http://'
                + linkValue[i]
                + '">'
                + linkText[i]
                + '</a></li>');
  }

  navUl.children('li').css({
    float:'left',
    marginRight:'1rem',
    height:'100%',
    backgroundColor:'#fff'});



})(jQuery);    