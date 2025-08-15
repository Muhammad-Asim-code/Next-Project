"use client";

import Image from "next/image";

export default function CartItem({ item, onRemove }) {
  return (
    <div className="flex items-center gap-4 border p-4 rounded-lg shadow-sm">
      <Image
        src={item.images}
        alt={item.title}
        width={100}
        height={100}
        className="rounded-md object-cover"
      />
      <div className="flex-1">
        <h2 className="font-semibold text-lg">{item.title}</h2>
        <p className="text-gray-600">
          ${item.price} × {item.quantity}
        </p>
        <p className="font-bold">
          = ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
      <button
        onClick={onRemove}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
      >
        Remove
      </button>
    </div>
  );
}
