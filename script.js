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

window.addEventListener('load', () => {
  if (window.pageYOffset === 0) {
    document.querySelector('#menu-home').classList.add('active');
  }
});

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

BTN.addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('message-block').style.setProperty('height', document.querySelector('body').scrollHeight + 'px');

  const subject = document.getElementById('subject').value.toString();
  document.getElementById('result-subject').innerText = (subject === '') ? ('Без темы') : ('Тема: ' + subject);

  const describe = document.getElementById('describe').value.toString();
  document.getElementById('result-describe').innerText = (describe === '') ? ('Без описания') : ('Описание: ' + describe);

  document.getElementById('message-block').classList.remove('hidden');
});

CLOSE_BTN.addEventListener('click', (event) => {
  document.getElementById('result-subject').innerText = '';
  document.getElementById('result-describe').innerText = '';
  document.getElementById('message-block').classList.add('hidden');
});

PORTFOLIO.addEventListener('click', (event) => {
  PORTFOLIO.querySelectorAll('div > img').forEach(element => {
    element.classList.remove('selected');
  });
  event.target.classList.add('selected');
});

FILTER.addEventListener('click', (event) => {

  if (event.target.className !== 'filter__item') return;

  FILTER.querySelectorAll('button').forEach(btn => {
    btn.classList.remove('focus');
  });
  event.target.classList.add('focus');

  let elements = PORTFOLIO.querySelectorAll("div");
  let temp = elements[0].innerHTML;
  for (let index = 0; index < elements.length - 1; index++) {
    elements[index].innerHTML = elements[index + 1].innerHTML;
  }
  elements[elements.length-1].innerHTML = temp;
});
