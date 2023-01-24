const sum = document.querySelector('#sum');
const bkg = document.querySelector('#bkg');

sum.addEventListener('click', (e) => {
    let sum = 0;
    for(let i = 0; i < 10000000000; i++) {
        sum += i;
    };

    alert(`The final sum is ${sum}`);
});

bkg.addEventListener('click', (e) => {
    if(document.body.style.background !== 'green') {
        document.body.style.background = 'green';
    } 
    else {
        document.body.style.background = 'blue';
    };
});