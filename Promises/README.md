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