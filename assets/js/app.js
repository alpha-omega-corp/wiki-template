let path = window.location.pathname.split('/');
let currentMenu = path[1];
let currentMenuItem = path[2];
let currentMenuChildItem = path[3];

// Navigation Controls
let section = document.getElementById(`menuButton_${currentMenu}`);
let sectionItem = document.getElementById(`menuItem_${currentMenuItem}`);
let sectionChild = document.getElementById(`menuButtonChild_${currentMenuItem}`);
let sectionChildItem = document.getElementById(`menuItemChild_${currentMenuChildItem}`);

if (section) {
    section.click();
}

if (sectionItem) {
    sectionItem.classList.add('nav-item-active');
}

if (sectionChildItem) {
    sectionChildItem.classList.add('nav-item-active');
}

if (sectionChild) {
    sectionChild.click();
}

