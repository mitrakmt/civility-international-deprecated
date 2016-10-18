const bcrypt = require('bcrypt')
const express = require('express')
const Middleware = express.Router()
const User = require('./db/User')
const _ = require('lodash')

Middleware.checkAuth = function (req, res, next) {
  if (req.session.user) {
    next()
  } else {
    res.status(400).send('You must log in to view this content')
  }
}

Middleware.hashPass = function (req, res, next) {
  bcrypt.hash(req.body.password, 10, function (err, hash) {
    if (err) {
      res.err(err)
    } else {
      req.body.password = hash
      next()
    }
  })
}

Middleware.checkEmailValidity = function (req, res, next) {
  let includesAt = _.includes(req.body.email, '@')
  let includesDot = _.includes(req.body.email, '.')
  if (!includesDot || !includesAt) {
    res.status(400).send('Invalid email')
  }

  User.findOne({'email': req.body.email}, function (err, result) {
    if (err) {
      console.err(err)
      res.err(err)
    } else if (result !== null) {
      res.status(400).send('That email has already been used')
    } else {
      next()
    }
  })
}

Middleware.checkPass = function (req, res, next) {
  User.findOne({'email': req.body.email}, function (err, result) {
    if (err) {
      console.err(err)
      res.err(err)
    }
    bcrypt.compare(req.body.password, result.password, function (err, response) {
      if (err) {
        console.log(err)
        res.err(err)
      } else if (response) {
        next()
      } else {
        res.status(400).send('Invalid email or password')
      }
    })
  })
}

Middleware.createToken = function (req, res, next) {
  req.session.regenerate(function (err) {
    if (err) {
      res.err(err)
    } else {
      req.session.user = {'email': req.body.email}
      next()
    }
  })
}

Middleware.destroyToken = function (req, res, next) {
  req.session.destroy(function (err) {
    if (err) {
      res.err(err)
    } else {
      next()
    }
  })
}

module.exports = Middleware
