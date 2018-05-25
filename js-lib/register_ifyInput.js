// 定义一个判断函数
function register_ifyInput(){
    // 验证注册输入是否规范
    var user = document.getElementById("user")
    var username = document.getElementById("username")
    var password = document.getElementById("password")
    var repassword = document.getElementById("repassword")
    var e_mail = document.getElementById("e_mail")
    var phonenumber = document.getElementById("phonenumber")

// 获取表单的输入提示 容器
    var user_tips = document.getElementById("user_tips")
    var username_tips = document.getElementById("username_tips")
    var password_tips = document.getElementById("password_tips")
    var repassword_tips = document.getElementById("repassword_tips")
    var e_mail_tips = document.getElementById("e_mail_tips")
    var phonenumber_tips = document.getElementById("phonenumber_tips")

    var user_tips_word = document.getElementById("user_tips_word")
    var username_tips_word = document.getElementById("username_tips_word")
    var password_tips_word = document.getElementById("password_tips_word")
    var repassword_tips_word = document.getElementById("repassword_tips_word")
    var e_mail_tips_word = document.getElementById("e_mail_tips_word")
    var phonenumber_tips_word = document.getElementById("phonenumber_tips_word")


    var ifyN = function(){
        var user_val = user.value.replace(/\s/g,"");
        if(user_val == null || user_val == ""){
            //alert("输入不能为空！")
            user_tips.style.background = "red"
            user_tips_word.innerHTML = "输入不能为空！";
            return false;
        }else if(user_val.length < 2 || user_val.length > 6){
            // alert("长度请保持在2~6之间")
            user_tips.style.background = "red"
            user_tips_word.innerHTML = "长度请保持在2~6之间"
            return false;
        }else{
            user_tips.style.background = "green"
            user_tips_word.innerHTML = "";
        }
        return true;
    }
    /****************************************************************************************/
    var ifyU = function(){
        // 匹配数字及特殊字符的正则表达式
        var username_code = /[a-zA-Z][a-zA-Z0-9]*/;
        var username_val = username.value.replace(/\s/g,"");
        if(username_val == null || username_val == ""){
            // alert("输入不能为空！")
            username_tips.style.background = "red"
            username_tips_word.innerHTML = " 输入不能为空！";
            return false;
        }else if(username_val.length < 6 || username_val.length > 12){
            // alert("长度请保持在6~12之间")
            username_tips.style.background = "red"
            username_tips_word.innerHTML = "长度请保持在6~12之间"
            return false;
        }else if(!username_code.test(username_val[0])){
            //alert("用户名第一位不能为特殊字符及数字！")
            username_tips.style.background = "red"
            username_tips_word.innerHTML = "用户名第一位不能为特殊字符及数字！"
            return false;
        }else{
            var html = $.ajax({
                type: "get",
                url: "http://localhost:3000/users",
                async: false
            }).responseText;
            var obj = JSON.parse(html)
            for (var i=0;i<obj.length;i++){
                if(username_val == obj[i]["username"]){
                    //alert("用户名已存在！")
                    username_tips.style.background = "red"
                    username_tips_word.innerHTML = "用户名已存在！"
                    return false;
                }else{
                    username_tips.style.background = "green"
                    username_tips_word.innerHTML = ""
                }
            }
        }
        return true;
    }
    /****************************************************************************************/
    var ifyP = function(){
        var password_val = password.value.replace(/\s/g,"");
        if(password_val == null || password_val == ""){
            //alert("输入不能为空！")
            password_tips.style.background = "red"
            password_tips_word.innerHTML = "输入不能为空！"
            return false;
        }else if(password_val.length < 6 || password_val.length > 12){
            //alert("长度请保持在2~6之间")
            password_tips.style.background = "red"
            password_tips_word.innerHTML = "长度请保持在6~12之间"
            return false;
        }else{
            password_tips.style.background = "green"
            password_tips_word.innerHTML = ""
        }
        return true;
    }
    /****************************************************************************************/
    var ifyRP = function(){
        var repassword_val = repassword.value.replace(/\s/g,"");
        if(repassword_val == null || repassword_val == ""){
            //alert("输入不能为空！")
            repassword_tips.style.background = "red"
            repassword_tips_word.innerHTML = "输入不能为空！"
            return false;
        }else if(repassword_val != password.value){
            //alert("两次密码输入不一致！")
            repassword_tips.style.background = "red"
            repassword_tips_word.innerHTML = "两次密码输入不一致！"
            return false;
        }else{
            repassword_tips.style.background = "green"
            repassword_tips_word.innerHTML = ""
        }
        return true;
    }
    /****************************************************************************************/
    var ifyE = function(){
        // 邮箱正则表达式
        var email_ze = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        var e_mail_val = e_mail.value.replace(/\s/g,"");
        if(e_mail_val == null || e_mail_val == ""){
            //alert("输入不能为空！")
            e_mail_tips.style.background = "red"
            e_mail_tips_word.innerHTML = "输入不能为空！"
            return false;
        }else if(!email_ze.test(e_mail_val)){
            //alert("请输入正确的邮箱格式！")
            e_mail_tips.style.background = "red"
            e_mail_tips_word.innerHTML = "请输入正确的邮箱格式！"
            return false;
        }else{
            e_mail_tips.style.background = "green"
            e_mail_tips_word.innerHTML = ""
        }
        return true;
    }
    /****************************************************************************************/
    var ifyPNUM = function(){
        // 手机号码正则表达式
        var phonenumber_ze = /^1[345678]\d{9}$/;
        var phonenumber_val = phonenumber.value.replace(/\s/g,"");
        if(phonenumber == null || phonenumber == ""){
            //alert("输入不能为空！")
            phonenumber_tips.style.background = "red"
            phonenumber_tips_word.innerHTML = "输入不能为空！"
            return false;
        }else if(!phonenumber_ze.test(phonenumber_val)){
            //alert("请输入正确的手机号码格式！")
            phonenumber_tips.style.background = "red"
            phonenumber_tips_word.innerHTML = "请输入正确的手机号码格式！"
            return false;
        }else{
            phonenumber_tips.style.background = "green"
            phonenumber_tips_word.innerHTML = ""
        }
        return true;
    }
    /****************************************************************************************/

    var obj = {
        "ifyName":ifyN,
        "ifyUser":ifyU,
        "ifyPasswrod":ifyP,
        "ifyRepassword":ifyRP,
        "ifyEmail":ifyE,
        "ifyPhonenum":ifyPNUM
    }

    return obj;
    /*if(n&&u&&p&&rp&&e&&pnum){
        return true
    }else{
        return false;
    }*/
}