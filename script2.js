
let showNav=false;

function navToggle() {
    showNav=!showNav;
    if (showNav) {
        document.getElementsByTagName('nav').item(0).classList.add('show');
    } else {
        document.getElementsByTagName('nav').item(0).classList.remove('show');
    }
}