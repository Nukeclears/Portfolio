import blockimage from './images/Block_image.png';
var blockimages = document.getElementsByClassName('blockimage')

function imagecreator(contentimage) {
    const element = document.createElement('div');

    const myImage = new Image();
    myImage.src = contentimage;
    myImage.loading = 'lazy';

    element.appendChild(myImage);

  return element;
}

Array.from(blockimages).forEach(
  function(element) {
      element.appendChild(imagecreator(blockimage));
  }
);

//document.getElementById('image').appendChild(imagecreator(blockimage));