/*
 For this quiz, use a jQuery class selector and featuredArticle variable to toggle the 'featured' class!
 */

// don't change this variable!
let featuredArticle;

featuredArticle = $('.featured').toggleClass('featured');


/*
 For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!
 
 You must use jQuery's toggleClass method!
 */

// don't change these variable!
let article2, article3;

// your code goes here!
article2 = $('.featured');
article3 = article2.next();
article2.toggleClass('featured');
article3.toggleClass('featured');

/*
 For this quiz, set the href of the <a> in the first nav item to "#1".
 
 You must use jQuery's attr() method!
 */

// Start with this variable!
let navList;

navList = $('.nav-item').first().children('a').attr('href', '#1');

/*
 For this quiz, change the font-size of all the article-items to 20px!
 
 You must use jQuery's css() method!
 */

// modifying an elements css with js or jQuery adds inline styles

let articleItems;

articleItems = $('.article-item').css({'font-size': 20});


/*
 For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!
 
 The starter code below creates an event listener that will run any time the input changes.
 For more on events, check the instructor notes.
 */


$('#input').on('change', function() {
	let val = $(this).val();
	$('h1').text(val);
});



/*
 For this quiz, remove the <ul> from the first article item!
 
 You must use jQuery's remove() method.
 */

// Start with this variable!

articleItems = $('.article-item').children('ul').remove();


/*
 For this quiz, use jQuery's each() method to iterate through the <p>s,
 calculate the length of each one, and add each length to the end of each <p>.
 
 Also, make sure you don't change the text inside each <p> except to add the length, otherwise your
 length numbers won't be correct!
 */

"use strict";
$('p').each(function(){
	let text = $(this).text();
	let count = text.length;
	$(this).text(`${text} ${count}`);
});



/*
 For this quiz, use jQuery to set up an event listener. Your event listener must:
 1. listen to the #my-button element
 2. listen for a `click` event
 3. perform the following actions when the button is clicked:
 a. remove the #my-button element from the DOM
 b. add the `success` class to the body
 */

$('#my-button').on('click', function () {
	$(this).remove(); // remove the btn from the DOM
	$('body').addClass('success');
});
