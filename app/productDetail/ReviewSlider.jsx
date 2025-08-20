"use client";
import React, { useRef } from "react";
import Image from "next/image";
import useReviews from "./ReviewHook";
import StarRating from "./StarRating";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdVerified } from "react-icons/md";

export default function ReviewSlider() {
  const { reviews, loading } = useReviews(10);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px",
          arrows: false, // hide arrows on mobile
        },
      },
    ],
  };

  if (loading)
    return (
      <p className="p-4 flex justify-center items-center">
        <AiOutlineLoading3Quarters className="animate-spin text-3xl" />
      </p>
    );

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto py-4 px-6  relative">
        {/* Header with Arrows (hidden on mobile) */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-bold font-integral capitalize text-2xl md:text-4xl lg:text-5xl">
            Our Happy Customers
          </h1>
          <div className="flex gap-1 md:gap-3">
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="bg-white p-2 rounded-full"
            >
              <Image
                src="/image/backarrow.svg"
                height={19}
                width={16}
                alt="Prev"
                className="inline-block"
              />
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="bg-white p-2 rounded-full"
            >
              <Image
                src="/image/forwardarrow.svg"
                height={19}
                width={16}
                alt="Next"
                className="inline-block"
              />
            </button>
          </div>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {reviews.map((review, idx) => (
            <div key={idx} className="px-3">
              {/* Card */}
              <div className="p-6 border border-black/20 shadow rounded-2xl flex flex-col gap-4 bg-white h-full">
                {/* Rating */}
                <StarRating rating={review.rating} />

                {/* Author */}
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm md:text-lg">
                    {review.author}
                  </h3>
                  <MdVerified fill="green" size={16} />
                </div>

                {/* Comment */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {review.comment}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
