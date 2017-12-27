const fs = require('fs')

const express = require('express')

const port = process.env.PORT || 1337
const assets = process.env.ASSETS_DIR || 'public'

const app = express()

let images = []

app.get('/', (req, res) => {
  res.sendFile(images[Math.floor(Math.random() * images.length)])
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)

  fs.readdir(assets, (error, files) => {
    if (error) {
      console.error(error)
      return
    }

    images = files.map((file) => `${__dirname}/${assets}/${file}`)
  })
})
