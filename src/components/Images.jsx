import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import Angulos from "../assets/iconos-angulos.png";
import Light from "../assets/foco-icon.png";
import Resolution from "../assets/resolucion-icon.png";
import Limpieza from "../assets/limpieza-icon.png";
import CentralProduct from "../assets/central-product.png";

function Images() {
  const [UploadImages, setUploadImages] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [error, setError] = useState("");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "video/mp4", "video/mov"];
    const maxSize = 20 * 1024 * 1024;

    for(let file of selectedFiles) {
      if(!allowedTypes.includes(file.type)) {
        setError("Solo se permiten archivos PNG, JPG, MOV y MP4 para videos");
        return;
      }

      if(file.size > maxSize) {
        setError("El tamaño máximo permitido por archivo es de 20MB");
        return;
      }
    }

    setError("");

    setUploadImages(selectedFiles);
  };

  const handleInstructions = (e) => {
    e.preventDefault();
    openModal();
  };

  return (
    <div className="md:mx-36 mt-16">
      <h2 className="font-bold text-xl text-gray-700 text-left mt-6">
        4. Sube tus archivos *
      </h2>
      <p className="text-sm text-left text-gray-700 py-1">Añade al menos 4 fotos de su artículo desde varios ángulos. Los anuncios con mejores fotos se venden más rápido.</p>
      <p className="text-sm text-left text-gray-700 py-1">Si quieres vender línea blanca o
electrónicos, sube un video de max. 10
segundos y 20MB en donde (i) se vea el
producto encendido y trabajando; y (ii)
salga un calcetín para que comprobemos
que es un video reciente.</p>
      <p  onClick={handleInstructions} className="py-2 px-2 my-2 text-orange-400 font-semibold text-sm  hover:cursor-pointer border border-orange-400 rounded-md text-left hover:bg-orange-400 hover:text-white">
        Guía para tomar las mejores fotos y que vendas lo
        más rápido posible
      </p>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            display: "flex",
            flexDirection: "column",
            color: "gray",
            width: "75%",
            height: "95%",
            margin: "auto",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "3rem",
           
          },
        }}
      >
        <div className="flex flex-col px-4">
          <div>
            <h2 className="font-bold text-xl text-gray-700 text-center">Cómo tomar las mejores fotos</h2>
          </div>
          <div className="md:flex md:flex-col items-center align-middle py-4">
            <div className="md:flex md:flex-row border-orange-600 rounded-md p-4 bg-orange-600  md:w-1/2 items-center">
              <img src={Light} alt="icon-light" className="w-24 "/>
              <p className="text-white text-sm text-left">Asegúrate de tomar las fotos y videos de preferencia de día y con muy buena iluminación. Puedes asistirte con alguna lámpara que ilumine bien tu producto. De esta manera podrán verse mejor todos los detalles. </p>
            </div> 
          </div> 

          <div className="flex flex-col items-center align-middle py-4">
            <div className="md:flex md:flex-row border-orange-300 rounded-md p-4  bg-orange-600  md:w-1/2 items-center">
              <img src={Resolution} alt="icon-resolution" className="w-24"/>
              <p className="text-white text-sm text-left">Procura tomar tus fotos con un celular que tenga la mejor resolución posible (aceptamos hasta 20MB por archivo). Tus archivos no pueden verse borrosos.  </p>
            </div> 
          </div> 
          <div className="flex flex-col items-center align-middle py-4">
            <div className="md:flex md:flex-row border rounded-md p-4  bg-orange-600  md:w-1/2 items-center">
              <img src={Limpieza} alt="icon-light" className="w-24"/>
              <p className="text-white text-sm text-left">Es indispensable que tu producto esté completamente limpio y ordenado. Por ejemplo, si tu producto es una cama, procura que esté perfectamente tendida y su alrededor se vea limpio y ordenado.  </p>
            </div> 
          </div> 
          <div className="block md:px-28">
            <input type="checkbox" name="checkbox-photos" id="checkbox-1"/>
            <label htmlFor="checkbox-photos" className="pl-2 text-sm"><b>El producto es central. </b> Asegúrate de que el producto ocupe el 80% de la foto, tratando de evitar en la medida de lo posible lo que se encuentre a su alrededor. </label>
          </div>
          <div className="block md:px-28">
            <input type="checkbox" name="checkbox-photos" id="checkbox-2"/>
            <label htmlFor="checkbox-photos" className="pl-2 text-sm"><b>La foto estelar: </b> Ésta será la foto principal de tu producto en el catálogo. Tu producto debe apreciarse de frente lo más centrado posible.  </label>
          </div>
          <div className="flex flex-col items-center ">
            <img src={CentralProduct} alt="central-product" className="w-44"/>
          </div>
          <div className="block md:px-28">
            <input type="checkbox" name="checkbox-photos" id="checkbox-3"/>
            <label htmlFor="checkbox-photos" className="pl-2   text-sm">Toma <b>mínimo 4 fotos </b>de tu producto mostrando todos sus ángulos (frente, lados izquierdo y derecho y detrás). También puedes tomar fotos desde arriba o desde abajo de tu producto. Entre más fotos mandes, mejor trabajo de curación podremos hacer para tu producto e impulsar su venta. Por ejemplo:  </label>
            <div className="flex flex-col items-center "><img src={Angulos} alt="iconos-angulos-ejemplo" className="w-36" /></div>
          </div>
          <div className="block md:px-28">
            <input type="checkbox" name="checkbox-photos" id="checkbox-4"/>
            <label htmlFor="checkbox-photos" className="pl-2   text-sm">Sabemos que la mayoría de los productos tuvieron una vida previa y por lo tanto, algunos rasguños. ¡No temas mostrarlos! Dará más confianza a los compradores el enunciarlos y tener fotos de los mismos. Y recuerda que si hay más defectos de los que menciones al momento del pickup, podría cancelarse la venta pero aún así tendrás que cubrir el costo del pickup.   </label>
          </div>
          <div className="block md:px-28">
            <input type="checkbox" name="checkbox-photos" id="checkbox-5"/>
            <label htmlFor="checkbox-photos" className="pl-2 text-sm">Para los que venden línea blanca o electrónicos, toma un video con el aparato encendido donde muestres que el aparato funciona y no está roto o tiene fugas. 
</label>
          </div>
        </div>
        
        <div className="flex flex-col items-end md:px-28">
        <button onClick={closeModal} className="mt-6 px-4 border border-orange-600 text-orange-600 rounded-md py-2 hover:bg-orange-600 hover:text-white">Entendido</button>
        </div>
        
      </Modal>
      <div className="mt-2 flex rounded-lg border border-dashed border-gray-200 px-6 py-5">
        <div className="">
          <div className=" flex text-sm leading-6 text-gray-700">
            <label htmlFor="file-upload">
              <input
                type="file"
                accept="image/*, video/*"
                multiple
                onChange={handleImageChange}
                id="files"
                name="UploadImages"
                className="border ml-2 mt-3"
                required={true}
              />
              <br />
            </label>
          </div>
          <p className="text-xs leading-5 text-grey-700 text-left ml-2 mt-1 ">
           PNG, JPG, MOV y MP4. Hasta 20MB por archivo y hasta 10 archivos.
          </p>
          {error && <p className="text-red-600 text-sm text-left font-semibold ml-2">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Images;
