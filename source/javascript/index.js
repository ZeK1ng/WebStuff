var userName =''
var password = ''
// var userPassMap=new Map();
// var xmlhttp = new XMLHttpRequest();
// localStorage.clear();
// xmlhttp.open('GET', 'http://127.0.0.1:8000/source/php/readUserPass.php', true);
// xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
// xmlhttp.onreadystatechange = function() {
//     if (this.readyState===4 && this.status === 200){ 
//         let userNamePasswords = JSON.parse(this.responseText);
//         for(var i = 0; i< userNamePasswords.length-1; i++){
//             var tuple = userNamePasswords[i];
//             let sepInd = tuple.indexOf(' ');
//             let currUsername = tuple.substr(0,sepInd);
            // let currPassWord = tuple.substring(sepInd+1,tuple.length-1);
            // userPassMap.set(currUsername,currPassWord);
        // }
    // }       
// };
// xmlhttp.send('params=');

document.getElementById('loginButton').addEventListener('click', login);
document.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        login()
    }
});

// {name:'userName',password:'pw',highScore:'int'}
function login(){
    userName = document.getElementById('LoginUsername').value.trim()
    password = document.getElementById('LoginUserPass').value.trim()
    const data = JSON.parse(localStorage.getItem('userData'))
    console.log(data)
    if (userName.length == 0 || password.length == 0){
 
        if(userName.length == 0){
         document.getElementById('LoginUsername').style.borderColor = 'red';
        }
        if (password.length == 0 ){
          document.getElementById('LoginUserPass').style.borderColor = 'red';
        }
    }
    if(userName.length != 0 && password.length !=0){
        let i = _containsUser(data,userName,password)
        // console.log(i)
        if(i > -1){
            localStorage.setItem('activeUser',userName);
            localStorage.setItem('userHighScore',data[i].userHighScore)
            window.location.href = 'userPage.html'
        }else{
            window.alert('Wrong username or password');
        } 
     // if(userPassMap.has(userName) && userPassMap.get(userName) == password){
        //     localStorage.setItem('activeUser',userName);

        //     var req = new XMLHttpRequest();
        //     req.open('GET', 'http://127.0.0.1:8000/source/php/readUserScores.php', true);
        //     req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        //     req.onreadystatechange = function() {
        //         if (this.readyState===4 && this.status === 200){ 
        //             let userNameScores = JSON.parse(this.responseText);
        //             var userScoreArr = []
        //             for(var i = 0; i< userNameScores.length-1; i++){
        //                 var tuple =userNameScores[i];
        //                 let sepInd = tuple.indexOf(' ');
        //                 let currUsername = tuple.substr(0,sepInd);
        //                 let currScore = tuple.substring(sepInd+1,tuple.length-1);
        //                 var user = { 'name':'value' , 'score':'value'}
        //                 user.name = currUsername
        //                 user.score = currScore;
        //                 if(currUsername == userName){
        //                     localStorage.setItem('activeScore',currScore);
        //                 }
        //                 userScoreArr.push(user);
        //             }
        //             localStorage.setItem('userScores',JSON.stringify(userScoreArr));
        //         }       
        //     };
        //     req.send('params=');
         
    }
}
function _containsUser(data,userName,password){
    for (var i = 0 ; i< data.length; i++) {
        if(data[i].name ==userName && data[i].password == password){
            return i;
        }
    }
    return -1
}

document.getElementById('signUp').addEventListener('click',function(){
    window.location.href='/WebStuff/source/html/signUp.html'
});
