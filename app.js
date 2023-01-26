// create a reference to the worker script (then see 'worker.js')
const worker = new Worker('worker.js');

// reference the sum and bkg buttons
const sum = document.querySelector('#sum');
const bkg = document.querySelector('#bkg');

// when the sum button is clicked, pull up the worker 
sum.addEventListener('click', (e) => {
    worker.postMessage('hello');
});

worker.onmessage = function(message){
    alert(`The final sum is ${message.data}`);
};


bkg.addEventListener('click', (e) => {
    if(document.body.style.background !== 'green') {
        document.body.style.background = 'green';
    } 
    else {
        document.body.style.background = 'blue';
    };
});