$(document).ready(function(){

    // 사이트를 열자마자 나오는 영상, skip


    $('html,body').stop().animate({scrollTop:0},10)



    $('.vid001 div').click(function(){

        $('.vid001').css({'display':'none'})
    })

    // skip을 누르면 video가 감춰져라.

    $('.vid001 .skip').click(function(){

        $('.vedio').css({'display':'none'})
    })



    // bar가 자동슬라이드되라.
    let i = 0;

    setInterval(function(){

        i++;
        if(i==3) i=0;


        $('.bar li').eq(i-1).css('left','0').stop().animate({'left':'-100%'},800)
        $('.bar li').eq(i).css('left','100%').stop().animate({'left':'0'},800)

    },5000)


    //bar의 좌우 컨트롤을 했을 때 이전, 다음으로 바뀌어라.


    $('.left001').click(function(){
        
    $('.bar li').eq(i-1).css('left','0').stop().animate({'left':'100%'},800)
    $('.bar li').eq(i).css('left','-100%').stop().animate({'left':'0'},800)


    })

    $('.right001').click(function(){

    $('.bar li').eq(i-1).css('left','0').stop().animate({'left':'-100%'},800)
    $('.bar li').eq(i).css('left','100%').stop().animate({'left':'0'},800)

    })


    
    // header에서 스크롤 시 header에서 화면이 고정되라.






    // 스크롤을 내렸을 때, 사진이 한개씩 이동되라.


    let s = 0
    $('.boxB ul').mousewheel(function(event,delta){

        event.preventDefault()
    
        if(delta>0){
            if(i>=0)s--;  

        $('.boxB ul').stop().animate({'left':-715*s+'px'},1200)
        }

        if(delta<0){
        if(s<6)s++;
        console.log(s)


$('.boxB ul').stop().animate({'left':-715*s+'px'},1200)
        }



});


    // 가장 오른쪽 이미지에 왔을 때 section이 보여져라.












// 볼드컬렉션

// imglist의 p를 mouseEnter 했을 때, 각 순번을 찾고 imgBox p의 순번에 맞춰 해당 이미지가 크게 보여라.

// gallery001 설정
$('.gallery001 .imglist p').mouseenter(function(e){
let m = $(this).index()


console.log(m)
$('.gallery001 .imgBox p').css({'opacity':'0'})
$('.gallery001 .imgBox p').eq(m+1).css({'opacity':'1'})

});


// gallery002 설정
$('.gallery002 .imglist p').mouseenter(function(e){
    let m = $(this).index()
    
    
    console.log(m)
    $('.gallery002 .imgBox p').css({'opacity':'0'})
    $('.gallery002 .imgBox p').eq(m+1).css({'opacity':'1'})
    });


// gallery003 설정
$('.gallery003 .imglist p').mouseenter(function(e){
    let m = $(this).index()
        
        
    console.log(m)
    $('.gallery003 .imgBox p').css({'opacity':'0'})
    $('.gallery003 .imgBox p').eq(m+1).css({'opacity':'1'})
    });




//right002를 클릭했을 때, 다음 gallery가 보여라.
let aa= 0;
$('.box4 .right002').click(function(){
    if(aa<2)aa++;
    $('.box4 .gallery>div').removeClass('on')
    $('.box4 .gallery>div').eq(aa).addClass('on')

});

$('.box4 .left002').click(function(){
    if(aa>0)aa--;
    $('.box4 .gallery>div').removeClass('on')
    $('.box4 .gallery>div').eq(aa).addClass('on')




    });





// 하단로고 효과








































    
}) //제이쿼리 끝