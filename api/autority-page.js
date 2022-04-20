const express = require('express')
const cheerio = require('cheerio')
const { default: axios } = require('axios')
const app = express()


const urlAndroidAutority = 'https://www.androidauthority.com/poll-do-you-use-plex-3150720/'


app.get('/', function (req, res) {
  app.param('name', function(req, res, next, name) {
    const modified = name.toUpperCase();
    req.name = modified;
  
    next();
  });

  axios(urlAndroidAutority).then((response) => {
    const html = response.data
    const $ = cheerio.load(html)
    const autorityArr = []
  
    $('main', html).each(function () {
      const title =  $(this).find('h1').text()

      autorityArr.push({
        title
      })
    })
    
    res.send(autorityArr)
  }).catch(err => console.log(err))

})

module.exports = {
  path: '/api/autoritypage/',
  handler: app,
}

