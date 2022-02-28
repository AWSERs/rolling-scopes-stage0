"use strict";

// Burger Menu

const iconMenu = document.querySelector('.header__menu');
const menuHeader = document.querySelector('.links__wrapper');
const iconMenuItem = document.querySelectorAll('.link__wrapper-item')
// open Menu
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lockScroll')
		menuHeader.classList.toggle("_click");
      iconMenu.classList.toggle('_click')
      if (theme === 'ligth') {
      iconMenu.classList.toggle('ligthMenu')
      }
	});
}
// close Menu
iconMenuItem.forEach(item => {
	item.addEventListener('click', function (e) {
		document.body.classList.remove('_lockScroll');
		menuHeader.classList.remove("_click");
      iconMenu.classList.remove('_click')
      iconMenu.classList.remove('ligthMenu')
	});

})


	console.log(" ==================== \nВёрстка соответствует макету. Ширина экрана 768px [+48]\n ====================== \n блок <header> [+6] \n секция hero [+6] \n секция skills [+6]\n секция portfolio [+6] \n секция video [+6] \n секция price [+6] \n секция contacts [+6] \n блок <footer> [+6] \n ================================= \n Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется [+15]\n ============================== \n нет полосы прокрутки при ширине страницы от 1440рх до 768рх [+5] \n нет полосы прокрутки при ширине страницы от 768рх до 480рх [+5] \n нет полосы прокрутки при ширине страницы от 480рх до 320рх [+5] \n ============================ \n На ширине экрана 768рх и меньше реализовано адаптивное меню [+22]\n ==================================== \n Итого: [75] <=")

// Changing images in the Portfolio section

const portfolioBtns = document.querySelector('.portfolio__switch')
const portfolioImg = document.querySelectorAll('.portfolio__wrapper-item-img')

portfolioBtns.addEventListener('click', (event) => {
	changeImage(event)
})

function changeImage(event) {
	if (event.target.classList.contains('portfolio__switch-item')) {
		portfolioImg.forEach((img, index) => {
			img.src = `./img/${event.target.dataset.season}/portfolio-img${index + 1}.jpg`
		})
	}
}

// preloadImages

function preloadImages() {
	const seasons = ['winter', 'spring', 'summer', 'autumn'];

	for (let i = 1; i < 6; i++) {
		const img = new Image();
		img.src = `./img/${seasons.forEach(e)}/portfolio-img${i}`
	}
}

// backgrond active portfolioBtn

const portfolioBtn = document.querySelectorAll('.portfolio__switch-item')


portfolioBtn.forEach(item => {
	item.addEventListener('click', (event) => {
		removeClass(item)
		event.target.classList.add('active')
	})
	
})

function removeClass(item) {
	portfolioBtn.forEach(item => {
      item.classList.remove('active')
      
	})
}

// i18n

const i18Obj = {
'en': {
   'skills': 'Skills',
   'portfolio': 'Portfolio',
   'video': 'Video',
   'price': 'Price',
   'contacts': 'Contacts',
   'hero-title': 'Alexa Rise',
   'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
   'hire': 'Hire me',
   'skill-title-1': 'Digital photography',
   'skill-text-1': 'High-quality photos in the studio and on the nature',
   'skill-title-2': 'Video shooting',
   'skill-text-2': 'Capture your moments so that they always stay with you',
   'skill-title-3': 'Rotouch',
   'skill-text-3': 'I strive to make photography surpass reality',
   'skill-title-4': 'Audio',
   'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
   'winter': 'Winter',
   'spring': 'Spring',
   'summer': 'Summer',
   'autumn': 'Autumn',
   'price-description-1-span-1': 'One location',
   'price-description-1-span-2': '120 photos in color',
   'price-description-1-span-3': '12 photos in retouch',
   'price-description-1-span-4': 'Readiness 2-3 weeks',
   'price-description-1-span-5': 'Make up, visage',
   'price-description-2-span-1': 'One or two locations',
   'price-description-2-span-2': '200 photos in color',
   'price-description-2-span-3': '20 photos in retouch',
   'price-description-2-span-4': 'Readiness 1-2 weeks',
   'price-description-2-span-5': 'Make up, visage',
   'price-description-3-span-1': 'Three locations or more',
   'price-description-3-span-2': '300 photos in color',
   'price-description-3-span-3': '50 photos in retouch',
   'price-description-3-span-4': 'Readiness 1 week',
   'price-description-3-span-5': 'Make up, visage, hairstyle',
   'order': 'Order shooting',
   'contact-me': 'Contact me',
   'send-message': 'Send message'
},
'ru': {
   'skills': 'Навыки',
   'portfolio': 'Портфолио',
   'video': 'Видео',
   'price': 'Цены',
   'contacts': 'Контакты',
	'hero-title': 'Алекса Райс',
   'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
   'hire': 'Пригласить',
   'skill-title-1': 'Фотография',
   'skill-text-1': 'Высококачественные фото в студии и на природе',
   'skill-title-2': 'Видеосъемка',
   'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
   'skill-title-3': 'Ретушь',
   'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
   'skill-title-4': 'Звук',
   'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
   'winter': 'Зима',
   'spring': 'Весна',
   'summer': 'Лето',
   'autumn': 'Осень',
   'price-description-1-span-1': 'Одна локация',
   'price-description-1-span-2': '120 цветных фото',
   'price-description-1-span-3': '12 отретушированных фото',
   'price-description-1-span-4': 'Готовность через 2-3 недели',
   'price-description-1-span-5': 'Макияж, визаж',
   'price-description-2-span-1': 'Одна-две локации',
   'price-description-2-span-2': '200 цветных фото',
   'price-description-2-span-3': '20 отретушированных фото',
   'price-description-2-span-4': 'Готовность через 1-2 недели',
   'price-description-2-span-5': 'Макияж, визаж',
   'price-description-3-span-1': 'Три локации и больше',
   'price-description-3-span-2': '300 цветных фото',
   'price-description-3-span-3': '50 отретушированных фото',
   'price-description-3-span-4': 'Готовность через 1 неделю',
   'price-description-3-span-5': 'Макияж, визаж, прическа',
   'order': 'Заказать съемку',
   'contact-me': 'Свяжитесь со мной',
   'send-message': 'Отправить'
	}
}

const btnRu = document.querySelector('.header__wrapper-second-item')
const btnEn = document.querySelector('.header__wrapper-first-item')


btnRu.addEventListener('click', (event) => {
   getTranslate(event)
   btnRu.classList.add('active__lang')
   btnEn.classList.remove('active__lang')
})

btnEn.addEventListener('click', (event) => {
   getTranslate(event)
   btnRu.classList.remove('active__lang')
   btnEn.classList.add('active__lang')
})

function getTranslate(event) {
	const changeWord = document.querySelectorAll('[data-i18]')
	
	if(event.target.textContent === 'ru')
	changeWord.forEach(item => {
		let key = item.dataset.i18;
		item.textContent = i18Obj.ru[key]
	})

	if (event.target.textContent === 'en') {
		changeWord.forEach(item => {
		let key = item.dataset.i18;
		item.textContent = i18Obj.en[key]
	})
	}
}

// theme change

let logo = document.querySelector('.extends__img')
let themeItems = document.querySelectorAll('.theme')

console.log(portfolioBtn)
let theme = 'dark';
themeItems
logo.addEventListener('click', () => {
   const arrTheme = ['./img/light_sun.svg','./img/dark_moon.svg' ]

   if (theme === 'dark') {
      theme = 'ligth'
      logo.src = arrTheme[0]
      menuHeader.classList.add('ligthBackground')
      themeItems.forEach(item => {
      item.classList.add('ligth')
      })
      portfolioBtn.forEach(item => {
         item.classList.add('hover')
      })
      iconMenuItem.forEach(item => {
         item.classList.add('ligthFonts')
      })
      
      
      
   } else {
      theme = 'dark'
      logo.src = arrTheme[1]
      menuHeader.classList.remove('ligthBackground')
      iconMenu.classList.remove('ligthMenu')
      themeItems.forEach(item => {
      item.classList.remove('ligth')
      })
      portfolioBtn.forEach(item => {
         item.classList.remove('hover')
      })
      iconMenuItem.forEach(item => {
         item.classList.remove('ligthFonts')
      })
      
   }
})



	
	

