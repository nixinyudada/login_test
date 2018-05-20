/*
* ContainerId
* Tipstext
* */
function typing(obj){
// 定义一个变量 n
    var n = 0;
    // 获取文字长度
    var l = obj.Tipstext.length;
    // 定义一个打字方法
    function writing() {
        // 获取容器
        var box = document.getElementById(obj.ContainerId);
        // 将文字内容放入容器
        box.innerHTML = obj.Tipstext.slice(0,n) + "_";
        if(n > l){
            box.innerHTML = obj.Tipstext;
            return
        }

        // 让 n 增加，来得到打字的效果
        n = n+1;
        console.log(n)
        // 定时器 1毫秒执行一次
        var v = setTimeout(function(){
            writing()
        },obj.speed);
    }
    writing()
}

