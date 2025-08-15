"use client";
import Image from "next/image";
import Link from "next/link";
import { IoArrowDown, IoMenuOutline, IoClose } from "react-icons/io5";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full border-b">
      <div className="flex items-center justify-evenly max-w-[1240px] w-full mx-auto px-4 py-2.5">
        <div className="lg:hidden">
          <button onClick={() => setMenu(!menu)}>
            {menu ? <IoClose size={30} /> : <IoMenuOutline size={30} />}
          </button>
        </div>

        <Link href="/Home">
          <div className="flex shrink-0">
            <Image
              src="/image/SHOP.CO.png"
              width={150}
              height={50}
              alt="Brand logo"
              className="object-contain"
            />
          </div>
        </Link>

        <ul className="hidden list-none lg:flex items-center gap-4 text-[18px]">
          <li className="flex items-center gap-1 cursor-pointer">
            Shop <IoArrowDown />
          </li>
          <li className="cursor-pointer">On Sale</li>
          <Link href="/Category">
            <li className="cursor-pointer">Cateogries</li>
          </Link>
          <Link href="/details/Details.jsx">
            <li className="cursor-pointer">Product Details</li>
          </Link>
        </ul>

        <div className="hidden lg:flex items-center gap-4 bg-gray-300 rounded-4xl p-1 w-[550px]">
          <span className="p-2">
            <CiSearch size={30} />
          </span>
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full border-none outline-none bg-transparent"
          />
        </div>

        <div className="flex items-center gap-3.5">
          {/* ✅ Mobile Search Icon */}
          <span
            className="lg:hidden cursor-pointer"
            onClick={() => setShowSearch(true)}
          >
            <CiSearch size={30} />
          </span>
          <Link href="/cart">
            <CiShoppingCart size={30} className="cursor-pointer" />
          </Link>
          <CgProfile size={30} className="cursor-pointer" />
        </div>
      </div>

      {/* ✅ Mobile Search Bar (appears when showSearch=true) */}
      {showSearch && (
        <div
          ref={searchRef}
          className="lg:hidden px-4 py-2 bg-gray-100 border-t flex items-center gap-2"
        >
          <CiSearch size={25} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full border-none outline-none bg-transparent"
            autoFocus
          />
        </div>
      )}

      {menu && (
        <div className="inset-0 bg-black/80 z-50 flex flex-col justify-center space-y-8 text-xl font-semibold text-white transition-all duration-300">
          <ul className="lg:hidden list-none flex flex-col justify-center items-center gap-4 text-[18px]">
            <li
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setMenu(false)}
            >
              Shop <IoArrowDown />
            </li>
            <li className="cursor-pointer" onClick={() => setMenu(false)}>
              On Sale
            </li>
            <Link href="/Category">
              <li className="cursor-pointer" onClick={() => setMenu(false)}>
                Categories
              </li>
            </Link>
            <Link href="/details/Details.jsx">
              <li className="cursor-pointer" onClick={() => setMenu(false)}>
                Product Details
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
