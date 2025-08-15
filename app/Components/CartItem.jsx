"use client";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import StarRating from "../productDetail/StarRating";
export default function CartItem({ item, onRemove }) {
  return (
    <div className="flex items-center gap-4 border p-4 rounded-lg shadow-sm">
      <Image
        src={item.images}
        alt={item.title}
        width={100}
        height={100}
        className="rounded-md object-cover bg-gray-300 p-4"
      />
      <div className="flex-1">
        <h2 className="font-semibold">{item.title}</h2>
        <StarRating rating={item.rating} />
        <p className="text-gray-600">
          ${item.price} × {item.quantity}
        </p>
        <p className="font-bold">
          = ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
      <button
        onClick={onRemove}
        className=" cursor-pointer px-3 py-2 rounded-md"
      >
        <MdDelete fill="red" size={30} />
      </button>
    </div>
  );
}
