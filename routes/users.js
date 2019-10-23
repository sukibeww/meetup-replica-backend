const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('./../models/User')


router.get('/:id', async (req, res, next) => {
  try {
    res.send("I am working 👍👍")
  } catch (error) {
    res.status(500).send(error)
  }
})

router.post('/login', async (req, res, next) => {

  const { email, password } = req.body
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
  try {
    const { name, email, password } = req.body
    const newUser = await User.create({
      name,
      email,
      password
    })
    console.log(newUser)

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