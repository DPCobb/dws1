/*Daniel Cobb
Nov 17, 2015
DWS1 Project4
Form Interactivity with js*/

function formOn(){
	var welcomeMsg = document.getElementById('welcome');
	var user = document.getElementById('username').value;
	var alert = document.getElementById('alert');
	if (/^[a-z, A-Z]+$/.test(user)){
		document.getElementById('form').style.visibility = "visible";
		document.getElementById('form').disabled = false;
		document.getElementById('username').hidden = true;
		document.getElementById('userlabel').hidden = true;
		alert.hidden = true;
		welcomeMsg.innerHTML = "Hi, " + user + " thanks for stopping by! Sign up for our newsletter below!";
		document.getElementById('uname').value = user;
	}
	else {
		alert.style.visibility = "visible";
		alert.innerHTML = "Please enter your name using only letters!";
	}
	
}