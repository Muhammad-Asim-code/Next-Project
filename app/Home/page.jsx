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
      <ProductDisplay title={"New Arrivals"} category={"laptops"} />
      <ProductDisplay title={"Top Selling"} category={"smartphones"} />
      <BrowseByStyle />
      <ReviewSlider />
    </>
  );
}

export default HomePage;
