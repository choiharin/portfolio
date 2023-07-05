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


})