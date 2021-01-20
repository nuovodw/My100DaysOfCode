'use strict';

const buttons = document.querySelectorAll('.drum');
const percussion = new Audio('sounds/tom-1.mp3');

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function () {
		this.style.color = 'white';
		percussion.play();
	});
}
