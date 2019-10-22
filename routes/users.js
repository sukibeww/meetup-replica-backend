const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('./../models/User')

router.get('/login', async (req, res, next) => {
  try {
    res.send("I am working 👍")
  } catch (error) {
   res.status(500).send(error)
  }
})

// View user posts route
router.get('/:id/:id', async (req, res, next) => {
  try {
    res.send("I am working 👍")
  } catch (error) {
    res.status(500).send(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    res.send("I am working 👍👍")
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

module.exports = router