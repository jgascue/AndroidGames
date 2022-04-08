const express = require('express')
const cheerio = require('cheerio')
const { default: axios } = require('axios')

const app = express()

/* app.post('/samsung-galaxy-5-pro-3150858/', function(req, res) {
  const name = req.body.name
  return name
}); */

const urlAndroidAutority = 'https://www.androidauthority.com/poll-do-you-use-plex-3150720/'

/* app.post('http://localhost:3000/poll-do-you-use-plex-3150720/', function(req, res) {
  const name = req.body.name;
  console.log('hilou')
  console.log(name)
  // ...do your bidding with this data
  res.send(name)
});
 */



app.get('/', function (req, res) {
  app.param('name', function(req, res, next, name) {
    const modified = name.toUpperCase();
    req.name = modified;
  
    console.log('hilou');
    console.log(modified);
  
  
    next();
  });


  axios(urlAndroidAutority).then((response) => {
    const html = response.data
    const $ = cheerio.load(html)
    const autorityArr = []
  
    $('main', html).each(function () {
      const title =  $(this).find('h1').text()
/*       const image = $(this).find('img').attr('src')
      const linkAutoComp = $(this).attr('href')
      const url = linkAutoComp.slice(32)
      const titleAuto = $(this).text()
      const textAuto = $(this).find('img').attr('title') */


      autorityArr.push({
        title
/*         titleAuto,
        image,
        textAuto,
        url */
      })
    })
    
    res.send(autorityArr)
  }).catch(err => console.log(err))

})

module.exports = {
  path: '/api/autoritypage/',
  handler: app,
}

