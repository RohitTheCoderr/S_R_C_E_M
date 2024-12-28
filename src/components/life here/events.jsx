import React from 'react';

const Events = () => {
  return (
    <div className="min-h-screen bg-zinc-50 ">

      <div className="relative w-full h-96 bg-cover bg-center " style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white py-20 sm:py-28">
          <h1 className="text-3xl sm:text-5xl font-bold text-[#ebf4f6]">Upcoming College Events</h1>
          <p className="text-lg sm:text-xl mt-4">Don't miss out on these exciting events happening at our college in 2024!</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center px-4 py-2 md:py-4 md:px-8 lg:py-8 lg:px-16">
        <div className="w-full sm:w-1/2 px-6 mb-6 md:mb-0">
          <img
            src="https://cdn.pixabay.com/photo/2019/06/13/16/06/dance-4271941_1280.jpg"
            alt="College Festival"
            className="rounded-2xl shadow-2xl w-full h-full object-cover"
          />
        </div>

        <div className="w-full sm:w-1/2 px-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#088395] mb-6">Celebrate Diversity, Embrace Culture</h2>
          <p className="text-lg text-zinc-600 mb-6">
          Join us for an exciting cultural festival that brings together music, dance, art, and traditions from around the world. Experience the vibrant diversity of our college community and celebrate creativity and unity through performances and exhibitions.
          </p>
          <div className="space-y-2">
            <p className="text-md text-zinc-500">Date: <span className="font-semibold">2024-05-10</span></p>
            <p className="text-md text-zinc-500">Time: <span className="font-semibold">10:00 AM - 6:00 PM</span></p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center px-4 py-2 md:py-4 md:px-8 lg:py-8 lg:px-16">
        <div className="w-full sm:w-1/2 px-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#088395] mb-6">Festival of Lights – Diwali</h2>
          <p className="text-lg text-zinc-600 mb-6">
          Celebrate the joy and warmth of Diwali with a grand event full of lights, music, and traditional Indian dance performances. Enjoy the festive atmosphere with rangolis, diyas, and a grand celebration of Indian culture, unity, and tradition.
          </p>
          <div className="space-y-2">
            <p className="text-md text-zinc-500">Date: <span className="font-semibold">2024-06-15</span></p>
            <p className="text-md text-zinc-500">Time: <span className="font-semibold">9:00 AM - 4:00 PM</span></p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 px-6">
          <img
            src="https://static.vecteezy.com/system/resources/previews/030/637/657/non_2x/diwali-celebration-image-hd-free-photo.jpg"
            alt="Tech Conference"
            className="rounded-2xl shadow-2xl w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center px-4 py-2 md:py-4 md:px-8 lg:py-8 lg:px-16">
        <div className="w-full sm:w-1/2 px-6 mb-6 md:mb-0">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/358/955/600/colorful-people-hands-holi-festival-wallpaper-preview.jpg"
            alt="Sports Day"
            className="rounded-2xl shadow-2xl w-full h-full object-cover"
          />
        </div>

        <div className="w-full sm:w-1/2 px-6 text-center md:text-left ">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#088395] mb-6">Splash of Colors – Holi Celebration</h2>
          <p className="text-lg text-zinc-600 mb-6">
          Celebrate the joyous festival of colors, Holi, with fun, laughter, and vibrant hues. Get ready to throw colors, enjoy music, and celebrate the bond of friendship and love in a true Indian tradition.
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
            src="https://png.pngtree.com/thumb_back/fh260/background/20230614/pngtree-people-flying-kites-with-sunset-in-the-background-image_2961624.jpg"
            alt="Additional Image 1"
            className="rounded-xl shadow-xl w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0754/8901/files/raksha-bandhan.jpg"
            alt="Additional Image 2"
            className="rounded-xl shadow-xl w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://png.pngtree.com/thumb_back/fw800/background/20240419/pngtree-india-independence-day-celebration-background-image_15717624.jpg"
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
  );
};

export default Events;
