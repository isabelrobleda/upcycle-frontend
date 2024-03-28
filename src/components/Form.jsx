import React, { useState } from "react";
import ProductDetails from "./ProductDetails";
import Description from "./Description";
import ProductOverview from "./ProductOverview";
import Images from "./Images";
import VendorInfo from "./VendorInfo";
import PaymentInfo from "./PaymentInfo";
import axios from "axios";

function Form() {
  const [formData, setFormData] = useState({
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
      seVuela: false,
    },
    PaymentInformation: {
      deliveryAdoption: "",
      bankDetails: "",
      name: "",
    },
  });

  const [UploadImages, setUploadImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    try {
      const response = await upload(formData, UploadImages);
      console.log("Response:", response);
    } catch (error) {
      console.error("Error uploading form data:", error);
    }
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
  };

  const handleBrandChange = (brand) => {
    setFormData({
      ...formData,
      ProductInformation: { ...formData.ProductInformation, brand },
    });
  };

  const handleUseChange = (use) => {
    setFormData({
      ...formData,
      ProductInformation: { ...formData.ProductInformation, use },
    });
  };

  const handleMaterialChange = (material) => {
    setFormData({
      ...formData,
      ProductInformation: { ...formData.ProductInformation, material },
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
  };

  const handleImageChange = (selectedImages) => {
    console.log("Selected images:", selectedImages);
    setUploadImages(selectedImages);
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

  const handleNameChange = (name) => {
    setFormData({
      ...formData,
      PaymentInformation: { ...formData.PaymentInformation, name },
    });
  };

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

  const handleSeVuelaChange = (seVuela) => {
    setFormData({
      ...formData,
      VendorInformation: {
        ...formData.VendorInformation,
        seVuela,
      },
    });
  };

  const upload = async (formData, files) => {
    const formDataToSend = new FormData();

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
      <form onSubmit={handleSubmit}>
        <div>
          <h1 className="font-bold text-2xl text-gray-700">
            Comencémos con la venta de tus muebles
          </h1>
          <p className="text-sm pt-2 pb-10">
            Por favor, llena la siguiente información, no te tomará más de 5 min
          </p>
        </div>

        <div>
          <ProductDetails />
        </div>
        <div>
          <Description
            onDescriptionChange={handleDescriptionChange}
            onStateOfProductChange={handleStateOfProductChange}
          />
        </div>
        <div>
          <ProductOverview
            onBrandChange={handleBrandChange}
            onUseChange={handleUseChange}
            onMaterialChange={handleMaterialChange}
            onHeightChange={handleHeightChange}
            onWidthChange={handleWidthChange}
            onDepthChange={handleDepthChange}
            onWeightChange={handleWeightChange}
          />
        </div>
        <div>
          <Images onChange={handleImageChange} />
        </div>
        <div>
          <VendorInfo
            onCityChange={handleCityChange}
            onPostalCodeChange={handlePostalCodeChange}
            onAddressChange={handleAddressChange}
            onRegionChange={handleRegionChange}
            onColonyChange={handleColonyChange}
            onSeVuelaChange={handleSeVuelaChange}
          />
        </div>
        <div>
          <PaymentInfo
            onDeliveryAdoptionChange={handleDeliveryAdoptionChange}
            onBankDetailsChange={handleBankDetailsChange}
            onNameChange={handleNameChange}
          />
        </div>
        <br />
        <button
          type="submit"
          className="border border-slate-500 p-2 rounded-md text-sm hover:bg-orange-300"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
