window.onload = function () {
    // 图片轮播的定时器
    setTimeout(getpre, 1000);
    timer = setInterval(getpre, 3000);

    // 创建图片和点的数组
    var pics = new Array();
    var dots = new Array();
    var banner = document.getElementById('banner');

    // 创建图片和点元素，设置属性和事件
    for (var i = 1; i <= 5; i++) {
        var lbli = document.createElement('li');
        var lbimg = document.createElement('img');

        lbimg.src = "../image/pics0" + i + ".jpg";
        lbimg.style.width = "750px"
        lbimg.style.height = "421px"
        lbli.appendChild(lbimg);

        banner.appendChild(lbli);
        pics.push(lbli);
        pics[pics.length - 1].style.left = "0px";

        lbimg.onmouseenter = function () {
            clearInterval(timer);
        }
        lbimg.onmouseleave = function () {
            timer = setInterval(getpre, 3000);
        }

        var bottomdot = document.createElement("div");
        bottomdot.style.left = 140 * (i + 1) + "px";
        bottomdot.name = i;
        dots.push(bottomdot);
        banner.appendChild(bottomdot);

        if (i > 3) {
            lbli.id = i - 3;
        } else {
            lbli.id = i + 2;
        }
    }

    // 初始化图片样式
    var len = pics.length - 1;
    pics[len - 2].style.left = "0px";
    pics[len - 2].style.opacity = 0.5;
    pics[len - 3].style.opacity = 0;
    pics[len - 4].style.opacity = 0;
    pics[len - 1].style.zIndex = 100;
    pics[len - 1].style.left = "200px";
    pics[len - 1].style.transform = "scale(1.3)";
    pics[len - 1].style.opacity = 1;
    pics[len].style.left = "400px";
    pics[len].style.opacity = 0.5;

    // 切换到下一张图片
    function getnext() {
        var give_up = pics[len];
        pics.pop();
        pics.unshift(give_up);
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.zIndex = i;
            pics[i].style.transform = "scale(1)";
        }
        pics[len - 2].style.left = "0px";
        pics[len - 2].style.opacity = 0.5;
        pics[len - 3].style.opacity = 0;
        pics[len - 4].style.opacity = 0;
        pics[len - 1].style.zIndex = 100;
        pics[len - 1].style.left = "200px";
        pics[len - 1].style.transform = "scale(1.3)";
        pics[len - 1].style.opacity = 1;
        pics[len].style.left = "400px";
        pics[len].style.opacity = 0.5;

        dotmov();

        // 图片点击事件
        pics[len - 2].onclick = function () {
            getnext();
        }
        pics[len].onclick = function () {
            getpre();
        }
    }

    // 切换到上一张图片
    function getpre() {
        var give_up = pics[0];
        pics.push(give_up);
        pics.shift();
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.zIndex = i;
            pics[i].style.transform = "scale(1)";
        }
        pics[len - 2].style.left = "0px";
        pics[len - 2].style.opacity = 0.5;
        pics[len - 3].style.opacity = 0;
        pics[len - 4].style.opacity = 0;
        pics[len - 1].style.zIndex = 100;
        pics[len - 1].style.left = "200px";
        pics[len - 1].style.transform = "scale(1.3)";
        pics[len - 1].style.opacity = 1;
        pics[len].style.left = "400px";
        pics[len].style.opacity = 0.5;

        dotmov();

        // 图片点击事件
        pics[len - 2].onclick = function () {
            getnext();
        }
        pics[len].onclick = function () {
            getpre();
        }
    }

    // 设置当前选中点的样式
    dots[0].style.background = "rgb(48, 72, 77)";

    function dotmov() {
        for (var i = 0; i < dots.length; i++) {
            if (dots[i].name == pics[len - 1].id) {
                dots[i].style.background = "rgb(123, 168, 175)";
            } else {
                dots[i].style.background = "rgb(30, 39, 46)";
            }
        }
    }

    // 清除控制台输出
    console.clear();

    // 切换主题模式
    const elToggle = document.querySelector('.toggle--wrapper');
    const elApp = document.querySelector('.container');

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

    elToggle.addEventListener('click', (e) => {
        const currentState = elApp.dataset.state;
        const nextState = machine.states[currentState].on.TOGGLE;
        toggleState(nextState);
    })

    const toggleState = (state) => {
        elApp.dataset.state = state;

        const navElement = document.querySelector('nav');

        if (state === 'night') {
            navElement.style.backgroundColor = 'rgb(30, 39, 46)';
            navElement.style.color = 'rgb(234, 247, 255)';
        } else {
            navElement.style.backgroundColor = '#8299ac';
            navElement.style.color = 'rgb(234, 247, 255)';
        }
    }
}
