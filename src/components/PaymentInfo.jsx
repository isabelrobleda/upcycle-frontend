import React from "react";
import { useState } from "react";

function PaymentInfo({
  onBankDetailsChange,
  onNameChange,
  onNameHolderChange,
  onNameBankChange,
  onAccountNumberChange,
  onPhoneChange,
}) {
  const [bankDetails, setBankDetails] = useState("");
  const [name, setName] = useState("");
  const [nameOfHolder, setNameOfHolder] = useState("");
  const [nameOfBank, setNameBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [phone, setPhone] = useState("");

  const handleBankDetailsChange = (e) => {
    setBankDetails(e.target.value);
    onBankDetailsChange(e.target.value);
  };

  const handleNameOfHolderChange = (e) => {
    setNameOfHolder(e.target.value);
    onNameHolderChange(e.target.value);
  };

  const handleNameBankChange = (e) => {
    setNameBank(e.target.value);
    onNameBankChange(e.target.value);
  };

  const handleAccountNumberChange = (e) => {
    setAccountNumber(e.target.value);
    onAccountNumberChange(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    onNameChange(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    onPhoneChange(e.target.value);
  };

  return (
    <div className="md:mx-36 mt-16">
      <h2 className="font-bold text-xl text-gray-700 text-left">
        Datos bancarios para recibir tu pago
      </h2>
      <div>
        <div className="space-y-10">
          <div className="">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="name-holder"
              className="block text-sm font-medium leading-6 text-gray-700 text-left"
            >
              Nombre del Titular de la Cuenta
            </label>
            <div className="pt-1">
              <input
                type="text"
                name="nameOfHolder"
                id="nameOfHolder"
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                value={nameOfHolder}
                onChange={handleNameOfHolderChange}
                placeholder="Juan Pérez"
                required={true}
              />
            </div>
            <label
              htmlFor="bank-details"
              className="block text-sm font-medium leading-6 text-gray-700 text-left mt-4"
            >
              Cuenta de Banco (CLABE)
            </label>
            <div className="pt-1">
              <input
                type="text"
                name="bank-details"
                id="bank-details"
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                value={bankDetails}
                onChange={handleBankDetailsChange}
                placeholder="123456789012345678"
                required={true}
                maxLength={18}
                minLength={18}
              />
            </div>
            <label
              htmlFor="bank-name"
              className="block text-sm font-medium leading-6 text-gray-700 text-left mt-4"
            >
              Nombre de Banco
            </label>
            <div className="pt-1">
              <input
                type="text"
                name="nameOfBank"
                id="nameOfBank"
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                value={nameOfBank}
                onChange={handleNameBankChange}
                placeholder="Scotiabank"
              />
            </div>
            <label
              htmlFor="account-number"
              className="block text-sm font-medium leading-6 text-gray-700 text-left mt-4"
            >
              Número de Cuenta
            </label>
            <div className="pt-1">
              <input
                type="text"
                name="accountNumber"
                id="account-number"
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                value={accountNumber}
                onChange={handleAccountNumberChange}
                placeholder="123456789012"
              />
            </div>

            <div className="sm:col-span-2">
              <h2 className="font-bold text-lg text-gray-700 text-left mt-8 mb-2">
                Datos de contacto para agendar el pickup de tu mueble y aclarar
                dudas sobre tu producto.
              </h2>
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-700 text-left"
              >
                Celular
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+52 55 1234 5678"
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                  value={phone}
                  onChange={handlePhoneChange}
                  required={true}
                />
              </div>
              <label
                htmlFor="signature"
                className="block text-sm font-medium leading-6 text-gray-700 text-left"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="juanperez@gmail.com"
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                  value={name}
                  onChange={handleNameChange}
                  required={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentInfo;
