function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("topnavi").style.top = "0";
	} else {
		document.getElementById("topnavi").style.top = "-56px";
	}
}
$(document).ready(function(){
  $("#topnavi a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){
        window.location.hash = hash;
      });
    }
  });
});
$(document).ready(function(){
	$('#trigger-icon1').click(function(){
		$('#mobilem').slideToggle('slow');
		$('body').toggleClass('overflow');
	});
});
function openNav() {
	document.getElementById("mySidenav").style.width = "100%";
	$('body').addClass('overflow');
}

function closeNav() { 
	document.getElementById("mySidenav").style.width = "0";
	$('body').removeClass('overflow');
}
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function myFunction1() {
	document.getElementById("myDropdown1").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

