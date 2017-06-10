## Asynchronous Javascript

THe Javascript engine provides the XMLHttpRequest object (xhr object) which allows us to make asynchronous http requests. Not limited to xml, an XMLHttpRequest can be used to request any file type, html, plain text, json, images from an api.

To create an xhr object we call it's constructor with the new keyword:

```javascript
    const xhr = new XMLHttpRequest();
```

The xhr object supports a number of methods(as well as properties), such as open(), abort(), send(), setRequestHeader(), getResponseHeader(), etc. To execute a GET request we'd use the .open() method, passing it the http verb as the 1st argument and the url as the 2nd. However the request is not executed until send() is called, e.g. xhr.send(). Synchronous XMLHttpRequest on the main browser thread is deprecated.

```javascript
    xhr.open('GET', 'https://unsplash.com');
```

An optional 3rd argument, boolean, can be passed to open. Default is true, indicating that the operation should be performed asynchronously. False indicates that the operation should be performed synchronously, thus the send() method will not return, blocking the process, until the response is received. 

Because of the same-origin policy, you can only make requests for assets and data on the same domain as the site that will end up loading the data. For example, to asynchronously request data from google.com your browser needs to be on google.com. This is to prevent scripts on one site being executed on another. This can be overcome by using CORS, which must be implemented on the server, or by using JSON-P.

To handle a successful response to a XHR request, we need to set the onload property, passing it a callback function that will process the response. If onload is not set, although the request returns - we wont see anything. To handle errors, since the request cannot be fulfilled, we need to set the onerror property, passing it a callback function. If onerror is not set the xhr request will fail silently if any errors occur.


```javascript
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://unsplash.com');
    xhr.onload = function () {
      console.log(this.responseText);
    };
    xhr.onerror = function() { 
      console.error(this.err.message);
    };
    xhr.send();
```

### APIs and JSON

When requesting from an api that returns json, all we need to do is convert that json to a js object using the JSON.parse() method. The response is stored in the xhr's responseText property - access via this.responseText. In this particular case the response is in JSON, so we'll use the JSOn.parse() method to convert it into a js object.


```javascript
    xhr.onload = function() {
        console.log(JSON.parse(this.responseText));
    }
```



### Summary

There are a number of steps you need to take to send an HTTP request asynchronously with JavaScript.

To Send An Async Request
 * create an XHR object with the XMLHttpRequest constructor function
 * use the .open() method - set the HTTP method and the URL of the resource to be fetched
 * set the .onload property - set this to a function that will run upon a successful fetch
 * set the .onerror property - set this to a function that will run when an error occurs
 * use the .send() method - send the request

To Use The Response
 * use the .responseText property - holds the text of the async request's response


### References

[1. XMLHttpRequest Object](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)  
[2. XHR open method](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open)  
[3. XHR send method](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send)  
[4. XHR set request header method](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader)  
[5. Unsplash api](https://unsplash.com/developers)  
[6. Unsplash JS Client library](https://github.com/unsplash/unsplash-js)  
[7. NYT Developers Page](https://developer.nytimes.com/)  
[8. XHR Request](https://www.html5rocks.com/en/tutorials/file/xhr2/)  
