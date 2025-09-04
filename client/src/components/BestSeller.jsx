import { useState } from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext.jsx";
const BestSeller = () => {
  const { products } = useAppContext();
  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Menu</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {products.filter(product => product.inStock).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};
export default BestSeller;
