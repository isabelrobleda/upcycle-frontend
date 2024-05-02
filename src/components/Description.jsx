import React, { useState } from "react";

function Description({ onDescriptionChange, onStateOfProductChange }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [description, setDescription] = useState("");
  const [stateOfProduct, setStateOfProduct] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onStateOfProductChange(option);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    onDescriptionChange(e.target.value);
  };

  return (
    <div className="md:mx-36 ">
      <h2 className="font-bold text-xl text-gray-700 text-left ">2. Descripción de tu producto (incluye sus defectos)*</h2>
      <div className="flex flex-col">
        <textarea
          name="Description"
          id="description"
          cols="30"
          rows="5"
          className="border p-2 rounded-md"
          value={description}
          onChange={handleDescriptionChange}
          required={true}
        ></textarea>
      </div>
      <div className="col-span-full">
        <label
          htmlFor="about"
          className="block text-sm leading-6 text-gray-700 font-bold text-left mt-3"
        >
          ¿En qué estado está?
        </label>
        <div className="mt-2">
          <div>
            <div
              className={`flex flex-col rounded-md m-1 w-50 h-50 border ${
                selectedOption === "perfecto" ? "border-orange-300" : ""
              }`}
              onClick={() => handleOptionSelect("perfecto")}
            >
              <label className="text-gray-700 p-2 text-left" htmlFor="StateofProduct">
                Perfecto, nadie sabría que ya tuvo una vida feliz
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-50 h-50 border ${
                selectedOption === "golpeadon" ? "border-orange-300" : ""
              }`}
              onClick={() => handleOptionSelect("golpeadon")}
            >
              <label className="text-gray-700 p-2 text-left" htmlFor="StateofProduct">
                Golpeadón, tiene algunos raspones o marcas de uso
              </label>
            </div>
            <div
              className={`flex flex-col rounded-md m-1 w-50 h-50 border ${
                selectedOption === "vivido" ? "border-orange-300" : ""
              }`}
              onClick={() => handleOptionSelect("vivido")}
            >
              <label className="text-gray-700 p-2 text-left" htmlFor="StateofProduct">
                Ya vivió mucho y se le nota. Solo necesito sacarlo de mi casa
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
