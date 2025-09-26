import React from 'react';

const VideoSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 bg-white p-6 md:p-10 rounded-2xl shadow-xl">
        {/* Left Side: Video */}
        <div className="w-full lg:w-1/2 flex-shrink-0">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            {/* Replace with your video source.
                For autoplay, mute is often required by browsers.
                Add 'controls' if you want user controls.
            */}
            <video
              className="w-full h-full object-cover"
              src="/path/to/your/ayurveda_video.mp4" // <--- IMPORTANT: Update this path to your video file
              autoPlay
              loop
              muted
              playsInline // Important for mobile autoplay
              controls={false} // Set to true if you want playback controls
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Right Side: Text and Interactive Elements */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-green-800 mb-4 font-serif">
            A Journey Towards Holistic Balance 🌿
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Immerse yourself in the timeless wisdom of{" "}
            <span className="font-semibold text-green-900">Ayurveda</span>. Discover natural therapies, personalized wellness plans, and practices that harmonize your <span className="font-semibold text-green-900">body, mind, and spirit</span>.
          </p>
          <p className="text-md text-gray-600 italic">
            "Health is a state of complete harmony of the body, mind, and spirit. When one is free from physical ailments and mental distractions, the gates of the soul open."
          </p>

          {/* Interactive Message / Call to Action */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out shadow-md">
              Explore Our Programs
            </button>
            <button className="bg-white border border-green-700 text-green-700 hover:bg-green-50 hover:text-green-800 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out shadow-md">
              Watch Testimonials
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Join our community of wellness seekers today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;