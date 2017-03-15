$(document).ready(function(){
	var sPos = 0
	$( "#slider1" ).click(function() {
		switch(sPos){
			case 0:
				$("#slider3").addClass("slide3")
				sPos = 1
				break;
			case 1:
				$("#slider2").addClass("slide2")
				sPos = 2
				break;
			case 2:
				$("#slider2").removeClass("slide2")
				sPos = 1
				break;
		}
	})
	$( "#slider2" ).click(function() {
		switch(sPos){
			case 0:
				$("#slider3").addClass("slide3")
				sPos = 1
				break;
			case 1:
				$("#slider2").addClass("slide2")
				sPos = 2
				break;
			case 2:
				$("#slider2").removeClass("slide2")
				sPos = 1
				break;	
		}
	})
	$( "#slider3" ).click(function() {
		switch(sPos){
			case 0:
				$("#slider3").addClass("slide3")
				sPos = 1
				break;
			case 1:
				$("#slider3").removeClass("slide3")
				sPos = 0
				break;
			case 2:
				$("#slider2").removeClass("slide2")
				sPos = 1
				break;	
		}
	})
})


