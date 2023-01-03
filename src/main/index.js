import './index.html';
import './css/style.css';
// import '../pets/index.js';
// import '../pets/index.html';

console.log('hello');

/* ============================== меню и бургер меню ============================== */

// ----- для жёлтого маркера
const headerList = document.querySelector('.header__list');
const headerLinks = document.querySelectorAll('.header__item-link');
const linkHelp = document.getElementById('help');
// ----- для бургер меню
const headerNavMenu = document.querySelector('.header__nav-menu');
const burgerMenu = document.querySelector('.header__nav-menu');
const menu = document.querySelector('.header__menu');
const header = document.querySelector('.header');
const body = document.querySelector('body');

// -----перенос жёлтого маркера в nav-меню на др. страницу----- //
function getItemHeader() {
	if (localStorage.getItem('item help') === '1') {
		headerLinks.forEach(el => {
			el.classList.remove('active')
		});
		linkHelp.classList.add('active');
		localStorage.setItem('item help', 0);
	}
}
getItemHeader()

// -----выбор пункта nav-меню----- //
function activeHeaderLink(event) {
	if (event.target.classList.value === 'header__item-link') {
		headerLinks.forEach(el => {
			el.classList.remove('active')
		});
		event.target.classList.add('active');
		burgerMenu.classList.remove('active');
		menu.classList.remove('active');
		body.classList.remove('active');
		localStorage.setItem('item help', 0);
	}
	else if (event.target.classList.value === 'header__nav-menu active' && event.target.classList.value !== 'header__list') {
		burgerMenu.classList.remove('active');
		menu.classList.remove('active');
		body.classList.remove('active');
	}
	else if (event.target.classList.value === 'header__title' || event.target.classList.value === 'header__subtitle' || event.target.classList.value === 'header__item-link active') {
		burgerMenu.classList.remove('active');
		menu.classList.remove('active');
		body.classList.remove('active');
	}
}
header.addEventListener('click', activeHeaderLink);

// -----открытие и закрытие бургер-меню----- //
function openBurgerMenu() {
	burgerMenu.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('active');
}
menu.addEventListener('click', openBurgerMenu);

/* ============================== карусель карточек ============================== */

// ----- для кнопок
const buttonLeft = document.querySelector('.pets__left-button');
const buttonRight = document.querySelector('.pets__right-button');

// ----- для карточек с питомцами
const petsContainerSlider = document.querySelector('.pets__cards-container-slider');
let stack = [];
const pets = [
	{
		"pos": 0,
		"name": "Jennifer",
		"img": "../image/pets-card/pets-jennifer.png",
		"type": "Dog",
		"breed": "Labrador",
		"description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
		"age": "2 months",
		"inoculations": "none",
		"diseases": "none",
		"parasites": "none"
	},
	{
		"pos": 1,
		"name": "Sophia",
		"img": "../image/pets-card/pets-sophia.png",
		"type": "Dog",
		"breed": "Shih tzu",
		"description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
		"age": "1 month",
		"inoculations": "parvovirus",
		"diseases": "none",
		"parasites": "none"
	},
	{
		"pos": 2,
		"name": "Woody",
		"img": "../image/pets-card/pets-woody.png",
		"type": "Dog",
		"breed": "Golden Retriever",
		"description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
		"age": "3 years 6 months",
		"inoculations": "adenovirus, distemper",
		"diseases": "right back leg mobility reduced",
		"parasites": "none"
	},
	{
		"pos": 3,
		"name": "Scarlett",
		"img": "../image/pets-card/pets-scarlet.png",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
		"age": "3 months",
		"inoculations": "parainfluenza",
		"diseases": "none",
		"parasites": "none"
	},
	{
		"pos": 4,
		"name": "Katrine",
		"img": "../image/pets-card/pets-katrine.png",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
		"age": "6 months",
		"inoculations": "panleukopenia",
		"diseases": "none",
		"parasites": "none"
	},
	{
		"pos": 5,
		"name": "Timmy",
		"img": "../image/pets-card/pets-timmy.png",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
		"age": "2 years 3 months",
		"inoculations": "calicivirus, viral rhinotracheitis",
		"diseases": "kidney stones",
		"parasites": "none"
	},
	{
		"pos": 6,
		"name": "Freddie",
		"img": "../image/pets-card/pets-freddie.png",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
		"age": "2 months",
		"inoculations": "rabies",
		"diseases": "none",
		"parasites": "none"
	},
	{
		"pos": 7,
		"name": "Charly",
		"img": "../image/pets-card/pets-charly.png",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
		"age": "8 years",
		"inoculations": "bordetella bronchiseptica, leptospirosis",
		"diseases": "deafness, blindness",
		"parasites": "lice, fleas"
	}
];

// -----рандомное число----- //
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// -----заполнение стэка карточек----- //
function checked(mass1, mass2) {
	let x = randomNumber(0, 7);
	if (!mass1.includes(x) && !mass2.includes(x)) { mass2.push(x) }
	else return checked(mass1, mass2)
}

// -----функция заполнения контэнта----- //
function addContent(width) {
	let tempStack = [];
	for (let i = 0; i < width; i++) {
		checked(stack, tempStack)
	}
	stack = tempStack;
	petsContainerSlider.classList.add('change');
	setTimeout(() => petsContainerSlider.innerHTML = '', 300);
	setTimeout(() => stack.forEach(el => petsContainerSlider.innerHTML += `<div value="${pets[el].pos}" class="pets-cardbox">
	<div class="pets-cardbox__image-box"><img class="pets-cardbox__img"
		src="${pets[el].img}" alt="${pets[el].name}"></div>
	<h4 class="pets-cardbox__name">${pets[el].name}</h4>
	<button class="pets-cardbox__button">Learn more</button>
	</div>`), 700);
	setTimeout(() => petsContainerSlider.classList.remove('change'), 700);
}

// -----функция проверки ширины окна----- //
function addContentForWidth(winWidth) {
	if (winWidth >= 1280) { addContent(3) }
	else if (winWidth < 1280 && winWidth >= 768) { addContent(2) }
	else addContent(1)
}

addContentForWidth(window.outerWidth);

buttonLeft.addEventListener('click', () => {
	addContentForWidth(window.outerWidth);
});
buttonRight.addEventListener('click', () => {
	addContentForWidth(window.outerWidth);
})

/* ============================== попап ============================== */

// ----- для попап-контэйнера
const popup = document.querySelector('.popup');

// -----функция всплытия попапа----- //
petsContainerSlider.addEventListener('click', function (e) {
	let targetItem = e.target;
	if (targetItem.closest('.pets-cardbox')) {
		let value = targetItem.closest('.pets-cardbox').getAttribute('value');
		popup.innerHTML = `<div id="popup__close" class="popup__body">
		<div class="popup__content">
			<img src="${pets[value].img}" alt="${pets[value].name}" class="popup__image">
			<div class="popup__box-about">
				<h2 class="popup__title">${pets[value].name}</h2>
				<h3 class="popup__subtitle">${pets[value].type} - ${pets[value].breed}</h3>
				<div class="popup__about">${pets[value].description}</div>
				<ul class="popup__about-list">
					<li class="about-item">Age: <span class="about-item__span">${pets[value].age}</span></li>
					<li class="about-item">Inoculations: <span class="about-item__span">${pets[value].inoculations}</span></li>
					<li class="about-item">Diseases: <span class="about-item__span">${pets[value].diseases}</span></li>
					</li>
					<li class="about-item">Parasites: <span class="about-item__span">${pets[value].parasites}</span></li>
					</li>
				</ul>
			</div>
			<button id="popup__close" class="popup__close">×</button>
		</div>
	</div>`;
		popup.classList.add('active');
		body.classList.add('active');
	}
});

popup.addEventListener('click', (event) => {
	if (event.target.id == "popup__close") {
		popup.classList.remove('active');
		body.classList.remove('active');
		setTimeout(() => popup.innerHTML = '', 800);
	}
})