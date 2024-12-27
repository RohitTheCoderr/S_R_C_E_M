import React from 'react';

const Sports = () => {
  return (
    <div className="min-h-screen bg-zinc-50 ">

      <div className="relative w-full h-96 bg-cover bg-center " style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/national-sports-day-copy-space_548646-95370.jpg?semt=ais_hybrid)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white py-20 sm:py-28">
          <h1 className="text-3xl sm:text-5xl font-bold text-[#ebf4f6]">Upcoming College Sports</h1>
          <p className="text-lg sm:text-xl mt-4">Join the action and showcase your athletic skills in a series of competitive sports events!</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center px-4 py-2 md:py-4 md:px-8 lg:py-8 lg:px-16">
        <div className="w-full sm:w-1/2 px-6 mb-6 md:mb-0">
          <img
            src="https://img.freepik.com/free-photo/cricket-match-with-player_23-2151702186.jpg"
            alt="College Festival"
            className="rounded-2xl shadow-2xl w-full h-full object-cover"
          />
        </div>

        <div className="w-full sm:w-1/2 px-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#088395] mb-6">The Spirit of Cricket</h2>
          <p className="text-lg text-zinc-600 mb-6">
          Get ready for a game of strategy, skill, and teamwork with college cricket. Whether you're batting, bowling, or fielding, every match is filled with excitement and challenges. Join the fun and experience the thrill of cricket at its best!
          </p>
          <div className="space-y-2">
            <p className="text-md text-zinc-500">Date: <span className="font-semibold">2024-05-10</span></p>
            <p className="text-md text-zinc-500">Time: <span className="font-semibold">10:00 AM - 6:00 PM</span></p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center px-4 py-2 md:py-4 md:px-8 lg:py-8 lg:px-16">
        <div className="w-full sm:w-1/2 px-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#088395] mb-6">Dunk Your Way to Glory</h2>
          <p className="text-lg text-zinc-600 mb-6">
          Experience the thrill of college basketball! Engage in fast-paced action, showcasing agility, coordination, and team spirit. Whether you're shooting hoops or cheering from the stands, the energy is unmatched!
          </p>
          <div className="space-y-2">
            <p className="text-md text-zinc-500">Date: <span className="font-semibold">2024-06-15</span></p>
            <p className="text-md text-zinc-500">Time: <span className="font-semibold">9:00 AM - 4:00 PM</span></p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 px-6">
          <img
            src="https://wallpapers.com/images/featured/2560x1440-basketball-hd-pke183c1zxc4ieoz.jpg"
            alt="Tech Conference"
            className="rounded-2xl shadow-2xl w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center px-4 py-2 md:py-4 md:px-8 lg:py-8 lg:px-16">
        <div className="w-full sm:w-1/2 px-6 mb-6 md:mb-0">
          <img
            src="https://pbs.twimg.com/media/FeuOXwpaEAAYCY9.jpg:large"
            alt="Sports Day"
            className="rounded-2xl shadow-2xl w-full h-full object-cover"
          />
        </div>

        <div className="w-full sm:w-1/2 px-6 text-center md:text-left ">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#088395] mb-6">The Ultimate Test of Strength and Strategy</h2>
          <p className="text-lg text-zinc-600 mb-6">
            Compete in various sports and enjoy the fun activities with your friends and family! The day will feature track races, football, cricket, and even a tug of war.
          </p>
          <div className="space-y-2">
            <p className="text-md text-zinc-500">Date: <span className="font-semibold">2024-07-20</span></p>
            <p className="text-md text-zinc-500">Time: <span className="font-semibold">8:00 AM - 5:00 PM</span></p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-2 md:py-4 md:px-8 lg:py-8 lg:px-16">
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
        <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-800 mb-8">Rise to the Challenge!</h2>
        <p className="text-lg text-zinc-600 mb-6">
"Gear up for an action-packed sports season filled with energy, competition, and unforgettable moments. Showcase your talent, push your limits, and be part of our college's vibrant sports community. Let the games begin!"
          </p>
      </div>
    </div>
  );
};

export default Sports;
