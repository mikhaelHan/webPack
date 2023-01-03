import './index.html';
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
const body = document.querySelector('body');

// -----выбор пункта nav-меню----- //
function activeHeaderLink(event) {
	if (event.target.classList.value === 'header__item-link') {
		headerLinks.forEach(el => {
			el.classList.remove('active')
		})
		event.target.classList.add('active');
		burgerMenu.classList.remove('active');
		menu.classList.remove('active');
		body.classList.remove('active');
		memoryItemHeader(event.target)
	}
	else if (event.target.classList.value === 'header__nav-menu active' && event.target.classList.value !== 'header__list') {
		burgerMenu.classList.remove('active');
		menu.classList.remove('active');
		body.classList.remove('active');
	}
	else if (event.target.classList.value === 'header__item-link active') {
		burgerMenu.classList.remove('active');
		menu.classList.remove('active');
		body.classList.remove('active');
	}
}
headerNavMenu.addEventListener('click', activeHeaderLink);

// -----перенос жёлтого маркера в nav-меню на др. страницу----- //
function memoryItemHeader(result) {
	result === linkHelp ? localStorage.setItem('item help', 1) : localStorage.setItem('item help', 0)
}

// -----выбор пункта nav-меню----- //
function openBurgerMenu() {
	burgerMenu.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('active');
}
menu.addEventListener('click', openBurgerMenu);

/* ============================== карусель карточек ============================== */

// ----- для кнопок
const buttonLeft = document.getElementById('button-left');
const buttonHightLeft = document.getElementById('button-hight-left');
const buttonRight = document.getElementById('button-right');
const buttonHightRight = document.getElementById('button-hight-right');
const buttonIndicator = document.getElementById('button-condition');
const buttons = document.querySelectorAll('.main__navigation-button');

// ----- для карточек с питомцами
const cardsContainer = document.querySelector('.main__cards-slider');
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
const matrix = [
	[0, 1, 2, 3, 4, 5, 6, 7],
	[7, 0, 1, 2, 3, 4, 5, 6],
	[6, 7, 0, 1, 2, 3, 4, 5],
	[5, 6, 7, 0, 1, 2, 3, 4],
	[4, 5, 6, 7, 0, 1, 2, 3],
	[3, 4, 5, 6, 7, 0, 1, 2]
];

// -----функция проверки ширины окна----- //
function addContentForWidth(winWidth) {
	if (winWidth >= 1280) { return 6 }
	else if (winWidth < 1280 && winWidth >= 768) { return 8 }
	else return 16
}

// -----функция проверки активных кнопок----- //
function checkButtonIndicator() {
	let width = addContentForWidth(window.outerWidth);
	let condition = +buttonIndicator.textContent;
	buttons.forEach(el => {
		el.classList.remove('noactive');
		el.removeAttribute('disabled')
	})
	if (condition == 1) {
		buttonLeft.classList.add('noactive');
		buttonLeft.setAttribute('disabled', true);
		buttonHightLeft.classList.add('noactive');
		buttonHightLeft.setAttribute('disabled', true)
	}
	else if (width == condition) {
		buttonRight.classList.add('noactive');
		buttonRight.setAttribute('disabled', true);
		buttonHightRight.classList.add('noactive');
		buttonHightRight.setAttribute('disabled', true)
	}
	else if (condition > width) {
		buttonIndicator.textContent = width;
		checkButtonIndicator();
	}
}
checkButtonIndicator();

// -----функции нажатия кнопок кнопок----- //
buttonRight.addEventListener('click', () => {
	buttonIndicator.textContent = +buttonIndicator.textContent + 1;
	checkButtonIndicator();
	addContent()
})
buttonLeft.addEventListener('click', () => {
	buttonIndicator.textContent = +buttonIndicator.textContent - 1;
	checkButtonIndicator();
	addContent()
})
buttonHightRight.addEventListener('click', () => {
	buttonIndicator.textContent = addContentForWidth(window.outerWidth);
	checkButtonIndicator();
	addContent()
})
buttonHightLeft.addEventListener('click', () => {
	buttonIndicator.textContent = 1;
	checkButtonIndicator();
	addContent()
})

// -----функция добавления контэнта----- //
function addContent() {
	let width = addContentForWidth(window.outerWidth);
	let condition = +buttonIndicator.textContent;
	if (width == 6) {
		cardsContainer.classList.add('change');
		setTimeout(() => cardsContainer.innerHTML = '', 300);
		setTimeout(() => matrix[condition - 1].forEach(el => cardsContainer.innerHTML += `<div value="${pets[el].pos}" class="card-box">
		<div class="card-box__image"><img class="card-box__img" src="${pets[el].img}"
				alt="${pets[el].name}"></div>
		<h4 class="card-box__name">${pets[el].name}</h4>
		<button class="card-box__button">Learn more</button>
	</div>`), 700);
		setTimeout(() => cardsContainer.classList.remove('change'), 700);
	}
	else if (width == 8) {
		cardsContainer.classList.add('change');
		setTimeout(() => cardsContainer.innerHTML = '', 300);
		setTimeout(() => matrix.forEach(el => cardsContainer.innerHTML += `<div value="${pets[el[condition - 1]].pos}" class="card-box">
		<div class="card-box__image"><img class="card-box__img" src="${pets[el[condition - 1]].img}"
				alt="${pets[el[condition - 1]].name}"></div>
		<h4 class="card-box__name">${pets[el[condition - 1]].name}</h4>
		<button class="card-box__button">Learn more</button>
	</div>`), 700);
		setTimeout(() => cardsContainer.classList.remove('change'), 700);
	}
	else {
		let stack = [];
		if (condition <= 8) {
			for (let i = 0; i < 3; i++) {
				stack.push(matrix[i][condition - 1])
			}
		}
		else {
			for (let i = 3; i < 6; i++) {
				stack.push(matrix[i][condition - 9])
			}
		}
		cardsContainer.classList.add('change');
		setTimeout(() => cardsContainer.innerHTML = '', 300);
		setTimeout(() => stack.forEach(el => cardsContainer.innerHTML += `<div value="${pets[el].pos}" class="card-box">
		<div class="card-box__image"><img class="card-box__img" src="${pets[el].img}"
				alt="${pets[el].name}"></div>
		<h4 class="card-box__name">${pets[el].name}</h4>
		<button class="card-box__button">Learn more</button>
	</div>`), 700);
		setTimeout(() => cardsContainer.classList.remove('change'), 700);
	}
}
addContent();

/* ============================== попап ============================== */

// ----- для попап-контэйнера
const popup = document.querySelector('.popup');

// -----функция всплытия попапа----- //
cardsContainer.addEventListener('click', function (e) {
	let targetItem = e.target;
	if (targetItem.closest('.card-box')) {
		let value = targetItem.closest('.card-box').getAttribute('value');
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

