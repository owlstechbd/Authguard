
// Sticky Navbar
window.addEventListener("scroll", function() {
  var header = document.getElementById("navbar");
  if (window.scrollY >= 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


//tab js
function techTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active-tab";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



// fillter pluging
var mixer = mixitup('.portfolio-grid');




  // scrolling top	
	$('.top').click(function(){
		$("html, body").animate({
			scrollTop:0

		},1000);
	});
	$(window).scroll(function(){
		var ourwindow = $(this).scrollTop();
		if(ourwindow<800){
			$('.top').fadeOut();
		}else{
			$('.top').fadeIn();
		}
	});

  // animation

  new WOW().init();