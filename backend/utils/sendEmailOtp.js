const nodemailer = require('nodemailer')

const sendEmailOtp = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,       // Your Gmail address
      pass: process.env.EMAIL_PASS        // App password (not your Gmail password)
    }
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP for Signup',
    text: `Your OTP is: ${otp}`
  }

  await transporter.sendMail(mailOptions)
}

module.exports = sendEmailOtp
