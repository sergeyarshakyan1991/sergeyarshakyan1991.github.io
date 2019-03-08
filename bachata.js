$(document).ready(function(){
  $("#scroll").click(function(){
$('body').animate({'scrollTop':0},3000);
$('html').animate({'scrollTop':0},3000);
$("#scroll").css({
  'background':'#120808',
  'border':'2px solid red'

});
  });
// $('.sec_1_1').toggle(1000).delay(3000).toggle(1000);




//
// setTimeout("$('#logo').get(0).style.border='2px solid yellow'",4000);
// setTimeout("$('#logo').get(0).style.border='2px solid #5765b4'",8000);
// setTimeout("$('#logo').get(0).style.border='2px solid #735D46'",12000);

setTimeout("$('#scroll').get(0).style.border='2px solid blue'",6000);
setTimeout("$('#scroll').get(0).style.border='2px solid yellow'",8000);
setTimeout("$('#scroll').get(0).style.border='2px solid violet'",10000);
setTimeout("$('#scroll').get(0).style.border='2px solid #735D46'",12000);
setTimeout("$('#scroll').get(0).style.border='2px solid green'",15000);


// $('#but').click(function(){
//   $('.div_1').css({'display':'block',});
//
// $('#but').animate({'width':'40px','height':'80px','margin-left':'46%','margin-top':'130px'},1000);


// $(document).ready(function(){
$('#img2').click(function(){
  if ($('#img1').css('transform')=='none') {
    $('#img1').css({'transform':'rotate(-20deg)'});
    $('.div_1').css({'display':'block'});
  }else {
    $('#img1').css({'transform':''});
    $('.div_1').css({'display':'none'});
  }
});
  // });

// var $focus=$('#but').css({'width':'40px','height':'80px',});
// $('#but').click(function(){
//
// if($focus=true){
// var $chka=$('#but').css({'display':'none',});
//   if($chka=true){
//     $('.txt').css({'display':'block'});
//   }
// }else{
//   document.write('hello');
// }
//   });



$('.qwe1').animate({'margin-left':'20%',},10000);

$('.qwe2').animate({'margin-left':'44%',},10000);

$('.qwe3').animate({'margin-left':'68%',},10000);

$('.qwe4').animate({'margin-left':'18%',},10000);

$('.qwe5').animate({'margin-left':'70%',},10000);

$('.qwe6').animate({'margin-left':'20%',},10000);

$('.qwe7').animate({'margin-left':'44%',},10000);

$('.qwe8').animate({'margin-left':'68%',},10000);
// });

// $('#but1').click(function(){
// $('.div_1').show();
// $('.txt').show();
// $('#but').hide();
// $('.qwe1').animate({'margin-left':'20%',},1000);
//
// $('.qwe2').animate({'margin-left':'44%',},1000);
//
// $('.qwe3').animate({'margin-left':'68%',},1000);
//
// $('.qwe4').animate({'margin-left':'18%',},1000);
//
// $('.qwe5').animate({'margin-left':'70%',},1000);
//
// $('.qwe6').animate({'margin-left':'20%',},1000);
//
// $('.qwe7').animate({'margin-left':'44%',},1000);
//
// $('.qwe8').animate({'margin-left':'68%',},1000);
// });

// $('#but2').click(function(){
// $('.div_1').hide();
// $('.txt').hide();
// });

});
