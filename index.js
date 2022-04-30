
const img = document.querySelector('img');
const music = document.querySelector('audio');
const play = document.getElementById("play");
const tittle = document.getElementById("tittle");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [{
    name: "fareed-1",
    tittle: "ya sab tumhara karam hai aaqa",
    artist: "Abida Parveen"
},
{
    name: "fareed-2",
    tittle: "!Balaghal Ula Be Kamalihi!",
    artist: "Abida Parveen"
},
{
    name: "fareed-3",
    tittle: "Tajdare Haram",
    artist: "Atif Aslam"
},
{
    name: "fareed-4",
    tittle: "Tu Kuja Man Kuja",
    artist: "Shiraz Uppal & Rafaqat Ali Khan"
},
]



let isPlaying = false;

// for play funtionality
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause")
    img.classList.add("anime");
};


// for pause funtionality
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play")
    img.classList.remove("anime");
};

play.addEventListener('click', () => {
    isPlaying ? pauseMusic() : playMusic()
});

// change the music data 

const loadSong = (songs) => {
    tittle.textContent = songs.tittle
    artist.textContent = songs.artist
    music.src = `music/${songs.name}.mp3`;
    img.src = `images/${songs.name}.jpg`;
}

var songIndex = 0;

// loadSong(songs[1]);

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length
    loadSong(songs[songIndex]);
    playMusic();
}

const prevSong = () => {
    // songIndex = (songIndex -1 + songs.length) % songs.length
    if (songIndex==0){
        songIndex=songs.length
        }
        songIndex --
    
    loadSong(songs[songIndex]);

    playMusic();
}

next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);