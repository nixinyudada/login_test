window.onload = function(){
    // 注册内容
    var login_input = `<div class="inputBox">
            <div class="contentBox">
                <p><b>用户名:</b><input type="text" id="username" placeholder="用户名"><span style="position: relative;"><span id="username_tips" onclick="sh('username_tips','username_tips_word')"></span><span id="username_tips_word"></span></span></p>
                <p><b>密码:</b><input type="password" id="password" placeholder="密码"><span style="position: relative;"><span id="password_tips" onclick="sh('password_tips','password_tips_word')"></span><span id="password_tips_word"></span></span></p>
                <p><b>验证码:</b><input type="text" id="verification_code" placeholder="验证码"><span style="position: relative;"><span id="verification_code_tips" onclick="sh('verification_code_tips','verification_code_tips_word')"></span><span id="verification_code_tips_word"></span></span></p>
                <br>
                <button id="login">登陆</button>
                <button id="register.html">注册</button>
            </div>
        </div>`;

    var login_tips = `<br /><br /><br /><br /><h1>欢迎登陆</h1><br/>
                    <button id="continue">下一步</button>
                `;
    /*typing({
        "Tipstext":login_tips,
        "ContainerId":"content",
        "speed":30

    })*/
    DragBox({
        "width":500,
        "height":500,
        "title":"欢迎登陆",
        "id":"loginBox",
        "showBox":"login_box"
    });
    // 下一步显示 注册表单
    if(document.getElementById("continue") == null){
        document.getElementById("loginBox").onmouseover = function(){
            if(document.getElementById("continue") != null){
                document.getElementById("continue").onclick = function(){
                    typing({
                        "Tipstext":login_input,
                        "ContainerId":"content",
                        "speed":1
                    });
                }
            }


        }
    }


    var verification_img = document.getElementById("verification_img")
    verification_img.src = "img/1.png";
    var img_arr = ['1.png','2.png','3.png','4.png']
    var code_arr = ['1234','q345','gfr4','49mk']
    var code = "1234"
    document.getElementById("next_img").onclick = function(){
        var num = Math.floor(Math.random()*4);
        verification_img.src = "img/"+img_arr[num];
        code = code_arr[num]
    }
    document.onmouseover = function(){
        if(document.getElementById("login") != null){
            document.getElementById("login").onclick = function(){
                var b = login_ifyInput(code)
                alert("方法为：&nbsp;&nbsp;&nbsp;"+b)
                if(b){
                    location.href = "index.html"
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
                    alert("输入有误！")
                }
            }
        }
    }
}