## Ajax

Many websites have solved the problem of loading content after the first page load without reloading (automatically loading more content when you reach the bottom of the page) with the use of ajax, or asynchronous javascript. Ajax requests allow for content retrieval and display without reloading the web page.

When a request is made synchronously the page has to wait for the request to complete to continue the load process. Asynchronous requests happen in the background without blocking the rest of the page load, allowing other tasks to be completed, e.g. rendering the rest of the page. When they complete, the browser receives the result and at that point executes a callback function - and process the result in some way, i.e display the data in the page.

An asynchronous request can be fired off at any time (before or after a page has loaded) and the response to an asynchronous request can be xml, json or HTML that can be dynamically inserted into a page. Facebook uses a lot of asynchronous requests so that the page almost never needs to refresh for users to see new content:
 * Scrolling down in the Newsfeed: when you scroll down, new stories are automatically loaded at the bottom without reloading the page, accomplished using ajax.
 * Posting a message on a friend's Timeline:
 * Clicking through a friend's pictures: 

Note: when viewing xhr requests in the network tab of chrome dev tools, filter based on XHR.   

Using jQuery the minimum you need to make an ajax request is a string url, a settings or configuration object of key/value pairs is optional. Most POST requests will have a url and some data, that your sending to the server. Most GET requests will include a url, possibly a settings object, and a callback function to handle the returned result.


### jQuery ajax() and getJSON() methods

jQuery's .ajax() and .getJSON() methods provide a means of simplifying asynchronous requests. Both methods take in a url an an optional options object, or you can pass in an options object containing the url.


```javascript
    $.ajax({
      dataType: "json",
      url: url,         // string url
      data: data,       // plain object or string
      success: success  // callback function, executed on success
    });
```

```javascript
    $.getJSON( "ajax/test.json", function( data ) {
      var items = [];
      $.each( data, function( key, val ) {
        items.push( "<li id='" + key + "'>" + val + "</li>" );
      });
     
      $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
      }).appendTo( "body" );
    });
```




### References

[1. Chrome HAR Viewer](http://ericduran.github.io/chromeHAR/)  
[2. jQuery Ajax](http://api.jquery.com/jquery.ajax/)  
[3. jQuery getJson](http://api.jquery.com/jquery.getjson/)  
[4. Google Street View API](https://developers.google.com/maps/documentation/streetview/)  
  