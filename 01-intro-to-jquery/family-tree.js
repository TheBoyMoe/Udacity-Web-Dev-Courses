/*
 * Exercises related to the family tree page
 *
 * */

/*
 For this quiz, you'll need to add to the DOM tree that already exists.
 
 '#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
 of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
 */

let $family1 = $('#family1');
let $family2 = $('<div id="family2"><h1>Family 2</h1></div>');
$family2.insertAfter($family1);
let $bruce = $('<div id="bruce"><h2>Bruce</h2></div>');
$family2.append($bruce);
let $madison = $('<div id="madison"><h3>Madison</h3></div>');
let $hunter = $('<div id="hunter"><h3>Hunter</h3></div>');
$bruce.append($madison);
$bruce.append($hunter);
