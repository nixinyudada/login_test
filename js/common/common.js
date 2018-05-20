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
