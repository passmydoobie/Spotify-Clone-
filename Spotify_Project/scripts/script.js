    
    
    document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player'); // making object //
    const playPauseButton = document.getElementById('play-pause'); // making object //
    const seekBar = document.getElementById('seek-bar'); // making object //

    playPauseButton.addEventListener('click', function() {
        if (audioPlayer.paused) {   // if true // 
            
    //returns 'true' if audio is paused or not started yet else false // 

            audioPlayer.play(); // method is called on audioPlayer - play/pause //
            playPauseButton.textContent = 'Pause'; // updating on click pause // 
        } else { // false //
            audioPlayer.pause();  
            playPauseButton.textContent = 'Play'; // updating on click play // 
        }
    });


    audioPlayer.addEventListener('timeupdate', function() { 
        const value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        seekBar.value = value;
    });  // converting into percentage value to calculate the seeking value// 

    seekBar.addEventListener('input', function() {
        const time = (seekBar.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = time;  // converting back into integer to return value in integer// 
    });
});
