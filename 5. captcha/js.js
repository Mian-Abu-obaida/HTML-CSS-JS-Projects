
const display = document.getElementById("_status");
const body = document.body;
const submit = document.getElementById("_submit");
const refresh = document.getElementById("_refresh");
const char = "0123456789ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz";
let captcha ="";

body.onload = function gerenateCaptcha (){
    const captchaLenght = 6;
    for (let i=0; i<captchaLenght; i++){
        const randomIndex = Math.floor(Math.random() * char.length) ;
        captcha += char.substring(randomIndex, randomIndex+1);
    }
    document.getElementById("_gerenator").value = captcha ;
    display.innerText = "Captcha Gerenator";
}
submit.onclick = function checkInput (){
    const input = document.getElementById("_client-text").value;
    if (input===""){
        display.innerText = "Please Enter the text shown";
    } else if (input===captcha){
        display.innerText = "Matched";
    }else {
        display.innerText ="Not Matched"
    }
}
refresh.onclick = function refreshCaptcha (){
    let newCaptcha = "";
    for (let i=0; i< captcha.length; i++){
        const randomChar = char[Math.floor(Math.random() * char.length)]
        newCaptcha += randomChar;
    }
    captcha = newCaptcha;
    document.getElementById("_gerenator").value = captcha ;
    display.innerText = "Captcha Gerenator";
}
