const express = require('express')
const cheerio = require('cheerio')
const { default: axios } = require('axios')

const app = express()

const urlGames = 'https://en.wikipedia.org/wiki/List_of_Android_games'

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

      $('.wikitable tbody tr', html).each(function () {
        const titleWikiGame = $(this).find('td:first-child').text()
        const subtitleWiki = $(this).find('td:nth-child(4)').text()

 /*        const img = $(this).find('iframe').attr('data-image-loader') */
        const genre = $(this).find('.content-body').text()
        const body = $(this).find('p').text()
        const link = $(this).find('.rich-text a').attr('href')


        articles.push({
            titleWikiGame,
            subtitleWiki,
        })
      })

      res.send(articles)
    }).then()

    /* axios(urlWikiGames)
    .then((res) => {
      const htmlwiki = res.data
      const $ = cheerio.load(htmlwiki)
      const gameList = []
      const titleList = $(htmlwiki).find('h1').text()

      gameList.push({
        titleList,
      })

      $('.wikitable', htmlwiki).each(function () {
        const titleWikiGame = $(this).find('tbody tr td:first-child').text()
        const subtitleWiki = $(this).find('tbody tr td:first-child').text()
        gameList.push({
          titleWikiGame,
          subtitleWiki,
        })
      })

      res.send(gameList)
    }) */
    .catch((err) => {
      console.log(err)
    }) 

    
})





module.exports = {
  path: '/api/games',
  handler: app,
}
