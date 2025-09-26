// import ImageSlider from "./ImageSlider"

// const Home = () => {
//   return (
//     <div className="bg-sand min-h-screen flex flex-col items-center justify-center text-center p-6">
//       <ImageSlider />
//       <img src="https://images.unsplash.com/photo-1743608069516-5364d6fa087d" alt="Ayurveda" className="w-full max-w-3xl rounded-lg shadow-lg mb-6" />
//       <h2 className="text-3xl font-bold text-earthy mb-4">Welcome to the Ayurveda Wellness Summit</h2>
//       <p className="text-lg text-gray-700 max-w-xl">
//         Join us for a rejuvenating experience that blends ancient wisdom with modern wellness. Discover the secrets of holistic healing, herbal remedies, and mindful living.
//       </p>
//     </div>
//   )
// }

// export default Home



import ImageSlider from "./ImageSlider";
import Icon from "../components/Icon";
import VideoSection from "../components/VideoSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-100 to-teal-200 flex flex-col items-center text-center py-28">
      {/* Welcome Message */}
      <div className="mb-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 drop-shadow-sm mb-4">
          Welcome to the Ayurveda Indusrty <i class="fa-solid fa-tree"></i>
        </h1>
        <p className=" mt-10 text-lg md:text-xl text-gray-700 leading-relaxed">
          Rejuvenate your mind and body with the perfect blend of{" "}
          <span className="font-semibold text-green-900">
            ancient wisdom
          </span>{" "}
          and{" "}
          <span className="font-semibold text-green-900">
            modern wellness
          </span>
          . Discover herbal remedies, mindful living, and holistic healing.
        </p>
      </div>

      <div className="w-full max-w-full mb-7">
        <ImageSlider />
      </div>

      <Icon />

      {/* Featured Image & Info Card */}
      {/* <div className="bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-xl max-w-3xl">
        <img
          src="https://images.unsplash.com/photo-1743608069516-5364d6fa087d"
          alt="Ayurveda"
          className="w-full rounded-lg shadow-lg mb-6 object-cover"
        />
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          A Journey Towards Balance 🌸
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Experience the harmony of{" "}
          <span className="font-semibold text-green-900">
            body, mind, and soul
          </span>{" "}
          through Ayurveda. Together, let’s rediscover the path to true
          well-being with natural therapies, yoga, and spiritual practices.
        </p>
      </div> */}

      <VideoSection />


    </div>
  );
};

export default Home;
