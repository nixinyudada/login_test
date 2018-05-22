window.onload = function(){
    /*var register_tips = `<br /><br /><br /><br /><h1>欢迎注册</h1><br/>
                    <button id="continue">下一步</button>
                `;*/
    /*typing({
        "Tipstext":register_tips,
        "ContainerId":"content",
        "speed":30

    })*/
    DragBox({
        "width":500,
        "height":500,
        "title":"欢迎注册",
        "id":"registerBox",
        "showBox":"register_box"
    });
    // 下一步显示 注册表单
    /*if(document.getElementById("continue") == null){
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
    }*/


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