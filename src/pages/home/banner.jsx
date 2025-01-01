import React from "react";

const cardData = [
  {
    id: "01",
    title: "Scholarship Facility",
    description: "Explore our scholarship options available at the college to help you achieve your academic goals!",
    image: "images/Homepage/scholarship.svg",
   
  },
  {
    id: "02",
    title: "Skilled Lecturers",
    description: "State-of-the-art laboratory with latest equipment to pool the bridge between industry and curriculum",
    image: "images/Homepage/teacher.svg",
  
  },
  {
    id: "03",
    title: "Beti Bachao & Padhao",
    description: "Special scholarship for girls to realize the vision of 'Beti Bachao, Beti Padhao' by Honorable PM Mr. Narendra Modi.",
    image: "images/Homepage/library.svg",
  
  },
  {
    id: "04",
    title: "Affordable Price",
    description: "Well-stocked library with more than 30,239 volumes of textbooks/journals/e-journals and magazines.",
    image: "images/Homepage/money.svg",
    
  },
];

const Card = ({ id, title, description, image }) => (
  <div
    className={"bg-gradient-to-br group from-[#071952] to-[#37b7c3] sm:h-64 sm:w-64 rounded-3xl p-3 hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out"}
  >
    <div className="flex justify-between items-center">
      <img
        src={image}
        alt={title}
        className="h-12 w-12 lg:h-20 lg:w-20 md:h-16 md:w-16 rounded-full bg-white p-1 shadow-md group-hover:rotate-[360deg] transform transition-all duration-300 "
      />
      <h1 className="text-5xl lg:text-6xl font-bold text-white">
        {id}
      </h1>
    </div>
    <div className="mt-4">
      <h2 className="text-xl lg:text-2xl font-bold text-white truncate">
        {title}
      </h2>
      <p className="mt-2 text-sm text-[#d6eff9] leading-normal">
        {description}
      </p>
    </div>
  </div>
);

const Banner = () => {
  return (
    <div className="relative  w-[90%] m-auto mt-[2rem] md:mt-[-4rem] z-50">
      <div className=" flex flex-wrap gap-4 sm:gap-8 justify-around ">
        {cardData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Banner;
