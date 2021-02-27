'use strict';

const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const gerenateTemplate = (todo) => {
	const newItem = `<li
  class="list-group-item d-flex justify-content-between align-items-center"
>
  <span>${todo}</span>
  <i class="far fa-trash-alt delete"></i>
</li>`;

	list.innerHTML += newItem;
};

// ADDING to the list

addForm.addEventListener('submit', (e) => {
	e.preventDefault(); // prevents page from reloading

	// .add --> "name" of form field
	// attach trim() to the value
	const todo = addForm.add.value.trim();

	// if .length returns 0 --> 0 is a falsy value
	if (todo.length) {
		gerenateTemplate(todo);

		// clear the input field after submitting
		addForm.reset();
	}
});

// REMOVING from the list
// use event delegation --> add listener to the container, not individual items

list.addEventListener('click', (e) => {
	// the trash can icon contains class ".delete" --> delete only if what you click contains that class.
	if (e.target.classList.contains('delete')) {
		//remove the parent element of the item
		e.target.parentElement.remove();
	}
});

// SEARCHING/FILTERING the list
// Match the characters in the serach field, find them, and hide the rest

// Filter to do list
const filterTodos = (newCharacter) => {
	//Convert HTMLlist to Array
	Array.from(list.children)
		.filter((todo) => !todo.textContent.toLowerCase().includes(newCharacter))
		.forEach((todo) => todo.classList.add('filtered'));

	Array.from(list.children)
		.filter((todo) => todo.textContent.toLowerCase().includes(newCharacter))
		.forEach((todo) => todo.classList.remove('filtered'));
};

// listen for KEYUP event directly in <input> field , not .search field (which is a 'submit' event.)
search.addEventListener('keyup', () => {
	const newCharacter = search.value.trim().toLowerCase();
	filterTodos(newCharacter);
});
