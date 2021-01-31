'use strict';
const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const colorRandom = document.querySelector('.color_random');
const body = document.getElementById('gradient');
const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);

function setGradient() {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

	css.textContent = body.style.background + ';';
}

function setRandomGradient() {
	const hex1 = randomColor1;
	const hex2 = randomColor2;
	body.style.background = `linear-gradient(to right, #${hex1}, #${hex2})`;
	css.textContent = body.style.background + ';';
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

colorRandom.addEventListener('click', setRandomGradient);
