"use client";
import React, { useState } from "react";
import Image from "next/image";
import Colors from "./Colors";
import { useDispatch } from "react-redux";
import { addToCart } from "../ReduxStore/cartSlice";

function ItemDetail({ product }) {
  const [increment, setIncrement] = useState(1);
  const dispatch = useDispatch();

  const colors = [
    { code: "#4F4631" },
    { code: "#314F4A" },
    { code: "#31344F" },
  ];

  const handleChange = (color) => {
    console.log("Selected color:", color);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: increment }));
  };

  return (
    <section className="flex justify-center">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        {/* Product Image */}
        <div className="rounded-lg overflow-hidden w-full md:w-auto">
          <Image
            src={product.images}
            width={700}
            height={700}
            alt={product.title}
            className="object-cover w-full h-auto rounded-2xl"
          />
        </div>

        {/* Product Info */}
        <div className="max-w-md w-full px-3">
          <h1 className="font-bold text-2xl md:text-[32px] leading-tight">
            {product.title}
          </h1>
          <div className="flex items-center gap-4 mt-2 flex-wrap">
            <p className="text-xl md:text-2xl font-semibold">
              ${product.price}
            </p>
            {product.discountPercentage && (
              <p className="text-gray-500 line-through">
                $
                {(
                  product.price /
                  (1 - product.discountPercentage / 100)
                ).toFixed(2)}
              </p>
            )}
            {product.discountPercentage && (
              <p className="text-red-500 bg-red-100 py-1 px-2 rounded-2xl font-bold text-sm md:text-base">
                -{product.discountPercentage}%
              </p>
            )}
          </div>

          <p className="mt-4 text-gray-600 text-sm md:text-base">
            {product.description}
          </p>

          {/* Colors */}
          <div className="mt-6">
            <p className="font-medium text-sm md:text-base">Select Colors</p>
            <Colors colors={colors} onChange={handleChange} />
          </div>

          {/* Quantity & Add to Cart */}
          <div className="mt-6 flex sm:flex-row items-center gap-4">
            <div className="flex items-center border rounded-full">
              <button
                className="px-4 py-2 text-2xl"
                onClick={() => setIncrement((prev) => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span className="px-4 py-2">{increment}</span>
              <button
                className="px-4 py-2 text-2xl"
                onClick={() => setIncrement((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-black hover:bg-gray-800 w-full text-white px-6 py-3 rounded-full cursor-pointer active:bg-white active:text-black"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemDetail;
