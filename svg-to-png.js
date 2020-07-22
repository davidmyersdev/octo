const sharp = require('sharp');

// build logo.png
sharp('./public/img/icons/logo.svg')
  .png()
  .toFile('./public/img/icons/logo-512x512.png')
  .then(info => console.log(info))
  .catch(error => console.log(error));

// build logo-in-circle.png
sharp('./public/img/icons/logo-in-circle.svg')
  .png()
  .toFile('./public/img/icons/logo-in-circle-512x512.png')
  .then(info => console.log(info))
  .catch(error => console.log(error));
