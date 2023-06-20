$(document).ready(function(){

    // 사이트를 열자마자 나오는 영상, skip


    $('html,body').stop().animate({scrollTop:0},10)



    $('.vid001 div').click(function(){

        $('.vid001').css({'display':'none'})
    })



    // bar 슬라이드
    let i = 0;

    setInterval(function(){

        i++;
        if(i==3) i=0;


        $('.bar li').eq(i-1).css('left','0').stop().animate({'left':'-100%'},800)
        $('.bar li').eq(i).css('left','100%').stop().animate({'left':'0'},800)

    },5000)

    $('.left001').click(function(){
        
    $('.bar li').eq(i-1).css('left','0').stop().animate({'left':'100%'},800)
    $('.bar li').eq(i).css('left','-100%').stop().animate({'left':'0'},800)


    })

    $('.right001').click(function(){

    $('.bar li').eq(i-1).css('left','0').stop().animate({'left':'-100%'},800)
    $('.bar li').eq(i).css('left','100%').stop().animate({'left':'0'},800)

    })
    

    // 메인이미지 슬라이드

    let s = 0
    $('.boxB ul').mousewheel(function(event,delta){


    
        if(delta>0){
            if(i>0)s--   

            $('.boxB ul').stop().animate({'left':715*s+'px'},5000)
        }

        if(delta<0){
        if(s<2)s++


$('.boxB ul').stop().animate({'left':-715*s+'px'},5000)

if(s==2){

}
}


    })










































    
}) //끝