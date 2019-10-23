const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('./../models/User')
const passport = require('../passport')


router.get('/:id', async (req, res, next) => {
  try {
    res.send("I am working 👍👍")
  } catch (error) {
    res.status(500).send(error)
  }
})

router.post('/login', async (req, res, next) => {

  const {
    email,
    password
  } = req.body
  try {
    const user = await User.findOne({
      email: email
    })
    if (user.password === password) {
      res.send(user.id)
    } else {
      res.status(403).send("Password incorrect")
    }
  } catch (error) {
    res.status(500).send(error)
  }
})

router.post('/new', async (req, res, next) => {
  const {
    name,
    email,
    password,
    password2
  } = req.body
  let errors = []
  // Check required fields
  if (!name || !email || !password || !password2) {
    errors.push({
      msg: 'Please fill in all fields'
    })
  }

  // Check passwords match
  if (password != password2) {
    errors.push({
      msg: "Passwords do not match"
    })
  }

  // Check password length
  if (password.length < 6) {
    errors.push({
      msg: "Password needs to be at least 6 characters"
    })
  }

  if (errors.length > 0) {
    res.send({
      errors,
      name,
      email
    })
  } else {
    // Validation Passed
    try {
      const user = await User.findOne({
        email: email
      })
      if (user) {
        // User exists - throw error
        errors.push({
          msg: 'User already exists'
        })
        res.send({
          errors,
          name,
          email
        })
      } else {
        const newUser = new User({
          name: name,
          email: email,
          password: password
        })
        console.log('User added')
        await newUser.save();
        res.send(newUser.id)
      }
    } catch (err) {
      res.status(500).send(err);
    }
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

module.exports = router