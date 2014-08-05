'use strict';
var express = require('express')
var logger = require('morgan')
var compression = require('compression')
var app = express()
var production = (process.env.NODE_ENV === 'production')

if (process.env.LOG_LEVEL !== 'warn') {
  // use morgan logger
  app.use(logger(production ? 'combined' : 'dev'))
}

// gzip
app.use(compression())

// serve static files, cached in production
var cache
if (production) {
  cache = '1 year'
} else {
  cache = 0
}
app.use('/assets', express.static(__dirname + '/assets', {maxAge: cache}))
app.use('/templates', express.static(__dirname + '/templates'))
app.use(express.static(__dirname + '/public'))

var assets
if (production) {
  assets = require(__dirname + '/assets/rev-manifest.json')
}
app.locals.asset = function (filename) {
  if (assets && assets[filename]) {
    return "/assets/" + assets[filename]
  } else {
    // never use revved assets in dev mode
    return "/assets/" + filename
  }
}

// allows index.html.ejs to see if we're running in production
app.locals.production = production

app.get('*', function (req, res) {
  res.render(__dirname + '/index.html.ejs')
})

var server = app.listen(process.env.PORT || 3000, function () {
  console.log('%d listening on port %d', process.pid, server.address().port)
})
