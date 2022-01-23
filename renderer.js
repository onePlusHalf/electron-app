// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

let currentIndex = 0;
let maxIndex = 12;

function playNext() {
    if(currentIndex == maxIndex) {
        const nextButton = document.getElementsByClassName('right')[0];

        nextButton.style.color = 'grey';
        nextButton.removeAttribute('onclick');
    } else {

        const previousButton = document.getElementsByClassName('left')[0];

        previousButton.style.color = 'red';
        previousButton.onclick = function() {
            console.log('javascript onclick playPrevious');
            playPrevious();
        }
        
        console.log('Playing next');
        const caption = document.getElementsByClassName(`subtext-${currentIndex}`)[0];

        const currentVideo = document.getElementById(`video-${currentIndex}`);
        currentVideo.pause()
        currentVideo.style.display = 'none';
        currentIndex += 1;
        const nextVideo = document.getElementById(`video-${currentIndex}`);
        nextVideo.style.display = 'block';
        nextVideo.play();
    }
}

function playPrevious() {
    if(currentIndex == 0) {
        const previousButton = document.getElementsByClassName('left')[0];

        previousButton.style.color = 'grey';
        previousButton.removeAttribute('onclick');
    } else {
        const nextButton = document.getElementsByClassName('right')[0];

        nextButton.style.color = 'red';
        nextButton.onclick = function() {
            console.log('javascript onclick next');
            playNext();
        }
        

        console.log('Playing last');
        const currentVideo = document.getElementById(`video-${currentIndex}`);
        currentVideo.pause()
        currentVideo.style.display = 'none';
        currentIndex -= 1;
        const nextVideo = document.getElementById(`video-${currentIndex}`);
        nextVideo.style.display = 'block';
        nextVideo.play();
    }
}
