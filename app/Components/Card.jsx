"use client";
import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import StarRating from "../productDetail/StarRating";

export default function ProductDisplay({ category, title }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (!category) return;
    setLoading(true);
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts((data.products || []).slice(0, 4));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category]);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 640, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: "unslick" },
    ],
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <AiOutlineLoading3Quarters className="animate-spin text-3xl text-gray-500" />
      </div>
    );
  }

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  return (
    <div className="">
      <h2 className="text-5xl text-center font-integral font-bold p-10 capitalize">
        {title}
      </h2>

      {/* Mobile: Slider */}
      <div className="block md:hidden">
        <Slider ref={sliderRef} {...sliderSettings}>
          {products.map((product) => (
            <div key={product.id}>
              <Link href={`/details/${product.id}`}>
                <div className=" w-[300px] mx-auto rounded-lg text-center cursor-pointer">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full bg-gray-200 h-40 object-cover rounded"
                  />
                  <div className="flex flex-col justify-center gap-3">
                    {/* Optional: Reviews may not exist for all products */}
                    {product.reviews?.[0]?.rating && (
                      <StarRating rating={product.reviews[0].rating} />
                    )}
                    <h3 className="font-medium">{product.title}</h3>
                    <p className="text-gray-500 text-sm">${product.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      {/* Tablet & Desktop: Grid */}
      <div className="max-w-7xl mx-auto hidden md:grid px-8 grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link key={product.id} href={`/details/${product.id}`}>
            <div className=" w-[300px]  rounded-lg   cursor-pointer ">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full bg-gray-200 h-40 object-cover rounded"
              />
              <div className="flex flex-col gap-2">
                <h3 className="mt-2 font-bold font-satoshi">{product.title}</h3>
                <StarRating rating={product.rating} />
                <p className="text-gray-500 text-2xl font-bold font-satoshi">
                  ${product.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link href={`/category/${category}`}>
          <button className="px-12 shadow rounded-[62px] border py-4">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
}
