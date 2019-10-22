const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Post = require('./../models/Post')

router.get('/', async (req, res, next) => {
  try {
    
  } catch (error) {
    res.status(500).send(error)
  }
})

router.get('/:id', async => {
  try {
    
  } catch (error) {
    res.status(500).send(error)
  }
})

router.put('/:id', async => {
  try {
    
  } catch (error) {
    res.status(500).send(error)
  }
})

router.delete('/:id', async => {
  try {
    
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = router