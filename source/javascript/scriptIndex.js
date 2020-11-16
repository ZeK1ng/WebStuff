var userName =""
var password = ""
document.getElementById("loginButton").addEventListener("click" ,function(){
    userName = document.getElementById("LoginUsername").value
    password = document.getElementById("LoginUserPass").value 
    console.log(userName,password)
});
document.getElementById("signUp").addEventListener("click",function(){
    window.location.href="signUp.html"
});

