'use strict';
let randomNumber1 = Math.floor(Math.random() * 6 + 1); //1-6
let randomDiceImage = 'dice' + randomNumber1 + '.png'; //dice images
let randomImageSource = 'images/' + randomDiceImage; //dice images from folder

let image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', randomImageSource);

let randomNumber2 = Math.floor(Math.random() * 6 + 1);
let randomImageSource2 = 'images/dice' + randomNumber2 + '.png';
document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2);

if (randomNumber1 > randomNumber2) {
	document.querySelector('h1').innerHTML = 'Player 1 wins! 🚩';
} else if (randomNumber1 < randomNumber2) {
	document.querySelector('h1').innerHTML = 'Player 2 wins! 🚩';
} else {
	document.querySelector('h1').innerHTML = 'Draw';
}
