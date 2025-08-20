import React from "react";

function ProductInfo({ product }) {
  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

      <p className="text-gray-700 mb-8">
        <strong>Warranty:</strong> {product.warrantyInformation}
      </p>

      <div className="space-y-4">
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((rev, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow-sm bg-gray-200"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">{rev.reviewerName}</h3>
                <span className="text-sm text-gray-500">
                  {rev.date.slice(0, 10)}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-1">{rev.reviewerEmail}</p>
              <p className="text-gray-700 mb-2">{rev.comment}</p>
              <p className="text-yellow-600 font-medium">⭐ {rev.rating}/5</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>
    </div>
  );
}

export default ProductInfo;
