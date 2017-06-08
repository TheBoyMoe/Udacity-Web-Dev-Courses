## jQuery

A javascript library that abstracts out some of the difficulty in manipulating the DOM, and providing a consistent result no matter the browser. The jQuery object, often mapped to $, is a javascript function which can take one or more parameters (these can be strings, DOM elements or other functions) and returns a collection (array like, but with some additional methods). You can call methods directly on the jQuery object, e.g $.ajax(). 

You can add jquery to your web page by hosting it locally, or via CDN, e.g.

```text
    <script src="js/jquery.min.js"></script> 
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```

You can use the jQuery object to quickly access DOM elements, using the elements tag name, class or id defined as a string, returns a collection of element(s). jQuery provides methods to traverse the DOM tree, e.g. $('#element').parent()
    * .parent() - select the direct parent of the selected element 
    * .parents() - select all the parents of the selected element
    * .parents(selector) - pass a string selector to filter the collection
    * .children() - return a collection of all immediate children, i.e. one level down
    * .find() - traverses many levels down returning a collection of all the elements children. You must pass a selector into find(), if you want all descendants us the universal selector '*'.
    * .siblings() - return a collection of the current elements siblings, e.g. all the elements in the collection share the same immediate parent. You can pass a selector into siblings() if you want to get more specific.
    
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
 
    