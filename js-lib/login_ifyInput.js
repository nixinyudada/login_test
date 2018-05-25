function login_ifyInput(verCode){
    var username = document.getElementById("username")
    var password = document.getElementById("password")
    var verification_code = document.getElementById("verification_code")

    // icon 提示 id
    var username_tips = document.getElementById("username_tips")
    var password_tips = document.getElementById("password_tips")
    var verification_code_tips = document.getElementById("verification_code_tips")

    // 文字提示容器
    var username_tips_word = document.getElementById("username_tips_word")
    var password_tips_word = document.getElementById("password_tips_word")
    var verification_code_tips_word = document.getElementById("verification_code_tips_word")


        var bool = true;
        var n = false;  // 用户名是否存在
        var j = false;  // 用户名与密码是否匹配

        // ajax 过去数据
        var html = $.ajax({
            type: "get",
            url: "http://localhost:3000/users",
            async: false
        }).responseText;

        var obj = JSON.parse(html)
        /***************************************************************************************************/


        var u = function(){
            // 用户名是否为空
            if(username.value == "" || username.value == null){
                username_tips.style.background = "red"
                username_tips_word.innerHTML = "用户名不能为空！"
                return false;
            }else{
                // 用户名是否存在
                for(var i =0;i < obj.length;i++){
                    if(obj[i]["username"] == username.value){
                        n = true
                    }
                }
                if(!n){
                    username_tips.style.background = "red"
                    username_tips_word.innerHTML = "用户名不存在！"
                    return false
                }else{
                    username_tips.style.background = "green"
                    username_tips_word.innerHTML = ""
                    n = false
                }
            }
            return true
        }
        /***************************************************************************************************/
        var p = function(){
            if(password.value == "" || password.value == null){
                password_tips.style.background = "red"
                password_tips_word.innerHTML = "密码不能为空！"
                return false;
            }else{
                // 账号与密码是否匹配
                for(var i =0;i<obj.length;i++){
                    if(obj[i]["username"] == username.value && obj[i]["password"] == password.value){
                        j = true;
                    }
                }
                if(!j){
                    password_tips.style.background = "red"
                    password_tips_word.innerHTML = "密码错误！"
                    return false
                }else{
                    password_tips.style.background = "green"
                    password_tips_word.innerHTML = ""
                    j = false
                }
            }
            return true
        }
        /***************************************************************************************************/
        var v = function(Code){
            if(verification_code.value == "" || verification_code.value == null){
                verification_code_tips.style.background = "red"
                verification_code_tips_word.innerHTML = "请输入验证码！"
                return false;
            }else{
                if(verification_code.value != Code){
                    verification_code_tips.style.background = "red"
                    verification_code_tips_word.innerHTML = "验证码不正确！"
                    bool = false;
                    return false;
                }else{
                    verification_code_tips.style.background = "green"
                    verification_code_tips_word.innerHTML = ""
                }
            }
            return true
        }

    var o = {
        "pFunc":p,
        "uFunc":u,
        "vFunc":v,
        "isU":true,
        "isV":true
    }
    username.onchange = function(){
        bool = o.uFunc()
        o.isU = bool
        }

    verification_code.onchange = function(){
        bool = o.vFunc(verCode)
        o.isV = bool
    }

    password.onchange = function(){
        if(password.value == "" || password.value == null){
            password_tips.style.background = "red"
            password_tips_word.innerHTML = "密码不能为空！"
            return false;
        }else{
            password_tips.style.background = "white"
            password_tips_word.innerHTML = "待确认"
        }
    }


    username.onchange = function(){
        bool = o.uFunc()
        o.isU = bool
    }

    verification_code.onchange = function(){
        bool = o.vFunc(verCode)
        o.isV = bool
    }

return o
}
