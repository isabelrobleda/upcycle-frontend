import React from "react";
import ProductDetails from "./ProductDetails";
import Description from "./Description";
import ProductOverview from "./ProductOverview";
import Images from "./Images";
import VendorInfo from "./VendorInfo";
import PaymentInfo from "./PaymentInfo";

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
            <h1 className="font-bold text-3xl text-gray-700">Comencémos con la venta de tus muebles</h1>
            <p className="text-sm">Por favor, llena la siguiente información, no te tomará más de 5 min</p>
        </div>
        <div>
            <ProductDetails />
        </div>
        <div>
            <Description />
        </div>
        <div>
            <ProductOverview />
        </div>
        <div>
            <Images />
        </div>
        <div>
            <VendorInfo />
        </div>
        <div>
            <PaymentInfo />
        </div>
       
        <button type="submit" className="border bg-slate-500 p-2 rounded-md">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
