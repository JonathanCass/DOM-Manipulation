$(document).ready(function(){
	var slideCheck = true;

	if(slideCheck){
		$( "#slider2" ).click(function() {
			$(this).toggleClass("slide2")
		})
	}
	$( "#slider3" ).click(function() {
		$(this).toggleClass("slide3")
		slideCheck = !slideCheck
	})	
})