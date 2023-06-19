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

    const pt0Element = document.querySelector('.pt0');
    const navElement = document.querySelector('nav');
    const ptElement = document.querySelectorAll('.pt');
    const elSign = document.querySelector('.register');


    if (state === 'night') {
        pt0Element.style.backgroundImage = 'url("../image/bg10.jpg")';
        navElement.style.backgroundColor = 'rgb(30, 39, 46)';
        navElement.style.color = 'rgb(234, 247, 255)';
        elSign.style.backgroundColor = 'rgb(30, 39, 46)';
        var i;
        for (i = 0; i < ptElement.length; i++) {
            ptElement[i].style.backgroundColor = 'rgb(30, 39, 46)';
        }
    } else {
        pt0Element.style.backgroundImage = 'url("../image/background.jpg")';
        navElement.style.backgroundColor = '#8299ac';
        navElement.style.color = 'rgb(234, 247, 255)';
        elSign.style.backgroundColor = 'rgba(86, 116, 156, 0.8)';
        var i;
        for (i = 0; i < ptElement.length; i++) {
            ptElement[i].style.backgroundColor = '#8299ac';
        }
    }
}


