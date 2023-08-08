$(document).ready(function(){


    $(window).scroll(function(){

        let sc = $(this).scrollTop()

        $('section article').eq(0).css({'transform':'translateZ('+(0+sc)+'px)'})
        $('section article').eq(1).css({'transform':'translateZ('+(-5000+sc)+'px)'})
        $('section article').eq(2).css({'transform':'translateZ('+(-10000+sc)+'px)'})
        $('section article').eq(3).css({'transform':'translateZ('+(-15000+sc)+'px)'})
    })

    $('article').mousemove(function(e){

        let x = e.pageX;
        let y = e.pageY;
    
        console.log(x,y)
    
        $('.p1').css({'top':500+(y/100),'right':950+(x/100)})
        $('.p2').css({'top':60-(y/50),'right':1300-(x/50)})
        $('.p3').css({'top':130-(y/50),'right':100-(x/50)})
        $('.p4').css({'top':10-(y/100),'left':865-(x/100)})
        $('.p5').css({'top':400-(y/80),'left':1500-(x/80)})
        $('.p6').css({'top':-10-(y/120),'left':860-(x/120)})
        $('.p7').css({'top':300-(y/20),'left':700-(x/120)})
        $('.p8').css({'bottom':250-(y/20),'left':1350-(x/50)})
        $('.p9').css({'top':120-(y/100),'left':700-(x/50)})
        $('.p10').css({'top':20-(y/200),'left':500-(x/100)})
        $('.p11').css({'top':130-(y/200),'left':800-(x/100)})



















})


})