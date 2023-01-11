import './index.html';
import './style.scss';
//====================================================================
import winter_1 from './assets/img/winter/1.jpg';
import winter_2 from './assets/img/winter/2.jpg';
import winter_3 from './assets/img/winter/3.jpg';
import winter_4 from './assets/img/winter/4.jpg';
import winter_5 from './assets/img/winter/5.jpg';
import winter_6 from './assets/img/winter/6.jpg';
import summer_1 from './assets/img/summer/1.jpg';
import summer_2 from './assets/img/summer/2.jpg';
import summer_3 from './assets/img/summer/3.jpg';
import summer_4 from './assets/img/summer/4.jpg';
import summer_5 from './assets/img/summer/5.jpg';
import summer_6 from './assets/img/summer/6.jpg';
import spring_1 from './assets/img/spring/1.jpg';
import spring_2 from './assets/img/spring/2.jpg';
import spring_3 from './assets/img/spring/3.jpg';
import spring_4 from './assets/img/spring/4.jpg';
import spring_5 from './assets/img/spring/5.jpg';
import spring_6 from './assets/img/spring/6.jpg';
import autumn_1 from './assets/img/autumn/1.jpg';
import autumn_2 from './assets/img/autumn/2.jpg';
import autumn_3 from './assets/img/autumn/3.jpg';
import autumn_4 from './assets/img/autumn/4.jpg';
import autumn_5 from './assets/img/autumn/5.jpg';
import autumn_6 from './assets/img/autumn/6.jpg';
const seasons = {
	'winter': [winter_1, winter_2, winter_3, winter_4, winter_5, winter_6],
	'summer': [summer_1, summer_2, summer_3, summer_4, summer_5, summer_6],
	'spring': [spring_1, spring_2, spring_3, spring_4, spring_5, spring_6],
	'autumn': [autumn_1, autumn_2, autumn_3, autumn_4, autumn_5, autumn_6]
};
//====================================================================
/* declaring and getting constants*/
//for menu-burger
const menuBurger = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');
const menuBurgerLink = document.querySelectorAll('.navigation__link');
const body = document.querySelector('body')
// for translate
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
		'price-standard': 'Standard',
		'price-premium': 'Premium',
		'price-gold': 'Gold',
		'currency': '$',
		'price-description-1-span-1': 'One location',
		'price-description-2-span-1': 'One or two locations',
		'price-description-3-span-1': 'Three locations or more',
		'price-description-1-2-3-span-2': ' photos in color',
		'price-description-1-2-3-span-3': ' photos in retouch',
		'price-description-1-span-4': 'Readiness 2-3 weeks',
		'price-description-2-span-4': 'Readiness 1-2 weeks',
		'price-description-3-span-4': 'Readiness 1 week',
		'price-description-1-2-span-5': 'Make up, visage',
		'price-description-3-span-5': 'Make up, visage, hairstyle',
		'order': 'Order shooting',
		'contact-me': 'Contact me',
		'send-message': 'Send message',
		'footer-text': 'Rolling Scopes School'
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
		'price-standard': 'Стандартный',
		'price-premium': 'Премиальный',
		'price-gold': 'Золотой',
		'currency': 'у.е.',
		'price-description-1-span-1': 'Одна локация',
		'price-description-2-span-1': 'Одна-две локации',
		'price-description-3-span-1': 'Три локации и больше',
		'price-description-1-2-3-span-2': ' цветных фото',
		'price-description-1-2-3-span-3': ' отретушированных фото',
		'price-description-1-span-4': 'Готовность через 2-3 недели',
		'price-description-2-span-4': 'Готовность через 1-2 недели',
		'price-description-3-span-4': 'Готовность через 1 неделю',
		'price-description-1-2-span-5': 'Макияж, визаж',
		'price-description-3-span-5': 'Макияж, визаж, прическа',
		'order': 'Заказать съемку',
		'contact-me': 'Свяжитесь со мной',
		'send-message': 'Отправить',
		'footer-text': 'Школа "Rolling Scopes"'
	}
}
const ruen = document.querySelector('.language');
const ruAndEn = document.querySelectorAll('.language__item');
const translate = document.querySelectorAll('[data-i18]');
const getTranslate = (lang) => {
	translate.forEach((currentElement) => {
		if (
			Object.keys(i18Obj[lang]).find(
				(fieldName) => fieldName === currentElement.dataset.i18
			)
		) {
			if (currentElement.placeholder) {
				currentElement.placeholder = i18Obj[lang][currentElement.dataset.i18];
				currentElement.textContent = '';
			}
			else {
				currentElement.textContent = i18Obj[lang][currentElement.dataset.i18];
			}
		}
	})
}
// for change images
const portfolioButton = document.querySelectorAll('.section-portfolio__button');
const portfolioButtons = document.querySelector('.section-portfolio__buttons');
const portfolioItems = document.querySelectorAll('.section-portfolio__item');
// for change bg-theme
const buttonChangeBg = document.querySelector('.change-bg');

//=======================================================================================
/* document translate */
function changeLanguage(event) {
	let languageClick = event.target.dataset.language;
	getTranslate(languageClick);
	ruAndEn.forEach((button) => button.classList.remove('language-activ'));
	event.target.classList.add('language-activ')
}
ruen.addEventListener('click', changeLanguage);

/* change images */
function fill(seas) {
	let count = 0;
	portfolioItems.forEach((el) => {
		el.innerHTML = '';
		const portfolioImage = new Image();
		portfolioImage.src = seasons[seas][count];
		portfolioImage.alt = `${seas}_${count}`;
		portfolioImage.classList.add('section-portfolio__image');
		el.appendChild(portfolioImage);
		count++;
	});
}

function changeImage(event) {
	portfolioButton.forEach((button) => button.classList.remove('button-activ'));
	if (event === undefined) {
		portfolioButton[3].classList.add('button-activ');
		fill('autumn');
	}
	else {
		event.target.classList.add('button-activ');
		fill(event.target.dataset.season);
	}
}
portfolioButtons.addEventListener('click', changeImage);
changeImage();

/* open menu-burger */
menuBurger.addEventListener('click', () => {
	menuBurger.classList.toggle('active');
	navigation.classList.toggle('active');
	body.classList.toggle('lock');
})

/* close menu when link is clicked */
menuBurgerLink.forEach((el) => el.addEventListener('click', closeMenu));
function closeMenu(event) {
	if (event.target.classList.contains('navigation__link')) {
		menuBurger.classList.remove('active');
		navigation.classList.remove('active');
		body.classList.remove('lock');
	}
}

/* change bg-theme */
let initialTheme = true;
function toggleColors() {
	const root = document.documentElement;
	if (initialTheme) {
		root.style.setProperty('--background-color', 'white');
		root.style.setProperty('--text-color', 'black');
		root.style.setProperty('--subtitle-color', 'black');
		root.style.setProperty('--subtitle-text-color', 'black');
		root.style.setProperty('--button-activ-text-color', 'white');
		root.style.setProperty('--button-text-color', 'black');
		root.style.setProperty('--button-background-hover', '#bdae82');
		initialTheme = false;
	} else {
		root.style.setProperty('--background-color', 'black');
		root.style.setProperty('--text-color', 'white');
		root.style.setProperty('--subtitle-color', '#bdae82');
		root.style.setProperty('--subtitle-text-color', '#bdae82');
		root.style.setProperty('--button-activ-text-color', 'black');
		root.style.setProperty('--button-text-color', '#bdae82');
		root.style.setProperty('--button-background-hover', 'black');
		initialTheme = true;
	}
}
buttonChangeBg.addEventListener('click', toggleColors)