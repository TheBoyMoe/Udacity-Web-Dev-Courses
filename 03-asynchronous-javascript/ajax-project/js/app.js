'use strict';

(function () {
	const form = document.querySelector('#search-form');
	const searchField = document.querySelector('#search-keyword');
	const responseContainer = document.querySelector('#response-container');
	let keyword;
	
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		responseContainer.innerHTML = '';
		keyword = searchField.value;
	})
	
})();
