console.clear();

// 获取元素
const elToggle = document.querySelector('.toggle--wrapper');
const elApp = document.querySelector('.container');

// 定义状态机
const machine = {
    initial: elApp.dataset.state, // 初始状态，从 HTML 数据集中获取
    states: {
        day: {
            on: {
                TOGGLE: 'night' // 切换到 night 状态
            }
        },
        night: {
            on: {
                TOGGLE: 'day' // 切换到 day 状态
            }
        },
    }
};

// 监听点击事件
elToggle.addEventListener('click', (e) => {
    const currentState = elApp.dataset.state; // 获取当前状态
    const nextState = machine.states[currentState].on.TOGGLE; // 获取下一个状态
    toggleState(nextState);
})

// 切换状态的函数
const toggleState = (state) => {
    elApp.dataset.state = state; // 更新元素的数据集状态

    // 获取其他需要改变的元素
    const navElement = document.querySelector('nav');
    const otherPageButton = document.getElementById('otherPageButton');
    const conbackElement = document.querySelectorAll('.con');

    // 根据状态改变元素样式
    if (state === 'night') {
        navElement.style.backgroundColor = 'rgb(30, 39, 46)';
        otherPageButton.style.backgroundColor = 'rgb(30, 39, 46)';
        var i;
        for (i = 0; i < conbackElement.length; i++) {
            conbackElement[i].style.backgroundColor = 'rgba(30, 39, 46, 0.6)';
        }
    } else {
        navElement.style.backgroundColor = '#8299ac';
        otherPageButton.style.backgroundColor = '#8299ac';
        for (i = 0; i < conbackElement.length; i++) {
            conbackElement[i].style.backgroundColor = 'rgba(223, 230, 233, 0.6)';
        }
    }
}

// 监听其他页面按钮点击事件
const otherPageButton = document.getElementById('otherPageButton');
otherPageButton.addEventListener('click', function () {
    window.open('Edit.html', '_blank'); // 在新窗口打开 Edit.html 页面
});
