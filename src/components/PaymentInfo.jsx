import React from "react";
import { useState } from "react";

function PaymentInfo() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h2 className="font-bold text-xl text-gray-700 text-left mt-6">
        Información de Pago
      </h2>
      <div className="border-b border-gray-300 pb-12">
        <div className="mt-10 space-y-10">
          <div className="border-b border-gray-300 pb-12">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="payment"
                  className="block text-sm font-medium leading-6 text-gray-700 text-left"
                >
                  {" "}
                  Quiero cubrir el envío como incentivo para el comprador
                </label>
                <div className="grid grid-cols-3">
                  <div
                    className={`flex flex-col rounded-md m-1 w-50 h-50 border ${
                      selectedOption === "100%" ? "border-orange-300" : ""
                    }`}
                    onClick={() => handleOptionSelect("100%")}
                  >
                    <div className="">
                      <h4 className="text-gray-700 p-2" htmlFor="DeliveryAdoption">100%</h4>
                    </div>
                  </div>
                  <div
                    className={`flex flex-col rounded-md m-1 w-50 h-50 border ${
                      selectedOption === "50%" ? "border-orange-300" : ""
                    }`}
                    onClick={() => handleOptionSelect("50%")}
                  >
                    <div className="">
                      <h4 className="text-gray-700 p-2" htmlFor="DeliveryAdoption">50%</h4>
                    </div>
                  </div>
                  <div
                    className={`flex flex-col rounded-md m-1 w-50 h-50 border ${
                      selectedOption === "0%" ? "border-orange-300" : ""
                    }`}
                    onClick={() => handleOptionSelect("0%")}
                  >
                    <div className="">
                      <h4 className="text-gray-700 p-2" htmlFor="DeliveryAdoption">0%</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="bank-details"
              className="block text-sm font-medium leading-6 text-gray-700 text-left"
            >
              Cuenta de Banco (CLABE)
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="bank-details"
                id="bank-details"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="signature"
              className="block text-sm font-medium leading-6 text-gray-700 text-left"
            >
              Firma para aceptar Comisiones
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="signature"
                id="signature"
                autoComplete="postal-code"
                placeholder="Firma/Nombre"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentInfo;
