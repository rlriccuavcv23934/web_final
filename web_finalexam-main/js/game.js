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
    const ptElement = document.querySelectorAll('.pt');

    if (state === 'night') {
        navElement.style.backgroundColor = 'rgb(30, 39, 46)';
        navElement.style.color = 'rgb(234, 247, 255)';
        var i;
        for (i = 0; i < ptElement.length; i++) {
            ptElement[i].style.backgroundColor = 'rgb(30, 39, 46)';
        }
    } else {
        navElement.style.backgroundColor = '#8299ac';
        navElement.style.color = 'rgb(234, 247, 255)';
        var i;
        for (i = 0; i < ptElement.length; i++) {
            ptElement[i].style.backgroundColor = '#8299ac';
        }
    }
}


