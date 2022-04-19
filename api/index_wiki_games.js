const express = require('express')
const cheerio = require('cheerio')
const { default: axios } = require('axios')

const app = express()


const urlWikiGames = 'https://en.wikipedia.org/wiki/List_of_Android_games'

app.get('/', function (req, res) {
    axios(urlWikiGames)
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
    })
    .catch((err) => {
      console.log(err)
    })
})


module.exports = {
  path: '/api/games',
  handler: app,
}
