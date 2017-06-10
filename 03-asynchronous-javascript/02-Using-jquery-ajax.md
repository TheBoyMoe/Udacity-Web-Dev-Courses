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



### References

[1. jQuery ajax method](http://api.jquery.com/jQuery.ajax/)  
