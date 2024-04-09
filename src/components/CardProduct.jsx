import React, { useState } from "react";
import BedIcon from "../assets/bed-icon.svg";
import SofaIcon from "../assets/sofa-icon.svg";
import TableIcon from "../assets/table-icon.svg";
import LampIcon from "../assets/lamp-icon.svg";
import StorageIcon from "../assets/storage-icon.svg";
import ElectronicsIcon from "../assets/electronics-icon.svg";
import DecorIcon from "../assets/decor-icon.svg";
import KitchenIcon from "../assets/kitchen-icon.png";
import GardenIcon from "../assets/garden-icon.png";
import PingPongIcon from "../assets/pingpong-icon.png";
import CribIcon from "../assets/crib-icon.png";
import WashingMachine from "../assets/washing-machine.png";
import Desk from "../assets/desk-icon.png";

function CardProduct({ onProductChange }) {
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");

  const handleCategorySelect = (category) => {
    setCategory(category);
  };
  const handleProductSelect = (product) => {
    setProduct(product);
    onProductChange(product);
  };

  const renderSubcategory = () => {

    switch (category) {
      case "Cocina":
        return (
          <>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Refrigerador" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Refrigerador")}
            >
              <label
                className="text-gray-700 p-2 text-center hover:cursor-pointer"
                htmlFor="Product"
              >
                Refrigerador
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Banco" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Banco")}
            >
              <label
                className="text-gray-700 p-2 text-center hover:cursor-pointer"
                htmlFor="Product"
              >
                Banco
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Silla" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Silla")}
            >
              <label
                className="text-gray-700 p-2 text-center hover:cursor-pointer"
                htmlFor="Product"
              >
                Silla
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Mesa" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Mesa")}
            >
              <label
                className="text-gray-700 p-2 text-center hover:cursor-pointer"
                htmlFor="Product"
              >
                Mesa
              </label>
            </div>
          </>
        );
      case "Recámara":
        return (
          <>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Base de Cama" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Base de Cama")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Base de Cama
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Cabecera" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Cabecera")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Cabecera
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Buró" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Buró")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Buró
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Cómoda" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Cómoda")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Cómoda
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Ottoman" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Ottoman")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Ottoman
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Ropero" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Ropero")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Ropero
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Cajonera" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Cajonera")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Cajonera
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Armario" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Armario")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Armario
              </label>
            </div>
          </>
        );
      case "Comedor":
        return (
          <>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Banco" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Banco")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Banco
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Silla" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Silla")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Silla
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Mesa de comedor" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Mesa de comedor")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Mesa de comedor
              </label>
            </div>
          </>
        );
      case "Sala":
        return (
          <>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Sillón" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Sillón")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Sillón
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Sofá" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Sofá")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Sofá
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Mesa de centro" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Mesa de centro")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Mesa de centro
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Mueble de T.V." ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Mueble de T.V.")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Mueble de T.V.
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Mesa auxiliar" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Mesa auxiliar")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Mesa auxiliar
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Trinchador" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Trinchador")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Trinchador
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Vitrina" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Vitrina")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Vitrina
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Barra" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Barra")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Barra
              </label>
            </div>
          </>
        );
      case "Jardín y Terraza":
        return (
          <>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Mesa de Exterior" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Mesa de Exterior")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Mesa de Exterior
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Silla de exterior" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Silla de exterior")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Silla de exterior
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Sombrilla" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Sombrilla")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Sombrilla
              </label>
            </div>
          </>
        );
      case "Oficina":
        return (
          <>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Mesa de trabajo" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Mesa de trabajo")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Mesa de trabajo
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Escritorio" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Escritorio")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Escritorio
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Silla de trabajo" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Silla de trabajo")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Silla de trabajo
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Librero" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Librero")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Librero
              </label>
            </div>
          </>
        );
      case "Almacenamiento":
        return (
          <>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Trinchador" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Trinchador")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Trinchador
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Ropero" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Ropero")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Ropero
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Closet" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Closet")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Closet
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Cajonera" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Cajonera")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Cajonera
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Armario" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Armario")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Armario
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Baúl" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Baúl")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Baúl
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Bufete" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Bufete")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Bufete
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Cómoda" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Cómoda")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Cómoda
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Vitrina" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Vitrina")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Vitrina
              </label>
            </div>
          </>
        );
      case "Sala de T.V.":
        return (
          <>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Sillón" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Sillón")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Sillón
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Sofá" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Sofá")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Sofá
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Televisión" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Televisión")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Televisión
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Mesa de centro" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Mesa de centro")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Mesa de centro
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Mueble de televisión" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Mueble de televisión")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Mueble de televisión
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Mueble modular" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Mueble modular")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Mueble modular
              </label>
            </div>
          </>
        );
      case "Entretenimiento":
        return (
          <>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Mesa de fútbol" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Mesa de fútbol")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Mesa de fútbol
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Mesa de billar" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Mesa de billar")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Mesa de billar
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Mesa de Ping Pong" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Mesa de Ping Pong")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Mesa de Ping Pong
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Mesa de juego" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Mesa de juego")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Mesa de juego
              </label>
            </div>
          </>
        );
      case "Decoración":
        return (
          <>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Lámpara" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Lámpara")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Lámpara
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Tapete" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Tapete")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Tapete
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Cuadro" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Cuadro")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Cuadro
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Espejo" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Espejo")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Espejo
              </label>
            </div>
          </>
        );
      case "Bebés y niños":
        return (
          <>
           <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Base de cama de niño" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Base de cama de niño")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Base de cama de niño
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Carriola" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Carriola")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Carriola
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Silla de niño" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Silla de niño")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Silla de niño
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Tina" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Tina")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Tina
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Cambiador" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Cambiador")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Cambiador
              </label>
            </div>
          </>
        )
      case "Línea blanca y Electrónicos":
        return (
          <>
           <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Refrigerador" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Refrigerador")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Refrigerador
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Lavadora" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Lavadora")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Lavadora
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Centro de Lavado" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Centro de Lavado")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Centro de Lavado
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-70 h-50 border ${
                product === "Televisión" ? "border-orange-300" : ""
              }`}
              onClick={() => handleProductSelect("Televisión")}
            >
              <label
                className="text-gray-700 p-2 text-center"
                htmlFor="Product"
              >
                Televisión
              </label>
            </div>
          </>
        )
      }
  };

  return (
    <>
      <div className="grid md:grid-cols-4 md:mx-36 justify-center">
        <div
          className={`flex flex-col w-56 rounded-md m-1 bg-orange-200 hover:bg-orange-300 focus:bg-orange-300 hover:cursor-pointer ${
            category === "Cocina" ? "bg-orange-300" : ""
          }`}
          value={category}
          onClick={() => handleCategorySelect("Cocina")}
        >
          <img className="h-40" src={KitchenIcon} alt="" />
          <div className="">
            <h4 className="text-white pb-5">Cocina</h4>
          </div>
        </div>
        <div
          className={`flex flex-col w-56 rounded-md m-1 bg-orange-200 hover:bg-orange-300 focus:bg-orange-300 hover:cursor-pointer ${
            category === "Recámara" ? "bg-orange-300" : ""
          }`}
          value={category}
          onClick={() => handleCategorySelect("Recámara")}
        >
          <img className="h-40" src={BedIcon} alt="" />
          <div className="">
            <h4 className="text-white pb-5">Recámara</h4>
          </div>
        </div>
        <div
          className={`flex flex-col w-56 rounded-md m-1 bg-orange-200 hover:bg-orange-300 focus:bg-orange-300 hover:cursor-pointer ${
            category === "Comedor" ? "bg-orange-300" : ""
          }`}
          value={category}
          onClick={() => handleCategorySelect("Comedor")}
        >
          <img className="h-40" src={TableIcon} alt="" />
          <div className="">
            <h4 className="text-white pb-5">Comedor</h4>
          </div>
        </div>
        <div
          className={`flex flex-col w-56  rounded-md m-1 bg-orange-200 hover:bg-orange-300 focus:bg-orange-300 hover:cursor-pointer ${
            category === "Sala" ? "bg-orange-300" : ""
          }`}
          value={category}
          onClick={() => handleCategorySelect("Sala")}
        >
          <img className="h-40" src={SofaIcon} alt=""></img>
          <div className="">
            <h4 className="text-white pb-5">Sala</h4>
          </div>
        </div>
        <div
          className={`flex flex-col w-56 rounded-md m-1 bg-orange-200 hover:bg-orange-300 focus:bg-orange-300 hover:cursor-pointer ${
            category === "Jardín y Terraza" ? "bg-orange-300" : ""
          }`}
          value={category}
          onClick={() => handleCategorySelect("Jardín y Terraza")}
        >
          <img className=" h-40" src={GardenIcon} alt=""></img>
          <div className="">
            <h4 className="text-white pb-5">Jardín y Terraza</h4>
          </div>
        </div>
        <div
          className={`flex flex-col w-56 rounded-md m-1 bg-orange-200 hover:bg-orange-300 focus:bg-orange-300 hover:cursor-pointer ${
            category === "Oficina" ? "bg-orange-300" : ""
          }`}
          value={category}
          onClick={() => handleCategorySelect("Oficina")}
        >
          <div className="flex flex-col justify-center items-center">
          <img className="h-40 w-42" src={Desk} alt="" />
          </div>
          
          <div className="">
            <h4 className="text-white pb-5">Oficina</h4>
          </div>
        </div>
        <div
          className={`flex flex-col w-56 rounded-md m-1 bg-orange-200 hover:bg-orange-300 focus:bg-orange-300 hover:cursor-pointer ${
            category === "Almacenamiento" ? "bg-orange-300" : ""
          }`}
          value={category}
          onClick={() => handleCategorySelect("Almacenamiento")}
        >
          <img className="h-40" src={StorageIcon} alt="" />
          <div className="">
            <h4 className="text-white pb-5">Almacenamiento</h4>
          </div>
        </div>
        <div
          className={`flex flex-col w-56 rounded-md m-1 bg-orange-200 hover:bg-orange-300 focus:bg-orange-300 hover:cursor-pointer ${
            category === "Sala de T.V." ? "bg-orange-300" : ""
          }`}
          value={category}
          onClick={() => handleCategorySelect("Sala de T.V.")}
        >
          <img className="h-40" src={ElectronicsIcon} alt="" />
          <div className="">
            <h4 className="text-white pb-5">Sala de T.V.</h4>
          </div>
        </div>
        <div
          className={`flex flex-col w-56 rounded-md m-1 bg-orange-200 hover:bg-orange-300 focus:bg-orange-300 hover:cursor-pointer ${
            category === "Entretenimiento" ? "bg-orange-300" : ""
          }`}
          value={category}
          onClick={() => handleCategorySelect("Entretenimiento")}
        >
          <img className="h-40" src={PingPongIcon} alt="" />
          <div className="">
            <h4 className="text-white pb-5">Entretenimiento</h4>
          </div>
        </div>
        <div
          className={`flex flex-col w-56 rounded-md m-1 bg-orange-200 hover:bg-orange-300 focus:bg-orange-300 hover:cursor-pointer ${
            category === "Decoración" ? "bg-orange-300" : ""
          }`}
          value={category}
          onClick={() => handleCategorySelect("Decoración")}
        >
          <img className="h-40" src={DecorIcon} alt="" />
          <div className="">
            <h4 className="text-white pb-5">Decoración</h4>
          </div>
        </div>
        <div
          className={`flex flex-col w-56 rounded-md m-1 bg-orange-200 hover:bg-orange-300 focus:bg-orange-300 hover:cursor-pointer ${
            category === "Bebés y niños" ? "bg-orange-300" : ""
          }`}
          value={category}
          onClick={() => handleCategorySelect("Bebés y niños")}
        >
          <img className="h-40" src={CribIcon} alt="" />
          <div className="">
            <h4 className="text-white pb-5">Bebés y niños</h4>
          </div>
        </div>
        <div
          className={`flex flex-col w-56 rounded-md m-1 bg-orange-200 hover:bg-orange-300 focus:bg-orange-300  hover:cursor-pointer ${
            category === "Línea blanca y Electrónicos" ? "bg-orange-300" : ""
          }`}
          value={category}
          onClick={() => handleCategorySelect("Línea blanca y Electrónicos")}
        >
          <div className="flex flex-col justify-center items-center">
            {" "}
            <img className="h-40 w-40" src={WashingMachine} alt="" />
          </div>

          <div className="">
            <h4 className="text-white pb-5">Línea blanca y Electrónicos</h4>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-flow-col md:mx-36 justify-center mt-3">
        {category && renderSubcategory()}
      </div>
      <br />
    </>
  );
}

export default CardProduct;
