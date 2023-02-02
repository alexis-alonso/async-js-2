// make a new worker then give the url to the worker script...and creating the worker immediately executes it
const worker = new Worker('generate.js');

// pressing the button sends message to worker
// message command is 'generate' and we also have 'quota'
document.querySelector('#generate').addEventListener('click', () => {
    
    // quota is for # of primes to generate
    const quota = document.querySelector('#quota').value;

    // generate is a str to identify the thing we want the worker to do
    worker.postMessage({
        command: 'generate', quota,
    });
});

// when worker sends message back to main thread (this script)...
// update output box w/a message for the user, including # of primes generated, taken from message data
worker.addEventListener('message', (message) => {
    document.querySelector('#output').textContent = `Finished generating ${message.data} primes!`;
});

// 
document.querySelector('#reload').addEventListener('click', () => {
    document.querySelector('#user-input').value = 'Try typing in here immediately after pressing "Generate primes"';
    document.location.reload();
});

