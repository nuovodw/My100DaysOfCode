'use strict';

//Active the button
const button = document.getElementById('enter');
const input = document.getElementById('userinput');

function inputLength() {
	return input.value.length;
}

function createListElement() {
	const li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	document.querySelector('ul').appendChild(li);
	input.value = ''; //clear the box
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterEnter(e) {
	if (e.key === 'Enter' && inputLength() > 0) {
		createListElement();
	}
}

button.addEventListener('click', addListAfterClick);

input.addEventListener('keydown', addListAfterEnter);
