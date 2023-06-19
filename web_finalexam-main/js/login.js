// 获取具有id为back的元素
var back = document.getElementById('back');

// 当鼠标移动时执行的函数
window.onmousemove = function (event) {
    // 计算背景位置的x和y坐标
    var x = -event.clientX / 20;
    var y = -event.clientY / 30;

    // 设置背景位置的x和y坐标
    back.style.backgroundPositionX = x + "px";
    back.style.backgroundPositionY = y + "px";
}

// 生成验证码的函数
function generateVerificationCode() {
    var code = "";
    var characters = "0123456789";

    // 生成4位随机验证码
    for (var i = 0; i < 4; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return code;
}

// 生成随机验证码
var generatedCode = generateVerificationCode();
// 将随机验证码显示在具有id为verificationCode的元素中
document.getElementById("verificationCode").textContent = generatedCode;

// 获取具有id为zh和mm的元素
var zh = document.getElementById('zh');
var mm = document.getElementById('mm');

var db;
var request;

// 创建数据库的函数
function createDB(dbName) {
    // 打开数据库
    request = indexedDB.open(dbName, 1);

    // 打开数据库失败时的处理函数
    request.onerror = function (event) {
        alert("打开数据库失败: " + event.target.errorCode);
    }

    // 打开数据库成功时的处理函数
    request.onsuccess = function (event) {
        //alert("打开数据库成功!");
        db = event.target.result;
    }

    // 数据库版本发生变化时的处理函数
    request.onupgradeneeded = function (event) {
        alert("版本已经发生改变！");
        db = event.target.result;

        // 创建一个名为"user"的对象存储空间，使用"userNo"作为键路径
        var objectStore = db.createObjectStore("user", {keyPath: "userNo"});
        // 创建一个使用"userNo"键的索引
        objectStore.createIndex("by_userNo", "userNo", {unique: true});
    }
}

// 注册函数
function register() {
    var account = document.getElementById("zh").value;
    var password = document.getElementById("mm").value;

    // 检查账户和密码是否为空
    if (account === "" || password === "") {
        alert("账户和密码不能为空");
        return false;
    }

    // 创建事务对象并获取"user"对象存储空间
    var transaction = db.transaction(["user"], "readwrite");
    var objectStore = transaction.objectStore("user");

    // 向"user"对象存储空间添加用户数据
    var addUser = objectStore.add({userNo: account, password: password});

    // 添加成功时的处理函数
    addUser.onsuccess = function (event) {
        alert("注册成功");
    }

    // 添加失败时的处理函数
    addUser.onerror = function (event) {
        alert("注册失败");
    }
}

// 登录函数
function login() {
    var account = document.getElementById("zh").value;
    var password = document.getElementById("mm").value;
    var verification = document.getElementById("verification").value;

    // 检查账户、密码和验证码是否为空
    if (account === "" || password === "" || verification === "") {
        alert("账户、密码和验证码不能为空");
        return false;
    }

    // 验证验证码是否正确
    if (verification !== generatedCode) {
        alert("验证码错误");
        return false;
    }

    // 创建只读事务对象并获取"user"对象存储空间
    var transaction = db.transaction(["user"], "readonly");
    var objectStore = transaction.objectStore("user");

    // 根据用户账户获取用户数据
    var getUser = objectStore.get(account);

    // 获取成功时的处理函数
    getUser.onsuccess = function (event) {
        var user = event.target.result;
        if (user && user.password === password) {
            alert("登录成功");
            window.location.href = "home.html";
        } else {
            alert("账户或密码错误");
            location.reload();
        }
    }

    // 获取失败时的处理函数
    getUser.onerror = function (event) {
        alert("登录失败");
        location.reload();
    }
}

// 创建名为"myDatabase"的数据库
createDB("myDatabase");

// 获取具有id为con的元素
var con = document.getElementById('con');

// 隐藏元素con的函数
function loadoff() {
    con.style.display = "none";
}

// 显示元素con的函数
function loadon() {
    con.style.display = "flex";
}

// 页面加载完成时执行的函数
window.onload = function () {
    loadon();
    setTimeout(loadoff, 2000);
}
