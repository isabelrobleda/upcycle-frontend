import React from 'react'
import { useState } from 'react'

function VendorInfo({
  onCityChange,
  onPostalCodeChange,
  onAddressChange,
  onRegionChange,
  onColonyChange,
  onSeVuelaChange
}) {

  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [region, setRegion] = useState("");
  const [colony, setColony] = useState("");
  const [seVuela, setSeVuela] = useState(false);

  const handleCityChange = (e) => {
    setCity(e.target.value);
    onCityChange(e.target.value);
  }

  const handlePostalCodeChange = (e) => {
    setPostalCode(e.target.value);
    onPostalCodeChange(e.target.value);
  }

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    onAddressChange(e.target.value);
  }

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
    onRegionChange(e.target.value);
  }

  const handleColonyChange = (e) => {
    setColony(e.target.value);
    onColonyChange(e.target.value);
  }

  const handleSeVuelaChange = (e) => {
    setSeVuela(e.target.checked);
    onSeVuelaChange(e.target.checked);
  }

  return (
    <div className="pb-12">
    <h2 className="font-bold text-xl text-gray-700 text-left mt-6">Información de Pickup</h2>
    <p className="mt-1 text-sm leading-6 text-gray-700 text-left">
      Dannos tu dirección lo más exacta posible para que el servicio de
      mensajería.
    </p>

    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-3">
        <label
          htmlFor="city"
          className="block text-sm font-medium leading-6 text-gray-700 text-left"
        >
          Estado
        </label>
        <div className="mt-2">
          <select
            id="city"
            name="city"
            autoComplete="city-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:max-w-xs sm:text-sm sm:leading-6"
            onChange={handleCityChange}
          >
            <option>CDMX</option>
            <option>Estado de México</option>
          </select>
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="street-address"
          className="block text-sm font-medium leading-6 text-gray-700 text-left"
        >
          Calle
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="street-address"
            id="street-address"
            autoComplete="street-address"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
            onChange={handleAddressChange}
          />
        </div>
      </div>

      <div className="sm:col-span-2 sm:col-start-1">
        <label
          htmlFor="city"
          className="block text-sm font-medium leading-6 text-gray-700 text-left"
        >
          Alcaldía/Municipio
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="city"
            id="city"
            autoComplete="address-level2"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
            onChange={handleColonyChange}
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="region"
          className="block text-sm font-medium leading-6 text-gray-700 text-left"
        >
          Colonia
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="region"
            id="region"
            autoComplete="address-level1"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
            onChange={handleRegionChange}
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="postal-code"
          className="block text-sm font-medium leading-6 text-gray-700 text-left"
        >
          C.P. Código Postal
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="postal-code"
            id="postal-code"
            autoComplete="postal-code"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
            onChange={handlePostalCodeChange}
          />
        </div>
      </div>
      <fieldset>
        <legend className="text-sm font-semibold leading-6 text-gray-700 text-left">
          ¿Se tiene que volar?
        </legend>

        <div className="mt-6 space-y-6">
          <div className="flex items-center gap-x-3">
            <input
              id="special-pickup"
              name="special-pickup"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-orange-300"
              onChange={handleSeVuelaChange}
            />
            <label
              htmlFor="special-pickup"
              className="block text-sm font-medium leading-6 text-gray-700"
            >
              Sí
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="special-pickup-no"
              name="special-pickup"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-orange-300"
              onChange={handleSeVuelaChange}
            />
            <label
              htmlFor="special-pickup"
              className="block text-sm font-medium leading-6 text-gray-700"
            >
              No
            </label>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
  )
}

export default VendorInfo