console.clear();

// 获取切换按钮和容器元素
const elToggle = document.querySelector('.toggle--wrapper');
const elApp = document.querySelector('.container');

// 状态机对象
const machine = {
    initial: elApp.dataset.state, //'day',
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

// 切换按钮点击事件
elToggle.addEventListener('click', (e) => {
    const currentState = elApp.dataset.state;
    const nextState = machine.states[currentState].on.TOGGLE;
    toggleState(nextState);
})

// 切换状态函数
const toggleState = (state) => {
    elApp.dataset.state = state;

    // 获取 joinpart 和 nav 元素
    const joinpartElement = document.querySelector('.joinpart');
    const navElement = document.querySelector('nav');

    if (state === 'night') {
        // 夜间模式样式
        navElement.style.backgroundColor = 'rgb(30, 39, 46)';
        navElement.style.color = 'rgb(234, 247, 255)';
        joinpartElement.style.backgroundImage = 'url("../image/bg10.jpg")';
    } else {
        // 白天模式样式
        navElement.style.backgroundColor = '#8299ac';
        navElement.style.color = 'rgb(234, 247, 255)';
        joinpartElement.style.backgroundImage = 'url("../image/background.jpg")';
    }
}
