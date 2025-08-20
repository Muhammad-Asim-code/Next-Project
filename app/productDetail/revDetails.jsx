"use client";
import { useState } from "react";
import ProductInfo from "./ProductInfo";
import ReviewGrid from "./ReviewGrid";
import FAQs from "./FAQs";

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("reviews");

  return (
    <div className="w-full mt-10">
      <div className="flex justify-around">
        {["details", "reviews", "faqs"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 w-[400px] text-sm font-medium transition relative
              ${activeTab === tab ? "text-black" : "text-gray-500"}
            `}
          >
            {tab === "details" && "Product Details"}
            {tab === "reviews" && "Rating & Reviews"}
            {tab === "faqs" && "FAQs"}

            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black"></span>
            )}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {activeTab === "details" && <ProductInfo product={product} />}
        {activeTab === "reviews" && <ReviewGrid />}
        {activeTab === "faqs" && <FAQs />}
      </div>
    </div>
  );
}
