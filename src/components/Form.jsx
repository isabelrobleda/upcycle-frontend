import React, { useState } from "react";
import ProductDetails from "./ProductDetails";
import Description from "./Description";
import ProductOverview from "./ProductOverview";
import Images from "./Images";
import VendorInfo from "./VendorInfo";
import PaymentInfo from "./PaymentInfo";
import axios from "axios";
import Logo from "../assets/logo-upcycle.png";
import { Link } from "react-router-dom";
import FirstForm from "./FirstForm";
import Modal from "react-modal";

function Form() {
  const [firstModalisOpen, setFirstModalIsOpen] = useState(true);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [sectionStatus, setSectionStatus] = useState({
    Urgency: true,
    ProductDetails: false,
    Description: false,
    ProductOverview: false,
    Images: false,
    VendorInfo: false,
    PaymentInfo: false,
  });

  const [formData, setFormData] = useState({
    Urgency: "",
    ProductInformation: {
      product: "",
      description: "",
      stateOfProduct: "",
      brand: [""],
      usage: [""],
      height: "",
      width: "",
      depth: "",
      weight: "",
      material: [""],
    },
    VendorInformation: {
      city: "",
      postalCode: "",
      address: "",
      region: "",
      colony: "",
      map: "",
      elevator: false,
      noElevatorFloors: "",
      dismantle: false,
      seVuela: false,
      floors: "",
    },
    PaymentInformation: {
      bankDetails: "",
      name: "",
      nameOfHolder: "",
      nameOfBank: "",
      accountNumber: "",
      phone: "",
    },
  });

  const [UploadImages, setUploadImages] = useState([]);

  const [urgency, setUrgency] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await upload(formData, UploadImages);
      setModalIsOpen(true);
    } catch (error) {
      console.error("Error uploading form data:", error);
    }
  };

  const [paymentInfoCompleted, setPaymentInfoCompleted] = useState(false);

  const handleUrgencyChange = (urgency) => {
    setUrgency(urgency);
    setFormData({ ...formData, Urgency: urgency });
    setSectionStatus({
      ...sectionStatus,
      ProductDetails: true,
      Urgency: false,
    });
  };

  const handleFirstModalChange = () => {
    setFirstModalIsOpen(false);
  };

  const handleProductChange = (product) => {
    setFormData({
      ...formData,
      ProductInformation: { ...formData.ProductInformation, product },
    });
    setSectionStatus({ ...sectionStatus, Description: true });
  };

  const handleDescriptionChange = (description) => {
    setFormData({
      ...formData,
      ProductInformation: { ...formData.ProductInformation, description },
    });
  };

  const handleStateOfProductChange = (stateOfProduct) => {
    setFormData({
      ...formData,
      ProductInformation: { ...formData.ProductInformation, stateOfProduct },
    });
    setSectionStatus({ ...sectionStatus, ProductOverview: true });
  };

  const handleBrandChange = (brand) => {
    setFormData({
      ...formData,
      ProductInformation: { ...formData.ProductInformation, brand },
    });
  };

  const handleUseChange = (usage) => {
    setFormData({
      ...formData,
      ProductInformation: { ...formData.ProductInformation, usage },
    });
  };

  const handleMaterialChange = (material) => {
    setFormData({
      ...formData,
      ProductInformation: { ...formData.ProductInformation, material },
    });
  };

  const handleMaterialMoreInfoChange = (materialMoreInfo) => {
    setFormData({
      ...formData,
      ProductInformation: { ...formData.ProductInformation, materialMoreInfo },
    });
  };

  const handleHeightChange = (height) => {
    setFormData({
      ...formData,
      ProductInformation: { ...formData.ProductInformation, height },
    });
  };

  const handleWidthChange = (width) => {
    setFormData({
      ...formData,
      ProductInformation: { ...formData.ProductInformation, width },
    });
  };

  const handleDepthChange = (depth) => {
    setFormData({
      ...formData,
      ProductInformation: { ...formData.ProductInformation, depth },
    });
  };

  const handleWeightChange = (weight) => {
    setFormData({
      ...formData,
      ProductInformation: { ...formData.ProductInformation, weight },
    });
    setSectionStatus({ ...sectionStatus, Images: true, VendorInfo: true });
  };

  const handlePriceInputChange = (priceInput) => {
    setFormData({
      ...formData,
      ProductInformation: { ...formData.ProductInformation, priceInput },
    });
  };

  const handleImageChange = (selectedImages) => {
    const maxFileSize = 2 * 1024 * 1024; // 2MB in bytes
    const validImages = selectedImages.filter(
      (image) => image.size <= maxFileSize
    );
    setUploadImages(validImages);
  };

  const handleDeliveryAdoptionChange = (deliveryAdoption) => {
    setFormData({
      ...formData,
      PaymentInformation: { ...formData.PaymentInformation, deliveryAdoption },
    });
  };

  const handleBankDetailsChange = (bankDetails) => {
    setFormData({
      ...formData,
      PaymentInformation: { ...formData.PaymentInformation, bankDetails },
    });
  };

  const handleNameOfBankChange = (nameOfBank) => {
    setFormData({
      ...formData,
      PaymentInformation: { ...formData.PaymentInformation, nameOfBank },
    });
  }

  const handleAccountNumberChange = (accountNumber) => {
    setFormData({
      ...formData,
      PaymentInformation: { ...formData.PaymentInformation, accountNumber },
    });
  }

  const handleNameOfHolderChange = (nameOfHolder) => {
    setFormData({
      ...formData,
      PaymentInformation: { ...formData.PaymentInformation, nameOfHolder },
    });
  }

  const handleNameChange = (name) => {
    setFormData({
      ...formData,
      PaymentInformation: { ...formData.PaymentInformation, name },
    });
    setPaymentInfoCompleted(true);
  };

  const handlePhoneChange = (phone) => {
    setFormData({
      ...formData,
      PaymentInformation: { ...formData.PaymentInformation, phone },
    });
  }

  const handleCityChange = (city) => {
    setFormData({
      ...formData,
      VendorInformation: { ...formData.VendorInformation, city },
    });
  };

  const handlePostalCodeChange = (postalCode) => {
    setFormData({
      ...formData,
      VendorInformation: { ...formData.VendorInformation, postalCode },
    });
  };

  const handleAddressChange = (address) => {
    setFormData({
      ...formData,
      VendorInformation: { ...formData.VendorInformation, address },
    });
  };

  const handleRegionChange = (region) => {
    setFormData({
      ...formData,
      VendorInformation: { ...formData.VendorInformation, region },
    });
  };

  const handleColonyChange = (colony) => {
    setFormData({
      ...formData,
      VendorInformation: { ...formData.VendorInformation, colony },
    });
  };

  const handleMapChange = (map) => {
    setFormData({
      ...formData,
      VendorInformation: { ...formData.VendorInformation, map },
    });
  };

  const handleDismantleChange = (dismantle) => {
    setFormData({
      ...formData,
      VendorInformation: {
        ...formData.VendorInformation,
        dismantle,
      },
    });
  };

  const handleElevatorChange = (elevator) => {
    setFormData({
      ...formData,
      VendorInformation: {
        ...formData.VendorInformation,
        elevator,
      },
    });
  };

  const handleNoElevatorFloorsChange = (noElevatorFloors) => {
    setFormData({
      ...formData,
      VendorInformation: {
        ...formData.VendorInformation,
        noElevatorFloors,
      },
    });
  };

  const handleSeVuelaChange = (seVuela) => {
    setFormData({
      ...formData,
      VendorInformation: {
        ...formData.VendorInformation,
        seVuela,
      },
    });
    setSectionStatus({ ...sectionStatus, PaymentInfo: true });
  };

  const handleFloorsChange = (floors) => {
    setFormData({
      ...formData,
      VendorInformation: {
        ...formData.VendorInformation,
        floors,
      },
    });
  };

  const upload = async (formData, files) => {
    const formDataToSend = new FormData();

    // Append urgency field
    formDataToSend.append("Urgency", formData.Urgency);

    // Append product information
    for (const key in formData.ProductInformation) {
      formDataToSend.append(
        `ProductInformation[${key}]`,
        formData.ProductInformation[key]
      );
    }

    // Append vendor information
    for (const key in formData.VendorInformation) {
      formDataToSend.append(
        `VendorInformation[${key}]`,
        formData.VendorInformation[key]
      );
    }

    // Append payment information
    for (const key in formData.PaymentInformation) {
      formDataToSend.append(
        `PaymentInformation[${key}]`,
        formData.PaymentInformation[key]
      );
    }

    // Append images
    const imagesToSend = document.querySelector("#files").files;
    for (let i = 0; i < imagesToSend.length; i++) {
      formDataToSend.append("UploadImages", imagesToSend[i]);
    }

    try {
      const response = await axios.post(
        "http://localhost:5005/api/vendor-form",
        formDataToSend
      );
      return response.data;
    } catch (error) {
      console.log("Error:", error);
      throw error;
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <img src={Logo} alt="logo-upcycle" className="w-60 mb-8" />
      </div>
      <Modal
        isOpen={firstModalisOpen}
        onRequestClose={() => setFirstModalIsOpen(false)}
        contentLabel="Accept Conditions"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            display: "flex",
            flexDirection: "column",
            color: "gray",
            width: "70%",
            height: "50%",
            margin: "auto",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "3rem",
            margin: "auto",
            alignItems: "start",
          },
        }}
      >
        <div className=" md:my-5 md:mx-20">
          <h2 className="font-bold text-md text-gray-700 pb-3 md:mx-10 ">
            Antes de llenar el formulario del vendendor, te pedimos tener listo
            lo siguiente:
          </h2>
          <div className="flex flex-column p-1 md:mx-10">
            <input
              type="checkbox"
              id="checklist-before-filling-1"
              name="checklist-1"
              className="pr-2 text-left"
            />
            <label
              htmlFor="checklist-before-filling"
              className="text-sm text-gray-700 pl-2"
            >
              5 minutos de tu tiempo
            </label>
          </div>
          <div className="flex flex-column p-1 md:mx-10">
            <input
              type="checkbox"
              id="checklist-before-filling-2"
              name="checklist-1"
              className="pr-2"
            />
            <label
              htmlFor="checklist-before-filling"
              className="text-sm text-gray-700 pl-2"
            >
              Tu celular listo para tomar fotos
            </label>
          </div>
          <div className="flex flex-column p-1 md:mx-10">
            <input
              type="checkbox"
              id="checklist-before-filling-3"
              name="checklist-1"
              className="pr-2"
            />
            <label
              htmlFor="checklist-before-filling"
              className="text-sm text-gray-700 pl-2"
            >
              Cinta métrica para medir tu producto
            </label>
          </div>
          <div className="md:mx-10 pt-6 text-sm">
            <p>
              1. La HONESTIDAD y DETALLE en el llenado del formato son VITALES.
            </p>
            <p>
              2. Estás formando parte de una COMUNIDAD de personas basada en la
              CONFIANZA.
            </p>
            <p>
              3. No tengas miedo de incluir TODAS las IMPERFECCIONES de tu
              producto ya que si encontramos más defectos que los señalados al
              momento del pick-up, la venta podría CANCELARSE con costo del
              envío al Vendedor.
            </p>
          </div>
          <div className="w-full flex flex-row md:justify-end">
            <button
              className="border rounded-md py-2 px-4 mt-7 hover:bg-orange-800 hover:text-white hover:border-orange-800 md:mr-10 "
              onClick={handleFirstModalChange}
            >
              Entendido
            </button>
          </div>
        </div>
      </Modal>
      <form onSubmit={handleSubmit}>
        <div>
          <h1 className="font-bold text-2xl text-gray-700">
            Comencémos con la venta de tus muebles
          </h1>
          <p className="text-sm pt-2 ">
            Por favor, llena la siguiente información, no te tomará más de 5 min
          </p>
        </div>

        <div className="mt-8">
          {sectionStatus.Urgency && (
            <FirstForm onUrgencyChange={handleUrgencyChange} />
          )}
        </div>

        <div>
          {sectionStatus.ProductDetails && (
            <ProductDetails onProductChange={handleProductChange} />
          )}
        </div>
        <div>
          {sectionStatus.Description && (
            <Description
              onDescriptionChange={handleDescriptionChange}
              onStateOfProductChange={handleStateOfProductChange}
            />
          )}
        </div>
        <div>
          {sectionStatus.ProductOverview && (
            <ProductOverview
              onBrandChange={handleBrandChange}
              onUseChange={handleUseChange}
              onMaterialChange={handleMaterialChange}
              onMaterialMoreInfoChange={handleMaterialMoreInfoChange}
              onHeightChange={handleHeightChange}
              onWidthChange={handleWidthChange}
              onDepthChange={handleDepthChange}
              onWeightChange={handleWeightChange}
              onPriceInputChange={handlePriceInputChange}
              urgency={urgency}
            />
          )}
        </div>
        <div>
          {sectionStatus.Images && <Images onChange={handleImageChange} />}
        </div>
        <div>
          {sectionStatus.VendorInfo && (
            <VendorInfo
              onCityChange={handleCityChange}
              onPostalCodeChange={handlePostalCodeChange}
              onAddressChange={handleAddressChange}
              onRegionChange={handleRegionChange}
              onColonyChange={handleColonyChange}
              onMapChange={handleMapChange}
              onDismantleChange={handleDismantleChange}
              onElevatorChange={handleElevatorChange}
              onSeVuelaChange={handleSeVuelaChange}
              onFloorsChange={handleFloorsChange}
              onNoElevatorFloorsChange={handleNoElevatorFloorsChange}
            />
          )}
        </div>
        <div>
          {sectionStatus.PaymentInfo && urgency !== "donate" &&  (
            <PaymentInfo
              onDeliveryAdoptionChange={handleDeliveryAdoptionChange}
              onBankDetailsChange={handleBankDetailsChange}
              onNameChange={handleNameChange}
              onNameHolderChange={handleNameOfHolderChange}
              onNameBankChange={handleNameOfBankChange}
              onAccountNumberChange={handleAccountNumberChange}
              onPhoneChange={handlePhoneChange}
            />
          )}
        </div>
        <br />
        <div>
          {paymentInfoCompleted && (
            <button
              type="submit"
              className=" my-4 border border-slate-400 text-slate-400 py-2 px-10 rounded-md text-sm hover:border-orange-400 hover:text-white hover:bg-orange-400"
              onChange={handleUrgencyChange}
            >
              Guardar y enviar
            </button>
          )}
        </div>
      </form>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Form Submitted Successfully"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            display: "flex",
            flexDirection: "column",
            color: "gray",
            width: "60%",
            height: "50%",
            margin: "auto",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "3rem",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <h2 className="font-bold text-md text-gray-700 pb-2">
          Tu información ha sido enviada exitosamente
        </h2>
        <p className="text-sm text-gray-700 pb-2">
          Muchas gracias por tu tiempo
        </p>
        <p className="text-sm text-gray-700 pb-2">
          Por favor da click en el siguiente botón para iniciar sesión con
          nosotros
        </p>
        <button
          className=" my-4 border border-slate-400 text-slate-400 py-2 px-10 rounded-md text-sm hover:border-orange-400 hover:text-white hover:bg-orange-400"
          onClick={() => {}}
        >
          Iniciar Sesión
        </button>
      </Modal>
    </>
  );
}

export default Form;
