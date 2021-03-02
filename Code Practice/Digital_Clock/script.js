'use strict';
const clock = document.querySelector('.clock');

const newClock = () => {
	const currentInfo = new Date();
	const hour = currentInfo.getHours();
	const minute = currentInfo.getMinutes();
	const second = currentInfo.getSeconds();
	const clockTemplate = `
  <span>${hour}</span> :
  <span>${minute}</span> :
  <span>${second}</span>`;
	clock.innerHTML = clockTemplate;
};

setInterval(newClock, 1000);
