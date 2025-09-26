// const Events = () => {
//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold text-herbal mb-4">Upcoming Events</h2>
//       <p className="text-gray-600">Events will be displayed here soon...</p>
//     </div>
//   )
// }

// export default Events




import { useEffect, useState } from 'react'
import axios from 'axios'

const Events = () => {
      const [events, setEvents] = useState([])
      const BASE_URL = import.meta.env.VITE_API_BASE_URL

      useEffect(() => {
            const fetchEvents = async () => {
                  try {
                        const res = await axios.get(`${BASE_URL}/api/events`)
                        setEvents(res.data)
                  } catch (err) {
                        console.error('Error fetching events:', err)
                  }
            }

            fetchEvents()
      }, [])

      
      return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-100 to-teal-200 flex flex-col items-center text-center py-28">
                  <div className="pt-24 p-6 max-w-3xl ">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">Upcoming Events</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {events.map(event => (
                                    <div key={event._id} className="border rounded p-4 shadow">
                                          <img src={event.eventImage || event.poster} alt={event.title} className="w-full h-48 object-cover rounded mb-4" />
                                          <h3 className="text-xl font-semibold text-earthy">{event.title}</h3>
                                          <p className="text-gray-700 mb-2">{event.description}</p>
                                          {event.link && (
                                                <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-herbal underline">
                                                      Learn More
                                                </a>
                                          )}
                                    </div>
                              ))}
                        </div>
                  </div>
            </div>
      )
}

export default Events
