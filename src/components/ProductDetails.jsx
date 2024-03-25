import React from "react";
import CardProduct from "./CardProduct";

function ProductDetails() {
  return (
    <div className="flex flex-wrap flex-col">
      <h2 className="font-bold text-xl text-gray-700 text-left">Sobre el Producto</h2>
      <CardProduct />
    </div>
  );
}

export default ProductDetails;
