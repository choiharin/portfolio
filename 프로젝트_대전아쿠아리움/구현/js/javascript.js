$(document).ready(function(){


    // 프로그램 슬라이드
var i = 0;

setInterval(function(){
    i++;
    if(i==3)i=0
 
    $('.box2-2 ul li').eq(i-1).css('left','0').stop().animate({'left':'-700px'},800);
    $('.box2-2 ul li').eq(i).css('left','700px').stop().animate({'left':'0'},800)


},5000);

    $('.arrow001 .left001').click(function(){
        
    $('.box2-2 ul li').eq(i-1).css('left','0').stop().animate({'left':'700px'},800)
    $('.box2-2 ul li').eq(i).css('left','-700px').stop().animate({'left':'0'},800)


    })

    $('.arrow001 .right001').click(function(){
        
      $('.box2-2 ul li').eq(i-1).css('left','0').stop().animate({'left':'-700px'},800)
      $('.box2-2 ul li').eq(i).css('left','700px').stop().animate({'left':'0'},800)
  
  
      })



    
    // 체험안내 슬라이드
var ii = 0;

setInterval(function(){
    ii++;
    if(ii==5)ii=0
    console.log(ii)
 
    $('.box3-2 ul li').eq(ii-1).css('left','0').stop().animate({'left':'-700px'},800);
    $('.box3-2 ul li').eq(ii).css('left','700px').stop().animate({'left':'0'},800)


},4000);


$('.arrow002 .left002').click(function(){
        
  $('.box3-2 ul li').eq(ii-1).css('left','0').stop().animate({'left':'700px'},800)
  $('.box3-2 ul li').eq(ii).css('left','-700px').stop().animate({'left':'0'},800)


  })

  $('.arrow002 .right002').click(function(){
      
    $('.box3-2 ul li').eq(ii-1).css('left','0').stop().animate({'left':'-700px'},800)
    $('.box3-2 ul li').eq(ii).css('left','700px').stop().animate({'left':'0'},800)


    })




// 카드뉴스 슬라이드
var iii = 0;

setInterval(function(){
    iii++;
    if(iii==4)iii=0

 
    $('.trailer_3 ul li').eq(iii-1).css('left','0').stop().animate({'left':'-500px'},800);
    $('.trailer_3 ul li').eq(iii).css('left','500px').stop().animate({'left':'0'},800)


},4000);



// 백그라운드 효과

var iiii=0;

setInterval(function(){

 iiii++;
 if(iiii==3)iiii=0

 $('.background ul li').eq(iiii-1).stop().animate({'opacity':'0'},800);
 $('.background ul li').eq(iiii).stop().animate({'opacity':'1'},800)

},3000)



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




    //층별 안내 hover

    
$('.roomBox li').mouseenter(function(){
  // 순번찾기
  let roB= $(this).index()
  console.log(roB)

      $('.txtBox').css({'display':'block'});
      $('.txtBox p').removeClass('on')
      $('.txtBox p').eq(roB).addClass('on')


  
  })






}) //제이쿼리 끝