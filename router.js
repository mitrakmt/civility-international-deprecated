const Router = require('express').Router()
const db = require('./db')
const User = require('./db/User')
const Middleware = require('./middleware')
const _ = require('lodash')

Router.route('/signup')
  .post(Middleware.checkEmailValidity, Middleware.hashPass, Middleware.createToken, function (req, res) {
    User.create(req.body, function (err, result) {
      if (err) {
        res.err(err)
      } else {
        res.status(200).send(result)
      }
    })
  })

Router.route('/logout')
  .post(Middleware.destroyToken, function (req, res) {
    res.status(200).send('You have successfully logged out')
  })

Router.route('/login')
  .post(Middleware.checkPass, Middleware.createToken, function (req, res) {
    res.status(200).send('Login successful')
  })

Router.route('/')

module.exports = Router
