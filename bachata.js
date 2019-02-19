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
setTimeout("$('#scroll').get(0).style.border='2px solid blue'",2000);
setTimeout("$('#scroll').get(0).style.border='2px solid yellow'",3000);
setTimeout("$('#scroll').get(0).style.border='2px solid violet'",4000);
