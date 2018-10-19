// var btnSubmit = document.getElementById("btnSubmit");
// btnSubmit.onclick = function () {
//     var txtUsername = document.getElementById("txtUsername");
//     var msgError = document.getElementById("msg-error");
//     if (txtUsername.value.length < 5){
//         msgError.innerHTML = "* Ten ban qua ngan.";
//         msgError.classList.remove("hidden-text");
//     } else if (txtUsername.value.length >20){
//         msgError.innerHTML = "* Ten cua ban qua dai.";
//         msgError.classList.remove("hidden-text");
//     } else {
//         msgError.innerHTML = " Ten hop le.";
//         msgError.classList.remove("hidden-text");
//         msgError.classList.remove("danger-text");
//         msgError.classList.add("success-text");
//     }
// }
var btnSubmit= document.forms["register-form"]["btn-submit"];
btnSubmit.onclick=function () {
    var txtUsername=document.forms["register-form"]["username"];
    var msgUsername=txtUsername.nextElementSibling;
    if (txtUsername==null||txtUsername.value.length == 0 ){
        msgUsername.innerHTML = "*vui long nhap ten ban.";
        msgUsername.classList.remove("hidden-text");
    } else if(txtUsername.value.length < 5){
        msgUsername.innerHTML = "*Ten ban qua ngan.";
        msgUsername.classList.remove("hidden-text");
    }else if(txtUsername.value.length > 20){
        msgUsername.innerHTML = "*Ten ban qua dai.";
        msgUsername.classList.remove("hidden-text");
    }else {
        msgUsername.innerHTML = " Ten hop le.";
        msgUsername.classList.remove("hidden-text");
        msgUsername.classList.remove("danger-text");
        msgUsername.classList.add("success-text");
    }
    var txtPassword = document.forms["register-form"]["password"];
    var msgPassword = txtPassword.nextElementSibling;
    if (txtPassword==null||txtPassword.value.length==0){
        msgPassword.innerHTML = "* password khong duoc bo trong.";
        msgPassword.classList.remove("hidden-text");
    }else {
        msgPassword.innerHTML = " password hop le.";
        msgPassword.classList.remove("hidden-text");
        msgPassword.classList.remove("danger-text");
        msgPassword.classList.add("success-text");
    }
    var txtFullname = document.forms["register-form"]["fullname"];
    var msgFullname = txtFullname.nextElementSibling;
    if (txtFullname==null||txtFullname.value.length==0){
        msgFullname.innerHTML = "*vui long nhap ten day du cua ban.";
        msgFullname.classList.remove("hidden-text");
    }else if(txtFullname.value.length < 5){
        msgFullname.innerHTML = "*Ten ban qua ngan.";
        msgFullname.classList.remove("hidden-text");
    }else if(txtFullname.value.length > 30){
        msgFullname.innerHTML = "*Ten ban qua dai.";
        msgFullname.classList.remove("hidden-text");
    }else {
        msgFullname.innerHTML = " Ten hop le.";
        msgFullname.classList.remove("hidden-text");
        msgFullname.classList.remove("danger-text");
        msgFullname.classList.add("success-text");
    }
    var txtEmail = document.forms["register-form"]["email"];
    var msgEmail = txtEmail.nextElementSibling;
    var aCong =txtEmail.value.includes("@");
    if (txtEmail==null||txtEmail.value.length==0){
        msgEmail.innerHTML = "* Email khong duoc bo trong.";
        msgEmail.classList.remove("hidden-text");
    }else if(aCong == false) {
        msgEmail.innerHTML = "* phai ton tai it nhat 1 ky tu @";
        msgEmail.classList.remove("hidden-text");
    }else {
        msgEmail.innerHTML = " Email hop le.";
        msgEmail.classList.remove("hidden-text");
        msgEmail.classList.remove("danger-text");
        msgEmail.classList.add("success-text");
    }
}