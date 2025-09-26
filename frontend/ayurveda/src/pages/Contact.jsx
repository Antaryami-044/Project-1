const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-100 to-teal-200 flex flex-col items-center text-center py-28">

      <div className="p-6 pt-32 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-9">Contact Us</h1>
        <div className="mb-6 text-left text-gray-700">
        <p className="mb-2 "><i class="fa-solid fa-square-envelope"></i> : organizer@ayurvedaevent.com</p>
        <p className="mb-6"><i class="fa-solid fa-map-location"></i> : 123 Herbal Lane, Bhubaneswar, Odisha</p>
        </div>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Name" className="border p-2 rounded" />
          <input type="email" placeholder="Email" className="border p-2 rounded" />
          <textarea placeholder="Message" className="border p-2 rounded h-32" />
          <button className="bg-herbal text-white py-2 rounded hover:bg-green-700">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
