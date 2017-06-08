## jQuery

A javascript library that abstracts out some of the difficulty in manipulating the DOM, and providing a consistent result no matter the browser. The jQuery object, often mapped to $, is a javascript function which can take one or more parameters (these can be strings, DOM elements or other functions) and returns a collection (array like, but with some additional methods). You can call methods directly on the jQuery object, e.g $.ajax(). 

You can add jquery to your web page by hosting it locally, or via CDN, e.g.

```text
    <script src="js/jquery.min.js"></script> 
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```

### Select DOM elements with jQuery

You can use the jQuery object to quickly access DOM elements, using the elements tag name, class or id defined as a string, returns a collection of element(s). jQuery provides methods to traverse the DOM tree, e.g. $('#element').parent()
    * .parent() - select the direct parent of the selected element 
    * .parents() - select all the parents of the selected element
    * .parents(selector) - pass a string selector to filter the collection
    * .children() - return a collection of all immediate children, i.e. one level down
    * .find() - traverses many levels down returning a collection of all the elements children. You must pass a selector into find(), if you want all descendants us the universal selector '*'.
    * .siblings() - return a collection of the current elements siblings, e.g. all the elements in the collection share the same immediate parent. You can pass a selector into siblings() if you want to get more specific.

    
### Passing a Function to jQuery
    
You can pass functions into jQuery. Such functions are runs on document.ready, after the DOM has been loaded. Scripts loaded in the <head> section are downloaded and executed before the DOM has finished loading, meaning that they don't have access to the DOM. One solution is to load the script at the bottom of the <body>, ensuring the DOM has been loaded prior to the script running. Another option is to load the script via <head> but pass the script's function into the jQuery Object. This ensures the script will not be called until the DOM is fully loaded, as shown below:


```javascript
    function someFunction() {
        // Do interesting things
    }
    $(someFunction)
```

or

```javascript
    $(function(){
        // Do interesting things
    })
```


### jQuery Events

You can monitor events on a particular page element using Chrome Dev Tools and Chrome's monitorEvents() function. You can only use the function in Chrome's Console in Dev Tools. Pass the element you want to follow to the function, e.g:

```javascript
    let inputField = $('input')[0]; 
    monitorEvents(inputField);
```

All the events will be logged to the console.
Another way is to right-click on the element, in the console enter: monitorEvents($0), logs moouseover, mouseout, click, keyup, keydown events to the console.


In order to listen for and react to events with jQuery, you need:
 1. the target element
 2. the event to react to
 3. the action to take
 
Use the $() selector to select the target, append the .on() method which add the listener. This takes two arguments, the first is the event, e.g. 'click', 'keypress', 'mouseover', 'change', etc, the second argument is the callback which is envoked when the event occurs and executes the action you want to occur in response. The callback is an ordinary js function, so can contain any js code.


```javascript
    $('myInput').on('keypress', function() {
        // do something
    })
```

When the event occurs, jQuery passes the event object to the callback function which you can use in the body of the function, e.g.


```javascript
    $( 'article' ).on( 'click', function( evt ) {
        console.log( evt );
    });
```

The event obj has a number of properties, including target. The target property holds a reference to the target element itself, usefull if you want to manipulate the element, e.g.
 

```javascript
    $( 'article' ).on( 'click', function( evt ) {
        $( evt.target ).css( 'background', 'red' );
    });
``` 


You can also use the event obj to prevent the default action when an anchor <a> element is clicked - follow the href link, potentially redirecting the page.


```javascript
    $( '#myAnchor' ).on( 'click', function( evt ) {
        evt.preventDefault();
        console.log( 'You clicked a link!' );
    });
```

Other useful properties include:
 * event.keyCode - to learn what key was pressed - invaluable if you need to listen for a specific key
 * event.pageX and event.pageY - to know where on the page the click occurred - helpful for analytics tracking
 * event.type - to find what event happened - useful if listening to a target for multiple events 

jQuery includes a number of convenience methods, e.g .keypress(), .click(), .hover(), .focus(), etc, which are a shortcut for using .on() and passing the event and callback. These generally take one callback, the function to execute when the event occurs. Some take two callbacks, e.g. .hover(), 1st arg is the callback to be executed when the mouse pointer enters the target, the 2nd when the pointer leaves.

The techniques looked at so far depend on adding event listeners to elements that already exist in the DOM. To add an event listener to DOM elements added AFTER the DOM has loaded we need to use event delegation. Using the .on() method, we attach the listener to the parent's element and pass the method 3 arguments. The 1st is the event, the second is the element we want to delegate the event to, the 3rd is the callback function.

```javascript
    $( '.container' ).on( 'click', 'article', function() {  });
```

Event delegation can also be used to consolidate a number of event listener, e.g. instead of adding an event listener to every <li> in a list, add the listener to the parent <ul> and delegate the event to the <li>.

```javascript
    $( 'ul' ).on( 'click', 'li', function() {
        // do something
    });
```




### References

[1. jQuery API Docs](http://api.jquery.com/)  
[2. jQuery Selectors](http://api.jquery.com/category/selectors/)      
[3. DOM manipulation](http://api.jquery.com/category/manipulation/)  
[4. DOM Traversal](http://api.jquery.com/category/traversing/)  
[5. jQuery Filtering](http://api.jquery.com/category/traversing/filtering/)  
[6. jQuery Utilities](http://api.jquery.com/category/utilities/)  
[7. jQuery Forms](http://api.jquery.com/category/forms/)  
[8. Handling Events](http://api.jquery.com/category/events/)  
[9. jQuery Atrributes](http://api.jquery.com/category/attributes/)  
[10. Passing Functions to jQuery](http://api.jquery.com/jquery/#jQuery3)   
[11. Monitor Events](https://developers.google.com/web/tools/chrome-devtools/console/events)   
[12. Manipulate a collection](http://api.jquery.com/category/miscellaneous/collection-manipulation/)  
[13. Miscellaneous jQuery methods](http://api.jquery.com/category/miscellaneous/)  
[14. jQuery Event Object](https://api.jquery.com/category/events/event-object/)  
[15. jQuery Event Target](https://api.jquery.com/event.target/)  
[16. jQuery Event Methods](http://api.jquery.com/category/events/)  
[17. Event Delegation](https://learn.jquery.com/events/event-delegation/)  
    