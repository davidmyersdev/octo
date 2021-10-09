const fs = require('fs')
const sharp = require('sharp')
const toIco = require('to-ico')

const mobileIcon = './src/assets/icon-mobile.svg'
const macIcon = './src/assets/macos-512x512.png'
const desktopMaskable = './src/assets/icon-desktop-maskable.svg'
const mobileMaskable = './src/assets/icon-mobile-maskable.svg'

const buildAsset = ({ name, size, source }) => {
  sharp(source, { density: 300 })
    .resize(size, size)
    .png()
    .toFile(`./public/img/icons/${name}-${size}x${size}.png`)
}

// desktop (mac) icon
fs.copyFile(macIcon, './public/img/icons/icon-512x512.png', () => {})

// desktop and mobile maskable icons
buildAsset({ name: 'icon-maskable', source: mobileMaskable, size: 192 })
buildAsset({ name: 'icon-maskable', source: desktopMaskable, size: 512 })

// mobile icons
buildAsset({ name: 'icon', source: mobileIcon, size: 16 })
buildAsset({ name: 'icon', source: mobileIcon, size: 32 })
buildAsset({ name: 'icon', source: mobileIcon, size: 60 })
buildAsset({ name: 'icon', source: mobileIcon, size: 76 })
buildAsset({ name: 'icon', source: mobileIcon, size: 120 })
buildAsset({ name: 'icon', source: mobileIcon, size: 144 })
buildAsset({ name: 'icon', source: mobileIcon, size: 150 })
buildAsset({ name: 'icon', source: mobileIcon, size: 152 })
buildAsset({ name: 'icon', source: mobileIcon, size: 180 })
buildAsset({ name: 'icon', source: mobileIcon, size: 192 })

// special handling of favicon.ico
const faviconFiles = [
	fs.readFileSync('./public/img/icons/icon-16x16.png'),
	fs.readFileSync('./public/img/icons/icon-32x32.png'),
]

toIco(faviconFiles).then(buffer => {
	fs.writeFileSync('./public/img/icons/favicon.ico', buffer)
})
