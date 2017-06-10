'use strict';
import {nytApikey, unsplashAppID} from './settings.js';

(function () {
	const form = document.querySelector('#search-form');
	const searchField = document.querySelector('#search-keyword');
	const responseContainer = document.querySelector('#response-container');
	const unsplashUrl = 'https://api.unsplash.com/search/photos?page=1&query=';
	const nytBaseUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=';
	
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		responseContainer.innerHTML = '';
		fetchImage(searchField.value);
		// fetchArticles(searchField.value);
		searchField.value = '';
	});
	
	function fetchImage(keyword) {
		fetch(`${unsplashUrl}${keyword}`, {
			method: 'GET',
			headers: {
				Authorization: `Client-ID ${unsplashAppID}`
			}
		})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			// display image on screen
			addImage(data, keyword);
		})
		.catch((err) => console.error(err));
	}
	
	function addImage(data, keyword) {
		let htmlContent = '';
		if (data && data.results && data.results[0]) {
			let firstImageObj = data.results[0]; // array or 10 results
			let imageUrl = firstImageObj.urls.regular;
			let user = firstImageObj.user.name;
			let portfolioLink = firstImageObj.user.links.html;
			htmlContent = `<figure>
								<img src="${imageUrl}" alt="${keyword}">
								<figcaption>${keyword} by <a href="${portfolioLink}" target="_blank">${user}</a></figcaption>
							</figure>`
		} else {
			htmlContent = `<div class="error-no-image error">No images available</div>`;
		}
		// append data to the page
		responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
	}
	
	// default image shown when page first loads
	fetchImage('night sky');
	
})();
