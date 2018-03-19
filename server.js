const fs = require('fs')

const express = require('express')

const port = process.env.PORT || 1337

const assets = process.env.ASSETS_DIR || 'public'
const assetsSFW = process.env.ASSETS_SFW_DIR || 'public-sfw'

const app = express()

const getRandom = (array) => array[Math.floor(Math.random() * array.length)]

let images = []
let imagesSFW = []

app.get('/', (req, res) => res.sendFile(getRandom(images)))
app.get('/sfw', (req, res) => res.sendFile(getRandom(imagesSFW)))

app.listen(port, () => {
  console.log(`Listening on ${port}`)

  fs.readdir(assets, (error, files) => {
    if (error) {
      console.error(error)
      return
    }

    images = files.filter((file) => file !== '.gitkeep').map((file) => `${__dirname}/${assets}/${file}`)
  })

  fs.readdir(assetsSFW, (error, files) => {
    if (error) {
      console.error(error)
      return
    }

    imagesSFW = files.filter((file) => file !== '.gitkeep').map((file) => `${__dirname}/${assetsSFW}/${file}`)
  })
})

