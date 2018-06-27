const express = require('express')
const ReactDomServer = require('react-dom/server')
const favicon = require('serve-favicon')
const fs = require('fs')
const path = require('path')

const app = express()

const isDev = process.env.NODE_ENV === 'development'

if (!isDev) {
  const serverEntry = require('../dist/server-entry').default
  const template = fs.readFileSync(
    path.join(__dirname, '../dist/index.html'),
    'utf8'
  )

  app.use('/public', express.static(path.join(__dirname, '../dist')))
  app.get('*', (req, res) => {
    const appString = ReactDomServer.renderToString(serverEntry)
    res.send(template.replace('<!-- app -->', appString))
  })
} else {
  const devStatic = require('./util/dev-static.js')
  devStatic(app)
}

app.use(favicon(path.join(__dirname, '../favicon.ico')))

app.listen(3000, () => {
  console.log('success 3000')
})
