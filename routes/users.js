const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('./../models/Users')

router.get('/login', async (req, res, next) => {
  try {
    
  } catch (error) {
   res.status(500).send(error)
  }
})

// View user posts route
router.get('/user/:id/:id', async (req, res, next) => {
  try {
    
  } catch (error) {
    res.status(500).send(error)
  }
})

router.get('/user/:id', async (req, res, next) => {
  try {
    
  } catch (error) {
    res.status(500).send(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    
  } catch (error) {
    res.status(500).send(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = router