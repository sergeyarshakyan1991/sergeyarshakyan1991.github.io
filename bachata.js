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
