$(document).ready(function(){
  $("#scroll").click(function(){
$('body').animate({'scrollTop':0},1000);
$('html').animate({'scrollTop':0},1000);
$("#scroll").css({
  'background':'#120808',
  'border':'2px solid red'

});
  });
});

setTimeout("$('#logo').get(0).style.border='2px solid yellow'",4000);
setTimeout("$('#logo').get(0).style.border='2px solid #5765b4'",8000);
setTimeout("$('#logo').get(0).style.border='2px solid #735D46'",12000);

setTimeout("$('#scroll').get(0).style.border='2px solid blue'",6000);
setTimeout("$('#scroll').get(0).style.border='2px solid yellow'",8000);
setTimeout("$('#scroll').get(0).style.border='2px solid violet'",10000);
setTimeout("$('#scroll').get(0).style.border='2px solid #735D46'",12000);
setTimeout("$('#scroll').get(0).style.border='2px solid green'",15000);

$(document).ready(function(){
$('#but').click(function(){
  $('.div_1').css({'display':'block',});
// $('button').css({'display':'none',});
$('#but').animate({'width':'40px','height':'80px','margin-left':'46%','margin-top':'130px'},1000);

$('.qwe1').animate({'margin-left':'20%',},1000);

$('.qwe2').animate({'margin-left':'44%',},1000);

$('.qwe3').animate({'margin-left':'68%',},1000);

$('.qwe4').animate({'margin-left':'18%',},1000);

$('.qwe5').animate({'margin-left':'70%',},1000);

$('.qwe6').animate({'margin-left':'20%',},1000);

$('.qwe7').animate({'margin-left':'44%',},1000);

$('.qwe8').animate({'margin-left':'68%',},1000);


});
});
