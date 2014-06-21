
$(window).load(function(){

	// Page load animations
	$("#sub-header").css({top: -20, opacity: 0})
    	.animate({top: 0, opacity: 1}, 800);

	$("#social-panel").css({right: -20, opacity: 0})
    	.animate({right: 0, opacity: 1}, 800);

	$(".default-load").css({opacity: 0})
	.animate({opacity: 0}, 800)
	.animate({opacity: 1}, 800);

	// Prevent defalut on all buttons
	$("body").on("click", "button", function(event){
		event.preventDefault();
	});

	// Button click handlers
	$("#facebook-button").on("click", function(){
		window.open("https://www.facebook.com/vanlalhriata");
	})

	$("#twitter-button").on("click", function(){
		window.open("https://twitter.com/vanlal_hriata");
	})

	$("#so-button").on("click", function(){
		window.open("http://stackoverflow.com/users/2530736/vanlalhriata");
	})

});