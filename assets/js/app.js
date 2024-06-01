let itemPath = window.location.pathname;
let sectionPath = itemPath.split('/').filter(function (item) {
    return item !== ""
});

if (sectionPath.length > 0) {
    for (let i = 0; i < sectionPath.length; i++) {
        let menu = sectionPath[i];

        if (i === 0) {
            document.getElementById(`menuButton_${menu}`).click();
        } else {
            let item = sectionPath.pop()
            let current = sectionPath.join('')

            document.getElementById(`menuButtonChild_${current}`).click()
            document.getElementById(`menuItem_${itemPath}`).classList.add('nav-item-active')
        }

    }
}

