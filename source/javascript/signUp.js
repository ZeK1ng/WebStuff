var userName =""
var password = ""
document.getElementById("signUpButton").addEventListener("click" ,function(){
    userName = document.getElementById("usernameRegisterInputID").value
    password = document.getElementById("passwordRegisterInputID").value 
    console.log(userName,password)
});
document.getElementById("loginButton").addEventListener("click" ,function(){
  window.location.href = 'index.html'
});

