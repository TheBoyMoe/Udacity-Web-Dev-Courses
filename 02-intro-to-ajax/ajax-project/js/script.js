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
	$body.append('<img class="bgimg" src="'+streetViewUrl+'">');
	
	// TODO NYTimes AJAX request to fetch articles
	const nytBaseUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
	const nytUrl = `${nytBaseUrl}?${$.param({'api-key': nytApikey})}`;
	console.log(nytUrl);
	$.getJSON(nytUrl, function (data) {
		console.log(data);
	});
	
	
    return false;
}

$('#form-container').submit(loadData);
