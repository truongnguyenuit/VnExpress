const express = require('express')
const router = express.Router()
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const verifyToken = require('../middleware/auth')

const User = require('../models/User')

// @route GET api/auth
// @desc Check if user is logged
// @access Public

router.get('/', verifyToken, async (req, res) => {
  try {
    // check existing user
    const user = await User.findById(req.userId)
    if (!user)
      return res.status(400).json({ success: false, message: 'User not found' })
    res.json({ success: true, user })

  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
})

// @route POST api/auth/register
// @desc Register user
// @access Public 

router.post('/register', async (req, res) => {

  const { username, password } = req.body

  if (!username || !password)

    return res.status(400).json({ success: false, message: 'Missing username or password' })

  try {

    // check for existing user
    const user = await User.findOne({ username: username })
    if (user)
      return res.status(400).json({ success: false, message: 'Usernam already taken' })

    // all good
    const hashedPassword = await argon2.hash(password)
    const newUser = new User({ username, password: hashedPassword })
    await newUser.save()

    //return token
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    )

    res.json({ success: true, message: 'User created successfully', accessToken })

  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }

})

// @route POST api/auth/login
// @desc Login user
// @access Public

router.post('/login', async (req, res) => {
  const { username, password } = req.body

  // Simple validation

  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: 'Missing username or password' })

  try {

    // Check for existing user

    const user = await User.findOne({ username: username })
    if (!user)
      return res.status(400).json({ success: false, message: 'Incorrect username' })

    // Username found

    const passwordValid = await argon2.verify(user.password, password)
    if (!passwordValid)
      return res
        .status(400)
        .json({ success: false, message: 'Incorrect password' })

    // All good

    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET
    )

    res.json({ success: true, message: 'Login successfully', accessToken })

  } catch (error) {

    console.log(error)
    res.status(500).json({ success: false, message: 'Internal server error' })

  }
})

module.exports = router