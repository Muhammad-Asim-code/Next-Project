"use client";
import React, { useRef } from "react";
import useReviews from "./ReviewHook";
import StarRating from "./StarRating";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

export default function ReviewSlider() {
  const { reviews, loading } = useReviews(10);
  const sliderRef = useRef(null);

  const settings = {
    dots: false, // remove dots
    infinite: false,
    speed: 500,
    slidesToShow: 3, // default laptop
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // tablet
      { breakpoint: 640, settings: { slidesToShow: 1 } }, // mobile
    ],
  };

  if (loading)
    return (
      <p className="p-4 flex justify-center items-center">
        <AiOutlineLoading3Quarters className="animate-spin text-3xl text-gray-500" />
      </p>
    );

  return (
    <div className="py-4 px-6 md:px-16 lg:px-32 relative">
      <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl p-4">
        Our Happy Customers
      </h1>

      {/* Slider Controls */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <MdOutlineArrowBackIos size={20} />
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <MdOutlineArrowForwardIos size={20} />
        </button>
      </div>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="p-4 bg-gray-200 shadow rounded flex px-2 flex-col items-center "
          >
            <div>
              <StarRating rating={review.rating} />
            </div>
            <h3 className="font-bold text-lg">{review.author}</h3>
            <p className="text-gray-600 text-sm mt-2">{review.comment}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
