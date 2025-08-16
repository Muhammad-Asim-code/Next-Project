"use client";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import StarRating from "../productDetail/StarRating";
import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../ReduxStore/cartSlice";
export default function CartItem({ item, onRemove }) {
  const dispatch = useDispatch();
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

        <div className="flex items-center gap-2 mt-2 w-fit rounded-4xl bg-gray-300">
          <button
            onClick={() => dispatch(decrementQuantity(item.id))}
            className="px-3 py-1 text-xl cursor-pointer "
          >
            -
          </button>
          <span className="px-4">{item.quantity}</span>
          <button
            onClick={() => dispatch(incrementQuantity(item.id))}
            className="px-3 py-1 text-xl cursor-pointer"
          >
            +
          </button>
        </div>
        <p className="font-bold">
          = ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
      <button
        onClick={onRemove}
        className=" cursor-pointer px-3 py-2 cursor-pointer"
      >
        <MdDelete fill="red" size={30} />
      </button>
    </div>
  );
}
