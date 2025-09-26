// const express = require('express')
// const mongoose = require('mongoose')
// const dotenv = require('dotenv')
// const cors = require('cors')

// dotenv.config()

// const app = express()

// // ✅ CORS setup before routes
// app.use(cors({
//   origin: process.env.FRONTEND_URL || '*', // Use your deployed frontend URL in production
//   credentials: true
// }))
// app.use(express.json())

// // Routes
// const authRoutes = require('./routes/auth')
// const eventRoutes = require('./routes/events')

// app.use('/api/auth', authRoutes)
// app.use('/api/events', eventRoutes)

// // DB Connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('MongoDB connected')
// }).catch(err => console.error(err))

// const PORT = process.env.PORT || 5000
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`))





const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const app = express()

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))
app.use(express.json())

// Routes
const authRoutes = require('./routes/auth')
const eventRoutes = require('./routes/events')

app.use('/api/auth', authRoutes)
app.use('/api/events', eventRoutes)

// DB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected')
}).catch(err => console.error(err))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
