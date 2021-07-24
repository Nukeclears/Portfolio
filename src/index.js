import './Components.less'
import './Main.less'

import printMe from './print.js';
const body = document.getElementById('body')

if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    document.getElementById('body').classList.add('dark')
} else {
    document.getElementById('body').classList.remove('dark')
}

localStorage.theme = 'light'
localStorage.theme = 'dark'
localStorage.removeItem('theme')

document.getElementById('darktoggle').addEventListener('click', function () {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark')
    } else {
        body.classList.add('dark')
    }
})

// import Icon from './images/test.png';

// function component() {
//     const element = document.createElement('div');

//     // Lodash, now imported by this script
//     element.innerHTML = "hello";
//     element.classList.add('hello');

//     // Add the image to our existing div.
//     const myIcon = new Image();
//     myIcon.src = Icon;

//     element.appendChild(myIcon);

//     return element;
// }

// document.body.appendChild(component());