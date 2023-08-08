$(document).ready(function(){


    var i = 0;

    setInterval(function(){

    i++;
    if(i==4)i=0;

    console.log(i)

    //위로 올려라.
    $('.profile .proImg ul li').eq(i-1).css('top',0).stop().animate({'top':'-100%'},800);
    $('.profile .proImg ul li').eq(i).css('top','100%').stop().animate({'top':"0"},800)
    
    },3000);


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






let ht = $(window).height();

$('section').height(ht)

console.log(ht)
$(window).resize(function(){

        let ht = $(window).height();

$('section').height(ht)
}); //높이값을 찾아서 한페이지당 꽉 차게하기






$('section').mousewheel(function(event,delta){

        if(delta>0){
    
    
            let prev = $(this).prev().offset().top 
            //한페이지씩 딱딱 떨어지게 올릴 떄 (아래서 위로)
            $('html,body').stop().animate({scrollTop:prev},1400,'easeOutBounce')
        }
            else if(delta<0){
    
                let next = $(this).next().offset().top //한페이지씩 딱딱 떨어지게 올릴 떄 (위에서 아래로라 next)
            $('html,body').stop().animate({scrollTop:next},1400,'easeOutBounce')
            }
    
    
    })
    






})//제이쿼리 끝