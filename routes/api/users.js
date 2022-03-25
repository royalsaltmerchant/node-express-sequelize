const express = require('express')
const router = express.Router()
const {sequelize, User} = require('../../models')

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll()
    return res.json(users)
  } catch(err) {
    return res.status(500).json({err: 'something went wrong'})
  }
})

router.post('/create', async (req, res) => {
  const {username, email} = req.body
  try {
    const user = await User.create({username: username, email: email})
    return res.json(user)
  } catch(err) {
    return res.status(500).json({err: 'something went wrong'})
  }
})

module.exports = router
