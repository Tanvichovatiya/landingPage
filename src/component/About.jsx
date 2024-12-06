import React from 'react';
import watch1 from '../assets/img/1watch.jpeg';
import watch2 from '../assets/img/2watch.jpeg'
import watch3 from '../assets/img/5watch.jpeg'
import watch4 from '../assets/img/3img.jpeg'
import watch5 from '../assets/img/4watch.jpeg'
import Navbar from './Navbar';

const About = () => {
  return (
    <>
    <Navbar/>
    <div className=" text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
          <p className="mt-4 text-lg md:text-xl">
            Discover the passion and precision behind our timeless designs.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 bg-white bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="md:flex items-center">
            <div className="md:w-1/2">
              <p className="text-lg mb-6">
                Established in 1995, our brand was born out of a passion for timeless elegance
                and unparalleled craftsmanship. Our journey began with a commitment to creating
                watches that are not only functional but also pieces of art.
              </p>
              <p className="text-lg">
                Today, we continue to innovate, blending modern technology with classic design
                principles to deliver watches that stand the test of time.
              </p>
            </div>
            <div className="md:w-1/2 md:ml-6 mt-6 md:mt-0">
              <img
                src={watch1}
                alt="Our Story"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Craftsmanship</h2>
          <div className="md:flex items-center">
            <div className="md:w-1/2 md:mr-6 mb-6 md:mb-0">
              <img
                src={watch2}
                alt="Craftsmanship"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-6">
                Each watch we create is a testament to meticulous attention to detail and an
                unwavering commitment to quality. From selecting the finest materials to ensuring
                precision in every movement, we strive to exceed expectations.
              </p>
              <p className="text-lg">
                Our skilled artisans and state-of-the-art facilities come together to produce
                watches that are both innovative and timeless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 shadow-lg rounded-lg bg-gray-50 text-center" id='custo1'>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p>
                To craft timeless watches that inspire confidence, elegance, and a sense of
                connection with time itself.
              </p>
            </div>
            <div className="p-6 shadow-lg rounded-lg bg-gray-50 text-center" id='custo1'>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p>
                To be a global leader in luxury timepieces, recognized for our innovation,
                quality, and dedication to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 shadow-lg rounded-lg bg-white">
              <img
                src={watch3}
                alt="Team Member 1"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center p-6 shadow-lg rounded-lg bg-white">
              <img
                src={watch4}
                alt="Team Member 2"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">Head of Design</p>
            </div>
            <div className="text-center p-6 shadow-lg rounded-lg bg-white">
              <img
                src={watch5}
                alt="Team Member 3"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">Alex Brown</h3>
              <p className="text-gray-600">Lead Engineer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-12 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold">Join Us on Our Journey</h2>
        <p className="mt-4">Explore our collection and experience the art of timekeeping.</p>
        <button className="mt-6 px-6 py-3 bg-teal-500 hover:bg-teal-600 font-semibold rounded-lg">
          View Collection
        </button>
      </section>
    </div>
    </>
  );
};

export default About;
