import React from 'react';

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      <div className="relative w-full h-80 bg-cover bg-center" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/photography-business-conference-event-background_1409-4985.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white py-20 sm:py-28">
          <h1 className="text-3xl sm:text-5xl font-bold">Upcoming College Events</h1>
          <p className="text-lg sm:text-xl mt-4">Don't miss out on these exciting events happening at our college in 2024!</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center py-12 sm:py-16">
        <div className="w-full sm:w-1/2 px-6 mb-6 md:mb-0">
          <img
            src="https://images.tribuneindia.com/cms/gall_content/2015/11/2015_11$largeimg03_Tuesday_2015_014627040.jpg"
            alt="College Festival"
            className="rounded-2xl shadow-2xl w-full h-full object-cover"
          />
        </div>

        <div className="w-full sm:w-1/2 px-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">College Festival 2024</h2>
          <p className="text-lg text-gray-600 mb-6">
            Join us for the biggest celebration of the year! Enjoy music, food, and fun activities. There will be live performances, interactive games, and stalls featuring everything from food to games.
          </p>
          <div className="space-y-2">
            <p className="text-md text-gray-500">Date: <span className="font-semibold">2024-05-10</span></p>
            <p className="text-md text-gray-500">Time: <span className="font-semibold">10:00 AM - 6:00 PM</span></p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center py-12 sm:py-16">
        <div className="w-full sm:w-1/2 px-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">Tech Conference</h2>
          <p className="text-lg text-gray-600 mb-6">
            Learn from industry experts and participate in workshops on cutting-edge technology. Keynote speakers will include pioneers in AI, blockchain, and quantum computing.
          </p>
          <div className="space-y-2">
            <p className="text-md text-gray-500">Date: <span className="font-semibold">2024-06-15</span></p>
            <p className="text-md text-gray-500">Time: <span className="font-semibold">9:00 AM - 4:00 PM</span></p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 px-6">
          <img
            src="https://a.storyblok.com/f/188325/1920x1280/41e681c422/alexandre-pellaes-6vajp0pscx0-unsplash-1-1.jpg"
            alt="Tech Conference"
            className="rounded-2xl shadow-2xl w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center py-12 sm:py-16">
        <div className="w-full sm:w-1/2 px-6 mb-6 md:mb-0">
          <img
            src="https://st1.latestly.com/wp-content/uploads/2020/08/National-Sports-Day-784x436.jpg"
            alt="Sports Day"
            className="rounded-2xl shadow-2xl w-full h-full object-cover"
          />
        </div>

        <div className="w-full sm:w-1/2 px-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">Sports Day</h2>
          <p className="text-lg text-gray-600 mb-6">
            Compete in various sports and enjoy the fun activities with your friends and family! The day will feature track races, football, cricket, and even a tug of war.
          </p>
          <div className="space-y-2">
            <p className="text-md text-gray-500">Date: <span className="font-semibold">2024-07-20</span></p>
            <p className="text-md text-gray-500">Time: <span className="font-semibold">8:00 AM - 5:00 PM</span></p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-16">
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/premium-photo/luxurious-new-building-with-curb-appeal_1127-4448.jpg?semt=ais_hybrid"
            alt="Additional Image 1"
            className="rounded-xl shadow-xl w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/premium-photo/luxurious-new-building-with-curb-appeal_1127-4448.jpg?semt=ais_hybrid"
            alt="Additional Image 2"
            className="rounded-xl shadow-xl w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/premium-photo/luxurious-new-building-with-curb-appeal_1127-4448.jpg?semt=ais_hybrid"
            alt="Additional Image 3"
            className="rounded-xl shadow-xl w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/premium-photo/luxurious-new-building-with-curb-appeal_1127-4448.jpg?semt=ais_hybrid"
            alt="Additional Image 4"
            className="rounded-xl shadow-xl w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/premium-photo/luxurious-new-building-with-curb-appeal_1127-4448.jpg?semt=ais_hybrid"
            alt="Additional Image 5"
            className="rounded-xl shadow-xl w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/premium-photo/luxurious-new-building-with-curb-appeal_1127-4448.jpg?semt=ais_hybrid"
            alt="Additional Image 6"
            className="rounded-xl shadow-xl w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="bg-gray-100 py-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-8">Why Choose B.VOC MLT and DMLT at Shri Ram College?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Our college offers a wide range of engaging events like the College Festival, Tech Conference, and Sports Day, where students showcase their talents and learn from industry leaders. Participate in hands-on workshops, project exhibitions, and competitions in fields such as robotics and AI. SRCEM is committed to providing a holistic educational experience, supported by industrial visits and collaboration with global tech giants like Microsoft. Join us and be part of a dynamic community that celebrates innovation, creativity, and academic excellence!
        </p>
      </div>
    </div>
  );
};

export default Events;
