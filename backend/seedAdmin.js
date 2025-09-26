const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bcrypt = require('bcrypt')
const User = require('./models/User')

dotenv.config()

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))

const createAdmin = async () => {
  const existingAdmin = await User.findOne({ email: 'admin@ayurveda.com' })
  if (existingAdmin) {
    console.log('Admin already exists')
    return process.exit()
  }

  const hashedPassword = await bcrypt.hash('admin123', 10)
  const admin = new User({
    name: 'Admin',
    email: 'admin@ayurveda.com',
    mobileNumber: '9999999999',
    password: hashedPassword,
    role: 'admin'
  })

  await admin.save()
  console.log('Admin created successfully')
  process.exit()
}

createAdmin()
