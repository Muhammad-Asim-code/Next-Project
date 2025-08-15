"use client";
import ProductDisplay from "../Components/Card";
import ItemDetail from "../productDetail/Detail";
import ReviewGrid from "../productDetail/ReviewGrid";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../ReduxStore/cartSlice";

export default function Details({ id }) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  console.log(` id is ${id}`);

  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error("Fetch error:", error));
    }
  }, [id]);

  if (!product) return <p>loading...</p>;

  return (
    <>
      <ItemDetail
        product={product}
        addToCart={() => dispatch(addToCart(product))}
      />
      <ReviewGrid />
      <ProductDisplay title="You Might Also Like" category="beauty" />
    </>
  );
}
