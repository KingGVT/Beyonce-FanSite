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
			