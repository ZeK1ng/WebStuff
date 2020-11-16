var userName =""
var password = ""
document.getElementById("loginButton").addEventListener("click" ,function(){
    userName = document.getElementById("LoginUsername").value
    password = document.getElementById("LoginUserPass").value 
    console.log(userName,password)
});
document.getElementById("signUp").addEventListener("click",function(){
    document.getElementById("inputs").innerHTML='';
    var SignUpHeader = document.createElement("H2");
    SignUpHeader.appendChild(document.createTextNode("Sign Up"));
    SignUpHeader.className +=  "header";
    document.getElementById("inputs").appendChild(SignUpHeader)
    var userNameInput = document.createElement("INPUT")
    userNameInput.className+= "input"
    userNameInput.setAttribute("type","text");
    userNameInput.setAttribute("placeholder", "Username");
    userNameInput.setAttribute("id", "usernameRegisterInputID");
    document.getElementById("inputs").appendChild(userNameInput)
    var passwordInput = document.createElement("INPUT")
    passwordInput.className+= "input"
    passwordInput.setAttribute("type","password");
    passwordInput.setAttribute("placeholder", "Password");
    passwordInput.setAttribute("id", "passwordRegisterInputID");
    document.getElementById("inputs").appendChild(passwordInput)
    var signUpBtn = document.createElement("Button");
    signUpBtn.appendChild(document.createTextNode("Sign Up"));
    signUpBtn.classList.add("button")
    signUpBtn.classList.add("registerBtn")

    signUpBtn.id = "RegisterButton"
    document.getElementById("inputs").appendChild(signUpBtn)
    document.querySelector('.registerBtn').addEventListener('click',function(){
        console.log(document.getElementById('usernameRegisterInputID').value , document.getElementById('passwordRegisterInputID').value);
    });
});

