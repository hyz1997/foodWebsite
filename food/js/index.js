$(function(){
	$(".eight-show ul li").hover(function(){
         $(this).find(".mask").slideDown(1000);  
    },function(){
         $(this).find(".mask").slideUp(1000);  
    });
    $(".dropdown").hover(function() {
    	$(this).find(".dropdown-menu").show();
    },function() {
    	$(this).find(".dropdown-menu").hide();
    })

})