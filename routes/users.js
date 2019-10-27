const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('./../models/User');
const passport = require('../passport');
// const UserSession = require('../models/UserSession');
const auth = require('../middleware/auth');

router.post('/new', async (req, res) => {
  // Create a new user
  try {
      const user = new User(req.body)
      await user.save()
      const token = await user.generateAuthToken()
      res.status(201).send({ user, token })
  } catch (error) {
      res.status(400).send(error)
  }
})

router.post('/login', async(req, res) => {
  //Login a registered user
  try {
      const { email, password } = req.body
      const user = await User.findByCredentials(email, password)
      if (!user) {
          return res.status(401).send({error: 'Login failed! Check authentication credentials'})
      }
      const token = await user.generateAuthToken()
      res.send({ user, token })
  } catch (error) {
      res.status(400).send(error)
      // res.status(400).send(error)
  }
})

router.get('/profile', auth, async(req, res) => {
  // View logged in user profile
  res.send(req.user)
})

router.post('/logout', auth, async (req, res) => {
  // Log user out of the application
  try {
      req.user.tokens = req.user.tokens.filter((token) => {
          return token.token != req.token
      })
      await req.user.save()
      res.send()
  } catch (error) {
      res.status(500).send(error)
  }
})

router.post('/logoutall', auth, async(req, res) => {
  // Log user out of all devices
  try {
      req.user.tokens.splice(0, req.user.tokens.length)
      await req.user.save()
      res.send()
  } catch (error) {
      res.status(500).send(error)
  }
})

router.post('/user', async (req, res, next) => {
  try {
    res.send("I am working 👍👍")
  } catch (error) {
    res.status(500).send(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    res.send("I am working 👍")
  } catch (error) {
    res.status(500).send(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    res.send("I am working 👍")
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = router;