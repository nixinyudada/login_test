// 需要传入什么参数
/*
*   1\容器 id
*   2\标题栏名称
* id,title,showBox,width,height
* */
function DragBox(obj){
    // 获取容器
    var container = document.getElementById(obj.id)
    var beforeCHtml = container.innerHTML;
    // language=HTML
    var html = `
        <div class="loginBox" id="loginBox">
        <div class="topBar" id="topBar">
            <p id="title">`+obj.title+`</p>
            <b id="closeBox">×</b>
        </div>
            `+beforeCHtml+`
    </div>
    `
    container.innerHTML = html;

    // 获取login box 与 topbar 节点
    var loginBox = document.getElementById("loginBox")
    var phtml = document.getElementById("title")
    var topBar = document.getElementById("topBar")
    var bhtml = document.getElementById("closeBox")

    loginBox.style.cssText = 'width: '+obj.width+'px;\n' +
        '    height: '+obj.height+'px;\n' +
        '    box-shadow:0px 0px 5px #ccc;\n' +
        '    border: 1px solid #ccc;\n' +
        '    position: absolute;\n' +
        '    top: 20%;\n' +
        '    left: 40%;';

    topBar.style.cssText = 'width: 100%;\n' +
        '    height: 30px;\n' +
        '    background:darkcyan;\n' +
        '    cursor: move;';

    phtml.style.cssText = 'width: 94%;\n' +
        '    height: 30px;\n' +
        '    float: left;\n' +
        '    text-indent: 1em;\n' +
        '    line-height: 30px;\n' +
        '    -webkit-user-select: none;\n' +
        '    -moz-user-select: none;\n' +
        '    user-select: none;';

    bhtml.style.cssText = 'width: 6%;\n' +
        '    height: 30px;\n' +
        '    float: right;\n' +
        '    background: #ccc;\n' +
        '    display: block;\n' +
        '    text-align: center;\n' +
        '    line-height: 30px;\n' +
        '    border-style: none;\n' +
        '    cursor: pointer;\n' +
        '    -webkit-user-select: none;\n' +
        '    -moz-user-select: none;\n' +
        '    user-select: none;'
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

    document.getElementById(obj.showBox).onclick = function(){
        loginBox.style.display = "block"
    }
    bhtml.onclick = function(){
        loginBox.style.display = "none"
    }

}


// 获取页面滚动出去的距离。处理兼容性
function getScroll() {
    return {
        scrollTop:document.documentElement.scrollTop || document.body.scrollTop,
        scrollLeft:document.documentElement.scrollLeft || document.body.scrollLeft
    }
}


// 获取鼠标在页面上的坐标   解决 ie8的问题
function getPage(e) {
    return {
        pageX:e.clientX + getScroll().scrollLeft,
        pageY:e.clientY + getScroll().scrollTop
    }
}