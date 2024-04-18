import React, { useState, useEffect } from "react";
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
  const [checkboxes, setCheckboxes] = useState({checklist1: false, checklist2: false, checklist3: false, checklist4: false});

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
    FirstForm: {
      Urgency: "",
      FoundationToDonate: "",
    },
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

  const [foundationToDonate, setFoundationToDonate] = useState("");

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
  const isButtonEnabled = paymentInfoCompleted || urgency === "donate";

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: checked,
    }));
  };


  const [previewModalIsOpen, setPreviewModalIsOpen] = useState(false);

  const handleUrgencyChange = (urgency) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      FirstForm: { ...prevFormData.FirstForm, Urgency: urgency },
    }));
    setUrgency(urgency);
    setSectionStatus({
      ...sectionStatus,
      ProductDetails: true,
      Urgency: false,
    });
  };

  const handleFirstModalChange = () => {
    if (Object.values(checkboxes).every((checkbox) => checkbox)) {
      setFirstModalIsOpen(false);
    } else {
      // Optionally, you can show a message indicating that all checkboxes must be checked
      alert('Por favor, marca todas las casillas antes de continuar.');
    }
  };

  const handleFoundationToDonateChange = (foundation) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      FirstForm: { ...prevFormData.FirstForm, FoundationToDonate: foundation },
    }));
    setFoundationToDonate(foundation);
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

  const handleDesiredSellingPriceChange = (desiredSellingPrice) => {
    setFormData({
      ...formData,
      ProductInformation: {
        ...formData.ProductInformation,
        desiredSellingPrice,
      },
    });
  };

  const handleApproxSellingPriceChange = (approxSellingPrice) => {
    setFormData({
      ...formData,
      ProductInformation: {
        ...formData.ProductInformation,
        approxSellingPrice,
      },
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
  };

  const handleAccountNumberChange = (accountNumber) => {
    setFormData({
      ...formData,
      PaymentInformation: { ...formData.PaymentInformation, accountNumber },
    });
  };

  const handleNameOfHolderChange = (nameOfHolder) => {
    setFormData({
      ...formData,
      PaymentInformation: { ...formData.PaymentInformation, nameOfHolder },
    });
  };

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
  };

  const handleFullNameChange = (fullName) => {
    setFormData({
      ...formData,
      PaymentInformation: { ...formData.PaymentInformation, fullName },
    });
  }

  const handleNationalityChange = (nationality) => {
    setFormData({
      ...formData,
      PaymentInformation: { ...formData.PaymentInformation, nationality },
  })
  }

  const handleBirthDateChange = (birthDate) => {
    setFormData({
      ...formData,
      PaymentInformation: { ...formData.PaymentInformation, birthDate },
  })
  }

  const handleGenderChange = (gender) => {
    setFormData({
      ...formData,
      PaymentInformation: { ...formData.PaymentInformation, gender },
  })
  }

  const handleReasonOfSaleChange = (reasonOfSale) => {
    setFormData({
      ...formData,
      PaymentInformation: { ...formData.PaymentInformation, reasonOfSale },
  })
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

    console.log(JSON.stringify(formDataToSend, null, 2));
    // Append urgency and foundation to donate fields
    for (const key in formData.FirstForm) {
      formDataToSend.append(`FirstForm[${key}]`, formData.FirstForm[key]);
    }

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
        formDataToSend,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error data:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request:', error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
    }
      throw error;
    }
  };

  useEffect(() => {
    if (firstModalisOpen) {
      setCheckboxes({
        checklist1: false,
        checklist2: false,
        checklist3: false,
        checklist4: false,
      });
    }
  }, [firstModalisOpen]);

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
              name="checklist1"
              className="pr-2 text-left"
              onChange={handleCheckboxChange}
              checked={checkboxes.checklist1}
              required={true}
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
              name="checklist2"
              className="pr-2"
              onChange={handleCheckboxChange}
              checked={checkboxes.checklist2}
              required={true}
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
              name="checklist3"
              onChange={handleCheckboxChange}
              checked={checkboxes.checklist3}
              className="pr-2"
              required={true}
            />
            <label
              htmlFor="checklist-before-filling"
              className="text-sm text-gray-700 pl-2"
            >
              Cinta métrica para medir tu producto
            </label>
          </div>
          <div className="flex flex-column p-1 md:mx-10">
            <input
              type="checkbox"
              id="checklist-before-filling-4"
              name="checklist4"
              className="pr-2"
              onChange={handleCheckboxChange}
              checked={checkboxes.checklist4}
              required={true}
            />
            <Link to={"https://upcyclemex.com/pages/terminos-y-condiciones"} target="_blank">
              <label
                htmlFor="checklist-before-filling"
                className="text-sm text-gray-700 pl-2 underline hover:text-orange-800"
              >
                Haber leído los "Términos y Condiciones"
              </label>
            </Link>
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
            Por favor, llena la siguiente información, solo son siete pasos, no te tomará más de 5 min. Las secciones con * son requeridas
            
          </p>
        </div>

        <div className="mt-8">
          {sectionStatus.Urgency && (
            <FirstForm
              onUrgencyChange={handleUrgencyChange}
              onFoundationToDonate={handleFoundationToDonateChange}
            />
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
              onDesiredSellingPriceChange={handleDesiredSellingPriceChange}
              onApproxSellingPrice={handleApproxSellingPriceChange}
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
          {sectionStatus.PaymentInfo && (
            <PaymentInfo
              onDeliveryAdoptionChange={handleDeliveryAdoptionChange}
              onBankDetailsChange={handleBankDetailsChange}
              onNameChange={handleNameChange}
              onNameHolderChange={handleNameOfHolderChange}
              onNameBankChange={handleNameOfBankChange}
              onAccountNumberChange={handleAccountNumberChange}
              onPhoneChange={handlePhoneChange}
              onFullNameChange={handleFullNameChange}
              onNationalityChange={handleNationalityChange}
              onBirthDateChange={handleBirthDateChange}
              onGenderChange={handleGenderChange}
              onReasonOfSaleChange={handleReasonOfSaleChange}
              urgency={urgency}
            />
          )}
        </div>

        <br />
        <div className="flex flex-row justify-center">
          <div>
            {sectionStatus.PaymentInfo && (
              <button
                type="button"
                className="mt-4 mx-2 border border-blue-400 text-blue-400 py-2 px-6 rounded-md text-sm hover:border-blue-600 hover:text-white hover:bg-blue-600"
                onClick={() => setPreviewModalIsOpen(true)}
              >
                Verifica tu información
              </button>
            )}
          </div>
          <div>
            {isButtonEnabled && (
              <button
                type="submit"
                className=" mt-4 border border-slate-400 text-slate-400 py-2 px-10 rounded-md text-sm hover:border-orange-400 hover:text-white hover:bg-orange-400"
                onChange={handleUrgencyChange}
              >
                Guardar y enviar
              </button>
            )}
          </div>
        </div>

        <Modal
          isOpen={previewModalIsOpen}
          onRequestClose={() => setPreviewModalIsOpen(false)}
          contentLabel="Tu información"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            content: {
              color: "black",
              width: "60%",
              height: "70%",
              margin: "auto",
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "2rem",
              alignItems: "start",
            },
          }}
        >
          <div className="overflow-y-auto h-full">
            <h2 className="font-bold text-lg text-gray-700">Tu información:</h2>
            <h3 className="text-md font-semibold mt-4">
              Información de tu producto:
            </h3>
            <p>Producto: {formData.ProductInformation.product}</p>
            <p>Descripción: {formData.ProductInformation.description}</p>
            <p>
              Estado del producto: {formData.ProductInformation.stateOfProduct}
            </p>
            <p>Marca: {formData.ProductInformation.brand}</p>
            <p>Uso: {formData.ProductInformation.usage}</p>
            <p>Material: {formData.ProductInformation.material}</p>
            <p>Alto: {formData.ProductInformation.height}</p>
            <p>Ancho: {formData.ProductInformation.width}</p>
            <p>Profundidad: {formData.ProductInformation.depth}</p>
            <p>Peso: {formData.ProductInformation.weight}</p>
            <p>Material: {formData.ProductInformation.material}</p>

            <h3 className="text-md font-semibold mt-4">
              Información de Pick-Up:
            </h3>
            <p>Ciudad: {formData.VendorInformation.city}</p>
            <p>Calle: {formData.VendorInformation.address}</p>
            <p>Código Postal: {formData.VendorInformation.postalCode}</p>
            <p>Alcaldía/Municipio: {formData.VendorInformation.region}</p>
            <p>Colonia: {formData.VendorInformation.colony}</p>

            <h3 className="text-md font-semibold mt-4">
              Datos bancarios y personales
            </h3>
            <p>
              Nombre del Titular: {formData.PaymentInformation.nameOfHolder}
            </p>
            <p>CLABE: {formData.PaymentInformation.bankDetails}</p>
            <p>Nombre del Banco: {formData.PaymentInformation.nameOfBank}</p>
            <p>Número de cuenta: {formData.PaymentInformation.accountNumber}</p>
            <p>Teléfono: {formData.PaymentInformation.phone}</p>
            <p>Email: {formData.PaymentInformation.name}</p>
            <p>Nombre completo: {formData.PaymentInformation.fullName}</p>
            <p>Nacionalidad: {formData.PaymentInformation.nationality}</p>
            <p>Fecha de nacimiento: {formData.PaymentInformation.birthDate}</p>
            <p>Género: {formData.PaymentInformation.gender}</p>
            <p>Razón de venta: {formData.PaymentInformation.reasonOfSale}</p>

            <button
              className="mt-4 border border-gray-400 text-gray-400 py-2 px-4 rounded-md text-sm hover:border-gray-600 hover:text-white hover:bg-gray-600"
              onClick={() => setPreviewModalIsOpen(false)}
            >
              Cerrar Preview
            </button>
          </div>
        </Modal>
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
        <Link to="https://upcyclemex.com/account/login">
          <button
            className="border border-slate-400 text-slate-400 py-2 px-10 rounded-md text-sm hover:border-orange-400 hover:text-white hover:bg-orange-400"
          >
            Iniciar Sesión
          </button>
        </Link>
        
      </Modal>
    </>
  );
}
export default Form;
