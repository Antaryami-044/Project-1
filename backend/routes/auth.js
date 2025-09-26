const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const generateOtp = require('../utils/generateOtp')


// Register
// router.post('/register', async (req, res) => {
//   try {
//     const { name, email, password, mobileNumber } = req.body
//     const hashedPassword = await bcrypt.hash(password, 10)
//     const user = new User({ name, email, password: hashedPassword, mobileNumber })
//     await user.save()
//     res.status(201).json({ message: 'User registered successfully' })
//   } catch (err) {
//     res.status(400).json({ error: 'Registration failed' })
//   }
// })

router.post('/register', async (req, res) => {
  try {
    const { name, email, password, mobileNumber } = req.body
    const existing = await User.findOne({ email })
    if (existing) return res.status(400).json({ error: 'Email already registered' })

    const hashedPassword = await bcrypt.hash(password, 10)
    const otp = generateOtp()

    // Send OTP via email or SMS here (placeholder)
    console.log(`OTP for ${email}: ${otp}`)

    const user = new User({ name, email, password: hashedPassword, mobileNumber, otp })
    await user.save()
    res.status(200).json({ message: 'OTP sent. Please verify to complete signup.' })
  } catch (err) {
    res.status(400).json({ error: 'Signup failed' })
  }
})

//  verification of OTP
router.post('/verify-otp', async (req, res) => {
  try {
    const { email, otp } = req.body
    const user = await User.findOne({ email })
    if (!user) return res.status(404).json({ error: 'User not found' })
    if (user.isVerified) return res.status(400).json({ error: 'Already verified' })

    if (user.otp === otp) {
      user.isVerified = true
      user.otp = null
      await user.save()
      res.status(200).json({ message: 'Signup complete. You can now login.' })
    } else {
      res.status(401).json({ error: 'Invalid OTP' })
    }
  } catch (err) {
    res.status(500).json({ error: 'OTP verification failed' })
  }
})


// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password, isAdmin } = req.body
    const user = await User.findOne({ email })
    if (!user) return res.status(404).json({ error: 'User not found' })

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' })

    if (isAdmin && user.role !== 'admin') {
      return res.status(403).json({ error: 'Admin access denied' })
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' })
    res.json({ token })
  } catch (err) {
    res.status(500).json({ error: 'Login failed' })
  }
})

//muliple admin routes can be added here
const { verifyToken, isAdmin } = require('../middleware/authMiddleware')

router.post('/create-admin', verifyToken, isAdmin, async (req, res) => {
  try {
    const { name, email, password, mobileNumber } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const newAdmin = new User({
      name,
      email,
      password: hashedPassword,
      mobileNumber,
      role: 'admin'
    })
    await newAdmin.save()
    res.status(201).json({ message: 'Admin created successfully' })
  } catch (err) {
    res.status(400).json({ error: 'Failed to create admin' })
  }
})


module.exports = router
