import blockimage from './images/Block_image.png';
import infoimage from './images/Block_image.png';
var blockimages = document.getElementsByClassName('blockimage')
var infoimages = document.getElementsByClassName('info_image')

function imagecreator(image, elements, alttext, classes) {   //image, elements htmlcollection, string
  Array.from(elements).forEach(
    function (element) {
      const myImage = new Image();
      myImage.src = image;
      myImage.loading = 'lazy';
      if (alttext != null) {
        myImage.alt = alttext;
      }
      if (classes != null) {
        myImage.classList = classes;
      }
      element.appendChild(myImage);
    }
  );
}

document.addEventListener('DOMContentLoaded', function () {
  imagecreator(blockimage, blockimages, 'block_image');
  //imagecreator(infoimage, infoimages, 'info image', 'object-cover');
}, false);