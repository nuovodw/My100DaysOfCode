//1. open modal window

//1a. select the elements we need for DOM manipulations and assign a vairable to each class

const openModalWindow = document.querySelectorAll('.show-modal'); //create NodeList
const closeModalWindow = document.querySelector('.close-modal');
const theModalWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeWindow = function () {
  theModalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openWindow = function () {
  theModalWindow.classList.remove('hidden'); //no DOT!!
  overlay.classList.remove('hidden');
};

//1b. Click the buttons

for (i = 0; i < openModalWindow.length; i++) {
  openModalWindow[i].addEventListener('click', openWindow);
}

//2. Close modal window by a) clicking x b)cliking overlay
closeModalWindow.addEventListener('click', closeWindow);
overlay.addEventListener('click', closeWindow);

// c) by pressing the 'escape' key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !theModalWindow.classList.contains('hidden')) {
    closeWindow();
  }
});

/*
// PRE-DRY Version
//1b. Click the buttons

for (i = 0; i < openModalWindow.length; i++) {
  console.log(openModalWindow[i].textContent); // testing -- use textContent to show texts
  openModalWindow[i].addEventListener('click', function () {
    theModalWindow.classList.remove('hidden'); //no DOT!!
    overlay.classList.remove('hidden');
  });
}

//2. Close modal window by a) clicking x b)cliking overlay

closeModalWindow.addEventListener('click', function () {
  theModalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  theModalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
});
*/
