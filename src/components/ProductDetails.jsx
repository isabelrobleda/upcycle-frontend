import React from "react";
import CardProduct from "./CardProduct";

function ProductDetails({onProductChange}) {
  return (
    <div className="flex flex-col sm:items-center md:items-start ">
      <h2 className="font-bold text-xl text-gray-700 text-left mt-6 md:ml-36">
        1. Selecciona la categoría y tu producto *</h2>
      <CardProduct onProductChange={onProductChange}/>
    </div>
  );
}

export default ProductDetails;
