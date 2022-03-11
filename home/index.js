const express = require('express')
const cheerio = require('cheerio')
const { default: axios } = require('axios')

const app = express()

const urlAndroid = 'https://www.cnet.com/android-update/'


app.get('/', function (req, res) {

  axios(urlAndroid).then((response) => {
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []
  
    $('.listing', html).each(function () {
      const title = $(this).find('h2').text()
      const subtitle = $(this).find('.desk').text()
      const url = $(this).find('a').attr('href')
      const img = $(this).find('img').attr('')
      articles.push({
        title,
        subtitle,
        url,
        img
      })
    })
   /*  console.log(articles); */
    
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
