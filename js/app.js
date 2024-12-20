/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNav() {
    const sections = document.querySelectorAll('section');
    const navbarList = document.getElementById('navbar__list');
  
    sections.forEach((section) => {
      const navItem = document.createElement('li');
      const navLink = document.createElement('a');
  
      navLink.textContent = section.getAttribute('data-nav');
      navLink.setAttribute('href', `#${section.id}`);
      navLink.classList.add('menu__link');
      navItem.appendChild(navLink);
      navbarList.appendChild(navItem);
    });
  }
// Add class 'active' to section when near top of viewport
function setActiveSection() {
    const sections = document.querySelectorAll('section');
    
    function setActiveClass() {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          section.classList.add('your-active-class');
        } else {
          section.classList.remove('your-active-class');
        }
      });
    }
  
    document.addEventListener('scroll', setActiveClass);
    setActiveClass();
  }

// Scroll to anchor ID using scrollTO event

function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  }

  // Set sections as active
function setActiveSection() {
    const sections = document.querySelectorAll('section');
    
    function setActiveClass() {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          section.classList.add('your-active-class');
        } else {
          section.classList.remove('your-active-class');
        }
      });
    }
  
    document.addEventListener('scroll', setActiveClass);
    setActiveClass();
  }
  // Event listeners
document.addEventListener('DOMContentLoaded', buildNav);

const navbarLinks = document.querySelectorAll('.menu__link');
navbarLinks.forEach(link => {
  link.addEventListener('click', scrollToSection);
});

window.addEventListener('scroll', () => {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

setActiveSection(); // Initialize active section on page load
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


