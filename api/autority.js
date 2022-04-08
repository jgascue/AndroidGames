const express = require('express')
const cheerio = require('cheerio')
const { default: axios } = require('axios')

const app = express()

const urlAndroidAutority = 'https://www.androidauthority.com/news/'


app.get('/', function (req, res) {

  axios(urlAndroidAutority).then((response) => {
    const html = response.data
    const $ = cheerio.load(html)
    const autorityArr = []
  
    $('main div div a ', html).each(function () {
      const image = $(this).find('img').attr('src')
      const linkAutoComp = $(this).attr('href')
      const url = linkAutoComp.slice(32)
      const titleAuto = $(this).text()
      const textAuto = $(this).find('img').attr('title')


      autorityArr.push({
        titleAuto,
        image,
        textAuto,
        url
      })
    })
    
    res.send(autorityArr)
  }).catch(err => console.log(err))

})

module.exports = {
  path: '/api/autority/',
  handler: app,
}

