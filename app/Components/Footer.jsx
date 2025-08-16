// components/Footer.jsx
import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F0F0F0] text-black mt-40">
      {/* Newsletter Section */}
      <div className="bg-black text-white rounded-xl mx-auto max-w-6xl p-8 flex flex-col lg:flex-row items-center justify-between gap-4 -translate-y-1/2">
        <h2 className="text-2xl lg:text-[40PX] font-bold text-center lg:text-left">
          STAY UPTO DATE ABOUT <br className="hidden lg:block" /> OUR LATEST
          OFFERS
        </h2>
        <div className="flex flex-col gap-3 w-full lg:w-[350px]">
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2">
            <span className="text-gray-500">
              <MdOutlineEmail />
            </span>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 outline-none text-black bg-transparent"
            />
          </div>
          <button className="bg-white text-black font-medium rounded-full py-2 hover:bg-gray-200 transition">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 pb-6 ">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="font-bold text-lg">SHOP.CO</h3>
            <p className="text-sm text-gray-600 mt-2">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="bg-white hover:bg-black hover:text-white text-black p-2 rounded-full w-8 h-8" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="bg-white hover:bg-black hover:text-white text-black p-2 rounded-full w-8 h-8" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="bg-white hover:bg-black hover:text-white text-black p-2 rounded-full w-8 h-8" />
              </a>
              <a
                href="https://www.pinterest.com/azaka064"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterestP className="bg-white hover:bg-black hover:text-white text-black p-2 rounded-full w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="grid grid-cols-2 md:grid-cols-4 col-span-1 md:col-span-4 gap-8">
            <div>
              <h4 className="font-bold mb-3">COMPANY</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Works</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h4 className="font-bold mb-3">HELP</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#">Customer Support</a>
                </li>
                <li>
                  <a href="#">Delivery Details</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>

            {/* FAQ */}
            <div>
              <h4 className="font-bold mb-3">FAQ</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#">Account</a>
                </li>
                <li>
                  <a href="#">Manage Deliveries</a>
                </li>
                <li>
                  <a href="#">Orders</a>
                </li>
                <li>
                  <a href="#">Payments</a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold mb-3">RESOURCES</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#">Free eBooks</a>
                </li>
                <li>
                  <a href="#">Development Tutorial</a>
                </li>
                <li>
                  <a href="#">How to - Blog</a>
                </li>
                <li>
                  <a href="#">Youtube Playlist</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center border-t border-gray-300">
        <p className="text-sm text-gray-500">
          Shop.co © 2000-2023, All Rights Reserved
        </p>
        <div className="flex gap-3 mt-2 md:mt-0">
          <Image
            src="/image/Visa.png"
            alt="Visa"
            width={35}
            height={25}
            className="bg-white p-1 rounded-lg"
          />
          <Image
            src="/image/MasterCard.png"
            alt="Mastercard"
            width={35}
            height={25}
            className="bg-white p-1 rounded-lg"
          />
          <Image
            src="/image/Paypal.png"
            alt="Paypal"
            width={35}
            height={25}
            className="bg-white p-1 rounded-lg"
          />
          <Image
            src="/image/APay.png"
            alt="Apple Pay"
            width={35}
            height={25}
            className="bg-white p-1 rounded-lg"
          />
          <Image
            src="/image/GPay.png"
            alt="Google Pay"
            width={35}
            height={25}
            className="bg-white p-1 rounded-lg"
          />
        </div>
      </div>
    </footer>
  );
}
