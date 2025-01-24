import React from 'react';

const Events = () => {
  return (
    <div className="min-h-screen bg-zinc-50 ">

      <div className="relative w-full h-80 bg-cover bg-center " style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/luxurious-new-building-with-curb-appeal_1127-4448.jpg?semt=ais_hybrid)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white py-20 sm:py-28">
          <h1 className="text-3xl sm:text-5xl font-bold text-[#ebf4f6]">Upcoming College Events</h1>
          <p className="text-lg sm:text-xl mt-4">Don't miss out on these exciting events happening at our college in 2024!</p>
        </div>
      </div>

      <div className='w-[95%] md:[90%] lg:w-[85%] m-auto'>
        <div className="flex flex-col sm:flex-row items-center justify-center  my-4 md:my-8 sm:gap-4 lg:gap-8  ">
          <div className="w-full sm:w-1/2 ">
            <img
              src="https://www.sgrru.ac.in/Uploads/image/311imguf_auditorium.jpg"
              alt="College Festival"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>

          <div className="w-full sm:w-1/2 text-center mt-6 sm:mt-0 sm:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#088395]">College Festival 2024</h2>
            <p className="text-sm  md:text-lg text-zinc-600 my-6">
              Join us for the biggest celebration of the year! Enjoy music, food, and fun activities. There will be live performances, interactive games, and stalls featuring everything from food to games.
            </p>
            <div className="space-y-2">
              <p className="text-sm md:text-md text-zinc-500">Date: <span className="font-semibold">2024-05-10</span></p>
              <p className="text-sm md:text-md text-zinc-500">Time: <span className="font-semibold">10:00 AM - 6:00 PM</span></p>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-center justify-center  my-4 md:my-8 sm:gap-4 lg:gap-8 ">
          <div className="w-full sm:w-1/2 text-center mt-6 sm:mt-0 sm:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#088395]">Tech Conference</h2>
            <p className="text-sm  md:text-lg text-zinc-600 my-6">
              Learn from industry experts and participate in workshops on cutting-edge technology. Keynote speakers will include pioneers in AI, blockchain, and quantum computing.
            </p>
            <div className="space-y-2">
              <p className="text-sm md:text-md text-zinc-500">Date: <span className="font-semibold">2024-06-15</span></p>
              <p className="text-sm md:text-md text-zinc-500">Time: <span className="font-semibold">9:00 AM - 4:00 PM</span></p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 ">
            <img
              src="https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/13578/2020/1/28/Auditorium%20of%20Shri%20Ram%20College%20Muzaffarnagar_Auditorium.png"
              alt="Tech Conference"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center  my-4 md:my-8 sm:gap-4 lg:gap-8 ">
          <div className="w-full sm:w-1/2 ">
            <img
              src="https://st1.latestly.com/wp-content/uploads/2020/08/National-Sports-Day-784x436.jpg"
              alt="Sports Day"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>

          <div className="w-full sm:w-1/2 text-center mt-6 sm:mt-0 sm:text-left ">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#088395]">Sports Day</h2>
            <p className="text-sm  md:text-lg text-zinc-600 my-6">
              Compete in various sports and enjoy the fun activities with your friends and family! The day will feature track races, football, cricket, and even a tug of war.
            </p>
            <div className="space-y-2">
              <p className="text-sm md:text-md text-zinc-500">Date: <span className="font-semibold">2024-07-20</span></p>
              <p className="text-sm md:text-md text-zinc-500">Time: <span className="font-semibold">8:00 AM - 5:00 PM</span></p>
            </div>
          </div>
        </div>
        {/* below img */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

        <div className="bg-zinc-100 text-center px-4 py-2 md:py-4 md:px-8 lg:py-8 lg:px-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-800 mb-8">Exciting College Events Ahead!</h2>
          <p className="text-lg text-zinc-600 mb-6">
            **Heading:**
            "Exciting College Events Ahead!"

            **Description:**
            "Stay tuned for a series of thrilling events, competitions, and workshops hosted by our college. From cultural festivals to academic showcases, there's something for everyone. Be a part of the vibrant campus life and create unforgettable memories with us!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;
