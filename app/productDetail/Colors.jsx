"use client";
import { useState } from "react";

export default function Colors({ colors = [], onChange }) {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleSelect = (index) => {
    setSelectedColor(index);
    if (onChange) {
      onChange(colors[index]);
    }
  };

  return (
    <div className="flex gap-3 mt-2">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`w-9 h-9 rounded-full cursor-pointer flex items-center justify-center border 
            ${selectedColor === index ? "border-black" : "border-transparent"}`}
          style={{ backgroundColor: color.code }}
          onClick={() => handleSelect(index)}
        >
          {selectedColor === index && (
            <span className="text-white text-sm font-bold">✓</span>
          )}
        </div>
      ))}
    </div>
  );
}
