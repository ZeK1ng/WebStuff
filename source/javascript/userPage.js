/**
 * Run chrome with this flag to avoid cors
 * google-chrome --autoplay-policy=no-user-gesture-required
 */
if(localStorage.getItem('activeUser') == null){
    window.location.href ='index.html';
}
var userScores =JSON.parse(localStorage.getItem('userScores'));
// console.log(userScores);
const modal= document.getElementById('modal');
document.getElementById("welcomeText").innerHTML = 'Welcome '+localStorage.getItem('activeUser');
var musicLogo = document.getElementById("playMusic")
var isPlaying = false;
var myAudio = document.getElementById('cbaudio')
myAudio.play();
musicLogo.addEventListener("click",function(){
    
    isPlaying ? myAudio.pause() : myAudio.play();
    isPlaying ? musicLogo.style.border = "2px solid red" : musicLogo.style.border = "none";
})
myAudio.onplaying = function() {
    isPlaying = true;
};
myAudio.onpause = function() {
    isPlaying = false;
};
document.getElementById('signOut').addEventListener('click' ,function() {
    localStorage.removeItem('active');
    window.location.href = 'index.html';
});
document.getElementById('rankButton').addEventListener('click',function(){
    userScores.sort(function(a,b){
        var val1 = parseInt(a.score,10); 
        var val2 = parseInt(b.score,10);
        if(val1 > val2){ return -1}
        if(val1 == val2) {return 0}
        if (val1<val2){return 1}
    })
    modal.innerHTML ='';
    var modalHeader = document.createElement('div')
    modalHeader.className =('modal-header');
    var headerText = document.createElement('H2');
    headerText.className = ('headerText');
    headerText.appendChild(document.createTextNode('Top scores'));
    var headerSpan = document.createElement('SPAN');
    headerSpan.innerHTML="&times;";
    headerSpan.className = ('close');
    headerSpan.id = ('close');
    modalHeader.appendChild(headerText);
    modalHeader.appendChild(headerSpan);
    modal.append(modalHeader);
    userScores.map(function(e){
        var modalRow=document.createElement('div')
        modalRow.className=('modal-row');
        var rowDataname = document.createElement('SPAN');
        rowDataname.innerHTML = e.name;
        rowDataname.className=('name-score');
        var rowDatascore = document.createElement('SPAN');
        rowDatascore.innerHTML = e.score;
        rowDatascore.className=('name-score');
        modalRow.appendChild(rowDataname);
        modalRow.appendChild(rowDatascore);
        modal.appendChild(modalRow);
    });
    modal.style.display = 'block';
});
document.getElementById('myScoreButton').addEventListener('click',function(){
    modal.innerHTML ='';
    var modalHeader = document.createElement('div')
    modalHeader.className =('modal-header');
    var headerText = document.createElement('H2');
    headerText.className = ('headerText');
    headerText.appendChild(document.createTextNode('My Score'));
    var headerSpan = document.createElement('SPAN');
    headerSpan.innerHTML="&times;";
    headerSpan.className = ('close');
    headerSpan.id = ('close');
    modalHeader.appendChild(headerText);
    modalHeader.appendChild(headerSpan);
    modal.append(modalHeader);
    modal.style.display = 'block';
    var modalRow=document.createElement('div')
    modalRow.className=('modal-row');
    var rowDataname = document.createElement('SPAN');
    rowDataname.innerHTML = localStorage.getItem('activeUser');
    rowDataname.className=('name-score');
    var rowDatascore = document.createElement('SPAN');
    rowDatascore.innerHTML = localStorage.getItem('activeScore');
    rowDatascore.className=('name-score');
    modalRow.appendChild(rowDataname);
    modalRow.appendChild(rowDatascore);
    modal.appendChild(modalRow);
});

document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'close'){
        modal.style.display = 'none';  
     }
 });
 document.getElementById('play').addEventListener('click', function(){
    window.location.href='snake.html';
 });