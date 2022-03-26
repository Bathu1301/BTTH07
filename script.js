
$(document).ready(function(){

    function checkUserId(){

        let userID = $('#txtUserID').val();
        let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
        if(userIDRegex.test(userID)){
            return true
        }
        return false
    }

    function checkEmail(){
        let email = $('#txtEmail').val();
        if(email.includes('@')){
            return true
        }
        return false
    }

    function checkPassword(){
        let password = $('#txtPassword').val();
        let passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
        if(passwordRegex.test(password)){
            return true
        }
        return false
    }

    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkUserId()){
            $("#statusOfUserID").text('UserID hợp lệ')
            $("#statusOfUserID").css('color','blue')
        }else{
            $("#statusOfUserID").text('UserID không hợp lệ')
            $("#statusOfUserID").css('color','red')
        }

        if(checkPassword()){
            $("#statusOfPassword").text('Password hợp lệ')
            $("#statusOfPassword").css('color','blue')
        }else{
            $("#statusOfPassword").text('Password không hợp lệ')
            $("#statusOfPassword").css('color','red')
        }

        if(checkEmail()){
            $("#statusOfEmail").text('Địa chỉ email hợp lệ')
            $("#statusOfEmail").css('color','blue')
        }
        else{
            $("#statusOfEmail").text('Địa chỉ email không hợp lệ')
            $("#statusOfEmail").css('color','red')
        }

    })


})

