/**
 * Run chrome with this flag to avoid cors
 * google-chrome --autoplay-policy=no-user-gesture-required
 */
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