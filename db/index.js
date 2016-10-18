const mongoose = require('mongoose')
const moment = require('moment')
const dotenv = require('dotenv')

dotenv.config()
let dbURL = 'mongodb://' + process.env.MONGOUSERNAME + ':' + process.env.MONGOPASSWORD + '@ds015690.mlab.com:15690/civilityinternational'
let db = mongoose.connection
mongoose.connect(dbURL)

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('--' + moment().format('hh:mm:ss') + '--' + ' Database connection estabished')
})

module.exports = db
