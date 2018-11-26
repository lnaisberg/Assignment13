$(document).ready(function(){
	
	var pageNum;
	//var total_pages = 9;
	var items_per_page = 10;

	$.ajax({
		url: "https://swapi.co/api/people/?",
		type: "GET",
		datatType: "JSON",
		data: {
        	page: pageNum
        },
		success: function(data) {
            console.log(data);
            for (var i = 0; i < items_per_page; i++)
            {
            	console.log(data.results[i].name);
            	$("#"+i+"").css("background-image", "url(images/" + i + ".jpg)");
            	/*$("." + i + "").css("background-image", "url(images/" + i + "p.jpg)");
				$(".info." + i +"").append(data.results[i].name);*/

				$(".main-pic." + i + ":nth-child(1n)").css("background-image", "url(images/" + i + "p.jpg)");
				$(".info." + i +"").append("<h2>" + data.results[i].name + "</h2>");	
				$(".info." + i +"").append("<p>Height: " + data.results[i].height + " cm</p>");
				$(".info." + i +"").append("<p>Weight: " + data.results[i].mass + " kg</p>");
				$(".info." + i +"").append("<p>Birth year: " + data.results[i].birth_year + "</p>");

				/*$("#" + i + "").click(function(){
					$('html, body').animate({
	    				scrollTop: $(".profile." + i + "").offset().top
					}, 800);
				});*/


            }
        },
        error: function(data, textStatus, errorThrown) {
        	console.log("Error");
            console.log(errorThrown);
        }
	})

	$("#0").click(function(){
		$('html, body').animate({
	    	scrollTop: $(".profile.0").offset().top
		}, 800);
	});

	$("#1").click(function(){
		$('html, body').animate({
	    	scrollTop: $(".profile.1").offset().top
		}, 800);
	});

	$("#2").click(function(){
		$('html, body').animate({
	    	scrollTop: $(".profile.2").offset().top
		}, 800);
	});

	$("#3").click(function(){
		$('html, body').animate({
	    	scrollTop: $(".profile.3").offset().top
		}, 800);
	});

	$("#4").click(function(){
		$('html, body').animate({
	    	scrollTop: $(".profile.4").offset().top
		}, 800);
	});

	$("#5").click(function(){
		$('html, body').animate({
	    	scrollTop: $(".profile.5").offset().top
		}, 800);
	});

	$("#6").click(function(){
		$('html, body').animate({
	    	scrollTop: $(".profile.6").offset().top
		}, 800);
	});

	$("#7").click(function(){
		$('html, body').animate({
	    	scrollTop: $(".profile.7").offset().top
		}, 800);
	});

	$("#8").click(function(){
		$('html, body').animate({
	    	scrollTop: $(".profile.8").offset().top
		}, 800);
	});

	$("#9").click(function(){
		$('html, body').animate({
	    	scrollTop: $(".profile.9").offset().top
		}, 800);
	});

	$(".top").click(function(){
		$('html, body').animate({
	    	scrollTop: $("body").offset().top
		}, 800);
	});






})