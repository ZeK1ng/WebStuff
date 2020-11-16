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
    var signUpBtn = document.createElement("Button");
    signUpBtn.appendChild(document.createTextNode("Sign Up"));
    signUpBtn.className +="button"
    signUpBtn.id = "signUpSave"
    document.getElementById("inputs").appendChild(signUpBtn)

});