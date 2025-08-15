"use client";
import { useState, useEffect } from "react";

export default function useReviews(initialLimit = 10) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchReviews = async (
    limit = initialLimit,
    append = false,
    skipValue = 0
  ) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skipValue}`
      );
      const data = await res.json();

      if (data.products.length < limit) setHasMore(false);
      const mapped = data.products.map((p) => ({
        author: p.title,
        comment: p.description,
        rating: p.rating,
      }));

      setReviews((prev) => (append ? [...prev, ...mapped] : mapped));
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews(initialLimit, false, page * initialLimit);
  }, [page]);

  const loadMore = (limit = initialLimit) => {
    setPage((prev) => prev + 1);
    fetchReviews(limit, true, (page + 1) * limit);
  };

  return { reviews, loading, hasMore, loadMore };
}
