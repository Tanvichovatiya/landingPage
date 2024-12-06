import React from 'react';
import watch1 from '../assets/img/1watch.jpeg';
import watch2 from '../assets/img/2watch.jpeg';
import watch3 from '../assets/img/7watch.jpeg';
import watch4 from '../assets/img/3img.jpeg';
import watch5 from '../assets/img/4watch.jpeg';
import watch6 from '../assets/img/5watch.jpeg';
import watch7 from '../assets/img/6watch.jpeg';
import Navbar from './Navbar';

const Feature = () => {
  return (
    <>
    <Navbar/>
    <div className=" text-gray-800   ">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white">
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text">Experience Time Like Never Before</h1>
          <p className="mt-4 text-lg md:text-xl text">
            Discover the perfect blend of elegance and precision with our premium watches.
          </p>
          <button className="mt-6 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg">
            Shop Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Watches?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 shadow-lg rounded-lg bg-gray-50">
              <img
                src={watch1}
                alt="Durability"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Durability</h3>
              <p className="mt-2">Built to withstand the toughest conditions, our watches are crafted to last.</p>
            </div>
            <div className="text-center p-6 shadow-lg rounded-lg bg-gray-50">
              <img
                src={watch2}
                alt="Waterproof"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Water Resistant</h3>
              <p className="mt-2">With water resistance up to 100 meters, take it anywhere, rain or shine.</p>
            </div>
            <div className="text-center p-6 shadow-lg rounded-lg bg-gray-50">
              <img
                src={watch5}
                alt="Style"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Style</h3>
              <p className="mt-2">Timeless designs that suit every occasion, from casual to formal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src={watch7}
              alt="Watch 1"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src={watch6}
              alt="Watch 2"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src={watch5}
              alt="Watch 3"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src={watch4}
              alt="Watch 4"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gradient-to-r  from-violet-500 to-fuchsia-500">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 shadow-lg rounded-lg bg-gray-50" id="custo1">
              <p>"This is the best watch I've ever owned! The quality is unmatched."</p>
              <h4 className="mt-4 font-semibold">- John Doe</h4>
            </div>
            <div className="p-6 shadow-lg rounded-lg bg-gray-50" id="custo2">
              <p>"Elegant, durable, and stylish. I love how it goes with every outfit."</p>
              <h4 className="mt-4 font-semibold">- Jane Smith</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-12 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold">Ready to Elevate Your Style?</h2>
        <p className="mt-4">Discover our full collection of premium watches now.</p>
        <button className="mt-6 px-6 py-3 bg-teal-500 hover:bg-teal-600 font-semibold rounded-lg">
          Browse Collection
        </button>
      </section>
    </div>
    </>
  );
};

export default Feature;
