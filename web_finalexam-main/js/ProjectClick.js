console.clear();
const elToggle = document.querySelector('.toggle--wrapper');
const elApp = document.querySelector('.container');


const machine = {
    initial: elApp.dataset.state,//'day',
    states: {
        day: {
            on: {
                TOGGLE: 'night'
            }
        },
        night: {
            on: {
                TOGGLE: 'day'
            }
        },
    }
};


elToggle.addEventListener('click', (e) => {
    const currentState = elApp.dataset.state;
    const nextState = machine.states[currentState].on.TOGGLE;
    toggleState(nextState);
})

const toggleState = (state) => {
    elApp.dataset.state = state;

    const navElement = document.querySelector('nav');
    const mainElement = document.querySelector('.mid .main');

    if (state === 'night') {
        navElement.style.backgroundColor = 'rgb(30, 39, 46)';
        mainElement.style.backgroundImage = 'url("../image/bg10.jpg")';
    } else {
        navElement.style.backgroundColor = '#8299ac';
        mainElement.style.backgroundImage = 'url("../image/background.jpg")';
    }
}