/*
This quiz was going to be the last quiz in the course. It's a bit crazy. And it's difficult. And in all reality you'll probably never need to (or want to!) write anything like this in real life.

But! As I was discussing it with Art, our Director of Engineering, he asked me where he could find the code so that he could turn this challenge into an interview question. So I figured, "why not?"

Here it is as a bonus question.

Requirements

I want you to write code that is capable of:

 * requesting planet data and creating planet thumbnails using Promises (just like you've done for the whole second lesson).
 * executing the network requests in parallel (similar to the .map and Promise.all() quizzes).
 * creating the thumbnails in the same order as the Promises were created (similar to the .forEach and Promise.all() quizzes).
 * not waiting for all network requests to settle before creating thumbnails. Thumbnails should be created as soon as all of the Promises before them have settled (a combination of all the array quizzes).

Feel free to change any or all of the helper methods (like createPlanetThumb)!

As an example, here's an array of Promises:

getJSON(url1).then(createPlanetThumb)
	.then(function(){
		return getJSON(url2).then(createPlanetThumb);
	}
		.then(function(){
			return getJSON(url3).then(createPlanetThumb);
		}
			.then(function(){
				return getJSON(url4).then(createPlanetThumb);
			}
				.then(function(){
					return getJSON(url5).then(createPlanetThumb);
				}
				
All of the getJSONs should execute in parallel. But, if url3 arrives first, it should wait for url1 to resolve and url2 to resolve before creating its thumbnail. The state of url4 and url5 don't affect url3. In other words, each .then executes as soon as all of the .thens before it resolve, yet all of the network requests are executed in parallel.

Words of Encouragement and Acknowledgement
This is a combination of the last few array method quizzes. It's tough but you've already used all of the methods and techniques you'll need to conquer this quiz. You can do it!

I recommend using network throttling too. Use 3G and you'll see some jitter with respect to the order in which requests finish.

Also, I can't say I came up with this quiz on my own. This quiz, and much of this course, was inspired by this guide to Promises by Jake Archibald. He also reviewed this course and helped me with a few inaccuracies with the first draft of the script. If you scan through the article, you'll find the general strategy for solving this quiz. Don't look if you want a challenge!

Checkout the bonus-start branch to get started! Good luck!

*/


/*
 Challenge:
 
 Use what you've learned about Promises to request thumbnails in parallel but create them in the
 proper order even if all the requests haven't finished.
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
		return new Promise((resolve) => {
			let pT = document.createElement('planet-thumb');
			for (let d in data) {
				pT[d] = data[d];
			}
			home.appendChild(pT);
			console.log(`Rendered: ${data.pl_name}`);
			resolve();
		})
	}
	
	/**
	 * XHR wrapped in a promise
	 * @param  {String} url - The URL to fetch.
	 * @return {Promise}    - A Promise that resolves when the XHR succeeds and fails otherwise.
	 */
	function get(url) {
		return fetch(url);
	}
	
	/**
	 * Performs an XHR for a JSON and returns a parsed JSON response.
	 * @param  {String} url - The JSON URL to fetch.
	 * @return {Promise}    - A promise that passes the parsed JSON response.
	 */
	function getJSON(url) {
		return get(url).then((response) => {
			return response.json();
		});
	}
	
	window.addEventListener('WebComponentsReady', function() {
		home = document.querySelector('section[data-route="home"]');
		
		getJSON('../data/earth-like-results.json')
			.then((response) => {
				let sequence = Promise.resolve();
				// map starts executing promises immediately
				let promiseArray = response.results.map((result) => {
					return getJSON(result);
				});
				
				// loop through the array and turn them into a sequence
				promiseArray.forEach((request) => {
					sequence = sequence.then(() => {
						// each createPlanetThumb is a promise, each has to resolve before
						// the next in the chain can execute
						return request.then(createPlanetThumb);
					})
				})
			})
			
	});
})(document);
