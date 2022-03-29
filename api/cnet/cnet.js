const express = require('express')
const cheerio = require('cheerio')
const { default: axios } = require('axios')

const app = express()

const urlAndroid =  `https://www.cnet.com/tech/${stage.year}/${id}`


app.get('/', function (req, res) {

  axios(urlAndroid).then((response) => {
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []
  
    $('.asset', html).each(function () {
      const title = $(this).find('h2').text()
      const subtitle = $(this).find('.dek').text()
      const url = $(this).find('a').attr('href')
      const img = $(this).find('img').attr('src')
      const time = $(this).find('.assetTime').text()
      articles.push({
        title,
        subtitle,
        url,
        time,
        img
      })
    })
    
    res.send(articles)
  }).catch(err => console.log(err))

})


module.exports = {
  path: '/api/cnet',
  handler: app,
}
