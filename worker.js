// use the postMessage API

// in the worker script, the worker object is the global object (idk what that means yet tbh)
// self refers to the worker object
onmessage = function(message) {
    let sum = 0;
    for(let i = 0; i < 1000000000; i++){
        sum += i;
    };

    postMessage(sum);

}

