import Banner from "./Banner";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Brands from "./Brands";
import ProductDisplay from "./Card";
import BrowseByStyle from "./browseByStyle";
import ReviewSlider from "../productDetail/ReviewSlider";
import Footer from "./Footer";

import React from "react";

function HomePage() {
  return (
    <>
      <Banner />
      <Navbar />
      <HeroSection />
      <Brands />
      <ProductDisplay title={"New Arrivals"} category={"laptops"} />
      <ProductDisplay title={"Top Selling"} category={"smartphones"} />
      <BrowseByStyle />
      <ReviewSlider />
      <Footer />
    </>
  );
}

export default HomePage;
