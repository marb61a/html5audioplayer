var audio;

//Hide Pause
$('#pause').hide();


// Buttons Functionality

//Play button
$('#play').click(function(){
	audio.play();
	$('#play').hide();
	$('#pause').show();
	showDuration();
});

//Stop button
$('#stop').click(function(){
	audio.pause();
	audio.currentTime = 0;
});