"use client";
import React from "react";
import useReviews from "./ReviewHook";
import StarRating from "./StarRating";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="p-4 bg-gray-200 shadow rounded flex flex-col"
          >
            <div className="flex items-center gap-4">
              <div>
                <h3 className="font-bold text-lg">{review.author}</h3>
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
