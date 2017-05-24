## Overview
Synchronous calls happen one after the other, in sequence. Asynchronous code is not guaranteed to happen in a single unbroken sequence. In fact there is no guarantee in the sequence in which async calls will complete, if they complete at all(the request might fail).

Callbacks were the default technique for handling asynchronous requests in es5. You pass a callback to a function which is called  at some point in the future when an event, e.g file download completes, occurs.

```javascript
const loadImage = (src, parent, callback) => {
    let img = document.createElement('img');
    img.src = src;
    img.onload = callback;
    parent.appendChild(img);
}
```


Although it works well, there are a number of issues:
 * handling errors
 * your callback is also an asynchronous task, so you need to pass it a callback. This leads to nesting callbacks that can very quickly become difficult to manage and debug. 'Callback Hell/Pyramid of Doom.
 
A promise can be in one of 4 states:
 * Fulfilled/Resolved: -action related to the promise succeeded
 * Rejected - the action failed.
 * Pending - waiting, neither fulfilled or rejected.
 * Settled - the promise is complete, it's either fulfilled or rejected.
 
 * Promises can settle/execute only once, as opposed to events or callbacks that can be called many times
 * Promises are settled in the main thread, means they could potentially be blocking if the promise takes a long time to complete. Processes that occur in the main thread and take a long time to complete do NOT benefit from being wrapped in a promise.
 * Processes that are synchronous do NOT benefit from being wrapped in promises.
 * Use promises to wrap asynchronous processes, e.g retrieving data from a remote server, posting messages between a web worker (background thread) and the main thread.
 * with promises you effectively decide what constitutes fulfillment and what constitutes rejection.
 
### Creating Promises
Promises can be 'viewed' as a try/catch wrapper around an asynchronous operation.

```javascript
new Promise((resolve, reject) => {
    let value = doSomething();
    if(value) resolve(value);
    else reject(new Error('Failed!'));
})
.then((value) => console.log(value))
.catch((err) => console.log(err));
```

'Promisified' version of imageLoader, in this case the images OnLoad and OnError functions specify success and failure respectively, resolve is called when the image finishes loading.

```javascript
new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.src = 'image.jpg';
    img.onload = resolve;
    img.onError = reject;
    document.body.appendChild(img);
})
.then()
.catch()
```

In the next example, the js engine does not immediately stop executing the function when resolve is called, all three log messages are printed, event though 'second' comes after resolve() is called.

```javascript
new Promise(function(resolve) {
  console.log('first');
  resolve();
  console.log('second');
}).then(function() {
  console.log('third');
});
```

When resolve() or reject() is called the promise is settled and either .then() or ,catch() are called. Any value received by resolve() or resolve() is passed along to then()/catch() respectively (resolve() passes value to then() and reject() to catch()). If an error occurs anywhere else in the body of the function, the error is automatically passed to catch().
 
If no value is passed, then()/catch() receives undefined. 

If the value that is passed is a promise, the promise executes first, and what ever value it resolves to will be passed to the next link in the chain.