// JavaScript code to handle button click event
var buttons = document.getElementsByTagName('button');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        var audio = new Audio('Button_Plate Click (Minecraft Sound) - Sound Effect for editing (320 kbps).mp3'); // Path to your sound file
        audio.play(); // Play the sound
    });
}
function delay (URL) {
    setTimeout( function() { window.location = URL }, 500 );
}