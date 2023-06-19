console.clear(); // 清空控制台日志

const elToggle = document.querySelector('.toggle--wrapper'); // 获取切换按钮元素
const elApp = document.querySelector('.container'); // 获取应用容器元素

const machine = {
    initial: elApp.dataset.state, // 获取应用容器初始状态
    states: {
        day: {
            on: {
                TOGGLE: 'night' // 定义白天模式切换到夜晚模式的操作
            }
        },
        night: {
            on: {
                TOGGLE: 'day' // 定义夜晚模式切换到白天模式的操作
            }
        },
    }
};

elToggle.addEventListener('click', (e) => {
    const currentState = elApp.dataset.state; // 获取当前状态
    const nextState = machine.states[currentState].on.TOGGLE; // 获取下一个状态
    toggleState(nextState); // 切换状态
});

const toggleState = (state) => {
    elApp.dataset.state = state; // 更新应用容器的状态

    const navElement = document.querySelector('nav'); // 获取导航栏元素
    const headimgH1Element = document.querySelector('.headimg h1'); // 获取标题元素
    const headbordimgH1Element = document.querySelector('.headimg'); // 获取标题容器元素
    const abElement = document.querySelectorAll('.ab'); // 获取关于模块元素集合

    if (state === 'night') {
        // 切换到夜晚模式的样式
        navElement.style.backgroundColor = 'rgb(30, 39, 46)';
        headimgH1Element.style.color = 'rgb(30, 39, 46)';
        headbordimgH1Element.style.borderBottomColor = 'rgb(30, 39, 46)';
        var i;
        for (i = 0; i < abElement.length; i++) {
            abElement[i].style.backgroundColor = 'rgb(30, 39, 46)';
        }
    } else {
        // 切换到白天模式的样式
        navElement.style.backgroundColor = '#8299ac';
        headimgH1Element.style.color = '#cbd4db';
        headbordimgH1Element.style.borderBottomColor = '#cbd4db';
        var i;
        for (i = 0; i < abElement.length; i++) {
            abElement[i].style.backgroundColor = 'rgba(229, 235, 241,0.95)';
        }
    }
};
