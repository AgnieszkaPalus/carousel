
$(document).ready(function(){
	// Set the interval to be 5 seconds
	var t = setInterval(function(){
		$("#carousel ul").animate({marginLeft:-400},1000,function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});
		})
	},5000);
});