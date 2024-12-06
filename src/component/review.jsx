import React, { useState } from 'react';
import watch4 from '../assets/img/2watch.jpeg'
import watch2 from '../assets/img/5watch.jpeg'
import watch3 from '../assets/img/7watch.jpeg'

const WatchReviewApp = () => {
  const [reviews, setReviews] = useState([]);
  const [isAddingReview, setIsAddingReview] = useState(false);
  const [isShowingReviews, setIsShowingReviews] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim() || !formData.email.includes('@'))
      newErrors.email = 'Valid email is required.';
    if (!formData.review.trim()) newErrors.review = 'Review cannot be empty.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setReviews([...reviews, formData]);
      setFormData({ name: '', email: '', review: '' });
      setIsAddingReview(false);
    }
  };

  return (
   <>
    <div className=" w-full  bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
    <h1 className="text-white font-bold text-[30px] ml-[40px] title">COLLECTIONS </h1>
    <div className="flex flex-col items-center justify-center mt-8 lg:flex-row gap-5 hover:scale-2">
      <div className="border border-gray-400 ">
        <img src={watch4} className="h-[180px] w-[250px]" alt=""/>
        <h1 className="text-amber-500 text-center text-[25px] font-cold text">ADRIATOR</h1>
        <p className="text-center text-amber-500 mb-3 text">Ru.200</p>
        <div className="flex space-x-4">
          <button
            onClick={() => {
              setIsAddingReview(true);
              setIsShowingReviews(false);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add Review
          </button>
          <button
            onClick={() => {
              setIsShowingReviews(true);
              setIsAddingReview(false);
            }}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Show Reviews
          </button>
        </div>
      </div>
      <div className="border border-gray-400 ">
        <img src={watch2} className="h-[180px] w-[250px]" alt=""/>
        <h1 className="text-amber-500 text-center text-[25px] font-cold text">ADRIATOR</h1>
        <p className="text-center text-amber-500 mb-3 text">Ru.200</p>
        <div className="flex space-x-4">
          <button
            onClick={() => {
              setIsAddingReview(true);
              setIsShowingReviews(false);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add Review
          </button>
          <button
            onClick={() => {
              setIsShowingReviews(true);
              setIsAddingReview(false);
            }}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Show Reviews
          </button>
        </div>
      </div>
      <div className="border border-gray-400 ">
        <img src={watch3} className="h-[180px] w-[250px]" alt=""/>
        <h1 className="text-amber-500 text-center text-[25px] font-cold text">ADRIATOR</h1>
        <p className="text-center text-amber-500 mb-3 text">Ru.200</p>
        <div className="flex space-x-4">
          <button
            onClick={() => {
              setIsAddingReview(true);
              setIsShowingReviews(false);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add Review
          </button>
          <button
            onClick={() => {
              setIsShowingReviews(true);
              setIsAddingReview(false);
            }}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Show Reviews
          </button>
        </div>
      </div>
    </div>
  
    
    

      {/* Add Review Form */}
      {isAddingReview && (
        <form
          onSubmit={handleSubmit}
          className="mt-6 bg-white p-4 rounded-lg shadow-md space-y-4"
        >
          <h3 className="text-lg font-semibold">Add Your Review</h3>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } rounded-lg`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-lg`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="review">
              Review
            </label>
            <textarea
              name="review"
              id="review"
              rows="4"
              value={formData.review}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border ${
                errors.review ? 'border-red-500' : 'border-gray-300'
              } rounded-lg`}
            ></textarea>
            {errors.review && <p className="text-red-500 text-sm">{errors.review}</p>}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      )}

      {/* Show Reviews */}
      {isShowingReviews && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Reviews</h3>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="border-b last:border-b-0 pb-4 mb-4">
                <p className="font-medium">{review.name}</p>
                <p className="text-sm text-gray-600">{review.email}</p>
                <p className="mt-2">{review.review}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No reviews yet. Be the first to add one!</p>
          )}
        </div>
      
      )}
    </div>
    </>
  );
};

export default WatchReviewApp;
