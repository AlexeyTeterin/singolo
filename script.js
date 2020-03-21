const MENU = document.querySelector('.menu');
const BTN = document.getElementById('btn');
const CLOSE_BTN = document.getElementById('close-btn');
const FILTER = document.querySelector(".portfolio__filter");
const PORTFOLIO = document.querySelector(".portfolio__table");
const FORM = document.querySelector('#myForm');
var selectedID = 'menu-home';
var smoothScroll = {
  block: "start",
  behavior: "smooth",
};
var menuTargetIDs = {
  'menu-home': '#slider',
  'menu-serv': '#services',
  'menu-about': '#about',
  'menu-portf': '#portfolio',
  'menu-contact': '#feedback',
};
let changeBG = function () {
  let actualBG = window.getComputedStyle(document.querySelector('.slider')).getPropertyValue('background-color');
  if (actualBG === 'rgb(240, 108, 100)') {
    return 'rgb(100, 139, 240)';
  }
  return 'rgb(240, 108, 100)';
};

// Активация кнопки Home при загрузке страницы
window.addEventListener('load', () => {
  if (window.pageYOffset === 0) {
    document.querySelector('#menu-home').classList.add('active');
  }
});

// Активация элементов меню при нажатии
MENU.addEventListener('click', (event) => {
  let id = event.target.id;
  console.log(id);

  if (id !== "") {
    document.getElementById(selectedID).classList.remove('active');
    document.getElementById(id).classList.add("active");
    selectedID = id;
  }

  document.querySelector(menuTargetIDs[selectedID]).scrollIntoView(smoothScroll);
});

// Переключение меню при скролле окна
window.addEventListener('scroll', () => {
  if (window.pageYOffset < 500) {
    document.getElementById(selectedID).classList.remove('active');
    document.getElementById('menu-home').classList.add('active');
    selectedID = 'menu-home';
  }
  if (window.pageYOffset >= 400) {
    document.getElementById(selectedID).classList.remove('active');
    document.getElementById('menu-serv').classList.add('active');
    selectedID = 'menu-serv';
  }
  if (window.pageYOffset >= 900) {
    document.getElementById(selectedID).className = "";
    document.getElementById('menu-portf').className = "active";
    selectedID = 'menu-portf';
  }
  if (window.pageYOffset >= 1700) {
    document.getElementById(selectedID).className = "";
    document.getElementById('menu-about').className = "active";
    selectedID = 'menu-about';
  }
  if (window.pageYOffset >= 2400 || (window.innerHeight + window.pageYOffset) >= document.body.scrollHeight) {
    document.getElementById(selectedID).className = "";
    document.getElementById('menu-contact').className = "active";
    selectedID = 'menu-contact';
  }
});

// Вкл/выкл телефонов
function switchOnOff(which) {
  let phone = document.querySelectorAll('.iphone-mask')[which - 1].parentElement.nextElementSibling;
  if (phone.classList.length === 0) {
    phone.classList.add('hidden');
  } else {
    phone.classList.remove('hidden');
  }
}

// Переключение слайдера кнопкой вправо
document.querySelector('#arrow-right').addEventListener('click', () => {
  let activeSlide = document.querySelector('.slide.active');
  let nextSlide = document.querySelector('.slide.next');
  nextSlide.style.setProperty('left', '100%');
  console.log(nextSlide);

  document.querySelector('.slider').style.setProperty('background-color', changeBG());

  activeSlide.classList.add('toLeft');
  activeSlide.style.opacity = 0;
  nextSlide.classList.add('toLeft');
  nextSlide.style.opacity = 1;

  setTimeout(() => {
    nextSlide.classList.remove('next');
    activeSlide.classList.remove('active');
    nextSlide.classList.remove('toLeft');
    activeSlide.classList.remove('toLeft');
    nextSlide.classList.add('active');
    activeSlide.classList.add('next');
    console.log(nextSlide);
    nextSlide.style.setProperty('left', '0');
  }, 350);
});

// Переключение слайдера кнопкой влево
document.querySelector('#arrow-left').addEventListener('click', () => {
  let activeSlide = document.querySelector('.slide.active');
  let nextSlide = document.querySelector('.slide.next');
  nextSlide.style.setProperty('left', '-100%');
  console.log(nextSlide);

  document.querySelector('.slider').style.setProperty('background-color', changeBG());

  activeSlide.classList.add('toRight');
  activeSlide.style.opacity = 0;
  nextSlide.classList.add('toRight');
  nextSlide.style.opacity = 1;

  setTimeout(() => {
    nextSlide.classList.remove('next');
    activeSlide.classList.remove('active');
    nextSlide.classList.remove('toRight');
    activeSlide.classList.remove('toRight');
    nextSlide.classList.add('active');
    activeSlide.classList.add('next');
    console.log(nextSlide);
    nextSlide.style.setProperty('left', '0');
  }, 350);
});

//  Выделение картинки в Portfolio
PORTFOLIO.addEventListener('click', (event) => {
  PORTFOLIO.querySelectorAll('div > img').forEach(element => {
    element.classList.remove('selected');
  });
  event.target.classList.add('selected');
});

//Перемешивание картинок Porfolio при нажатии на фильтры
FILTER.addEventListener('click', (event) => {
  if (event.target.className !== 'filter__item') return;

  FILTER.querySelectorAll('button').forEach(btn => {
    btn.classList.remove('focus');
  });
  event.target.classList.add('focus');

  let elements = PORTFOLIO.querySelectorAll("div");

  elements.forEach(el => {
    el.style.opacity = 0;
  });

  setTimeout(() => {
    let temp = elements[0].innerHTML;
    for (let index = 0; index < elements.length - 1; index++) {
      elements[index].innerHTML = elements[index + 1].innerHTML;
    }
    elements[elements.length - 1].innerHTML = temp;
  }, 250);

  elements.forEach(el => {
    setTimeout(() => el.style.opacity = 1, 250);
  });
});

// Отправка формы
function sendForm() {
  event.preventDefault();
  document.getElementById('message-block').style.setProperty('height', document.querySelector('body').scrollHeight + 'px');

  const subject = document.getElementById('subject').value.toString();
  document.getElementById('result-subject').innerText = (subject === '') ? ('Без темы') : ('Тема: ' + subject);

  const describe = document.getElementById('describe').value.toString();
  document.getElementById('result-describe').innerText = (describe === '') ? ('Без описания') : ('Описание: ' + describe);

  document.getElementById('message-block').classList.remove('hidden');
}

// Нажатие кнопки OK после отправки формы
CLOSE_BTN.addEventListener('click', (event) => {
  document.getElementById('result-subject').innerText = '';
  document.getElementById('result-describe').innerText = '';
  document.getElementById('message-block').classList.add('hidden');
  document.querySelector('form').reset(); // очистка формы
});
