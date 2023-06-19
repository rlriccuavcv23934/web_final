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
    const tagcloudElement = document.querySelectorAll('.tagcloud a');
    const tagcloudElements = document.querySelectorAll('.tagcloud a');
    const textElement = document.querySelector('.pt0 .goal h1');

    if (state === 'night') {
        pt0Element.style.backgroundImage = 'url("../image/bg10.jpg")';
        navElement.style.backgroundColor = 'rgb(30, 39, 46)';
        navElement.style.color = 'rgb(234, 247, 255)';
        textElement.style.textShadow = '3px 3px 5px rgb(28, 175, 185)';
        var i;
        for (i = 0; i < tagcloudElement.length; i++) {
            tagcloudElement[i].style.backgroundColor = 'rgb(30, 39, 46)';
            tagcloudElement[i].style.color = 'rgb(234, 247, 255)';
            tagcloudElements[i].style.boxShadow = '3px 3px 3px 3px rgba(28, 175, 185,.5)';
        }
    } else {
        pt0Element.style.backgroundImage = 'url("../image/background.jpg")';
        navElement.style.backgroundColor = '#8299ac';
        navElement.style.color = 'rgb(234, 247, 255)';
        textElement.style.textShadow = '3px 3px 5px black';
        var i;//#333
        for (i = 0; i < tagcloudElement.length; i++) {
            tagcloudElement[i].style.backgroundColor = '#f2f4f8';
            tagcloudElement[i].style.color = 'rgb(30, 39, 46)';
            tagcloudElements[i].style.boxShadow = '3px 3px 3px 3px rgba(18, 11, 12,.5)';
        }
    }
}


