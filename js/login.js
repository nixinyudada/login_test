window.onload = function(){
    DragBox({
        "width":500,
        "height":360,
        "title":"欢迎登陆",
        "id":"loginBox",
        "showBox":"login_box"
    });


    var verification_img = document.getElementById("verification_img")
    verification_img.src = "img/2.png";
    var img_arr = ['1.png','2.png','3.png','4.png']
    var code_arr = ['q345','1234','grf4','49mk']
    var code = "1234"
    var obj = login_ifyInput(code)
    document.getElementById("next_img").onclick = function(){
        var num = Math.floor(Math.random()*4);
        verification_img.src = "img/"+img_arr[num];
        code = code_arr[num]
        obj = login_ifyInput(code)
    }


    document.getElementById("login").onclick = function(){
        //alert("方法为：&nbsp;&nbsp;&nbsp;"+b)
        if(!obj.isU){
           alert("请点击用户名输入框右边的红点查看错误提示！")
            return
        }else if(!obj.isV){
            alert("请点击验证码输入框右边的红点查看错误提示！")
            return
        }else{
            var password_V = obj.pFunc()
            if(password_V){
                alert("登陆成功！")
                location.href = "badApple/index.html"
                // 待传服务端
                /*var username_val = document.getElementById("username").value;
                var password_val = document.getElementById("password").value;
                var verification_code_val = document.getElementById("verification_code").value;
                var data = {
                    "username":username_val,
                    "password":password_val,
                    "verification_code":verification_code_val
                }
                $.ajax({
                    type: "post",
                    url: "http://localhost:3000/users",
                    //data:data,
                    dataType:"json",
                    async:false,
                    success: function (data) {
                        //alert('注册成功！');
                    },
                    error: function (msg) {
                        alert(msg);
                    }
                });*/
            }else{
                alert("请输入正确的密码！")
                document.getElementById("password").value = ""
            }
        }



    }


    document.getElementById("loadDiv").style.display = "none"
}