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

    var u = function(){

        if(username.value == "" || username.value == null){
            username_tips.style.background = "red"
            username_tips_word.innerHTML = "用户名不能为空！"
            return false;
        }else if(password.value == "" || password.value == null){
            password_tips.style.background = "red"
            password_tips_word.innerHTML = "密码不能为空！"
            return false;
        }

        // ajax 过去数据
        var html = $.ajax({
            type: "get",
            url: "http://localhost:3000/users",
            async: false
        }).responseText;

        var obj = JSON.parse(html)

        var n = false;
        for(var i =0;i < obj.length;i++){
            if(obj[i]["username"] == username.value){
                n = true
            }
        }

        if(!n){
            username_tips.style.background = "red"
            username_tips_word.innerHTML = "用户名不存在！"
           //alert("用户名不存在！")
            return false
        }

        var j = false;
        for(var i =0;i<obj.length;i++){
            if(obj[i]["username"] == username.value && obj[i]["password"] == password.value){
                j = true;
            }
        }

        if(j){
            //alert("登陆成功！")
            //location.href = "index.html"
        }else{
            password_tips.style.background = "red"
            password_tips_word.innerHTML = "密码错误！"
            //alert("密码错误！")
            return false
        }
        return true
    }


    var v = function (){
        alert(verCode)
        if(verification_code.value != verCode){
            verification_code_tips.style.background = "red"
            verification_code_tips_word.innerHTML = "验证码不正确！"
            return false;
        }
        return true
    }

    var b = u();
    var b2 = v();
    if(b&&b2){
        return true;
    }else{
        return false;
    }

}
