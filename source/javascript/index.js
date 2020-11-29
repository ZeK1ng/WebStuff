var userName =""
var password = ""
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "http://127.0.0.1:8000/source/php/fileReader.php", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.onreadystatechange = function() {
    if (this.readyState===4 && this.status === 200){ 
        console.log("ASDAS")
        console.log(this.responseText); // echo from php?
    }       
};
xmlhttp.send("params=");

document.getElementById("loginButton").addEventListener("click" ,function(){
    userName = document.getElementById("LoginUsername").value
    password = document.getElementById("LoginUserPass").value 
    console.log(userName,password)
});
document.getElementById("signUp").addEventListener("click",function(){
    window.location.href="signUp.html"
});

