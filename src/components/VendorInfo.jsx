import React, { useState, useEffect } from "react";

function VendorInfo({
  onCityChange,
  onPostalCodeChange,
  onAddressChange,
  onRegionChange,
  onColonyChange,
  onMapChange,
  onElevatorChange,
  onNoElevatorFloorsChange,
  onDismantleChange,
  onSeVuelaChange,
  onFloorsChange,
}) {
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [region, setRegion] = useState("");
  const [colony, setColony] = useState("");
  const [map, setMap] = useState("");
  const [elevator, setElevator] = useState(null);
  const [floorsElevator, setNoElevatorFloors] = useState("");
  const [seVuela, setSeVuela] = useState(null);
  const [floors, setFloors] = useState("");
  const [dismantle, setDismantle] = useState(null);
  const [error, setError] = useState("");

  const handleCityChange = (e) => {
    const value = e.target.value;
    setCity(value);
    onCityChange(value);
  };

  const handlePostalCodeChange = (e) => {
    const value = e.target.value;
    setPostalCode(value);
    onPostalCodeChange(value);
  };

  const handleAddressChange = (e) => {
    const value = e.target.value;
    setAddress(value);
    onAddressChange(value);
  };

  const handleRegionChange = (e) => {
    const value = e.target.value;
    setRegion(value);
    onRegionChange(value);
  };

  const handleColonyChange = (e) => {
    const value = e.target.value;
    setColony(value);
    onColonyChange(value);
  };

  const handleMapChange = (e) => {
    const value = e.target.value;
    setMap(value);
    onMapChange(value);
  };

  const handleElevatorChange = (e) => {
    const checked = e.target.value === "true";
    setElevator(checked);
    onElevatorChange(checked);
  };

  const handleDismantleChange = (e) => {
    const checked = e.target.value === "true";
    setDismantle(checked);
    onDismantleChange(checked);
  };

  const handleSeVuelaChange = (e) => {
    const checked = e.target.value === "true";
    setSeVuela(checked);
    onSeVuelaChange(checked);
  };

  const handleNoElevatorFloorsChange = (e) => {
    const value = e.target.value;
    setNoElevatorFloors(value);
    onNoElevatorFloorsChange(value);
  };

  const handleFloorsChange = (e) => {
    const value = e.target.value;
    setFloors(value);
    onFloorsChange(value);
  };

  return (
    <div className="md:mx-36 mt-16">
      <h2 className="font-bold text-xl text-gray-700 text-left mt-6">
        5. Información de Pickup
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-700 text-left">
        Danos todos los detalles sobre el lugar de recolección para el equipo de
        logística. Esta información es vital para saber que está cubierto por el
        servicio de envío estandar y no habrá costos adicionales para el
        vendedor.
      </p>

      <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="city"
            className="block text-sm font-medium leading-6 text-gray-700 text-left"
          >
            Estado *
          </label>
          <div className="mt-2">
            <select
              id="city"
              name="city"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={handleCityChange}
              value={city}
              required={true}
            >
              <option value="" disabled hidden>
                Selecciona
              </option>
              <option>CDMX</option>
              <option>Edo. Mex</option>
            </select>
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="street-address"
            className="block text-sm font-medium leading-6 text-gray-700 text-left"
          >
            Calle *
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="street-address"
              id="street-address"
              autoComplete="street-address"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
              onChange={handleAddressChange}
              value={address}
              required={true}
            />
          </div>
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <label
            htmlFor="city"
            className="block text-sm font-medium leading-6 text-gray-700 text-left"
          >
            Alcaldía/Municipio *
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="city"
              id="city"
              autoComplete="address-level2"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
              onChange={handleColonyChange}
              value={colony}
              required={true}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="region"
            className="block text-sm font-medium leading-6 text-gray-700 text-left"
          >
            Colonia *
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="region"
              id="region"
              autoComplete="address-level1"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
              onChange={handleRegionChange}
              value={region}
              required={true}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="postal-code"
            className="block text-sm font-medium leading-6 text-gray-700 text-left"
          >
            C.P. Código Postal *
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="postal-code"
              id="postal-code"
              autoComplete="postal-code"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
              onChange={handlePostalCodeChange}
              value={postalCode}
              required={true}
            />
          </div>
        </div>
        <div className="sm:col-span-4">
          <label
            htmlFor="link-maps"
            className="block text-sm font-medium leading-6 text-gray-700 text-left"
          >
            Link de Google Maps
          </label>
          <input
            type="text"
            name="map"
            id="map"
            autoComplete="off"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
            onChange={handleMapChange}
            value={map}
          />
        </div>
      </div>
      <fieldset className="mt-6">
        <legend className="text-sm font-semibold leading-6 text-gray-700 text-left">
          ¿Hay elevador y cabe en él? *
        </legend>

        <div className="mt-6 space-y-6">
          <div className="flex items-center gap-x-3">
            <input
              id="elevator-yes"
              name="elevator"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-orange-300"
              onChange={handleElevatorChange}
              value={true}
              checked={elevator === true}
              required={true}
            />
            <label
              htmlFor="elevator"
              className="block text-sm font-medium leading-6 text-gray-700"
            >
              Sí
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="elevator-no"
              name="elevator"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-orange-300"
              onChange={handleElevatorChange}
              value={false}
              checked={elevator === false}
              required={true}
            />
            <label
              htmlFor="elevator"
              className="block text-sm font-medium leading-6 text-gray-700"
            >
              No
            </label>
          </div>
        </div>
      </fieldset>
      <div className="flex flex-row items-center">
        <label className="text-left my-2 mr-2 text-sm font-medium leading-6 text-gray-700">
          Si no hay elevador, ¿cuántos pisos?{" "}
        </label>
        <input
          type="number"
          name="number-floors"
          id="number-floors"
          className="h-7 w-12 border rounded-md border-gray-300 text-gray text-sm text-center focus:ring-orange-300"
          onChange={handleNoElevatorFloorsChange}
          value={floorsElevator}
        />
      </div>
      <fieldset className="mt-3">
        <legend className="text-sm font-semibold leading-6 text-gray-700 text-left">
          ¿Hay que desarmar el mueble para sacarlo de tu casa? *
        </legend>

        <div className="mt-6 space-y-6">
          <div className="flex items-center gap-x-3">
            <input
              id="dismantle-yes"
              name="dismantle"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-orange-300"
              onChange={handleDismantleChange}
              value={true}
              checked={dismantle === true}
              required={true}
            />
            <label
              htmlFor="dismanlte"
              className="block text-sm font-medium leading-6 text-gray-700"
            >
              Sí
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="dismanlte-no"
              name="dismantle"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-orange-300"
              onChange={handleDismantleChange}
              value={false}
              checked={dismantle === false}
              required={true}
            />
            <label
              htmlFor="dismanlte"
              className="block text-sm font-medium leading-6 text-gray-700"
            >
              No
            </label>
          </div>
        </div>
      </fieldset>
      <fieldset className="mt-3">
        <legend className="text-sm font-semibold leading-6 text-gray-700 text-left">
          ¿Se tiene que volar? *
        </legend>

        <div className="mt-6 space-y-6">
          <div className="flex items-center gap-x-3">
            <input
              id="special-pickup"
              name="special-pickup"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-orange-300"
              onChange={handleSeVuelaChange}
              value={true}
              checked={seVuela === true}
              required={true}
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
              value={false}
              checked={seVuela === false}
              required={true}
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
      <div className="flex flex-row items-center">
        <label className="text-left my-2 mr-2 text-sm font-medium leading-6 text-gray-700">
          Si sí, ¿cuántos pisos?{" "}
        </label>
        <input
          type="number"
          name="number-floors-special-pickup"
          id="number-floors-special-pickup"
          className="h-7 w-12 border rounded-md border-gray-300 text-gray text-sm text-center focus:ring-orange-300"
          onChange={handleFloorsChange}
          value={floors}
        />
      </div>
    </div>
  );
}

export default VendorInfo;
