// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'

// const Login = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [isAdmin, setIsAdmin] = useState(false)
//   const navigate = useNavigate()
//   const BASE_URL = import.meta.env.VITE_API_BASE_URL


//   const handleLogin = async (e) => {
//     e.preventDefault()
//     try {
//       const res = await axios.post(`${BASE_URL}/api/auth/login`, {
//         email,
//         password,
//         isAdmin
//       })
//       localStorage.setItem('token', res.data.token)
//       alert('Login successful!')
//       navigate('/')
//     } catch (err) {
//       alert('Login failed. Please check your credentials.')
//     }
//   }

//   return (
//     <div className="max-w-md mx-auto p-6 mt-10 border rounded shadow">
//       <h2 className="text-2xl font-bold text-herbal mb-4">Login</h2>
//       <form onSubmit={handleLogin} className="flex flex-col gap-4">
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded" required />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 rounded" required />
//         <div className="flex items-center gap-2">
//           <input type="checkbox" checked={isAdmin} onChange={() => setIsAdmin(!isAdmin)} />
//           <label>Login as Admin</label>
//         </div>
//         <button className="bg-herbal text-white py-2 rounded hover:bg-green-700">Login</button>
//       </form>
//       <div className="mt-4 text-sm text-center">
//         <Link to="/signup" className="text-herbal hover:underline">Sign Up</Link> | 
//         <span className="text-gray-500 ml-2">Forgot Password?</span>
//       </div>
//     </div>
//   )
// }

// export default Login





import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode' // ✅ Use named import


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)
  const navigate = useNavigate()
  const BASE_URL = import.meta.env.VITE_API_BASE_URL

  // const handleLogin = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const res = await axios.post(`${BASE_URL}/api/auth/login`, {
  //       email,
  //       password,
  //       isAdmin
  //     })
  //     localStorage.setItem('token', res.data.token)
  //     alert('Login successful!')
  //     navigate('/')
  //   } catch (err) {
  //     alert('Login failed. Please check your credentials.')
  //   }
  // }


const handleLogin = async (e) => {
  e.preventDefault()
  try {
    const res = await axios.post(`${BASE_URL}/api/auth/login`, {
      email,
      password,
      isAdmin
    })

    const token = res.data.token
    localStorage.setItem('token', token)

    // ✅ Decode the token to check role
    const decoded = jwtDecode(token)

    if (decoded.role === 'admin') {
      navigate('/admin/dashboard') // ✅ Redirect to admin page
    } else {
      navigate('/') // Regular user goes to home
    }
  } catch (err) {
    alert('Login failed. Please check your credentials.')
  }
}


  return (
    <div className="max-w-md mx-auto p-6 mt-72 border rounded shadow">
      <h2 className="text-2xl font-bold text-herbal mb-4">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded" required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 rounded" required />
        <div className="flex items-center gap-2">
          <input type="checkbox" checked={isAdmin} onChange={() => setIsAdmin(!isAdmin)} />
          <label>Login as Admin</label>
        </div>
        <button className="bg-herbal text-white py-2 rounded hover:bg-green-700">Login</button>
      </form>
      <div className="mt-4 text-sm text-center">
        <Link to="/signup" className="text-herbal hover:underline">Sign Up</Link> | 
        <span className="text-gray-500 ml-2">Forgot Password?</span>
      </div>
    </div>
  )
}

export default Login
