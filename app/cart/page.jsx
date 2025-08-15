"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../ReduxStore/cartSlice";
import CartItem from "../Components/CartItem";
import { FaArrowRight } from "react-icons/fa6";

export default function CartPage() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if (cart.length === 0) {
    return (
      <p className="text-center mt-10 text-lg font-bold">
        🛒 Your cart is empty
      </p>
    );
  }

  const subTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discount = cart.reduce((sum, item) => {
    const discountPercent = Number(item.discountPercentage) || 0;
    return sum + (item.price * item.quantity * discountPercent) / 100;
  }, 0);

  const total = subTotal - discount;

  return (
    <div className="max-w-4xl mx-auto p-2 md:p-3">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-4 ">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={() => dispatch(removeFromCart(item.id))}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <div className="mt-6 flex flex-col gap-6 justify-between items-center font-bold text-xl w-fit">
          <div className="w-full p-2">
            <div className="flex justify-around">
              <span>Total Amount:</span>
              <span>${subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-around">
              <span>Discount:</span>
              <span>${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-around">
              <p>Total:</p>
              <p>${total.toFixed(2)}</p>
            </div>
          </div>
          <hr />
          <div className="flex ">
            <input
              className="border p-2 rounded-2xl m-1"
              type="text"
              placeholder="Add promo code"
            />
            <button className="bg-black text-white rounded-2xl py-0.5 px-4">
              Apply
            </button>
          </div>

          <button className="flex items-center justify-center gap-10 cursor-pointer active:cursor-progress bg-black py-1 rounded-2xl w-full text-white">
            Go to CheckOut <FaArrowRight fill="white" size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
