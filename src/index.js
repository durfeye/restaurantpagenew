import './style.css';
import backgroundsrc from './background.jpg';
import chefsrc from './chef.jpg';
import hamburgersrc from './hamburger.jpg';
import cheeseburgersrc from './cheeseburger.jpg';
import spicyburgersrc from './spicyburger.png';
import vegeburgersrc from './vegeburger.jpeg';

// declaring images
const backgroundImg = new Image();
backgroundImg.src = backgroundsrc;

const chefImg = new Image();
chefImg.src = chefsrc;

const hamburgerImg = new Image();
hamburgerImg.src = hamburgersrc;

const cheeseburgerImg = new Image();
cheeseburgerImg.src = cheeseburgersrc;

const spicyburgerImg = new Image();
spicyburgerImg.src = spicyburgersrc;

const vegeburgerImg = new Image();
vegeburgerImg.src = vegeburgersrc;

let content = document.querySelector('#content');

// making whole Nav
const makingNav = (() => {
    //making base nav
    let nav = document.createElement('nav');
    nav.classList.add('nav');
    content.appendChild(nav);

    //making nav elements
    let logo = document.createElement('div');
    logo.classList.add('logo');
    let menu = document.createElement('div');
    menu.classList.add('menu');
    for (let i = 0; i < 3; i++) {
        let menuOption = document.createElement('button');
        menuOption.classList.add('menuOption' + (i + 1));
        menu.appendChild(menuOption);
    }
    nav.appendChild(logo);
    nav.appendChild(menu);
})();

//making front content
let frontContent = document.createElement('div');
frontContent.classList.add('frontContent')
content.appendChild(frontContent);

//making front page
const makingFrontContent = (() => {
    //wiping front content
    frontContent.innerHTML = '';

    //making topInfo
    let topInfo = document.createElement('section');
    topInfo.classList.add('topInfo');
    frontContent.appendChild(topInfo);

    //topInfo Heading
    let topInfoHeading = document.createElement('h1');
    topInfoHeading.classList.add('topInfoHeading');
    topInfoHeading.textContent = 'Welcome to our Restaurant!';
    topInfo.appendChild(topInfoHeading);

    //topInfo content - about restaurant
    let topInfoContent = document.createElement('p');
    topInfoContent.classList.add('topInfoContent');
    topInfoContent.textContent =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed dignissim enim. Nunc a rutrum lacus.'
    topInfo.appendChild(topInfoContent);

    //making bottomInfo
    let bottomInfo = document.createElement('section');
    bottomInfo.classList.add('bottomInfo');
    frontContent.appendChild(bottomInfo);

    //add chef photo with desc
    let chefPhoto = document.createElement('div');
    chefPhoto.classList.add('chefPhoto');
    bottomInfo.appendChild(chefPhoto);
    let chefPhotoDesc = document.createElement('p');
    chefPhotoDesc.classList.add('chefPhotoDesc');
    chefPhotoDesc.textContent = 'Our cheffe - Marco Polo.'
    bottomInfo.appendChild(chefPhotoDesc);
});

makingFrontContent();

const makingMenuContent = (() => {
    //wiping front content
    frontContent.innerHTML = '';
    //making menu options
    for (let i = 0; i < 4; i++) {
        let menuItem = document.createElement('div');
        menuItem.classList.add('menuItem' + (i + 1), 'menuItems');
        frontContent.appendChild(menuItem);

        let menuItemBox = document.createElement('div');
        menuItemBox.classList.add('menuItemBox');
        menuItem.appendChild(menuItemBox);

        let menuImg = document.createElement('div');
        menuImg.classList.add('menuImg');
        menuItemBox.appendChild(menuImg);

        let menuItemAbout = document.createElement('div');
        menuItemAbout.classList.add('menuItemAbout');
        menuItemBox.appendChild(menuItemAbout);


        let menuItemName = document.createElement('h2');
        menuItemName.classList.add('menuItemName');
        menuItemAbout.appendChild(menuItemName);

        let menuItemPrice = document.createElement('p');
        menuItemPrice.classList.add('menuItemPrice');
        menuItemAbout.appendChild(menuItemPrice);
    }
});

const makingContactContent = (() => {
    frontContent.innerHTML = '';

    let contactInfo = document.createElement('div');
    contactInfo.classList.add('contactInfo');
    frontContent.appendChild(contactInfo);

    for (let i = 0; i < 3; i++) {
        let contactItem = document.createElement('p')
        contactItem.classList.add('contactItem' + (i+1), 'contactItem');
        contactInfo.appendChild(contactItem);
    }


    let openingHours = document.createElement('iframe');
    openingHours.classList.add('openingHours');
    openingHours.src = 'https://www.google.com/maps/embed?pb=!…'
    frontContent.appendChild(openingHours);


});


//making footer
const makingFooter = (() => {
    let footer = document.createElement('footer');
    footer.classList.add('footer');
    content.appendChild(footer);
    footer.textContent = 'by Durfy';
})();

//getting all buttons
let menuOptions = document.querySelectorAll('button');

//switching tabes
menuOptions.forEach(menuOptione => {
    if (menuOptione.classList == 'menuOption1') {
        menuOptione.addEventListener('click', makingFrontContent)
    }
    else if (menuOptione.classList == 'menuOption2') {
        menuOptione.addEventListener('click', makingMenuContent)
    }
    else if (menuOptione.classList == 'menuOption3') {
        menuOptione.addEventListener('click', makingContactContent)
    }
});