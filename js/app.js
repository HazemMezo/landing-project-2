// variable that contain the navigation bar.
let navbar = document.querySelector('#navbar__list');

//styling the navigation bar using css.
navbar.style.cssText = 'background-color:rgb(41, 212, 155); height: 70px; display:flex; justify-content:space-around;';

//give every section property when the section's number changes
let allSections = document.getElementsByTagName('section')
for(const section of allSections ){
  const navItem = document.createElement('li');
  navbar.appendChild(navItem);
  navItem.textContent = section.getAttribute('data-nav');
  navItem.className = 'navItems';
}

//give styles to navigation bar items and give them the events and what shoud happen when every event happened.
let navItems = document.querySelectorAll('.navItems');
for (let i = 0; i < navItems.length; i++) {
  navItems[i].style.cssText = ' height: 20px;  margin-top: 9px; padding: 13px; color:white;';
  navItems[i].addEventListener('click', function (properties) {
    properties.preventDefault();
    allSections[i].scrollIntoView({ behavior: 'smooth' });
  });

  navItems[i].addEventListener('mouseover', function () {
    navItems[i].style.cssText += 'background-color: rgb(53 96 82); color: white;';
  });

  navItems[i].addEventListener('mouseleave', function () {
    navItems[i].style.cssText += 'background-color: rgb(41, 212, 155); color: white;';
  });
}

// controlling the section that will be active
window.addEventListener('scroll', function () {
  for (let i = 0; i < allSections.length; i++) {
    let height = window.innerHeight;
    let top = allSections[i].getBoundingClientRect().top;
    let bottom = allSections[i].getBoundingClientRect().bottom;

    if (top > 0 && top < height && bottom < height || bottom > height && top < height) {
      allSections[i].classList.add('activable');
      navItems[i].style.cssText += 'color:white; background-color: rgb(53 96 82);';
    }
    else if
      (top <= 0 || bottom <= 0 || top > height || bottom > height || top < height || bottom < height) {
      allSections[i].classList.remove('activable');
      navItems[i].style.cssText += 'color: white; background-color: rgb(41, 212, 155);';
    }
  }
});





