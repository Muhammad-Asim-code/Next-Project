"use client";
import React from "react";
import useReviews from "./ReviewHook";
import StarRating from "./StarRating";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import Image from "next/image";

export default function ReviewGrid() {
  const { reviews, loading, hasMore, loadMore } = useReviews(8);

  if (loading && reviews.length === 0)
    return (
      <p className="p-4 flex justify-center items-center">
        {" "}
        <AiOutlineLoading3Quarters className=" animate-spin text-3xl text-gray-600" />{" "}
      </p>
    );

  return (
    <div className="py-4 px-2 md:px-32">
      <div className="flex justify-between gap-4 items-center">
        <h2 className="m-10 font-bold font-satoshi text-2xl">All Reviews </h2>
        <div className=" flex gap-3 items-center">
          <div className="p-2 bg-gray-200 rounded-full">
            <Image
              src="/image/filtervector.svg"
              width={21}
              height={18}
              className="inline-block"
              alt="Filter vector "
            />
          </div>
          <div className="flex items-center gap-3 py-4 px-5 w-28 bg-gray-200 rounded-full">
            <p className=" font-satoshi font-medium">Latest</p>
            <Image
              src="/image/ArrowDown.svg"
              height={14}
              width={14}
              className="inline-block "
            />
          </div>

          <div>
            <button className=" font-satoshi font-medium px-5 py-4 bg-black text-white rounded-full">
              Write a Review
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="p-4 border border-black/50 shadow rounded flex flex-col"
          >
            <div className="flex items-center gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg">{review.author}</h3>
                  <MdVerified fill="green" size={20} />
                </div>
                <StarRating rating={review.rating} />
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-3">{review.comment}</p>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-6 text-center">
          {loading ? (
            <AiOutlineLoading3Quarters className=" animate-spin text-3xl text-gray-600 mx-auto" />
          ) : (
            <button
              onClick={() => loadMore(8)}
              className="bg-white text-black shadow-2xl px-6 py-3 rounded-full"
            >
              Load More Reviews
            </button>
          )}
        </div>
      )}
    </div>
  );
}
