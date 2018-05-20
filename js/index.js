window.onload = function () {
    // 获取login box 与 topbar 节点
    var loginBox = document.getElementById("loginBox")
    var topBar = document.getElementById("topBar")

    // 1、鼠标在login box 中头部按下的时候，计算鼠标在盒子中的坐标
        // 1.1、给头部注册鼠标按下事件
    topBar.onmousedown = function (e) {
        e = e || event
        // 1.2、计算鼠标在盒子中坐标 = 鼠标在页面中的坐标 - 盒子在页面中的坐标
        var x = getPage(e).pageX - loginBox.offsetLeft;
        var y = getPage(e).pageY - loginBox.offsetTop;

        // 2、鼠标在整个页面移动的过程中，计算盒子在页面中坐标
        document.onmousemove = function (e) {
            // 计算盒子在页面中坐标 = 鼠标在页面上坐标 - 鼠标在盒子中的坐标
            var boxX = getPage(e).pageX - x;
            var boxY = getPage(e).pageY - y;

            // 控制盒子的移动单位
            if(boxX < 0){
                boxX = 0;
            }
            if(boxY < 0){
                boxY = 0
            }

            // 控制移动范围 右下角
            /*
            * 盒子的大小？
            * login.offsetWidth
            * 页面的大小？  window.innerWidth
            * */
            if(boxX > window.innerWidth - loginBox.offsetWidth){
                boxX = window.innerWidth - loginBox.offsetWidth
            }

            if(boxY > window.innerHeight - loginBox.offsetHeight){
                boxY = window.innerHeight - loginBox.offsetHeight
            }

            loginBox.style.left = boxX + 'px';
            loginBox.style.top = boxY + 'px';
        }
    }

    //当鼠标弹起的时候，移除 move 事件
    document.onmouseup = function () {
        document.onmousemove = null;
    }




}

