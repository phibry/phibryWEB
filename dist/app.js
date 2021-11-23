// JS 1
// Nav Bar Scroll Reveal
const scrollHeader = () => {
  const nav = document.getElementById('header');
  // When the scroll is greater than 100, add the scroll-header class to the header tag
  if (scrollY >= 100) {
    nav.classList.add('scroll-header');
    // nav.style.display = 'block';
  } else {
    // nav.style.display = 'none';
    nav.classList.remove('scroll-header');
  }
};
window.addEventListener('scroll', scrollHeader);

// JS 2
// Show Scroll Top Button
const scrollTop = () => {
  const scrollTop = document.querySelector('.scroll-top');
  // Show scroll top button when greater than 300. Ass show-scroll class to the element
  if (scrollY >= 300) {
    // Add the show-scroll class to show the button
    scrollTop.classList.add('show-scroll');
  } else {
    // Remove the show-scroll class to hide the button
    scrollTop.classList.remove('show-scroll');
  }
};
window.addEventListener('scroll', scrollTop);

// JS 3
// Scroll Section Active
// Get all the sections
const sections = document.querySelectorAll('section');

const scrollActive = () => {
  // get current YOffset
  const scrollY = window.pageYOffset;

  // Loop through the Nodelist to compare the current YOffset with the current visible section and add or remove the active class to reveal/hide the active dot
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    sectionId = section.getAttribute('id');
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      // Add the active class
      document
        .querySelector(`.nav-menu a[href*=${sectionId}]`)
        .classList.add('active');
    } else {
      // Remove the active class
      document
        .querySelector(`.nav-menu a[href*=${sectionId}]`)
        .classList.remove('active');
    }
  });
};
window.addEventListener('scroll', scrollActive);

// JS 4
// About Me Section Active
const aboutBtn = document.querySelectorAll('.about-a');

const changeContent = (e) => {
  // Get active element
  currentActive = document.querySelector('.active-a');
  // Remove active-a state from current element
  currentActive.classList.remove('active-a');

  // Add active-a state on clicked element
  e.target.classList.add('active-a');

  // Get paragraph element
  aboutP = document.getElementById('about-p');
  // Remove show class
  aboutP.classList.remove('show');

  // Get image element
  aboutImg = document.querySelector('.about-img');

  switch (e.target.classList[1]) {
    case 'life':
      aboutP.innerHTML =
        'I am interested in technology and a sustainable future. I am actively involved in sports and continue my education in the areas of Web Development and Data Science.';
      aboutP.classList.add('show');
      aboutImg.childNodes[1].src = 'img/life.svg';
      break;

    case 'edu':
      aboutP.innerHTML =
        'I studied applied mathematics at the ZHAW School of Engineering. The focus was on data science, statistics and computer science.';
      aboutP.classList.add('show');
      aboutImg.childNodes[1].src = 'img/education.svg';
      break;

    case 'exp':
      aboutP.innerHTML =
        'I worked as an electrician for several years and was mainly involved in service work and reconstruction. This activity promoted my precise and customer-oriented way of working as well as leading work colleagues. I currently work as a software engineer.';
      aboutP.classList.add('show');
      aboutImg.childNodes[1].src = 'img/experience.svg';
      break;
  }
};

aboutBtn.forEach((element) => {
  element.addEventListener('click', changeContent);
});

// JS 5
// Projects image hover scale effect + link
const projCards = document.querySelectorAll('.projects-card');
projCards.forEach((projCard) => {
  projCard.addEventListener('mouseover', (e) => {
    projCard.childNodes[1].classList.add('hoverino');
  });

  projCard.addEventListener('click', (e) => {
    projCard.childNodes[9].click();
  });
});

projCards.forEach((projCard) => {
  projCard.addEventListener('mouseout', (e) => {
    projCard.childNodes[1].classList.remove('hoverino');
  });
});

// JS 6
// Small Screen Menu Toggle
const menuToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Eventlistener on Hamburger
menuToggle.addEventListener('click', () => {
  // Remove rotated lines, remove menu
  if (navMenu.classList.contains('show-menu')) {
    menuToggle.childNodes[1].classList.remove('rotate1');
    menuToggle.childNodes[3].classList.remove('rotate2');

    navMenu.classList.remove('show-menu');
  } else {
    menuToggle.childNodes[1].classList.add('rotate1');
    menuToggle.childNodes[3].classList.add('rotate2');

    navMenu.classList.add('show-menu');
  }
});

// Eventlistener on links inside Hamburger
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    // Remove Nav Menu
    navMenu.classList.remove('show-menu');

    // Rotate Hamburger Lines back
    menuToggle.childNodes[1].classList.toggle('rotate1');
    menuToggle.childNodes[3].classList.toggle('rotate2');
  });
});

// JS 7
// Toggle Theme
const themeButton = document.getElementById('theme-button');

// Get current Theme Icon
let currentIcon = themeButton.classList.contains('fa-toggle-on')
  ? 'fa-toggle-on'
  : 'fa-toggle-off';

// Get Current Theme
let currentTheme = document.body.classList.contains('light') ? 'light' : 'dark';

themeButton.addEventListener('click', () => {
  // Change Theme Icon
  themeButton.classList.remove(currentIcon);
  currentIcon =
    currentIcon === 'fa-toggle-on' ? 'fa-toggle-off' : 'fa-toggle-on';
  themeButton.classList.add(currentIcon);

  // Change Theme
  document.body.classList.remove(currentTheme);
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.body.classList.add(currentTheme);
});

// Scroll Reveal Animation
const sr = ScrollReveal({
  distance: '40px',
  duration: 1000,
});

// Top
sr.reveal(
  `.home-content, .home-img, 
         .skills-title,
         .skills-container,
         .projects-title,
         .contact-title-tablet,
         .contact-container,
         .footer-info,
         .footer-contact,
         .footer-icon`,
  {
    origin: 'top',
    interval: 200,
  }
);

// Bottom
sr.reveal(`.skills-card, .projects-card`, {
  origin: 'bottom',
  interval: 200,
});

// Left
sr.reveal(`.about-img, .contact-content`, {
  origin: 'left',
});

// Right
sr.reveal(`.about-content, .contact-img`, {
  origin: 'right',
});
