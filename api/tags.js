const express = require('express')
const cheerio = require('cheerio')
const { default: axios } = require('axios')
const app = express()

const  { router } = require('vue-router')

const urlAndroid = `https://www.cnet.com/tags/processors/`

/* const urlAndroid = `https://www.cnet.com/tags/processors/` */

app.get('/', function (req, res) {
  console.log(router)

  axios(urlAndroid).then((response) => {
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []
    const title = $(html).find('h1').text()
    const subtitle = $(html).find('.titleGroup').text()

    articles.push({
        title,
        subtitle
    })
  
    $('.row .asset', html).each(function () {
      const titleItem = $(this).find('h2').text()
      const img = $(this).find('img').attr('src')
      const text = $(this).find('.dek').text()
      const body = $(this).find('p:first-child').text()
      const link = $(this).find('a').attr('href')
      articles.push({
          titleItem,
          subtitle,
          text,
          img,
          body,
          link
      })
    })
    res.send(articles)
  }).catch(err => console.log(err))

})


module.exports = {
  path: '/api/tags',
  handler: app,
}

