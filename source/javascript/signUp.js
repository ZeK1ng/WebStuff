var userName =""
var password = ""

document.getElementById("signUpButton").addEventListener("click" ,function(){
    userName = document.getElementById("usernameRegisterInputID").value.trim()
    password = document.getElementById("passwordRegisterInputID").value.trim()
  
    if (userName.length == 0 || password.length == 0){
 
      if(userName.length == 0){
       document.getElementById("usernameRegisterInputID").style.borderColor = 'red';
      }
      if (password.length == 0 ){
        document.getElementById("passwordRegisterInputID").style.borderColor = 'red';
      }
    } 
    if(userName.length != 0 && password.length!=0){
      //check user details
      //if user exists throw error 
      // else put it in db and go to main page
      var params = ""
      params= userName + " " +password + "0" +"\n";
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("POST", "http://127.0.0.1:8000/source/php/server.php", true);
      xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xmlhttp.onreadystatechange = function() {
          if (this.readyState===4 && this.status === 200){ 
              console.log("ASDAS")
              console.log(this.responseText); // echo from php?
          }       
      };
      console.log("Sending")
      xmlhttp.send("params=" + params);
      window.location.href="userPage.html"
    }
     

});
document.getElementById("loginButton").addEventListener("click" ,function(){
  window.location.href = "index.html"
});

