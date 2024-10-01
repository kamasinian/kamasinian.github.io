var audioElement  = new Audio();

function playSoundFName(file)
{
    audioElement.pause();
    audioElement = new Audio("sounds/"+file);
	audioElement.play();
}