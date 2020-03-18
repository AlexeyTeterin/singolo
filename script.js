const MENU = document.querySelector('.menu');
const BTN = document.getElementById('btn');
const CLOSE_BTN = document.getElementById('close-btn');
const FILTER = document.querySelector(".portfolio__filter");
const PORTFOLIO = document.querySelector(".portfolio__table");
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

// Активация кнопки Home при загрузке страницы
window.addEventListener('load', () => {
  if (window.pageYOffset === 0) {
    document.querySelector('#menu-home').classList.add('active');
  }
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

// Нажатие кнопки Submit
BTN.addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('message-block').style.setProperty('height', document.querySelector('body').scrollHeight + 'px');

  const subject = document.getElementById('subject').value.toString();
  document.getElementById('result-subject').innerText = (subject === '') ? ('Без темы') : ('Тема: ' + subject);

  const describe = document.getElementById('describe').value.toString();
  document.getElementById('result-describe').innerText = (describe === '') ? ('Без описания') : ('Описание: ' + describe);

  document.getElementById('message-block').classList.remove('hidden');
});

// Нажатие кнопки OK после отправки формы
CLOSE_BTN.addEventListener('click', (event) => {
  document.getElementById('result-subject').innerText = '';
  document.getElementById('result-describe').innerText = '';
  document.getElementById('message-block').classList.add('hidden');
  document.querySelector('form').reset(); // очистка формы

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
  }, 150);

  elements.forEach(el => {
    setTimeout(() => el.style.opacity = 1, 150);
  });
});

// Выключение экранов телефонов по тапу на экран
document.querySelectorAll('#iphone-v-off, #iphone-h-off').forEach(iphoneScreen => {
  iphoneScreen.addEventListener('click', (event) => {
    if (iphoneScreen.classList.length === 0) {
      iphoneScreen.classList.add('hidden');
    } else {
      iphoneScreen.classList.remove('hidden');
    }
  });
});

// Выключение экранов телефонов по тапу на корпус телефона
document.querySelectorAll('.iphone-mask').forEach(iphoneBody => {
  iphoneBody.addEventListener('click', (event) => {
    if (iphoneBody.parentElement.nextElementSibling.classList.length === 0) {
      iphoneBody.parentElement.nextElementSibling.classList.add('hidden');
    } else {
      iphoneBody.parentElement.nextElementSibling.classList.remove('hidden');
    }
  });
});

// Переключение слайдера

document.querySelectorAll('#arrow').forEach(arrow => {
  arrow.addEventListener('click', () => {
    let activeSlide = document.querySelector('.slide.active');
    let nextSlide = document.querySelector('.slide.next');
    console.log(arrow);
    activeSlide.classList.add('next');
    activeSlide.classList.remove('active');
    nextSlide.classList.remove('next');
    nextSlide.classList.add('active');

    if (document.querySelector('#slide2').classList[1] === 'active') {
      document.querySelector('.slider').style.setProperty('background-color', '#648BF0');
    } else {
      document.querySelector('.slider').style.setProperty('background-color', '#f06c64');
    }


  });
});
