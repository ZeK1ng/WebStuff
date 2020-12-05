/**
 * Run chrome with this flag to avoid cors
 * google-chrome --autoplay-policy=no-user-gesture-required
 */
document.getElementById("welcomeText").innerHTML = 'Welcome '+localStorage.getItem('active');
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