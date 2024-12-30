const gerenatebutton = document.getElementById("gerenatebutton");
const copybutton = document.getElementById("copybutton");
const show = document.querySelector(".show");
const passwordInput = document.getElementById("password");

gerenatebutton.onclick = function gerenatePassword(){
    const character ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    const pwdLength = 16;
    let password ="";

    for (let i=0; i<pwdLength; i++){
        let generatePwd = Math.floor(Math.random()*character.length)
        password += character.substring(generatePwd, generatePwd+1);
    }
    passwordInput.value = password;
}
copybutton.onclick = function copyPwd(){

    const passwordValue = passwordInput.value;
    if(passwordValue.trim()===""){
        alert("Password is Empty");
    }
    else{
        navigator.clipboard.writeText(passwordValue).then(function(){
            show.innerHTML ="Your New Password is:<br>" + passwordValue;
            show.classList.add("active");
            setTimeout(()=>{
                show.classList.remove("active");
            }, 2000);
            passwordInput.value="";
        })
    }
}