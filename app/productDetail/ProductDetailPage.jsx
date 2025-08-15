import ProductDisplay from "../Components/Card";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import ItemDetail from "./Detail";
import ReviewGrid from "./ReviewGrid";
import Footer from "../Components/Footer";

function ProductDetailPage() {
  return (
    <>
      <Banner />
      <Navbar />
      <ItemDetail />
      <ReviewGrid />
      <ProductDisplay title={"You Might Also Like"} category={"beauty"} />
      <Footer />
    </>
  );
}

export default ProductDetailPage;
