const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const toIco = require('to-ico');

const source = './src/assets/icon.svg';
const buildAsset = (name, size) => {
  sharp(source, { density: 300 })
    .resize(size, size)
    .png()
    .toFile(`./public/img/icons/${name}-${size}x${size}.png`);
};

// cookie cutter assets
buildAsset('android-chrome', 192);
buildAsset('android-chrome', 512);
buildAsset('android-chrome-maskable', 192);
buildAsset('android-chrome-maskable', 512);
buildAsset('apple-touch-icon', 60);
buildAsset('apple-touch-icon', 76);
buildAsset('apple-touch-icon', 120);
buildAsset('apple-touch-icon', 152);
buildAsset('apple-touch-icon', 180);
buildAsset('favicon', 16);
buildAsset('favicon', 32);
buildAsset('msapplication-icon', 144);
buildAsset('mstile', 150);

// special handling of apple touch icon without dimensions in filename
sharp(source, { density: 300 })
  .resize(180, 180)
  .png()
  .toFile('./public/img/icons/apple-touch-icon.png');

// special handling of safari pinned tab
fs.copyFile(source, './public/img/icons/safari-pinned-tab.svg', (error) => {
  if (error) {
    console.log('An error was encountered while creating safari-pinned-tab.svg');
    console.error(error);
  }
});

// special handling of favicon.ico
const faviconFiles = [
	fs.readFileSync('./public/img/icons/favicon-16x16.png'),
	fs.readFileSync('./public/img/icons/favicon-32x32.png'),
];

toIco(faviconFiles).then(buffer => {
	fs.writeFileSync('./public/img/icons/favicon.ico', buffer);
});

// build png of octopus logo for README
sharp('./src/assets/stacked.svg')
  .resize(318, 286)
  .png()
  .toFile('./resources/stacked.png');
