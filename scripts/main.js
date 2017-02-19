var myImage = document.querySelector('img'); //creates variable tied to img tags

myImage.onclick = function() { //when img tags are clicked, call unnamed function
	var mySrc = myImage.getAttribute('src'); //creates cariable set to img's src attribute
	if(mySrc == 'images/flower.jpg') { //checks src for flower.jpg
		myImage.setAttribute ('src', 'images/other_flower.jpg'); //if it is, set it to the other flower
	}
	else {
		myImage.setAttribute ('src','images/flower.jpg'); //if not, change it to original flower
	}
}


var myButton = document.querySelector('button'); //gives var button properties
var myHeading = document.querySelector('h2'); //gives var h2 properties

function setUserName() {
	var myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Hello, ' + myName;
}

if(!localStorage.getItem('name')) { //checks if data exists
	setUserName(); //if not, call this function
} else { //else, write the message
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Hello, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}

