
$(function () {
    
  //当页面超出去1000px的时候，让小火箭显示出来,如果小于1000，就让小火箭隐藏
  $(window).scroll(function () {
    if($(window).scrollTop() >= 500 ){
      $(".actGotop").stop().fadeIn(1000);
    }else {
      $(".actGotop").stop().fadeOut(1000);
    }
  });
  
  function getScroll(){
    return {
      left:window.pageYOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
      top:window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    }
  }
  
  //在外面注册
  $(".actGotop").click(function () {
    $("html,body").stop().animate({scrollTop:0},3000);
    //scrollTop为0
    $(window).scrollTop(0);
  })
  $('.carousel').carousel({
    interval: 3000
  });
  

});