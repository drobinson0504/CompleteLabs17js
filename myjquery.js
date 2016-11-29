
$(document).ready(function() {

	$("li").mouseover(function(){
		$(this).fadeTo("slow", 0.25);
	});
	 $("li").mouseleave(function(){
	 	$(this).fadeTo("slow", 1);
	 });

	$("li").click(function(){
		$(this).css({'color':  'red'});
		$(this).text("You Clicked It!!");
	});

	
})