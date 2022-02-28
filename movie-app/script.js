let url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c'
let page = document.querySelector('.page')
getData(url)
let input = document.querySelector('.search')
input.addEventListener('keydown', (e) => {
	if (e.keyCode == '13' && input.value !== null && input.value !== '' && input.value !== undefined) {
		page.innerHTML = ''
		upper.href = ''
		let path = input.value
		console.log(path)
		url = `https://api.themoviedb.org/3/search/movie?query=${path}&api_key=3fd2be6f0c70a2a598f084ddfb75487c`
		getData(url)
	}
})

input.addEventListener('input', (e) => {
	let canselSearch = document.querySelector('.search__cancel')
	canselSearch.classList.add('_active')
	canselSearch.addEventListener('click', (e) => {
		input.value = ''
		canselSearch.classList.remove('_active')

	})
})



async function getData(url) {
	try {
		let res = await fetch(url)
		let data = await res.json()
		showData(data)
	} catch (error) {
		console.log(error)
	}

}

function showData(data) {
	if (data.results.length === 0) {
		const container = document.querySelector('.page')
		const content = document.createElement('div')
		content.classList.add('error__search')
		content.innerText = 'По вашему запросу ничего не найдено!'
		container.append(content)
	}

	for (let i = 0; i < data.results.length; i++) {
		const container = document.querySelector('.page')
		const containerCard = document.createElement('div')
		containerCard.classList.add('page__card')
		container.append(containerCard)
		const containerImg = document.createElement('div')
		containerImg.classList.add('card__img')
		containerCard.append(containerImg)
		const img = document.createElement('img')
		img.src = `https://image.tmdb.org/t/p/w1280${data.results[i].poster_path}`
		img.alt = `https://image.tmdb.org/t/p/w1280${data.results[i].title}`
		containerImg.append(img)
		const discription = document.createElement('div')
		discription.classList.add('card__discription')
		containerCard.append(discription)
		const discriptionTitle = document.createElement('div')
		discriptionTitle.innerText = data.results[i].title
		discriptionTitle.classList.add('discription__title')
		discription.append(discriptionTitle)
		const discriptionGrade = document.createElement('div')
		discriptionGrade.classList.add('discription__grade')
		discriptionGrade.innerText = data.results[i].vote_average
		if (data.results[i].vote_average >= 7) {
			discriptionGrade.classList.add('green__grade')
		} else if (data.results[i].vote_average >= 5) {
			discriptionGrade.classList.add('orange__grade')
		} else {
			discriptionGrade.classList.add('red__grade')
		}
		discription.append(discriptionGrade)
		const overview = document.createElement('div')
		overview.classList.add('card__hover')
		containerCard.append(overview)
		const overviewTitle = document.createElement('h3')
		overviewTitle.innerText = 'Overview'
		overview.append(overviewTitle)
		const overviewSubtitle = document.createElement('p')
		overviewSubtitle.innerText = data.results[i].overview
		overview.append(overviewSubtitle)
		
	}
	overview()
}

function overview() {
	const overview = document.querySelectorAll('.page__card')
	overview.forEach(item => {
		item.addEventListener('mouseenter', event => {
			let hoverEnter = event.target.querySelector('.card__hover')
			hoverEnter.classList.add('_hover')
			item.addEventListener('mouseleave', event => {
				hoverEnter.classList.remove('_hover')
			})
		
		})
	})
}

const header = document.querySelector('.header')
const headerLogo = document.querySelector('.header__logo')
const upper = document.querySelector('.upper')
window.addEventListener('scroll', (e) => {
	if (window.scrollY > 5) {
		header.classList.add('_scroll')
		
	} else {
		header.classList.remove('_scroll')
		
	}
	
	if (window.scrollY > 200) {
		headerLogo.src = 'img/arrow.png'
		upper.href = '#up'
	} else{
		headerLogo.src = "img/video-camera_icon.svg"
		upper.href = ''
		
	}
})



