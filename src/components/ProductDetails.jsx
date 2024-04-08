import React from "react";
import CardProduct from "./CardProduct";

function ProductDetails({onProductChange}) {
  return (
    <div className="flex flex-wrap flex-col">
      <h2 className="font-bold text-xl text-gray-700 text-left mt-6 md:ml-36">
        Selecciona la categoría y tu Producto </h2>
      <CardProduct onProductChange={onProductChange}/>
    </div>
  );
}

export default ProductDetails;
