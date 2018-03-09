$(document).ready(function(){
  $(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if($('#toggler').hasClass('show')){	
		}else{
			if (scroll > 20){
				$(".navbg").css("background" , "rgba(37, 37, 37, 0.99)");
				$(".navbar-brand").css("fontSize" , "24px");
				$("#bars").css("fontSize" , "20px");
			}else{
				$(".navbg").css("background" , "#f1f1f1");
				$(".navbg").css("background" , "transparent");
				$(".navbar-brand").css("fontSize" , "30px");	
				$("#bars").css("fontSize" , "24px");
			}
		}
	});
 });

$('a[href^="#"]').on('click', function (e) {
	e.preventDefault();
	var target = $(e.currentTarget).attr('href');

	$('html,body').animate({
		scrollTop: $(target).offset().top	
	},600);
});

$("#menuIcon").click(function(){
	if($("#bars").hasClass("fa fa-bars")){
		$("#bars").removeClass(".fa fa-bars").addClass("fa fa-close");
		$("#fixi").css("background" , "rgba(37, 37, 37, 0.99)");
	}else{
		$("#bars").removeClass(".fa fa-close").addClass("fa fa-bars");
		$("#fixi").css("background" , "transparent");
	}
});

window.sr = ScrollReveal();
  sr.reveal("#aligny", {
    duration: 1600,
    distance: "200px",
    origin:"right",
  });
  sr.reveal("#landingImg>div>h1", {
  	delay: 600,
    duration: 1200,
    origin:"right",
  });
  sr.reveal("#landingImg>div>p", {
  	delay: 1000,
    duration: 1200,
    origin:"right",
  });
  sr.reveal("#landingImg>div>a", {
  	delay: 1400,
    duration: 1200,
    origin:"right",
  });
  sr.reveal(".showcase-left", {
    duration: 2000,
    origin:"left",
  });
  sr.reveal(".showcase-right h2", {
    duration: 1600,
    origin:"right",
  });
  sr.reveal(".showcase-right p", {
  	delay: 200,
    duration: 1600,
    origin:"right",
  });
  sr.reveal(".mission", { 
    duration: 1200,
    origin:"bottom" 
  }, 300);
  sr.reveal(".card", { 
    delay: 700,
    duration: 1200,
    origin:"bottom" 
  }, 300);
  sr.reveal("#contact form", {
  	delay: 200,
    duration: 1600,
    origin:"right",
  });