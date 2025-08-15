import HeroSection from "../Components/HeroSection";
import Brands from "../Components/Brands";
import BrowseByStyle from "../Components/browseByStyle";
import ProductDisplay from "../Components/Card";
import ReviewSlider from "../productDetail/ReviewSlider";

import React from "react";

function HomePage() {
  return (
    <>
      <HeroSection />
      <Brands />
      <ProductDisplay title={"New Arrivals"} category={"mens-shirts"} />
      <ProductDisplay title={"Top Selling"} category={"mens-watches"} />
      <BrowseByStyle />
      <ReviewSlider />
    </>
  );
}

export default HomePage;
