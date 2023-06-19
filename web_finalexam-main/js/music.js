var audioPlayer1 = document.getElementById("audioPlayer1");
var audioPlayer2 = document.getElementById("audioPlayer2");
var audioPlayer3 = document.getElementById("audioPlayer3");
var audioPlayer4 = document.getElementById("audioPlayer4");
var audioPlayer5 = document.getElementById("audioPlayer5");

//audioPlayer1、audioPlayer2、audioPlayer3、audioPlayer4：获取音频播放器元素。
// addEventListener：为每个音频播放器添加一个 "play" 事件监听器，当音频播放时执行相应的函数。
// 当某个音频播放时，暂停其他音频播放器的播放。
audioPlayer1.addEventListener("play", function () {
    audioPlayer2.pause();
    audioPlayer3.pause();
    audioPlayer4.pause();
    audioPlayer5.pause();
});

audioPlayer2.addEventListener("play", function () {
    audioPlayer1.pause();
    audioPlayer3.pause();
    audioPlayer4.pause();
    audioPlayer5.pause();
});

audioPlayer3.addEventListener("play", function () {
    audioPlayer1.pause();
    audioPlayer2.pause();
    audioPlayer4.pause();
    audioPlayer5.pause();
});

audioPlayer4.addEventListener("play", function () {
    audioPlayer1.pause();
    audioPlayer2.pause();
    audioPlayer3.pause();
    audioPlayer5.pause();
});

audioPlayer5.addEventListener("play", function () {
    audioPlayer1.pause();
    audioPlayer2.pause();
    audioPlayer3.pause();
    audioPlayer4.pause();
});

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
    const headimgH1Element = document.querySelectorAll('.music-player');
    const h1Element = document.querySelectorAll('.music-player h1');
    const pElement = document.querySelectorAll('.music-player p');
    //const ab1Element = document.querySelector('.mid .a1');
    //const ab2Element = document.querySelector('.mid .a2');
    //const ab3Element = document.querySelector('.mid .a3');


    if (state === 'night') {
        navElement.style.backgroundColor = 'rgb(30, 39, 46)';
        //ab1Element.style.backgroundColor = 'rgb(30,39,46)'
        //ab2Element.style.backgroundColor = 'rgb(30,39,46)'
        //ab3Element.style.backgroundColor = 'rgb(30,39,46)'
        var i;
        for (i = 0; i < headimgH1Element.length; i++) {
            headimgH1Element[i].style.backgroundColor = 'rgb(30, 39, 46)';
            h1Element[i].style.color = '#f1f1f1';
            pElement[i].style.color = '#f1f1f1';
        }
    } else {
        navElement.style.backgroundColor = '#8299ac';
        //ab1Element.style.backgroundColor = 'rgba(229, 235, 241,0.95)'
        //ab2Element.style.backgroundColor = 'rgba(229, 235, 241,0.95)'
        //ab3Element.style.backgroundColor = 'rgba(229, 235, 241,0.95)'

        var i;
        for (i = 0; i < headimgH1Element.length; i++) {
            headimgH1Element[i].style.backgroundColor = 'rgba(229, 235, 241,0.95)';
            h1Element[i].style.color = '#1e1f22';
            pElement[i].style.color = '#1e1f22';
        }
    }
}