## Fetch API

Is the new api built to make requesting resources easier. It's based on javascript promises. Supported by most browsers, a polyfill is provided for those that don't provide support, e.g IE 11 and earlier.

As with xhr or jquery ajax requests, fetch is affected by the same-origin policy. By default you can only make requests for assets and data on the same domain as the site that will end up loading the data.

THe default method is 'GET', you can set the HTTP method using the method property in the configuration object. When a fetch request is made a promise is returned. When this resolves it returns a Response object. To extract the content, 'body' from the response object call .json() when the api returns json (.blob() when image data is returned). The .json() method returns another promise, so we need to chain another .then() to receive the data.



### References

[1. Fetch Docs](https://github.github.io/fetch/)  
[2. Fetch Polyfill](https://github.github.io/fetch/)  
[3. Fetch Api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)  
[4. Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)  
