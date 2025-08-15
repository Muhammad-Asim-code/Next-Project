"use client";

import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

function Banner() {
  const [hidden, setHidden] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Detect screen size on first load and when resizing
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Always show on small screens
  if (isSmallScreen) {
    return (
      <div className="bg-black text-white p-4">
        <div className="flex justify-center text-center">
          <p className="text-sm font-normal">
            Sign up and get 20% off to your first order.{" "}
            <span className="font-medium underline underline-offset-2">
              <a href="">Sign Up Now</a>
            </span>
          </p>
        </div>
      </div>
    );
  }

  // Large screens: allow hiding
  if (hidden) return null;

  return (
    <div className="bg-black text-white flex items-center justify-center relative">
      <p className="text-sm font-normal text-center">
        Sign up and get 20% off to your first order.{" "}
        <span className="font-medium underline underline-offset-2">
          <a href="">Sign Up Now</a>
        </span>
      </p>
      <button
        onClick={() => setHidden(true)}
        className="absolute right-4 text-xl text-white hidden sm:block"
      >
        <RxCross2 />
      </button>
    </div>
  );
}

export default Banner;
