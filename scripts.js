// get all buttons
const buttons = document.querySelectorAll('.calculator-btn');
const screen = document.querySelector('.calculator-screen-text-wrapper');
// variable that holds total
let numberQueue = 0;

screen.innerText = numberQueue;

// set listeners
buttons.forEach((button) => {

    // on mouse down
    button.addEventListener('mousedown', (e) => e.currentTarget.style = 'opacity: 0.4');

    button.addEventListener('mouseup', (e) => e.currentTarget.style = 'opacity: 1');

    // on click listener
    button.addEventListener('click', (e) => {
        const text = e.currentTarget.innerText;
        console.log(text);
    });
});

