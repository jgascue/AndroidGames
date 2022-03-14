const express = require('express')
const cheerio = require('cheerio')
const { default: axios } = require('axios')

const app = express()

const urlAndroid = 'https://www.pcmag.com/picks/the-best-android-games/'


/* app.get('/games', function (req, res) {

  axios(urlAndroid).then((response) => {
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []
  
    $('.asset', html).each(function () {
      const title = $(this).find('h1').text()
      const subtitle = $(this).find('h1 > p').text()
      const url = $(this).find('a').attr('href')
      const img = $(this).find('img').attr('src')
      const text = $(this).find('p').text()

      articles.push({
        title,
        subtitle,
        url,
        img,
        text,
      })
    })
 /*    console.log(articles);
    
    res.send(articles)
  }).catch(err => console.log(err))

}) */


module.exports = {
  path: "/games",
  handler: '~/api/games.js',
}

/* 
export default function (context) {
  // Add the userAgent property to the context
  context.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
}
 */
