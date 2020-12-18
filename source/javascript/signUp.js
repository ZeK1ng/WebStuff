var userName =''
var password = ''
var xmlhttp1 = new XMLHttpRequest();
var userArr =[];
// xmlhttp1.open('GET', 'http://127.0.0.1:8000/source/php/readUserPass.php', true);
// xmlhttp1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
// xmlhttp1.onreadystatechange = function() {
//     if (this.readyState===4 && this.status === 200){ 
//         let userNamePasswords = JSON.parse(this.responseText);
//         for(var i = 0; i< userNamePasswords.length-1; i++){
//             var tuple = userNamePasswords[i];
//             let sepInd = tuple.indexOf(' ');
//             let currUsername = tuple.substr(0,sepInd);
//             userArr.push(currUsername);
//         }
//     }       
// };
// xmlhttp1.send('params=');

document.getElementById('signUpButton').addEventListener('click',signUp)
document.addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
      signUp()
  }
});
function signUp(){
  userName = document.getElementById('usernameRegisterInputID').value.trim()
  password = document.getElementById('passwordRegisterInputID').value.trim()
  var data = JSON.parse(localStorage.getItem('userData'))
  console.log(data)
  if (data == null) {
    data = []
  }
  if (userName.length == 0 || password.length == 0 ){

    if(userName.length == 0){
     document.getElementById('usernameRegisterInputID').style.borderColor = 'red';
    }
    if (password.length == 0 ){
      document.getElementById('passwordRegisterInputID').style.borderColor = 'red';
    }
  } 
  if(_includesName(data,userName)){
    window.alert("This username is already in use");
    document.getElementById('usernameRegisterInputID').style.borderColor = 'red';
  }
    
  if(userName.length != 0 && password.length!=0 && !_includesName(data,userName)){
    data.push({name:userName,password:password,userHighScore:0})
    localStorage.setItem('userData',JSON.stringify(data));
    localStorage.setItem('activeUser',userName)
    localStorage.setItem('userHighScore',0)
    window.location.href='/WebStuff/source/html/userPage.html'
    //check user details
    //if user exists throw error 
    // else put it in db and go to main page
    // var params = ''
    // params= userName + ' ' +password +'\n';
    // var xmlhttp = new XMLHttpRequest();
    // xmlhttp.open('POST', 'http://127.0.0.1:8000/source/php/serverUserPass.php', true);
    // xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // xmlhttp.onreadystatechange = function() {
    //     if (this.readyState===4 && this.status === 200){ 
    //         console.log('ASDAS')
    //         console.log(this.responseText); // echo from php?
    //     }       
    // };
    // console.log('Sending')
    // xmlhttp.send('params=' + params);

    // var usernameScore = ''
    // usernameScore += userName + ' 0\n';
    // var xmlhttpUsernameScore = new XMLHttpRequest();
    // xmlhttpUsernameScore.open('POST', 'http://127.0.0.1:8000/source/php/serverUserScore.php', true);
    // xmlhttpUsernameScore.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // xmlhttpUsernameScore.onreadystatechange = function() {
    //     if (this.readyState===4 && this.status === 200){ 
    //         console.log('ASDAS111')
    //         console.log(this.responseText); // echo from php?
    //     }       
    // };
    // xmlhttpUsernameScore.send('params='+usernameScore);
    // window.location.href='userPage.html'
  }
}
document.getElementById('loginButton').addEventListener('click' ,function(){
  window.location.href = '/WebStuff/source/html/index.html'
});
function _includesName(data,name){
  for(let i =0 ; i<data.length; i++){
    if (data[i].name == userName) {
      return true
    }
  }
  return false
}

