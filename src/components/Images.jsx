import React from "react";
import { useState } from "react";
import axios from "axios";

function Images() {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImages(selectedFiles);
  };

  const handleInstructions = (e) => {
    e.preventDefault();
    alert(
      "Asegúrate de que las fotos sean de buena calidad y que se vea bien el producto.\n3. Sube fotos de diferentes ángulos y detalles del producto.\n4. Sube fotos de la etiqueta de la marca o de la fecha de fabricación si es posible.\n5. Sube fotos de cualquier detalle o imperfección del producto.\n6. Sube fotos de cómo se ve el producto en un espacio real.\n7. Sube fotos del producto con otros objetos para dar una idea de su tamaño.\n8. Sube fotos de cómo se ve el producto en diferentes momentos del día.\n9. Sube fotos de cómo se ve el producto en diferentes estaciones del año.\n10. Sube fotos de cómo se ve el producto con diferentes tipos de luz.\n\n¡Gracias por seguir estas instrucciones!"
    );
  };

 

  return (
    <>
      <h2 className="font-bold text-xl text-gray-700 text-left mt-6">
        Sube tus fotos
      </h2>
      <p className="text-sm text-gray-500 text-left">
        Sigue estas instrucciones para subir las mejores fotos y que vendas lo
        más rápido posible
      </p>
      <p
        className="text-sm text-gray-500 text-left underline font-semibold"
        onClick={handleInstructions}
      >
        Instrucciones
      </p>
      <div className="mt-2 flex rounded-lg border border-dashed border-gray-200 px-6 py-5">
        <div className="">
          <div className=" flex text-sm leading-6 text-gray-700">
            <label htmlFor="file-upload">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                id="images"
                name="images"
                className="border ml-2 mt-3"
              />
              <br />
            </label>
          </div>
          <p className="text-xs leading-5 text-grey-700 text-left ml-2 mt-1">
            PNG y JPG hasta 5MB.
          </p>
          <p className="text-xs leading-5 text-grey-700 text-lef ml-2">
            Selecciona todas las fotos a la vez y da click en "abrir"
          </p>
         
        </div>
      </div>
    </>
  );
}

export default Images;
