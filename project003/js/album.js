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
})