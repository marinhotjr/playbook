const playSound = document.getElementById('playSound');
const playBook = document.getElementById('playBook');
const playPrev = document.getElementById('playPrev');
const playNext = document.getElementById('playNext');

const playSoundIcon = document.getElementById('playSoundIcon');
const playChapter = document.getElementById('playChapter');
const sumChapters = 30;

let playing = false;
let currentChapter = 1;

function playTrack() {
    playBook.play();
    playing = true;
    playSoundIcon.innerHTML = "<use xlink:href='#icon-pause'></use>";
}

function pauseTrack() {
    playBook.pause();
    playing = false;
    playSoundIcon.innerHTML = "<use xlink:href='#icon-play'></use>";
}

function playOrPause() {
    if (!(playing)) {
        playTrack();
    } else {
        pauseTrack();
    }
}

function changeTrack() {
    playChapter.innerHTML = "Chapter " + currentChapter;
}

function nextTrack() {
    if (currentChapter === sumChapters) {
        currentChapter = 1;
    } else {
        currentChapter = currentChapter + 1;
    }

    playBook.src = "./bookfiles/DomCasmurro/" + currentChapter + ".mp3";
    changeTrack();
    
    playing = false;
    playOrPause();
}

function prevTrack() {
    if (currentChapter === 1) {
        currentChapter = sumChapters;
    } else {
        currentChapter = currentChapter - 1;
    }

    playBook.src = "./bookfiles/DomCasmurro/" + currentChapter + ".mp3";
    changeTrack();
    
    playing = false;
    playOrPause();
}

playSound.addEventListener('click', playOrPause);
playNext.addEventListener('click', nextTrack);
playPrev.addEventListener('click', prevTrack);