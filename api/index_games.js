const express = require('express')
const cheerio = require('cheerio')
const { default: axios } = require('axios')

const app = express()

const urlAndroid = 'https://www.androidcentral.com/'




app.get('/', function (req, res) {

  axios(urlAndroid).then((response) => {
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []
  
    $('.feature-block-item-wrapper', html).each(function () {
      const title = $(this).find('.article-name').text()
      const subtitle = $(this).find('.article-strapline').text()
      const url = $(this).find('a').attr('href')
      const img = $(this).find('img').attr('data-original-mos')
      articles.push({
        title,
        subtitle,
        url,
        img
      })
    })
/*     console.log(articles); */
    
    res.send(articles)
  }).catch(err => console.log(err))

})


module.exports = {
  path: '/api/',
  handler: app,
}

/* 
export default function (context) {
  // Add the userAgent property to the context
  context.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
}
 */
