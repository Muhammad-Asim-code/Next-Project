"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const reviews = [
  {
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "Moose P.",
    review:
      "Shopco has become my go-to destination for fashion. Their attention to detail and quality is unmatched, making every purchase a delight.",
  },
  {
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "Moose P.",
    review:
      "Shopco has become my go-to destination for fashion. Their attention to detail and quality is unmatched, making every purchase a delight.",
  },
  {
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "Moose P.",
    review:
      "Shopco has become my go-to destination for fashion. Their attention to detail and quality is unmatched, making every purchase a delight.",
  },
  {
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "Moose P.",
    review:
      "Shopco has become my go-to destination for fashion. Their attention to detail and quality is unmatched, making every purchase a delight.",
  },
  {
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "Moose P.",
    review:
      "Shopco has become my go-to destination for fashion. Their attention to detail and quality is unmatched, making every purchase a delight.",
  },
];

function ReviewsCarousel() {
  const [visibleCount, setVisibleCount] = useState(10);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-10">
      {/* Heading + Arrows */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-[28px] lg:text-[32px] font-extrabold tracking-tight">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="flex gap-3">
          <div className="swiper-button-prev flex items-center justify-center w-9 h-9 border border-black rounded-full cursor-pointer hover:bg-gray-100">
            <FaArrowLeft className="text-lg" />
          </div>
          <div className="swiper-button-next flex items-center justify-center w-9 h-9 border border-black rounded-full cursor-pointer hover:bg-gray-100">
            <FaArrowRight className="text-lg" />
          </div>
        </div>
      </div>

      {/* Carousel */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={24}
        slidesPerView={1.1}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((r, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 h-full flex flex-col gap-3">
              {/* Stars */}
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              {/* Name */}
              <div className="flex items-center gap-1 font-semibold">
                {r.name}
                <MdVerified className="text-green-500 text-lg" />
              </div>
              {/* Review */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {r.review}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ReviewsCarousel;
