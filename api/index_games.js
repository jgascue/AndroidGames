const express = require('express')
const cheerio = require('cheerio')
const { default: axios } = require('axios')

const app = express()

const urlGames = 'https://www.pcmag.com/picks/the-best-android-games'
const urlWikiGames = 'https://en.wikipedia.org/wiki/List_of_Android_games'

app.get('/', function (req, res) {
  axios(urlGames)
    .then((response) => {
      const html = response.data
      const $ = cheerio.load(html)
      const articles = []
      const title = $(html).find('h1').text()

      articles.push({
        title,
      })

      $('.roundup-product-card', html).each(function () {
        const titleGame = $(this).find('h2').text()
        const subtitle = $(this).find('p.leading-normal').text()
        const img = $(this).find('iframe').attr('data-image-loader')
        const text = $(this).find('.content-body').text()
        const body = $(this).find('p').text()
        const link = $(this).find('.rich-text a').attr('href')

        articles.push({
            titleGame,
            subtitle,
            text,
            img,
            body,
            link
        })
      })

      res.send(articles)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.get('/', function (req, res) {
  axios(urlWikiGames)
    .then((response) => {
      const htmlwiki = response.data
      const $ = cheerio.load(htmlwiki)
      const articles = []
      const titleWiki = $(htmlwiki).find('h1').text()

      articles.push({
        titleWiki,
      })

      $('.wikitable', htmlwiki).each(function () {
        const titleWikiGame = $(this).find('tbody tr td:first-child').text()
        const subtitleWiki = $(this).find('tbody tr td:first-child').text()
/*         const img = $(this).find('iframe').attr('data-image-loader')
        const text = $(this).find('.content-body').text()
        const body = $(this).find('p').text()
        const link = $(this).find('.rich-text a').attr('href') */

        articles.push({
          titleWikiGame,
          subtitleWiki,
     /*        text,
            img,
            body,
            link */
        })
      })

      res.send(articles)
    })
    .catch((err) => {
      console.log(err)
    })
})

module.exports = {
  path: '/api/games',
  handler: app,
}
