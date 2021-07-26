import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './index.css'

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");


import blockimage from './images/Block_image.png'
import infoimage from './images/Block_image.png'
var blockimages = document.getElementsByClassName('block_image')
var infoimages = document.getElementsByClassName('info_image')
var detailimages = document.getElementsByClassName('detail_image')

function imagecreator(image, elements, alttext, classes) {
    //image, elements htmlcollection, string
    Array.from(elements).forEach(function (element) {
        const myImage = new Image()
        myImage.src = image
        myImage.loading = 'lazy'
        if (alttext != null) {
            myImage.alt = alttext
        }
        if (classes != null) {
            myImage.classList = classes
        }
        element.appendChild(myImage)
    })
}

document.addEventListener(
    'DOMContentLoaded',
    function () {
        imagecreator(blockimage, blockimages, 'block image', 'rounded-xl')
        imagecreator(blockimage, detailimages, 'detail image', 'w-full object-cover')
        //imagecreator(infoimage, infoimages, 'info image', 'object-cover');
    },
    false
)

const body = document.getElementById('body')

if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    body.classList.add('dark')
} else {
    body.classList.remove('dark')
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