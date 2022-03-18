const express = require('express')
const cheerio = require('cheerio')
const { default: axios } = require('axios')

const app = express()

const urlGames = 'https://www.pcmag.com/picks/the-best-android-games'


app.get('/', function (req, res) {

  axios(urlGames).then((response) => {
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []
  
    $('.roundup-product-card', html).each(function () {
      const title = $(this).find('h2').text()
      const subtitle = $(this).find('p.leading-normal').text()
      const img = $(this).find('iframe').attr('data-image-loader')
      const text = $(this).find('.content-body').text()
      const body = $(this).find('p').text()

 /*      const imgvideo = $(this).find('ytp-cued-thumbnail-overlay-image').attr('style') */

/*       const innertitles = $(html).find('h2').toArray().map(function(x){ 
        return $(x).html()
      })
      const innertext = $(html).find('p').toArray().map(function(x){ 
        return $(x).text()
      })
      const videos = $(html).find('img').toArray().map(function(x){ 
        return $(x).attr('src')
      } )
      */

      articles.push({
        title,
        subtitle,
        text,
    /*     innertitles,
        imgvideo,
        innertext, */
        /* videos, */
        img,
        body
    })
  })
    res.send(articles)
  }).catch(err => console.log(err))

})


module.exports = {
  path: '/api/games',
  handler: app,
}
