/*
 Instructions:
 (1) Refactor .forEach below to create a sequence of Promises that always resolves in the same
 order it was created.
 (a) Fetch each planet's JSON from the array of URLs in the search results.
 (b) Call createPlanetThumb on each planet's response data to add it to the page.
 (2) Use developer tools to determine if the planets are being fetched in series or in parallel.
 */

// Inline configuration for jshint below. Prevents `gulp jshint` from failing with quiz starter code.
/* jshint unused: false */

(function(document) {
	'use strict';
	
	var home = null;
	
	/**
	 * Helper function to show the search query.
	 * @param {String} query - The search query.
	 */
	function addSearchHeader(query) {
		home.innerHTML = '<h2 class="page-title">query: ' + query + '</h2>';
	}
	
	/**
	 * Helper function to create a planet thumbnail.
	 * @param  {Object} data - The raw data describing the planet.
	 */
	function createPlanetThumb(data) {
		var pT = document.createElement('planet-thumb');
		for (var d in data) {
			pT[d] = data[d];
		}
		home.appendChild(pT);
	}
	
	/**
	 * XHR wrapped in a promise.
	 * @param  {String} url - The URL to fetch.
	 * @return {Promise}    - A Promise that resolves when the XHR succeeds and fails otherwise.
	 */
	function get(url) {
		return fetch(url, {
			method: 'get'
		});
	}
	
	/**
	 * Performs an XHR for a JSON and returns a parsed JSON response.
	 * @param  {String} url - The JSON URL to fetch.
	 * @return {Promise}    - A promise that passes the parsed JSON response.
	 */
	function getJSON(url) {
		return get(url).then(function(response) {
			return response.json();
		});
	}
	
	window.addEventListener('WebComponentsReady', function() {
		home = document.querySelector('section[data-route="home"]');
		/*
		 Refactor this code!
		 */
		getJSON('../data/earth-like-results.json')
			.then(function(response) {
				let sequence = Promise.resolve();
				addSearchHeader(response.query);
				
				// each promise must wait for the promise before it to resolve before it
				// to resolve before executing. Each getJSON must wait for the one before
				// it to succeed before it can be executed - with this solution we're adding
				// to the sequence - each time sequence gets longer by two then, one to get the data, the
				// other to create the thumbnail - although the thumbnails are shown in the
				// right order because it's happening in series there's a delay before the
				// last thumbnail is shown - check the network tab when the page loads
				response.results.forEach((url) => {
					sequence = sequence.then(() => { // adding to the sequence creates a series
						return getJSON(url);
					})
					.then(createPlanetThumb);
				});
				
				
				// OR performing the task in parallel
				response.results.forEach((url) => {
					// overwriting sequence each iteration leads to parallel execution,
					// however ther is no guarantee about the order of execution
					// - for most apps this is fine - browsers download many resources in parallel
					sequence.then(() => {
						return getJSON(url);
					})
						.then(createPlanetThumb);
				})
				
				
			})
			.catch((console.error));
	});
})(document);
