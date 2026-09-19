const audio = document.getElementById('voice-audio');
const playBtn = document.getElementById('play-btn');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.getElementById('progress-container');

function showMsg(){
    alert("Not implemented yet");
}

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '❚❚';
  } else {
    audio.pause();
    playBtn.textContent = '▶';
  }
});

audio.addEventListener('timeupdate', () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progressPercent}%`;
});

audio.addEventListener('ended', () => {
  playBtn.textContent = '▶';
  progressBar.style.width = '0%';
});

progressContainer.addEventListener('click', (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
});