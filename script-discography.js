function openNav() {
	$('body').addClass('overflow');
	document.getElementById("mySidenav").style.width = "30%";
	document.getElementById("mySidenavSide").style.width = "70%";
	document.getElementById("albumcover").style.opacity = "1";
}
function closeNav() { 
	$('body').removeClass('overflow');
	document.getElementById("mySidenav").style.width = "0%";
	document.getElementById("mySidenavSide").style.width = "0%";
	document.getElementById("albumcover").style.opacity = "0";
}
