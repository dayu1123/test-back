const router = require('express').Router()
const Feed = require('rss-to-json')

router.get('/pics', (req, res) => {
  Feed.load('https://www.flickr.com/services/feeds/photos_public.gne', function (err, rss) {
    if (err) res.json({ error: err })
    else {
      res.json(rss)
    }
  })
})

module.exports = router