$(document).ready(function(){


$('.album001').mouseenter(function(){

    $('.txtBox001').css({'opacity':'0.8'});
    $('.txtBox001').css({'top':'400px'});
})

$('.album001').mouseleave(function(){

    $('.txtBox001').css({'opacity':'0'});
    $('.txtBox001').css({'top':'0'});
})


$('.album002').mouseenter(function(){

    $('.txtBox002').css({'opacity':'0.8'});
    $('.txtBox002').css({'top':'400px'});
})

$('.album002').mouseleave(function(){

    $('.txtBox002').css({'opacity':'0'});
    $('.txtBox002').css({'top':'0'});
})


$('.album003').mouseenter(function(){

    $('.txtBox003').css({'opacity':'0.8'});
    $('.txtBox003').css({'top':'400px'});
})

$('.album003').mouseleave(function(){

    $('.txtBox003').css({'opacity':'0'});
    $('.txtBox003').css({'top':'0'});
})


$('.album004').mouseenter(function(){

    $('.txtBox004').css({'opacity':'0.8'});
    $('.txtBox004').css({'top':'400px'});
})

$('.album004').mouseleave(function(){

    $('.txtBox004').css({'opacity':'0'});
    $('.txtBox004').css({'top':'0'});
})


$('.album005').mouseenter(function(){

    $('.txtBox005').css({'opacity':'0.8'});
    $('.txtBox005').css({'top':'400px'});
})

$('.album005').mouseleave(function(){

    $('.txtBox005').css({'opacity':'0'});
    $('.txtBox005').css({'top':'0'});
})

$('.album006').mouseenter(function(){

    $('.txtBox006').css({'opacity':'0.8'});
    $('.txtBox006').css({'top':'400px'});
})

$('.album006').mouseleave(function(){

    $('.txtBox006').css({'opacity':'0'});
    $('.txtBox006').css({'top':'0'});
})


$('.album007').mouseenter(function(){

    $('.txtBox007').css({'opacity':'0.8'});
    $('.txtBox007').css({'top':'400px'});
})

$('.album007').mouseleave(function(){

    $('.txtBox007').css({'opacity':'0'});
    $('.txtBox007').css({'top':'0'});
})


$('.album008').mouseenter(function(){

    $('.txtBox008').css({'opacity':'0.8'});
    $('.txtBox008').css({'top':'400px'});
})

$('.album008').mouseleave(function(){

    $('.txtBox008').css({'opacity':'0'});
    $('.txtBox008').css({'top':'0'});
})




//마우스가 움직이는 값을 찾아라.

$(window).mousemove(function(e){

    let x = e.pageX;
    let y = e.pageY;

    console.log(x,y)
    $('.cursor').css({'left':x,'top':y})

})


// cursor가 article 안에 들어갔을 때, 커서 보양 변경

$('article').mouseenter(function(){

    $('.cursor').addClass('style1')
})

$('article').mouseleave(function(){

    $('.cursor').removeClass('style1')
})


if($(window).scrollTop() == 0) { // 스크롤의 위치가 최상단이면 
    $('.top').hide();  // Top버튼을 숨긴다.(최상단에는 Top버튼이 필요없으므로 숨긴다.)
  }
  
  $('.top').on('click', function() { // Top버튼을 클릭하면
    $('html, body').animate({scrollTop:0}, 500); // 스크롤 최상단(0)으로 0.5초의 움직임으로 이동
    $('.top').hide(); // 그리고 Top버튼 숨긴다.
  });
  
  $(window).scroll(function() {  // scroll의 위치를 실시간으로 감지하기에 이와같은 것을 쓰는것이 좋다.
    if($(window).scrollTop() >= 800) { // 스크롤의 위치가 적어도 1000이상 일때부터
      $('.top').show();  // Top버튼을 보인다.
    } else {
      $('.top').hide(); // 1000미만이면 Top버튼 숨긴다.(1000까지는 스크롤 올려서 충분하기에 숨김)
    }
  });



})