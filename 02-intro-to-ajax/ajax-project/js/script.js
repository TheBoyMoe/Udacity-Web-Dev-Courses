//import {apikey} from './../settings.js';


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
		
    return false;
}

$('#form-container').submit(loadData);
