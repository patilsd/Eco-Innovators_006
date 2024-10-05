var songs = [];
console.log(songs);

async function loadSongs() {
  songs = await fetch("song.json").then((v) => v.json());
  start();
}

async function start() {
  let song = document.getElementById("songs");
  song.innerHTML = "";

  /* <audio controls class="audio_">
  <source src="${elem.url}" type="audio/mpeg">
  <source src="${elem.url}" type="audio/mp3">
  Your browser does not support the audio element.
</audio> */

  songs.map((elem) => {
    song.innerHTML += `        <div>
            <p>${elem.title}</p>
            <p>${elem.artist}</p>
            <img src="${elem.artwork}">
            <br>
            

<i class="fa fa-play" aria-hidden="true" style="
        font-size: xx-large;
        padding-top: 23%;
        cursor: pointer;
        color:white;
    " onclick="popup(${elem.id - 1})"></i>
        `;
  });
}
function popup(elem) {
  let hasConfirmed = false;
  let pop = document.getElementById("pop");
  pop.style.display = "block";
  document.getElementById(
    "popupTitle"
  ).innerHTML = `${songs[elem].title} by ${songs[elem].artist}`;
  document.getElementById("songImage").src = songs[elem].artwork;
  document.getElementById("myaudio").src = songs[elem].url;
  document.getElementById("controls").innerHTML = `
     <button onclick="previous(${elem})">prev</button>
   <button onclick="next(${elem})">next</button>
  `;
  if (authToken) {
    document.getElementById("myaudio").ontimeupdate = function () {
      const duration = document.getElementById("myaudio").duration;
      const currentTime = document.getElementById("myaudio").currentTime;
      if (currentTime >= duration) {
        document.getElementById("myaudio").pause();
        next(elem);
      }
    };
  } else {
    console.log(document.getElementById("myaudio"), "dkd");
    document.getElementById("myaudio").ontimeupdate = () => {
      const duration = document.getElementById("myaudio").duration;
      const limit = (duration * 10) / 100;
      const currentTime = document.getElementById("myaudio").currentTime;
      console.log(duration, " ", limit, " ", currentTime);
      if (currentTime >= limit && !hasConfirmed) {
        document.getElementById("myaudio").pause();
        hasConfirmed = true;
        // document.getElementById("myaudio").ontimeupdate = null;
        const ans = confirm(
          "you can not play more than this do you want to login"
        );
        console.log("ans", ans);
        if (ans) {
          window.location.href = "login.html";
        } else {
          setTimeout(() => {
            hasConfirmed = false;
          }, 1000);
          // hasConfirmed = false;
        }
      }
    };
  }
}
function pop_close() {
  let audio = document.getElementById("myaudio");
  audio.pause();
  let pop = document.getElementById("pop");
  pop.style.display = "none";
}
function previous(elem) {
  if (elem == 0) elem = songs.length - 1;
  else elem--;
  console.log(elem);
  console.log(songs[elem].url);
  popup(elem);
}
function next(elem) {
  if (elem == songs.length - 1) elem = 0;
  else elem++;
  popup(elem);
}

loadSongs();
