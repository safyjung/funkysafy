var myTrack = document.getElementById('myTrack');
var playButton = document.getElementById('playButton');

playButton.addEventListener("click",playOrPause,false);

function playOrPause(){
	if(!myTrack.paused && !myTrack.ended){
		myTrack.pause();
		playButton.style.backgroundImage = 'url(img/icons/play-button.png)';
	}
	else{
		myTrack.play();
		playButton.style.backgroundImage = 'url(img/icons/pause.png)';
	}
}