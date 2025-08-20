import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

export default function StarRating({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
    } else {
      stars.push(<AiOutlineStar key={i} className="text-yellow-500" />);
    }
  }

  return (
    <div className="flex items-center gap-2">
      {/* Star icons */}
      <div className="flex gap-1">{stars}</div>

      {/* Numeric rating text */}
      <span className="text-gray-600 text-sm">({rating}/5)</span>
    </div>
  );
}
