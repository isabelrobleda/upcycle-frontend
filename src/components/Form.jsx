import React from "react";
import ProductDetails from "./ProductDetails";
import Description from "./Description";
import ProductOverview from "./ProductOverview";
import Images from "./Images";
import VendorInfo from "./VendorInfo";
import PaymentInfo from "./PaymentInfo";
import axios from "axios";

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");

  };

  const upload = () => {
    const formData = new FormData();
    const images = document.querySelector("#images").files;
    for (let i = 0; i < images.length; i++) {
        formData.append(`UploadImages`, images[i]);
    }   
    axios.post("http://localhost:5005/api/vendor-form", formData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  

  
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
            <h1 className="font-bold text-2xl text-gray-700">Comencémos con la venta de tus muebles</h1>
            <p className="text-sm pt-2 pb-10">Por favor, llena la siguiente información, no te tomará más de 5 min</p>
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
        <br />
        <button type="submit" className="border border-slate-500 p-2 rounded-md text-sm hover:bg-orange-300" onClick={upload} >
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
