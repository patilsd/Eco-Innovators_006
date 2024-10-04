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
        padding-top: 10%;
        cursor: pointer;
        color:white;
    " onclick="popup(${elem.id - 1})"></i>

            <source src=${elem.url}>
        `;
  });
  console.log(authToken);
  if (authToken) {
    console.log("hi");
  } else {
    let temp = document.getElementsByClassName("audio_");
    for (let i = 0; i < temp.length; i++) {
      temp[i].style.display = "none";
    }
  }
}
function popup(elem) {
  let pop = document.getElementById("pop");
  pop.style.display = "block";

  console.log("hi", songs[elem]);
  pop.innerHTML = `<div id="content">
    <p> ${songs[elem].title} by ${songs[elem].artist}</p>
    <img src=${songs[elem].artwork}>
    <br>
 <audio controls class="audio_" id="myaudio">
  <source src="${songs[elem].url}" type="audio/mpeg">
  <source src="${songs[elem].url}" type="audio/mp3">
  Your browser does not support the audio element.
</audio> 
<br>
<button onclick="previous(${elem})">prev</button>
<button onclick="next(${elem})">next</button>
<br>
<i class="fa fa-close" style="font-size:48px;color:red; cursor:pointer" onclick="pop_close()"></i>
</div>
`;

  // let vid = document.getElementById("myaudio");

  // // Assign an ontimeupdate event to the <video> element, and execute a function if the current playback position has changed
  // vid.ontimeupdate = function (e) {
  //   console.log(e);
  // };
  if (authToken) {
    console.log("hi");
  } else {
    setTimeout(() => {
      const duration = document.getElementById("myaudio").duration;
      const limit = (duration * 10) / 100;
      document.getElementById("myaudio").ontimeupdate = function () {
        const currentTime = document.getElementById("myaudio").currentTime;
        console.log(duration, " ", limit, " ", currentTime);
        if (currentTime >= limit) {
          document.getElementById("myaudio").pause();
          const ans = confirm(
            "you can not play more than this do you want to login"
          );
          console.log("ans", ans);
          if (ans) {
            window.location.href = "login.html";
          }
        }
      };
    }, 500);
  }
}
function pop_close() {
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