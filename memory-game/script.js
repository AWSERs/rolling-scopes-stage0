
const cards = document.querySelectorAll('.game__card')

let hasFlippedCard = false
let firstCard
let secondCard
let lockFlip = false
let counterMatch = 0;
let counterStep = 0;
let gameEnd = false;
let resultScore

cards.forEach(item => {
	item.addEventListener('click', flipCard)
})

function flipCard() {
	if (lockFlip) return
	if (this === firstCard) return
	score()
	console.log(counterStep)
	this.classList.add('flip')
	
	if (!hasFlippedCard) {
		hasFlippedCard = true
		firstCard = this;
		return
	} else {
		secondCard = this
		checkForMatch()
		
	}
	
}


function checkForMatch() {
	
	if (firstCard.dataset.messenger === secondCard.dataset.messenger) {
		
		cardsMusic(firstCard.dataset.messenger)
		disableCards()
		counterMatch++
		if (counterMatch === 6) {
			setTimeout(() => {
				cards.forEach(card => {
					card.classList.remove('flip')
				})
			}, 1000)
			gameEnd = true
			score()
			showPopup()
			newGame()

		}
		return 
	}else{
		unflipCards()
	}
}

function disableCards() {
	firstCard.removeEventListener('click', flipCard)
	secondCard.removeEventListener('click', flipCard)
	resetBoard()
}

function unflipCards() {
	
	lockFlip = true
	setTimeout(() => {
		firstCard.classList.remove('flip')
		secondCard.classList.remove('flip')
		lockFlip = false
		resetBoard()
	}, 1000)
}

function resetBoard() {
	[hasFlippedCard, lockBoard] = [false, false];
	[firstCard, secondCard] = [null, null];
}

(function shuffle() {
		cards.forEach(card => {
			let ramdomPos = Math.floor(Math.random() * 12);
			card.style.order = ramdomPos;
		});
})();
	
function cardsMusic(path) {
	let audio = new Audio(`./img/${path}/${path}.mp3`)
		audio.play()
}

function showPopup() {
	const popup = document.querySelector('.popup')
	popup.classList.add('visible')
}

function newGame() {
	btnRetry = document.querySelector('.popup__container')
	btnRetry.addEventListener('click', () => {
		location.reload()
	})
}

function score() {
	if (gameEnd) {
		showScore(counterStep)
	} else {
		counterStep++
	}
}

function showScore(num) {
	let conteinerScore = document.querySelector('.score__memory')
	let score = document.createElement('div')
	score.classList.add('score')
	score.innerText = `понадобилось шагов: ${num}`
	console.log(localStorage.getItem('score'))
	let temp = localStorage.getItem('score')
	resultScore = JSON.parse(temp) || []
	resultScore.push(num)
	conteinerScore.append(score)
	localStorage.setItem( 'score', JSON.stringify(resultScore))
}


(function tempResult() {
	let result = localStorage.getItem('score')
	result = JSON.parse(result)
	result = new Set(result)
	result = Array.from(result)
	result = result.sort((a, b) => a - b)
	return resultScore = result

})();


console.log(resultScore)

function showResult(arr) {
	let conteinerScoreMemory = document.querySelector('.score__memory')
	arr.forEach((item, index) => {
		if (index < 10) {
			let temp = document.createElement('div')
			temp.innerText = ` ${index+1}  позиция результат:  ${item} `
			conteinerScoreMemory.append(temp)
		}
	})
}
showResult(resultScore)