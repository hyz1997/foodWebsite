$(function(){
	$(".S_food img").hover(function() {
		$(this).css("width","106%");
		$(this).css("height","106%");

	});
	$(".S_food img").mouseout(function() {
		$(this).css("width","100%");
		$(this).css("height","100%");

	})
	$(".S_foodshow ul li img").hover(function() {
		$(this).css("width","150px");
		$(this).css("height","125px");

	});
	$(".S_foodshow ul li img").mouseout(function() {
		$(this).css("width","146px");
		$(this).css("height","121px");

	})
})