window.onload = function(){

    // 注册内容
    var register_input = `<div class="inputBox">
            <div class="contentBox">
                <p><b>姓名:</b><input type="text" id="user" placeholder="姓名"><span style="position: relative;"><span id="user_tips" onclick="sh('user_tips','user_tips_word')"></span><span id="user_tips_word">123</span></span></p>
                <p><b>用户名:</b><input type="text" id="username" placeholder="用户名"><span style="position: relative;"><span id="username_tips" onclick="sh('username_tips','username_tips_word')"></span><span id="username_tips_word"></span></span></p>
                <p><b>密码:</b><input type="password" id="password" placeholder="密码"><span style="position: relative;"><span id="password_tips" onclick="sh('password_tips','password_tips_word')"></span><span id="password_tips_word"></span></span></p>
                <p><b>密码:</b><input type="password" id="repassword" placeholder="确认密码"><span style="position: relative;"><span id="repassword_tips" onclick="sh('repassword_tips','repassword_tips_word')"></span><span id="repassword_tips_word"></span></span></p>
                <p><b>邮箱:</b><input type="text" id="e_mail" placeholder="邮箱"><span style="position: relative;"><span id="e_mail_tips" onclick="sh('e_mail_tips','e_mail_tips_word')"></span><span id="e_mail_tips_word"></span></span></p>
                <p><b>手机号:</b><input type="text" id="phonenumber" placeholder="手机号码"><span style="position: relative;"><span id="phonenumber_tips" onclick="sh('phonenumber_tips','phonenumber_tips_word')"></span><span id="phonenumber_tips_word"></span></span></p>
                <br>
                <button id="register">注册</button>
                <button id="login.html">登陆</button>
            </div>
        </div>`;

    var register_tips = `<br /><br /><br /><br /><h1>欢迎注册</h1><br/>
                    <button id="continue">下一步</button>
                `;
    typing({
        "Tipstext":register_tips,
        "ContainerId":"content",
        "speed":30

    })
    DragBox({
        "width":500,
        "height":500,
        "title":"欢迎注册",
        "id":"registerBox",
        "showBox":"register_box"
    });
    // 下一步显示 注册表单
    if(document.getElementById("continue") == null){
        document.getElementById("registerBox").onmouseover = function(){
            if(document.getElementById("continue") != null){
                document.getElementById("continue").onclick = function(){
                    typing({
                        "Tipstext":register_input,
                        "ContainerId":"content",
                        "speed":1
                    });
                }
            }


        }
    }


    document.onmouseover = function(){
        if(document.getElementById("register") != null){
            document.getElementById("register").onclick = function(){
                var b = register_ifyInput()
                if(b){
                    var user_val = document.getElementById("user").value;
                    var username_val = document.getElementById("username").value;
                    var password_val = document.getElementById("password").value;
                    var e_mail_val = document.getElementById("e_mail").value;
                    var phonenumber_val = document.getElementById("phonenumber").value;

                    var data = {
                        "user":user_val,
                        "username":username_val,
                        "password":password_val,
                        "e_mail":e_mail_val,
                        "phonenumber":phonenumber_val
                    }
                    $.ajax({
                        type: "post",
                        url: "http://localhost:3000/users",
                        data:data,
                        dataType:"json",
                        async:false,
                        success: function (data) {
                            alert('注册成功！');
                        },
                        error: function (msg) {
                            alert(msg);
                        }
                    });
                }else{
                    alert("输入有误！")
                }
            }




        }
    }




}