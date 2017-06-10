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
		fetchArticles(searchField.value);
		searchField.value = '';
	});
	
	function fetchImage(keyword) {
		// fetch an image from unsplash - responses are in json
		// The Unsplash API uses OAuth2 to authenticate and authorize Unsplash users.
		const req = new XMLHttpRequest();
		req.open('GET', `${unsplashUrl}${keyword}`);
		req.setRequestHeader('Authorization', `Client-ID ${unsplashAppID}`); // called after open, but before send
		req.onload = function () {
			let htmlContent = '';
			let data = JSON.parse(this.responseText);
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
				htmlContent = `<div id="error-no-image">No images available</div>`;
			}
			// append data to the page
			responseContainer.innerHTML = htmlContent;
		};
		req.onerror = function () {
			console.error(this.err.message);
		};
		req.send();
	}
	
	function fetchArticles(keyword) {
		let nytUrl = `${nytBaseUrl}${keyword}&api-key=${nytApikey}`;
		const req = new XMLHttpRequest();
		req.open('GET', nytUrl);
		// req.setRequestHeader();
		req.onload = function () {
			let htmlContent = '';
			const data = JSON.parse(this.responseText);
			if(data.response && data.response.docs && data.response.docs.length > 1) {
				let articles = data.response.docs;
				htmlContent = '<ul id="articles">';
				for (let article of articles) {
					let snippet = article.snippet;
					let title = article.headline.main;
					let url = article.web_url;
					htmlContent += `<li class="article">
										<h3><a href="${url}">${title}</a></h3>
										<p>${snippet}</p>
									</li>`;
				}
				htmlContent += '</ul>'
			} else {
				htmlContent = `<div id="error-no-image">No images available</div>`;
			}
			// add content to the page
			responseContainer.insertAdjacentHTML('beforeend', htmlContent);
		};
		req.onerror = function () {
			console.error(this.err.message);
		};
		req.send();
	}
	
	
	// default image shown when page first loads
	fetchImage('night sky');
	
})();
