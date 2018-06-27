const express = require('express')
const ReactDomServer = require('react-dom/server')
const favicon = require('serve-favicon')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')

const app = express()

const isDev = process.env.NODE_ENV === 'development'

// application/json 解析
app.use(bodyParser.json())
//  application/x-www-form-urlencoded 解析
app.use(bodyParser.urlencoded({ extended: false }))
app.use(favicon(path.join(__dirname, '../favicon.ico')))

app.use(session({
  maxAge: 10 * 60 * 1000,
  name: 'tid',
  resave: false,
  saveUninitialized: false,
  secret: 'react demo'
}))


app.use('/api/user', require('./util/handle-login'))
app.use('/api', require('./util/proxy'))

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


app.listen(3000, () => {
  console.log('success 3000')
})
