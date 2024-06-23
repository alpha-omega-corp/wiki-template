import './auth';


let itemPath = window.location.pathname;
let sectionPath = itemPath.split('/').filter(function (item) {
    return item !== ""
});
if (sectionPath.length > 0) {
    document.getElementById(`menuButton_${sectionPath[0]}`).click();
    let menuItem = document.getElementById(`menuItem_${itemPath}`)

    // Main navigation item open, start loop at index 1
    if (sectionPath.length === 2) {
        menuItem.classList.add('nav-item-active')
    }

    for (let i = 1; i < sectionPath.length; i++) {
        if (sectionPath.length > 2) {
            let item = sectionPath.pop()
            let current = sectionPath.join('')

            document.getElementById(`menuButtonChild_${current}`).click()
            menuItem.classList.add('nav-item-active')
        }

    }
}


// Add number index to paragraphs for quick navigation

let paragraphs = document.getElementsByClassName('app-post-paragraph')
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].getElementsByTagName('span')[0].innerText = `${i + 1}#`
}
