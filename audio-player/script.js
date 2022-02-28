"use scrict";
let player = document.querySelector('.wrapper__player')
let playBtn = document.querySelector('.switcher__play')
let pauseBtn = document.querySelector('.switcher__play-item')
let isPlay = false;
let isComposition = true;
let playerInput = document.querySelector('.player__line')
let timeDurationDiv = document.querySelector('.time__duration')
let timeCurrentDiv = document.querySelector('.time__current')
let timeCurrent;
let timeDuration;
let nextTrack = document.querySelector('.track__next')
let prevTrack = document.querySelector('.track__prev')
let compositionBg = document.querySelector('.wrapper__img')
let titleComposition = document.querySelector('.composition__title')
let titleSubComposition = document.querySelector('.composition__subtitle')
let music = document.querySelector('.wrapper__player')
let compositionImg = document.querySelector('.wrapper__img')
let containerPlayer = document.querySelector('.conteiner__page')





let composition = [
	{ 0:{
		src: "./assets/audio/beyonce.mp3",
		title: "Beyonce",
		subtitle: "Don't Hurt Yourself",
		background: "./assets/img/lemonade.png"
	}},
	{
		1:{
			src: "./assets/audio/dontstartnow.mp3",
			title: "Dua Lipa",
			subtitle: "Don't Start Now",
			background: "./assets/img/dontstartnow.png"
		}}
]




playBtn.addEventListener('click', event => {
	playing()
	compositionImg.classList.toggle('_play')
	compositionImg.classList.add('_firstPlay')
	containerPlayer.classList.add('_bgFirst')
})

nextTrack.addEventListener('click', event => {
	compositionImg.classList.add('_firstPlay')
	containerPlayer.classList.add('_bgFirst')

	if (isComposition === false) {
		composition.forEach(item => {
			if (item[0]) {
				document.body.style = `background-image: url(${item[0].background})`
				compositionBg.style = `background-image: url(${item[0].background})`
				titleComposition.innerHTML = `${item[0].title}`
				titleSubComposition.innerHTML = `${item[0].subtitle}`
				music.src = `${item[0].src}`
				player.play()
				pauseBtn.src = './assets/svg/pause.png'
				isPlay = true
				player.currentTime = 0;
				isComposition = true
				compositionImg.classList.add('_play')
				
			}
		})
	} else {
		composition.forEach(function  (item) {
			if (item[1]) {
				document.body.style = `background-image: url(${item[1].background})`
				compositionBg.style = `background-image: url(${item[1].background})`
				titleComposition.innerHTML = `${item[1].title}`
				titleSubComposition.innerHTML = `${item[1].subtitle}`
				music.src = `${item[1].src}`
				isComposition = false
				player.play()
				pauseBtn.src = './assets/svg/pause.png'
				isPlay = true
				player.currentTime = 0;
				compositionImg.classList.add('_play')
				
			}
		})
	}
})

prevTrack.addEventListener('click', event => {
	compositionImg.classList.add('_firstPlay')
	containerPlayer.classList.add('_bgFirst')
	
	if (isComposition === false) {
		composition.forEach(item => {
			if (item[0]) {
				document.body.style = `background-image: url(${item[0].background})`
				compositionBg.style = `background-image: url(${item[0].background})`
				titleComposition.innerHTML = `${item[0].title}`
				titleSubComposition.innerHTML = `${item[0].subtitle}`
				music.src = `${item[0].src}`
				isComposition = true
				player.play()
				pauseBtn.src = './assets/svg/pause.png'
				isPlay = true
				player.currentTime = 0;
				compositionImg.classList.add('_play')
				
			}
		})
	} else {
		composition.forEach(function  (item) {
			if (item[1]) {
				document.body.style = `background-image: url(${item[1].background})`
				compositionBg.style = `background-image: url(${item[1].background})`
				titleComposition.innerHTML = `${item[1].title}`
				titleSubComposition.innerHTML = `${item[1].subtitle}`
				music.src = `${item[1].src}`
				isComposition = false
				player.play()
				pauseBtn.src = './assets/svg/pause.png'
				isPlay = true
				player.currentTime = 0;
				compositionImg.classList.add('_play')
			}
		})
	}
})

playerInput.addEventListener('click', event => {
	playerInput.max = timeCurrent
	timeDurationDiv.innerHTML = formatSecondsAsTime(playerInput.value)
	player.currentTime = playerInput.value
	
})


function playing() {
	if (!isPlay) {
		player.play()
		pauseBtn.src = './assets/svg/pause.png'
		isPlay = true
	} else {
		player.pause()
		pauseBtn.src = './assets/svg/play.png'
		isPlay = false
	}
}

function updatePlayerTime(track) {
	timeCurrent = Math.floor(track.duration).toString()
	timeDuration = Math.floor(track.currentTime).toString()

	timeCurrentDiv.innerHTML = formatSecondsAsTime(timeCurrent)

	if (isNaN(timeDuration)) {
		timeDurationDiv.innerHTML = '00:00'
	} else {
		timeDurationDiv.innerHTML = formatSecondsAsTime(timeDuration)
	}
	playerInput.value = timeDuration
}

function formatSecondsAsTime(secs) {
	let hr  = Math.floor(secs / 3600);
  	let min = Math.floor((secs - (hr * 3600))/60);
  	let sec = Math.floor(secs - (hr * 3600) -  (min * 60));

	if (min < 10){ 
		min = "0" + min; 
	}
	if (sec < 10){ 
		sec  = "0" + sec;
	}

	return min + ':' + sec;
}