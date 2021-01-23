'use strict';

//Active the button
const button = document.getElementById('enter');
const input = document.getElementById('userinput');

button.addEventListener('click', function () {
	if (input.value.length > 0) {
		const li = document.createElement('li');
		li.appendChild(document.createTextNode(input.value));
		document.querySelector('ul').appendChild(li);
		input.value = ''; //clear the box
	}
});

input.addEventListener('keydown', function (e) {
	if (e.key === 'Enter' && input.value.length > 0) {
		const li = document.createElement('li');
		li.appendChild(document.createTextNode(input.value));
		document.querySelector('ul').appendChild(li);
		input.value = ''; //clear the box
	}
});
