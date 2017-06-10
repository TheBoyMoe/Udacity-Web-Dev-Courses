'use strict';
import {nytApikey, unsplashAppID} from './settings.js';

(function () {
	const form = document.querySelector('#search-form');
	const searchField = document.querySelector('#search-keyword');
	const responseContainer = document.querySelector('#response-container');
	const unsplashUrl = 'https://api.unsplash.com/search/photos?page=1&query=';
	let keyword = 'night sky';
	
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		responseContainer.innerHTML = '';
		keyword = searchField.value;
	});
	
	// fetch an image from unsplash - responses are in json
	// The Unsplash API uses OAuth2 to authenticate and authorize Unsplash users.
	const req = new XMLHttpRequest();
	req.open('GET', `${unsplashUrl}${keyword}`);
	req.setRequestHeader('Authorization', `Client-ID ${unsplashAppID}`); // called after open, but before send
	req.onload = function () {
		console.log(JSON.parse(this.responseText));
	};
	req.onerror = function(){
		console.error(this.err.message);
	};
	req.send();
	
})();
