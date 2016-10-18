const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 2828
const rootRouter = require('./router')
const session = require('express-session')
const logger = require('morgan')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())
app.use(logger('dev'))
app.use(session({
  secret: 'alfred the dog',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use(express.static(__dirname + '/client'))

app.use('/api', rootRouter)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
