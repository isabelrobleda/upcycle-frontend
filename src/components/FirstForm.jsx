import React from "react";
import { useState } from "react";


function FirstForm( {onUrgencyChange} ) {

  const [urgency, setUrgency] = useState("");

  const [nextQuestionNo, setNextQuestionNo] = useState(false);
  const [nextQuestionYes, setNextQuestionYes] = useState(false);

  const [donation, setDonation] = useState(false);
  const [discount, setDiscount] = useState(false);


  const handleNextQuestionNo = (e) => {
    setNextQuestionNo(true);
    setNextQuestionYes(false);
    setDiscount(false);
    setDonation(false);
    setUrgency(e.target.value);
    onUrgencyChange(e.target.value);
  };

  const handleNextQuestionYes = () => {
    setNextQuestionYes(true);
    setNextQuestionNo(false);
  };

  const handleDonation = (e) => {
    e.preventDefault();
    setDonation(true);
    console.log("donation", donation);
    setDiscount(false);
    setUrgency("donate"); 
    onUrgencyChange("donate"); 
  };

  const handleDiscount = (e) => {
    setDiscount(true);
    setDonation(false);
    setUrgency(e.target.value);
    onUrgencyChange(e.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      
      <form
        action=""
        className="flex flex-col items-start border rounded-md p-10 w-max shadow-md bg-white"
      >
        <div>
          <label
            htmlFor="question"
            className="text-sm font-semibold leading-6 text-gray-900 mt-8"
          >
            ¿Tienes que sacarlo de tu casa con urgencia?
          </label>
        </div>
        <div className="mt-6 space-y-6">
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              name="question"
              value="yes"
              id="yes"
              onChange={handleNextQuestionYes}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="yes"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Sí, tiene que estar fuera en 15 días
            </label>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              name="question"
              value="no"
              id="no"
              onChange={handleNextQuestionNo}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="no"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              No, puedo esperar a que se venda a mejor precio
            </label>
          </div>
        </div>
        <div>
          {nextQuestionNo && (
            <>
              <div>
                <p
                  htmlFor="question"
                  className="mt-4 mb-1 block text-sm font-medium leading-6 text-gray-900"
                >
                  Perfecto, sigue por favor los siguientes pasos:
                </p>
              </div>
              
            </>
          )}
        </div>
        <div>
          {nextQuestionYes && (
            <>
              <div className="flex flex-col items-start mt-3">
                <div className="flex items-center gap-x-3">
                  <input
                    type="radio"
                    name="urgency"
                    value="donation"
                    id="donation"
                    onChange={handleDonation}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="no"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <b>Lo quiero donar</b> (nosotros nos encargamos de quitarlo de tus manos en <b>máximo 3 días hábiles</b> de manera gratuita. 
)
                  </label>
                </div>

                <div className="flex items-center gap-x-3">
                  <input
                    type="radio"
                    name="urgency"
                    value="discount"
                    id="discount"
                    onChange={handleDiscount}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="no"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <b>Quiero venderlo con descuento especial</b> (intentaremos venderlo con un <b>descuento del 60% </b> o más contra su precio si fuera nuevo en nuestra sección de Last Chance)
                  </label>
                </div>
              </div>
              
            </>
          )}
          
        </div>
      </form>
    </div>
  );
}

export default FirstForm;
