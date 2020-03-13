const MENU = document.querySelector('.menu');
var selectedID = 'menu-home';
var smoothScroll = {
  block: "start",
  behavior: "smooth"
};

MENU.addEventListener('click', (event) => {
  let id = event.target.id;
  console.log(id);

  if (document.getElementById(id) !== null) {
    document.getElementById(id).className = "active";
    selectedID = id;
  }

  switch (true) {
    case (selectedID === 'menu-home'): {
      document.querySelector('div.slider').scrollIntoView(smoothScroll);
      break;
    }
    case (selectedID === 'menu-serv'): {
      document.querySelector('div.services').scrollIntoView(smoothScroll);
      break;
    }
    case (selectedID === 'menu-about'): {
      document.querySelector('div.about').scrollIntoView(smoothScroll);
      break;
    }
    case (selectedID === 'menu-portf'): {
      document.querySelector('div.portfolio').scrollIntoView(smoothScroll);
      break;
    }
    case (selectedID === 'menu-contact'): {
      document.querySelector('div.feedback').scrollIntoView(smoothScroll);
      break;
    }
  }
});

window.addEventListener('load', () => {
  if (window.pageYOffset === 0) {
    document.querySelector('#menu-home').classList.add('active');
  }
});

window.addEventListener('scroll', function () {

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
