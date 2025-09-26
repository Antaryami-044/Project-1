import { useState } from 'react'
import axios from 'axios'
import { getAuthHeader } from '../utils/auth'

const AdminCreateEvent = () => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    poster: '',
    link: '',
    eventImage: ''
  })

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:5000/api/events', eventData, getAuthHeader())
      alert('Event created successfully!')
      setEventData({ title: '', description: '', poster: '', link: '', eventImage: '' })
    } catch (err) {
      alert('Failed to create event. Make sure you are logged in as admin.')
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 border rounded shadow">
      <h2 className="text-2xl font-bold text-herbal mb-4">Create New Event</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="title" value={eventData.title} onChange={handleChange} placeholder="Title" className="border p-2 rounded" required />
        <textarea name="description" value={eventData.description} onChange={handleChange} placeholder="Description" className="border p-2 rounded h-24" required />
        <input name="poster" value={eventData.poster} onChange={handleChange} placeholder="Poster URL" className="border p-2 rounded" />
        <input name="link" value={eventData.link} onChange={handleChange} placeholder="Event Link" className="border p-2 rounded" />
        <input name="eventImage" value={eventData.eventImage} onChange={handleChange} placeholder="Event Image URL" className="border p-2 rounded" />
        <button className="bg-herbal text-white py-2 rounded hover:bg-green-700">Create Event</button>
      </form>
    </div>
  )
}

export default AdminCreateEvent
