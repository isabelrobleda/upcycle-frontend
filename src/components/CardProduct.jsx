import React, { useState } from "react";
import BedIcon from "../assets/bed-icon.svg";
import ChairIcon from "../assets/chair-icon.svg";
import SofaIcon from "../assets/sofa-icon.svg";
import TableIcon from "../assets/table-icon.svg";
import LampIcon from "../assets/lamp-icon.svg";
import StorageIcon from "../assets/storage-icon.svg";
import ElectronicsIcon from "../assets/electronics-icon.svg";
import DecorIcon from "../assets/decor-icon.svg";

function CardProduct() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const handleProductSelect = (productName) => {
    setSelectedProduct(productName);
  };

  const renderSubcategory = () => {
    switch (selectedProduct) {
      case "Camas":
        return (
          <>
            <label htmlFor="Product" className="text-gray-700 block text-md pr-2">Subcategoría:</label>
            <input type="text" className="border rounded p-1 mb-2 text-md" placeholder="Cama Queen" />
          </>
        )
      case "Mesas": 
      return (
        <>
          <label htmlFor="Product" className="text-gray-700 block pr-2">Subcategoría:</label>
          <input type="text" className="border rounded p-1 mb-2" placeholder="Mesa de Comedor" />
        </>
      )
      case "Sillones":
        return (
          <>
            <label htmlFor="Product" className="text-gray-700 block pr-2">Subcategoría:</label>
            <input type="text" className="border rounded p-1 mb-2" placeholder="Sillón Reclinable" />
          </>
        )
        case "Sillas":
          return (
            <>
              <label htmlFor="Product" className="text-gray-700 block pr-2">Subcategoría:</label>
              <input type="text" className="border rounded p-1 mb-2" placeholder="Silla de Oficina" />
            </>
          )
       case "Iluminación":
        return (
          <>
            <label htmlFor="Product" className="text-gray-700 block pr-2">Subcategoría:</label>
            <input type="text" className="border rounded p-1 mb-2" placeholder="Lámpara de Pie" />
          </>
        )
      case "Gabinetes":
      return (
        <>
          <label htmlFor="Product" className="text-gray-700 block pr-2">Subcategoría:</label>
          <input type="text" className="border rounded p-1 mb-2" placeholder="Gabinete de Cocina" />
        </>
      )
      case "Electrónicos":
        return (
          <>
            <label htmlFor="Product" className="text-gray-700 block pr-2">Subcategoría:</label>
            <input type="text" className="border rounded p-1 mb-2" placeholder="Televisión" />
          </>
        )
      case "Decoración":
        return (
          <>
            <label htmlFor="Product" className="text-gray-700 block pr-2">Subcategoría:</label>
            <input type="text" className="border rounded p-1 mb-2" placeholder="Cuadro" />
          </>
        )
    }
   }

  return (
    <>
      <div className="grid md:grid-cols-4 md:mx-10">
        <div
          className={`flex flex-col rounded-md m-1 w-50 h-50 bg-orange-200 hover:bg-orange-300 focus:bg-orange-300 ${
            selectedProduct === "Camas" ? "bg-orange-300" : ""
          }`}
          onClick={() => handleProductSelect("Camas")}
        >
          <img className="h-60" src={BedIcon} alt="" />
          <div className="">
            <h4 className="text-white pb-5">Camas</h4>
          </div>
        </div>
        <div
          className={`flex flex-col rounded-md m-1 w-50 h-50 bg-orange-200 hover:bg-orange-300 focus:bg-orange-300 ${
            selectedProduct === "Mesas" ? "bg-orange-300" : ""
          }`}
          onClick={() => handleProductSelect("Mesas")}
        >
          <img className="h-60" src={TableIcon} alt="" />
          <div className="">
            <h4 className="text-white pb-5">Mesas</h4>
          </div>
        </div>
        <div
          className={`flex flex-col rounded-md m-1 w-50 h-50 bg-orange-200 hover:bg-orange-300 focus:bg-orange-300 ${
            selectedProduct === "Sillones" ? "bg-orange-300" : ""
          }`}
          onClick={() => handleProductSelect("Sillones")}
        >
          <img className="h-60" src={SofaIcon} alt=""></img>
          <div className="">
            <h4 className="text-white pb-5">Sillones</h4>
          </div>
        </div>
        <div
          className={`flex flex-col rounded-md m-1 w-50 h-50 bg-orange-200 hover:bg-orange-300 focus:bg-orange-300 ${
            selectedProduct === "Sillas" ? "bg-orange-300" : ""
          }`}
          onClick={() => handleProductSelect("Sillas")}
        >
          <img className="h-60" src={ChairIcon} alt=""></img>
          <div className="">
            <h4 className="text-white pb-5">Sillas</h4>
          </div>
        </div>
        <div
          className={`flex flex-col rounded-md m-1 w-50 h-50 bg-orange-200 hover:bg-orange-300 focus:bg-orange-300 ${
            selectedProduct === "Iluminación" ? "bg-orange-300" : ""
          }`}
          onClick={() => handleProductSelect("Iluminación")}
        >
          <img className="h-60" src={LampIcon} alt="" />
          <div className="">
            <h4 className="text-white pb-5">Iluminación</h4>
          </div>
        </div>
        <div
          className={`flex flex-col rounded-md m-1 w-50 h-50 bg-orange-200 hover:bg-orange-300 focus:bg-orange-300 ${
            selectedProduct === "Gabinetes" ? "bg-orange-300" : ""
          }`}
          onClick={() => handleProductSelect("Gabinetes")}
        >
          <img className="h-60" src={StorageIcon} alt="" />
          <div className="">
            <h4 className="text-white pb-5">Gabinetes</h4>
          </div>
        </div>
        <div
          className={`flex flex-col rounded-md m-1 w-50 h-50 bg-orange-200 hover:bg-orange-300 focus:bg-orange-300 ${
            selectedProduct === "Electrónicos" ? "bg-orange-300" : ""
          }`}
          onClick={() => handleProductSelect("Electrónicos")}
        >
          <img className="h-60" src={ElectronicsIcon} alt="" />
          <div className="">
            <h4 className="text-white pb-5">Electrónicos</h4>
          </div>
        </div>
        <div
          className={`flex flex-col rounded-md m-1 w-50 h-50 bg-orange-200 hover:bg-orange-300 focus:bg-orange-300 ${
            selectedProduct === "Decoración" ? "bg-orange-300" : ""
          }`}
          onClick={() => handleProductSelect("Decoración")}
        >
          <img className="h-60" src={DecorIcon} alt="" />
          <div className="">
            <h4 className="text-white pb-5">Decoración</h4>
          </div>
        </div>
        <div className="mt-4 flex justify-center items-center">
        {selectedProduct && renderSubcategory()}
      </div>
      </div>
      <br />
    </>
  );
}

export default CardProduct;
