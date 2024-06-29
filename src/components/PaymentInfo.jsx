import React, { useState, useEffect } from "react";

function PaymentInfo({ onNameChange, onPhoneChange, onFullNameChange, urgency }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  const [fullName, setFullName] = useState("");

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    onNameChange(value);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    onPhoneChange(value);
  };

  const handleFullNameChange = (e) => {
    const value = e.target.value;
    setFullName(value);
    onFullNameChange(value);
  };

  return (
    <div className="sm:col-span-2 md:mx-36 mt-16">
      <h2 className="font-bold text-xl text-gray-700 text-left mt-16 mb-2">
        6. Datos de contacto para agendar el pickup de tu mueble y aclarar dudas.
      </h2>

      <label
        htmlFor="fullName"
        className="block text-sm font-semibold leading-6 text-gray-700 text-left "
      >
        Nombre y Apellido *
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Juan Pérez"
          className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
          value={fullName}
          onChange={handleFullNameChange}
          required={true}
        />
      </div>

      <label
        htmlFor="phone"
        className="block text-sm font-semibold leading-6 text-gray-700 text-left mt-3"
      >
        Celular *
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
          minLength={10}
          required={true}
        />
      </div>
      <label
        htmlFor="signature"
        className="block text-sm font-semibold leading-6 text-gray-700 text-left mt-3"
      >
        Email *
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
  );
}

export default PaymentInfo;