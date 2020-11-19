var userName =""
var password = ""

document.getElementById("signUpButton").addEventListener("click" ,function(){
    userName = document.getElementById("usernameRegisterInputID").value
    password = document.getElementById("passwordRegisterInputID").value 
    console.log(userName,password)
    //check user details
  //if user exists throw error 
  // else put it in db and go to main page
  window.location.href = "userPage.html"
});
document.getElementById("loginButton").addEventListener("click" ,function(){
  window.location.href = "index.html"
});

