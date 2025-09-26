const express = require('express')
const router = express.Router()
const Event = require('../models/Event')
const { verifyToken, isAdmin } = require('../middleware/authMiddleware')

// Create Event (Admin only)
router.post('/', verifyToken, isAdmin, async (req, res) => {
  try {
    const { title, description, poster, link, eventImage } = req.body
    const newEvent = new Event({ title, description, poster, link, eventImage })
    await newEvent.save()
    res.status(201).json({ message: 'Event created successfully', event: newEvent })
  } catch (err) {
    res.status(400).json({ error: 'Failed to create event' })
  }
})

// Get All Events (Public)
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 })
    res.json(events)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch events' })
  }
})

module.exports = router
