var selectedID;
document.querySelector('.menu').addEventListener('click', function (e) {
  if (selectedID !== undefined) document.getElementById(selectedID).className = "";
  let id = e.target.id;

  document.getElementById(id).className = "active";
  selectedID = id;
  console.log(selectedID);
});

var menuHome = document.querySelector('#menu-home');
var menuServices = document.querySelector('#menu-serv');
var menuPortfolio = document.querySelector('#menu-portf');
var menuAbout = document.querySelector('#menu-about');
var menuFeedback = document.querySelector('#menu-contact');

function scrollToHome() {
  document.querySelector('div.slider').scrollIntoView({
    block: 'start',
    behavior: "smooth"
  });
}

function scrollToServices() {
  document.querySelector('div.services').scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
}

function scrollToPortfolio() {
  document.querySelector('div.portfolio').scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
}

function scrollToAbout() {
  document.querySelector('div.about').scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
}

function scrollToFeedback() {
  document.querySelector('div.feedback').scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
}

menuHome.addEventListener('click', scrollToHome);
menuAbout.addEventListener('click', scrollToAbout);
menuServices.addEventListener('click', scrollToServices);
menuPortfolio.addEventListener('click', scrollToPortfolio);
menuFeedback.addEventListener('click', scrollToFeedback);


window.addEventListener('scroll', function menuHighlight() {
  console.log(window.pageYOffset);
  if (window.pageYOffset < 500) {
    if (selectedID !== undefined) document.getElementById(selectedID).className = "";
    document.getElementById('menu-home').className = "active";
    selectedID = 'menu-home';
  }
  if (window.pageYOffset >=400) {
    if (selectedID !== undefined) document.getElementById(selectedID).className = "";
    document.getElementById('menu-serv').className = "active";
    selectedID = 'menu-serv';
  }
  if (window.pageYOffset >= 900) {
    if (selectedID !== undefined) document.getElementById(selectedID).className = "";
    document.getElementById('menu-portf').className = "active";
    selectedID = 'menu-portf';
  }
  if (window.pageYOffset >= 1700 ) {
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
