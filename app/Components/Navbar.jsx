"use client";
import Image from "next/image";
import Link from "next/link";
import { IoMenuOutline, IoClose } from "react-icons/io5";
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
    <>
      <div className="flex w-full justify-center items-center mb-10">
        <div className=" max-w-7xl h-12 p-2">
          <div className="flex items-center justify-evenly gap-10 px-4 py-2.5">
            <div className="lg:hidden">
              <button onClick={() => setMenu(!menu)}>
                {menu ? <IoClose size={30} /> : <IoMenuOutline size={30} />}
              </button>
            </div>

            <Link href="/Home">
              <div className="flex shrink-0">
                <h1 className="font-bold font-integral text-[32px]">SHOP.CO</h1>
              </div>
            </Link>

            <ul className="hidden list-none lg:flex items-center gap-4 w-[321px] text-[18px]">
              <li className="flex font-satoshi items-center text-[16px] gap-1 cursor-pointer">
                Shop
                <Image
                  src="/image/ArrowDown.svg"
                  alt="Arrow Down"
                  width={11}
                  height={6}
                  className="inline-block"
                />
              </li>
              <li className="cursor-pointer font-satoshi text-[16px]">
                On Sale
              </li>
              <Link href="/Category">
                <li className="cursor-pointer font-satoshi text-[16px]">
                  New Arrivals{" "}
                </li>
              </Link>
              <Link href="/details/Details.jsx">
                <li className="cursor-pointer font-satoshi text-[16px]">
                  Brands
                </li>
              </Link>
            </ul>

            <div className="hidden lg:flex items-center gap-4 bg-gray-300 rounded-[60px] p-1 w-[577px]">
              <span className="p-2">
                <Image
                  src="/image/searchicon.svg"
                  alt="Search Icon"
                  width={20}
                  height={20}
                  className="inline-block"
                />
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
                <Image
                  src="/image/searchicon.svg"
                  alt="Search Icon"
                  width={20}
                  height={20}
                  className="inline-block"
                />
              </span>
              <Link href="/cart">
                <Image
                  src="/image/carticon.svg"
                  alt="Cart Icon"
                  width={21}
                  height={21}
                  className="inline-block"
                />
              </Link>
              <Image
                src="/image/loignicon.svg"
                alt="Login Icon"
                width={21}
                height={21}
                className="inline-block"
              />
            </div>
          </div>

          {/* ✅ Mobile Search Bar (appears when showSearch=true) */}
          {showSearch && (
            <div
              ref={searchRef}
              className="lg:hidden px-4 py-2 bg-gray-100 border-t flex items-center gap-2"
            >
              <Image
                src="/image/searchicon.svg"
                alt="Search Icon"
                width={20}
                height={20}
                className="inline-block"
              />
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
                  Shop{" "}
                  <span>
                    <Image
                      src="/image/ArrowDown.svg"
                      alt="Arrow Down"
                      width={11}
                      height={6}
                      className="inline-block"
                    />
                  </span>
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
      </div>
    </>
  );
};

export default Navbar;
