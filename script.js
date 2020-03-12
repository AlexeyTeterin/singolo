const MENU = document.querySelector('.menu');
var selectedID;

MENU.addEventListener('click', function (e) {
  if (selectedID !== undefined) document.getElementById(selectedID).className = "";
  let id = e.target.id;

  document.getElementById(id).className = "active";
  selectedID = id;
  console.log(selectedID);

  switch (true) {
    case (selectedID === 'menu-home'): {
      document.querySelector('div.slider').scrollIntoView({
        block: 'start',
        behavior: "smooth",
      });
      break;
    }
    case (selectedID === 'menu-serv'): {
      document.querySelector('div.services').scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
      break;
    }
    case (selectedID === 'menu-about'): {
      document.querySelector('div.about').scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
      break;
    }
    case (selectedID === 'menu-portf'): {
      document.querySelector('div.portfolio').scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
      break;
    }
    case (selectedID === 'menu-contact'): {
      document.querySelector('div.feedback').scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
      break;
    }
  }
});

window.addEventListener('load', function () {
  if (window.pageYOffset === 0) {
    document.querySelector('#menu-home').classList.add('active');
  }
});

window.addEventListener('scroll', function () {
  if (window.pageYOffset < 500) {
    if (selectedID !== undefined) document.getElementById(selectedID).classList.remove('active');
    document.getElementById('menu-home').classList.add('active');
    selectedID = 'menu-home';
  }
  if (window.pageYOffset >= 400) {
    if (selectedID !== undefined) document.getElementById(selectedID).classList.remove('active');
    document.getElementById('menu-serv').classList.add('active');
    selectedID = 'menu-serv';
  }
  if (window.pageYOffset >= 900) {
    if (selectedID !== undefined) document.getElementById(selectedID).className = "";
    document.getElementById('menu-portf').className = "active";
    selectedID = 'menu-portf';
  }
  if (window.pageYOffset >= 1700) {
    if (selectedID !== undefined) document.getElementById(selectedID).className = "";
    document.getElementById('menu-about').className = "active";
    selectedID = 'menu-about';
  }
  if (window.pageYOffset >= 2400 || (window.innerHeight + window.pageYOffset) >= document.body.scrollHeight) {
    if (selectedID !== undefined) document.getElementById(selectedID).className = "";
    document.getElementById('menu-contact').className = "active";
    selectedID = 'menu-contact';
  }
});
