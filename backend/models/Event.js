// const mongoose = require('mongoose')

// const eventSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   poster: { type: String },       // URL to poster image
//   link: { type: String },         // Registration or info link
//   eventImage: { type: String }    // Additional image
// }, { timestamps: true })

// module.exports = mongoose.model('Event', eventSchema)



const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  poster: { type: String },
  link: { type: String },
  eventImage: { type: String },
  date: { type: Date, required: true }
}, { timestamps: true })

module.exports = mongoose.model('Event', eventSchema)
