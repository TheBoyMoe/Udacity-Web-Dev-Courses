## Using jQuery Ajax

The ajax() method allows you to execute asynchronous javascript requests without all the boiler plate code involved in using the xhr object. There are a couple of ways you can call the ajax() method:
 
```javascript
    $.ajax(<url-to-fetch>, <a-configuration-object>);
    
    // or 
    
    $.ajax(<configuration-object>);
``` 

The ajax() method abstracts the complexity of the xhr object(it uses the xhr object in the background). The configuration object is a plain javascript object of key/value pairs that is passed to the xhr constructor and used to configure thr request object.

The response is handled with the done() method, pass done() a callback to process the response. Jquery automatically executes the request as a 'GET' and converts a json response into a javascript object/array, no need to parse. 

```javascript
    $.ajax({
        url: 'http://swapi.co/api/peiple/1/'
    }).done(function(data){
    	console.log(data);
    })
```

jQuery provides a number of methods that can be used to make asynchronous calls, get(), getJSON(), getScript(), post() and load(). Each of these uses the ajax() method, they're called convenience methods because they provide a convenient interface and provide some default configuration. jQuery team recommend sticking with the ajax() method.
 
 

### Ajax example

```javascript
    // Using the core $.ajax() method
    $.ajax({
    
        // The URL for the request
        url: "post.php",
        
        // The data to send (will be converted to a query string)
        data: {
            id: 123
        },
        
        // Whether this is a POST or GET request
        type: "GET",
        
        // The type of data we expect back
        dataType : "json",
    })
        // Code to run if the request succeeds (is done);
        // The response is passed to the function
        .done(function( json ) {
             $( "<h1>" ).text( json.title ).appendTo( "body" );
             $( "<div class=\"content\">").html( json.html ).appendTo( "body" );
        })
        // Code to run if the request fails; the raw request and
        // status codes are passed to the function
        .fail(function( xhr, status, errorThrown ) {
            alert( "Sorry, there was a problem!" );
            console.log( "Error: " + errorThrown );
            console.log( "Status: " + status );
            console.dir( xhr );
        })
        // Code to run regardless of success or failure;
        .always(function( xhr, status ) {
            alert( "The request is complete!" );
    });
```



### References

[1. jQuery ajax method](http://api.jquery.com/jQuery.ajax/)  
[2. Debugging Javascript with Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools/javascript/)  
[3. Ajax methods](https://learn.jquery.com/ajax/jquery-ajax-methods/)  
