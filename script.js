var clicks = 0;
document.getElementById('ghost').style.display="none";
function myFunction() {
    clicks += 1;
    document.getElementById("Troll").innerHTML = clicks;
    if (clicks==100) {
        document.getElementById('ghost').style.display="block";
        play();
        setTimeout(function(){
          document.getElementById('ghost').style.display="none";
        },1000*10)
    }
}

var bAudio = new Audio('scream.mp3')
function play() {
  bAudio.play();
}