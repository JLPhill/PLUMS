// When the user scrolls the page, execute myFunction
window.onscroll = function(){myFunction(),myFunction2()};

// Get the navbar
var navbar = document.getElementById("header");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
	  
    navbar.classList.remove("sticky");
  }
}//

var prevScrollpos = window.pageYOffset;

function myFunction2() {
  var currentScrollPos = window.pageYOffset;
//   if (window.innerWidth > 768 && prevScrollpos > currentScrollPos) 

  if (window.innerWidth > 768 && currentScrollPos ==0) {
    document.getElementById("header").style.height = "120px";
	// document.getElementById("logopicture").style.removeProperty('height');
	// document.getElementById("logoposition").style.marginTop = "75px";
  } else if  (window.innerWidth > 600){
	document.getElementById("header").style.height = "100px";
	// document.getElementById("logopicture").style.height = "80px";
	// document.getElementById("logoposition").style.marginTop = "20px";
  } else {

	}
  prevScrollpos = currentScrollPos;
}