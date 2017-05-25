'use strict';
let urls = [];
async('example.com') // error here --> 1,3 logged
	.then((data) => {
		urls = data.urls; // error here --> 1,3 logged
		return async(urls[0]);
	})
	.then(undefined, (err) => {
		console.log(1);
		return recovery();
	})
	.catch((err) => {
		console.log(2);
		return recovery(); // error here --> nothing logged - this one is only called if there is another error
	})
	.then(() => {
		console.log(3);
		return async(urls[1]); // error here --> 4 logged
	})
	.then(async, (err) => {
		console.log(4);
		theEnd();
	});