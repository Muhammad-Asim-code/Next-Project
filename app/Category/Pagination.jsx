"use client";

import React, { useEffect, useState } from "react";
import { GoFilter } from "react-icons/go";
import Link from "next/link";
import StarRating from "../productDetail/StarRating";
const PaginationApi = ({ category, title }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const limit = 9;

  useEffect(() => {
    if (!category) return;
    setLoading(true);

    fetch(
      `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${
        (page - 1) * limit
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.products || []);
        setTotalPage(Math.ceil(data.total / limit));
        setLoading(false);
      })
      .catch((error) => error);
  }, [category, page]);

  const changePage = (newPage) => {
    if (newPage < 1 || newPage > totalPage) return;
    setPage(newPage);
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-around">
          <h1 className="m-4 text-4xl">{title}</h1>
          <p className="flex gap-2">
            Total Products{" "}
            <Link href="/Category/SideBar.jsx">
              <GoFilter size={24} />
            </Link>
          </p>
        </div>

        {loading && <p>Loading...</p>}

        <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-4">
          {product.map((item) => (
            <div key={item.id} className="border rounded p-4">
              <Link href={`/details/${item.id}`}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <h3 className="mt-2">{item.title}</h3>
                <p>${item.price}</p>
                <StarRating rating={item.rating} />
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          <button
            onClick={() => changePage(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 border rounded disabled:opacity-50 "
          >
            Prev
          </button>

          {Array.from({ length: totalPage }, (_, index) => (
            <button
              key={index}
              onClick={() => changePage(index + 1)}
              className={`px-3 py-1 border rounded ${
                page === index + 1 ? "bg-black text-white" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => changePage(page + 1)}
            disabled={page === totalPage}
            className="px-4 py-2 border rounded disabled:opacity-50 active:bg-black active:text-white"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default PaginationApi;
