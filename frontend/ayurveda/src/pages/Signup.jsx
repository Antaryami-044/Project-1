// // import { useState } from 'react'
// // import { Link, useNavigate } from 'react-router-dom'
// // import axios from 'axios'

// // const Signup = () => {
// //   const [name, setName] = useState('')
// //   const [email, setEmail] = useState('')
// //   const [password, setPassword] = useState('')
// //   const [mobileNumber, setMobileNumber] = useState('')
// //   const navigate = useNavigate()

// //   const handleSignup = async (e) => {
// //     e.preventDefault()
// //     try {
// //       await axios.post('http://localhost:5000/api/auth/register', {
// //         name,
// //         email,
// //         password,
// //         mobileNumber
// //       })
// //       alert('Signup successful! Please login.')
// //       navigate('/login')
// //     } catch (err) {
// //       alert('Signup failed. Please try again.')
// //     }
// //   }

// //   return (
// //     <div className="max-w-md mx-auto p-6 mt-10 border rounded shadow">
// //       <h2 className="text-2xl font-bold text-herbal mb-4">Sign Up</h2>
// //       <form onSubmit={handleSignup} className="flex flex-col gap-4">
// //         <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 rounded" required />
// //         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded" required />
// //         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 rounded" required />
// //         <input type="text" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} className="border p-2 rounded" required />
// //         <input type="text" placeholder="OTP (placeholder)" disabled className="border p-2 rounded bg-gray-100" />
// //         <button className="bg-herbal text-white py-2 rounded hover:bg-green-700">Sign Up</button>
// //       </form>
// //       <div className="mt-4 text-sm text-center">
// //         <Link to="/login" className="text-herbal hover:underline">Already have an account? Login</Link>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Signup



import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const navigate = useNavigate()
  const BASE_URL = import.meta.env.VITE_API_BASE_URL

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`${BASE_URL}/api/auth/register`, {
        name,
        email,
        password,
        mobileNumber
      })
      alert('Signup successful! Please login.')
      navigate('/login')
    } catch (err) {
      alert('Signup failed. Please try again.')
    }
  }

  return (
    <div>
      <div className="max-w-md mx-auto p-6 mt-52 border rounded shadow z-50">
        <h2 className="text-2xl font-bold text-herbal mb-4">Sign Up</h2>
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 rounded" required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded" required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 rounded" required />
          <input type="text" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} className="border p-2 rounded" required />
          <input type="text" placeholder="OTP (placeholder)" disabled className="border p-2 rounded bg-gray-100" />
          <button className="bg-herbal text-white py-2 rounded hover:bg-green-700">Sign Up</button>
        </form>
        <div className="mt-4 text-sm text-center">
          <Link to="/login" className="text-herbal hover:underline">Already have an account? Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup



// import { useState } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// const Signup = () => {
//   const [step, setStep] = useState(1)
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [mobileNumber, setMobileNumber] = useState('')
//   const [otp, setOtp] = useState('')
//   const navigate = useNavigate()
//   const BASE_URL = import.meta.env.VITE_API_BASE_URL

//   const handleSignup = async (e) => {
//     e.preventDefault()
//     try {
//       await axios.post(`${BASE_URL}/api/auth/register`, {
//         name,
//         email,
//         password,
//         mobileNumber
//       })
//       alert('OTP sent to your email or mobile. Please verify.')
//       setStep(2)
//     } catch (err) {
//       alert('Signup failed. Please try again.')
//     }
//   }

//   const handleVerifyOtp = async (e) => {
//     e.preventDefault()
//     try {
//       await axios.post(`${BASE_URL}/api/auth/verify-otp`, {
//         email,
//         otp
//       })
//       alert('Signup complete! You can now login.')
//       navigate('/login')
//     } catch (err) {
//       alert('Invalid OTP. Please try again.')
//     }
//   }

//   return (
//     <div className="max-w-md mx-auto p-6 mt-10 border rounded shadow">
//       {step === 1 ? (
//         <>
//           <h2 className="text-2xl font-bold text-herbal mb-4">Sign Up</h2>
//           <form onSubmit={handleSignup} className="flex flex-col gap-4">
//             <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 rounded" required />
//             <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded" required />
//             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 rounded" required />
//             <input type="text" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} className="border p-2 rounded" required />
//             <button className="bg-herbal text-white py-2 rounded hover:bg-green-700">Send OTP</button>
//           </form>
//         </>
//       ) : (
//         <>
//           <h2 className="text-2xl font-bold text-herbal mb-4">Verify OTP</h2>
//           <form onSubmit={handleVerifyOtp} className="flex flex-col gap-4">
//             <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} className="border p-2 rounded" required />
//             <button className="bg-herbal text-white py-2 rounded hover:bg-green-700">Verify & Complete Signup</button>
//           </form>
//         </>
//       )}
//     </div>
//   )
// }

// export default Signup
