"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../ReduxStore/cartSlice";
import CartItem from "../Components/CartItem";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import GooglePayButton from "@google-pay/button-react";
import Link from "next/link";

export default function CartPage() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [selectedMethod, setSelectedMethod] = useState(null);

  if (cart.length === 0) {
    return (
      <div className="flex  flex-col justify-center items-center gap-2">
        <p className="mt-10 text-lg font-bold">🛒 Your cart is empty</p>
        <Link
          href="/Home"
          className="bg-black text-white py-1 px-12 cursor-pointer rounded-lg hover:bg-black/70"
        >
          Shop Now
        </Link>
      </div>
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

      {/* Totals */}
      <div className="flex justify-center ">
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

          {/* Promo Code */}
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

          {/* Payment Methods */}
          <div className="w-full mt-6">
            <h2 className="text-lg mb-2">Choose Payment Method</h2>
            <div className="flex flex-wrap gap-3">
              {["Visa", "MasterCard", "PayPal", "Apple Pay", "Google Pay"].map(
                (method) => (
                  <button
                    key={method}
                    onClick={() => setSelectedMethod(method)}
                    className="border px-4 py-2 rounded-xl cursor-pointer hover:bg-gray-300 transition-all duration-500"
                  >
                    {method}
                  </button>
                )
              )}
            </div>
          </div>
          {/* Checkout */}
          <button className="flex items-center justify-center gap-10 cursor-pointer active:cursor-progress bg-black py-1 rounded-2xl w-full text-white">
            Go to CheckOut <FaArrowRight fill="white" size={30} />
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedMethod && (
        <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[350px]">
            <h2 className="text-xl font-bold mb-4">{selectedMethod} Details</h2>
            {selectedMethod === "Visa" || selectedMethod === "MasterCard" ? (
              <form className="flex flex-col gap-3">
                <input
                  type="number"
                  placeholder="Card Number"
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Card Holder Name"
                  className="border p-2 rounded"
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="border p-2 rounded w-1/2"
                  />
                  <input
                    type="number"
                    placeholder="CVV"
                    className="border p-2 rounded w-1/2"
                  />
                </div>
              </form>
            ) : selectedMethod === "PayPal" ? (
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="PayPal Email"
                  className="border p-2 rounded"
                />
                <input
                  type="password"
                  placeholder="PayPal Password"
                  className="border p-2 rounded"
                />
              </form>
            ) : selectedMethod === "Apple Pay" ? (
              <p>Authenticate with your Apple ID / Face ID.</p>
            ) : (
              <GooglePayButton
                environment="TEST"
                buttonColor="black"
                buttonType="long"
                paymentRequest={{
                  apiVersion: 2,
                  apiVersionMinor: 0,
                  allowedPaymentMethods: [
                    {
                      type: "CARD",
                      parameters: {
                        allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                        allowedCardNetworks: ["VISA", "MASTERCARD"],
                      },
                      tokenizationSpecification: {
                        type: "PAYMENT_GATEWAY",
                        parameters: {
                          gateway: "example",
                          gatewayMerchantId: "exampleMerchantId",
                        },
                      },
                    },
                  ],
                  merchantInfo: {
                    merchantId: "12345678901234567890",
                    merchantName: "My Shop",
                  },
                  transactionInfo: {
                    totalPriceStatus: "FINAL",
                    totalPriceLabel: "Total",
                    totalPrice: total.toFixed(2),
                    currencyCode: "USD",
                    countryCode: "US",
                  },
                }}
                onLoadPaymentData={(paymentData) => {
                  console.log("Payment Success", paymentData);
                  alert("Google Pay Success ✅");
                }}
              />
            )}
            <div className="mt-4 flex justify-end gap-3">
              <button
                className="px-4 py-2 border cursor-pointer rounded"
                onClick={() => setSelectedMethod(null)}
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-black text-white cursor-pointer rounded">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
