import React from 'react';
import PromoImage from '../assets/react.svg'; // เปลี่ยนเป็นรูปจริงที่รักทีหลังได้น้า

const Home: React.FC = () => {
  return (
    <div className="w-full bg-[#fdfdf7] py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <p className="text-yellow-600 tracking-widest uppercase text-sm font-semibold">
            Bag, Kids
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Black friday
          </h1>
          <p className="text-gray-600 max-w-md mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-md transition duration-300">
            Shop Now
          </button>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col items-center relative mt-10 md:mt-0">
          {/* Sale Badge */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 bg-yellow-500 text-white font-bold py-4 px-6 rounded-full border-4 border-white shadow-lg text-center">
            <p className="text-sm">SALE</p>
            <p className="text-2xl">50%</p>
          </div>

          {/* Image */}
          <img 
            src={PromoImage}
            alt="Promotion"
            className="w-72 h-72 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-between items-center mt-10 px-10">
        <button className="text-3xl text-gray-600 hover:text-gray-900">
          &#8592;
        </button>
        <button className="text-3xl text-gray-600 hover:text-gray-900">
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default Home;
