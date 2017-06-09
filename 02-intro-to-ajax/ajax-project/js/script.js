"use strict";
import {nytApikey} from './../settings.js';


function loadData() {
	
    const $body = $('body');
    const $wikiElem = $('#wikipedia-links');
    const $nytHeaderElem = $('#nytimes-header');
    const $nytElem = $('#nytimes-articles');
    const $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview image into body
	let streetViewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location=';
	let street = $('#street').val();
	let city = $('#city').val();
	
	streetViewUrl =`${streetViewUrl}${street}, ${city}`;
	$body.append(`<img class="bgimg" src="${streetViewUrl}">`); // FIXME
	
	// NYTimes AJAX request to fetch articles
	const nytBaseUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
	const nytUrl = `${nytBaseUrl}?${$.param({'api-key': nytApikey})}`;
	console.log(nytUrl);
	$.getJSON(nytUrl, function (data) {
		let articles = [];
		console.log(data);
		$.each(data.response.docs, (i, doc) => {
			articles.push(`<li id="article-${i}">
								<a href="${doc.web_url}" target="_blank">${doc.headline.print_headline}</a>
								<p>${doc.snippet}</p>
							</li>`);
		});
		$nytElem.append(articles);
	}).fail((err) => {
		console.error(`Request failed:`, err.message);
		$nytHeaderElem.text(`Request failed, no articles could be loaded`);
	});
	
	
	// Wikipedia ajax request using json-p - error handling is not built into json-p,
	// we use a setTimeout to stop the request if it runs for too long.
	const wikiUrl = `http://en.wikipl;kkedia.org/w/api.php?action=opensearch&search=${city}&format=json&callback=wikiCallback`;
	
	const wikiTimeout = setTimeout(() => {
		$wikiElem.text(`Request timed out, failed to retrieve resources`);
	}, 8000);
	
	$.ajax({
		url: wikiUrl,
		dataType: "jsonp",
		// setting the dataType to 'jsonp' sets the callback name to 'callback'
		// optionally we can add the jsonp prop to specify the name
		jsonp: "callback",
		success: function (response) {
			let articleList = response[1];
			$.each(articleList, (i, article) => {
				let url = `http://en.wikipedia.org/wiki/${article}`;
				$wikiElem.append(`<li><a href="${url}" target="_blank">${article}</a></li>`);
			});
			// stop the error handler from executing
			clearTimeout(wikiTimeout);
		}
	});
	
    return false;
}

$('#form-container').submit(loadData);
