const music = new Audio('https://samplesongs.netlify.app/Death%20Bed.mp3')
// music.play();


const songs = [
    {
      id: 1,
      songName: `Death Bed<br>
      <div class="subtitle">Powfu</div>`,
      Poster: "https://samplesongs.netlify.app/album-arts/death-bed.jpg",      
    },
    {
      "songName": "Bad Liar",
      "artist": "Imagine Dragons",
      "artwork": "https://samplesongs.netlify.app/album-arts/bad-liar.jpg",
      "url": "https://samplesongs.netlify.app/Bad%20Liar.mp3",
      "id": "2"
    },
    {
      "title": "Faded",
      "artist": "Alan Walker",
      "artwork": "https://samplesongs.netlify.app/album-arts/faded.jpg",
      "url": "https://samplesongs.netlify.app/Faded.mp3",
      "id": "3"
    },
    {
      "title": "Hate Me",
      "artist": "Ellie Goulding",
      "artwork": "https://samplesongs.netlify.app/album-arts/hate-me.jpg",
      "url": "https://samplesongs.netlify.app/Hate%20Me.mp3",
      "id": "4"
    },
    {
      "title": "Solo",
      "artist": "Clean Bandit",
      "artwork": "https://samplesongs.netlify.app/album-arts/solo.jpg",
      "url": "https://samplesongs.netlify.app/Solo.mp3",
      "id": "5"
    },
    {
      "title": "Without Me",
      "artist": "Halsey",
      "artwork": "https://samplesongs.netlify.app/album-arts/without-me.jpg",
      "url": "https://samplesongs.netlify.app/Without%20Me.mp3",
      "id": "6"
    },
    {
      "title": "Aayi Nai",
      "artist": "Amit Bhatacharya",
      "artwork": "https://pagalfree.com/images/128Aayi%20Nai%20-%20Stree%202%20128%20Kbps.jpg",
      "url": "./songs/Aayi Nai - Stree 2 128 Kbps.mp3",
      "id": "7"
    },
    {
      "title": "Mere Mehboob Mere Sanam",
      "artist": "Javed Akhtar",
      "artwork": "https://pagalfree.com/images/128Mere%20Mehboob%20Mere%20Sanam%20-%20Bad%20Newz%20128%20Kbps.jpg",
      "url": "./songs/Mere Mehboob Mere Sanam - Bad Newz 128 Kbps.mp3",
      "id": "8"
    },
    {
      "title": "Khudaya",
      "artist": "Manoj Muntashir",
      "artwork": "https://pagalfree.com/images/128Khudaya%20-%20Sarfira%20128%20Kbps.jpg",
      "url": "./songs/Khudaya - Sarfira 128 Kbps.mp3",
      "id": "9"
    },
    {
      "title": "Angaaron ",
      "artist": "Shreya Ghoshal",
      "artwork": "https://pagalfree.com/images/128Angaaron%20-%20Pushpa%202%20The%20Rule%20128%20Kbps.jpg",
      "url": "./songs/Angaaron - Pushpa 2 The Rule 128 Kbps.mp3",
      "id": "10"
    },
    {
      "title": "Aaj Ki Raat ",
      "artist": "Amit Bhatacharya",
      "artwork": "https://pagalfree.com/images/128Aaj%20Ki%20Raat%20-%20Stree%202%20128%20Kbps.jpg",
      "url": "./songs/Aaj Ki Raat - Stree 2 128 Kbps.mp3",
      "id": "11"
    },
    {
      "title": "Agar Ho Tum ",
      "artist": "Jubin Nautiyal",
      "artwork": "https://pagalfree.com/images/128Agar%20Ho%20Tum%20-%20Mr.%20And%20Mrs.%20Mahi%20128%20Kbps.jpg",
      "url": "./songs/Agar Ho Tum - Mr. And Mrs. Mahi 128 Kbps.mp3",
      "id": "12"
    },
    {
      "title": "Pushpa",
      "artist": "Mika singh",
      "artwork": "https://pagalfree.com/images/128Pushpa%20Pushpa%20-%20Pushpa%202%20The%20Rule%20128%20Kbps.jpg",
      "url": "./songs/Pushpa Pushpa - Pushpa 2 The Rule 128 Kbps.mp3",
      "id": "13"
    },
    {
      "title": "Ghagra",
      "artist": "Ila Arun",
      "artwork": "https://pagalfree.com/images/128Ghagra%20-%20Crew%20128%20Kbps.jpg",
      "url": "./songs/Ghagra - Crew 128 Kbps.mp3",
      "id": "14"
    },
    {
      "title": "O mahi",
      "artist": "Arijit Singh",
      "artwork": "https://www.pagalworld.com.sb/siteuploads/thumb/sft138/68671_1.jpg",
      "url": "./songs/O Mahi O Mahi(PagalWorld.com.sb).mp3",
      "id": "15"
    },
    {
      "title": "Millionaire",
      "artist": "Honey Singh",
      "artwork": "https://www.pagalworld.com.sb/siteuploads/thumb/sft145/72038_4.jpg",
      "url": "./songs/Millionaire(PagalWorld.com.sb).mp3",
      "id": "16"
    },
    {
      "title": "Tumhare Hi Rahenge Hum",
      "artist": "Varun Jain",
      "artwork": "https://www.pagalworld.com.sb/siteuploads/thumb/sft144/71864_4.jpg",
      "url": "./songs/Tumhare Hi Rahenge Hum(PagalWorld.com.sb).mp3",
      "id": "17"
    },
    {
      "title": "Khoobsurat",
      "artist": "Vishal Mistra",
      "artwork": "https://www.pagalworld.com.sb/siteuploads/thumb/sft144/71884_4.jpg",
      "url": "./songs/Khoobsurat(PagalWorld.com.sb).mp3",
      "id": "18"
    },
    {
      "title": "Gulabi Sadi",
      "artist": "R Rathod",
      "artwork": "https://www.pagalworld.com.sb/siteuploads/thumb/sft142/70998_4.jpg",
      "url": "./songs/Gulabi Sadi Ani Lali(PagalWorld.com.sb).mp3",
      "id": "19"
    },
    {
      "title": "Heeriye Heeriye Aa",
      "artist": "Arijit Singh",
      "artwork": "https://www.pagalworld.com.sb/siteuploads/thumb/sft143/71197_4.jpg",
      "url": "./songs/_Heeriye Heeriye Aa(PagalWorld.com.sb).mp3",
      "id": "20"
    },
    
      {
        "title": "Death Bed",
        "artist": "Powfu",
        "artwork": "https://samplesongs.netlify.app/album-arts/death-bed.jpg",
        "url": "https://samplesongs.netlify.app/Death%20Bed.mp3",
        "id": "21"
      },
      {
        "title": "Bad Liar",
        "artist": "Imagine Dragons",
        "artwork": "https://samplesongs.netlify.app/album-arts/bad-liar.jpg",
        "url": "https://samplesongs.netlify.app/Bad%20Liar.mp3",
        "id": "22"
      },
      {
        "title": "Faded",
        "artist": "Alan Walker",
        "artwork": "https://samplesongs.netlify.app/album-arts/faded.jpg",
        "url": "https://samplesongs.netlify.app/Faded.mp3",
        "id": "23"
      },
      {
        "title": "Hate Me",
        "artist": "Ellie Goulding",
        "artwork": "https://samplesongs.netlify.app/album-arts/hate-me.jpg",
        "url": "https://samplesongs.netlify.app/Hate%20Me.mp3",
        "id": "24"
      },
      {
        "title": "Solo",
        "artist": "Clean Bandit",
        "artwork": "https://samplesongs.netlify.app/album-arts/solo.jpg",
        "url": "https://samplesongs.netlify.app/Solo.mp3",
        "id": "25"
      },
      {
        "title": "Without Me",
        "artist": "Halsey",
        "artwork": "https://samplesongs.netlify.app/album-arts/without-me.jpg",
        "url": "https://samplesongs.netlify.app/Without%20Me.mp3",
        "id": "26"
      },
      {
        "title": "Aayi Nai",
        "artist": "Amit Bhatacharya",
        "artwork": "https://pagalfree.com/images/128Aayi%20Nai%20-%20Stree%202%20128%20Kbps.jpg",
        "url": "./songs/Aayi Nai - Stree 2 128 Kbps.mp3",
        "id": "27"
      },
      {
        "title": "Mere Mehboob Mere Sanam",
        "artist": "Javed Akhtar",
        "artwork": "https://pagalfree.com/images/128Mere%20Mehboob%20Mere%20Sanam%20-%20Bad%20Newz%20128%20Kbps.jpg",
        "url": "./songs/Mere Mehboob Mere Sanam - Bad Newz 128 Kbps.mp3",
        "id": "28"
      },
      {
        "title": "Khudaya",
        "artist": "Manoj Muntashir",
        "artwork": "https://pagalfree.com/images/128Khudaya%20-%20Sarfira%20128%20Kbps.jpg",
        "url": "./songs/Khudaya - Sarfira 128 Kbps.mp3",
        "id": "29"
      },
      {
        "title": "Angaaron ",
        "artist": "Shreya Ghoshal",
        "artwork": "https://pagalfree.com/images/128Angaaron%20-%20Pushpa%202%20The%20Rule%20128%20Kbps.jpg",
        "url": "./songs/Angaaron - Pushpa 2 The Rule 128 Kbps.mp3",
        "id": "30"
      },
      {
        "title": "Aaj Ki Raat ",
        "artist": "Amit Bhatacharya",
        "artwork": "https://pagalfree.com/images/128Aaj%20Ki%20Raat%20-%20Stree%202%20128%20Kbps.jpg",
        "url": "./songs/Aaj Ki Raat - Stree 2 128 Kbps.mp3",
        "id": "31"
      },
      {
        "title": "Agar Ho Tum ",
        "artist": "Jubin Nautiyal",
        "artwork": "https://pagalfree.com/images/128Agar%20Ho%20Tum%20-%20Mr.%20And%20Mrs.%20Mahi%20128%20Kbps.jpg",
        "url": "./songs/Agar Ho Tum - Mr. And Mrs. Mahi 128 Kbps.mp3",
        "id": "32"
      },
      {
        "title": "Pushpa",
        "artist": "Mika singh",
        "artwork": "https://pagalfree.com/images/128Pushpa%20Pushpa%20-%20Pushpa%202%20The%20Rule%20128%20Kbps.jpg",
        "url": "./songs/Pushpa Pushpa - Pushpa 2 The Rule 128 Kbps.mp3",
        "id": "33"
      },
      {
        "title": "Ghagra",
        "artist": "Ila Arun",
        "artwork": "https://pagalfree.com/images/128Ghagra%20-%20Crew%20128%20Kbps.jpg",
        "url": "./songs/Ghagra - Crew 128 Kbps.mp3",
        "id": "34"
      },
      {
        "title": "O mahi",
        "artist": "Arijit Singh",
        "artwork": "https://www.pagalworld.com.sb/siteuploads/thumb/sft138/68671_1.jpg",
        "url": "./songs/O Mahi O Mahi(PagalWorld.com.sb).mp3",
        "id": "35"
      },
      {
        "title": "Millionaire",
        "artist": "Honey Singh",
        "artwork": "https://www.pagalworld.com.sb/siteuploads/thumb/sft145/72038_4.jpg",
        "url": "./songs/Millionaire(PagalWorld.com.sb).mp3",
        "id": "36"
      },
      {
        "title": "Tumhare Hi Rahenge Hum",
        "artist": "Varun Jain",
        "artwork": "https://www.pagalworld.com.sb/siteuploads/thumb/sft144/71864_4.jpg",
        "url": "./songs/Tumhare Hi Rahenge Hum(PagalWorld.com.sb).mp3",
        "id": "37"
      },
      {
        "title": "Khoobsurat",
        "artist": "Vishal Mistra",
        "artwork": "https://www.pagalworld.com.sb/siteuploads/thumb/sft144/71884_4.jpg",
        "url": "./songs/Khoobsurat(PagalWorld.com.sb).mp3",
        "id": "38"
      },
      {
        "title": "Gulabi Sadi",
        "artist": "R Rathod",
        "artwork": "https://www.pagalworld.com.sb/siteuploads/thumb/sft142/70998_4.jpg",
        "url": "./songs/Gulabi Sadi Ani Lali(PagalWorld.com.sb).mp3",
        "id": "39"
      },
      {
        "title": "Heeriye Heeriye Aa",
        "artist": "Arijit Singh",
        "artwork": "https://www.pagalworld.com.sb/siteuploads/thumb/sft143/71197_4.jpg",
        "url": "./songs/_Heeriye Heeriye Aa(PagalWorld.com.sb).mp3",
        "id": "40"
      }
    
  ]





let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})

pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artist_bx = document.getElementsByClassName('Artist_bx')[0];

pop_art_right.addEventListener('click', ()=>{
    Artist_bx.scrollLeft += 330;
})

pop_art_left.addEventListener('click', ()=>{
    Artist_bx.scrollLeft -= 330;
})