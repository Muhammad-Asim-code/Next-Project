"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../ReduxStore/cartSlice";
import CartItem from "../Components/CartItem";

export default function CartPage() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if (cart.length === 0) {
    return <p className="text-center mt-10">🛒 Your cart is empty</p>;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={() => dispatch(removeFromCart(item.id))}
          />
        ))}
      </div>
      <div className="mt-6 flex justify-between items-center font-bold text-xl">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}
