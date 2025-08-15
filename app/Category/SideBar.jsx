"use client";
import { useState } from "react";
import { GoFilter } from "react-icons/go";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import Colors from "../productDetail/Colors";
import PaginationApi from "./Pagination";

const defineColors = [
  { code: "#00C12B" },
  { code: "#F50606" },
  { code: "#F5DD06" },
  { code: "#F57906" },
  { code: "#06CAF5" },
  { code: "#063AF5" },
  { code: "#7D06F5" },
  { code: "#F506A4" },
  { code: "#ffffff" },
  { code: "#000000" },
];

export default function SideBar() {
  const [openItem, setOpenItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Mens-Shirts");

  const handleToggleItem = (cat) => {
    setSelectedCategory(cat.toLowerCase());
  };

  const handleChange = (color) => {
    console.log("Selected color:", color);
  };

  return (
    <section>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <aside className="w-[300px] hidden md:block bg-gray-50 p-4 border-r border-gray-200">
          <div className="sticky top-0">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-lg font-semibold">Filters</h1>
              <GoFilter size={24} />
            </div>

            {/* Categories Section */}
            <section>
              <h2 className="font-medium mb-2">Categories</h2>
              {[
                "Mens-Shirts",
                "Mens-Watches",
                "Womens-Dresses",
                "fragrances",
              ].map((cat) => (
                <div key={cat}>
                  <button
                    className={`flex justify-between items-center w-full py-2 text-left px-2 rounded 
                      ${
                        selectedCategory === cat
                          ? "bg-gray-200 font-semibold"
                          : "hover:bg-gray-100"
                      }`}
                    onClick={() => handleToggleItem(cat)}
                  >
                    <span className="capitalize">{cat}</span>
                    {openItem === cat ? (
                      <MdOutlineKeyboardArrowUp size={20} />
                    ) : (
                      <MdOutlineKeyboardArrowRight size={20} />
                    )}
                  </button>
                </div>
              ))}
            </section>

            {/* Price Range */}
            <section className="mt-4">
              <h2 className="font-medium mb-2">Price</h2>
              <input type="range" min={0} max={100} className="w-full" />
            </section>

            {/* Colors */}
            <section className="mt-4">
              <h2 className="font-medium mb-2 flex justify-between items-center">
                Colors
                <MdOutlineKeyboardArrowRight size={20} />
              </h2>
              <Colors
                className="grid grid-cols-5 auto-rows-fr"
                colors={defineColors}
                onChange={handleChange}
              />
            </section>

            {/* Sizes */}
            <section className="mt-4">
              <h2 className="font-medium mb-2">Size</h2>
              <div className="flex gap-2 flex-wrap">
                {[
                  "XX-Small",
                  "X-Small",
                  "Small",
                  "Medium",
                  "Large",
                  "X-Large",
                  "XX-Large",
                  "2X-Large",
                  "3X-Large",
                  "4X-Large",
                ].map((size) => (
                  <button
                    key={size}
                    className="px-3 py-1 rounded-full border border-black text-sm hover:bg-black hover:text-white"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </section>

            {/* Dress Style */}
            <section className="mt-4">
              <h2 className="font-medium mb-2">Dress Style</h2>
              {["Casual", "Formal", "Sport", "Party"].map((style) => (
                <div key={style}>
                  <button
                    className="flex justify-between items-center w-full py-2 text-left hover:bg-gray-100 px-2 rounded"
                    onClick={() =>
                      setOpenItem(openItem === style ? null : style)
                    }
                  >
                    <span>{style}</span>
                    {openItem === style ? (
                      <MdOutlineKeyboardArrowUp size={20} />
                    ) : (
                      <MdOutlineKeyboardArrowRight size={20} />
                    )}
                  </button>
                  {openItem === style && (
                    <div className="pl-4 pb-2 text-sm text-gray-600">
                      <p>Item details for {style}</p>
                    </div>
                  )}
                </div>
              ))}
            </section>

            {/* Apply Filter */}
            <div className="mt-6">
              <button className="w-full bg-black text-white py-2 rounded-2xl hover:bg-gray-800">
                Apply Filter
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4">
          <PaginationApi title={selectedCategory} category={selectedCategory} />
        </main>
      </div>
    </section>
  );
}
