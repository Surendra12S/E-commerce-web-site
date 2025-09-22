import React from "react";
import { IoIosStar } from "react-icons/io"; 

export default function RatingStars({ value = 0, count = 0 }) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {stars.map((star) => (
        <IoIosStar
          key={star}
          size={16}
          fill={star <= Math.round(value) ? "currentColor" : "none"}
          stroke="currentColor"
        />
      ))}
      <span className="ml-1 text-sm text-gray-600">({count})</span>
    </div>
  );
}
