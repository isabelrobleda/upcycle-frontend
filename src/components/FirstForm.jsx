import React, { useState } from "react";

function FirstForm({ onUrgencyChange, onFoundationToDonate }) {
  const [urgency, setUrgency] = useState("");
  const [nextQuestionNo, setNextQuestionNo] = useState(false);
  const [nextQuestionYes, setNextQuestionYes] = useState(false);
  const [donation, setDonation] = useState(false);
  const [discount, setDiscount] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [FoundationToDonate, setFoundationToDonate] = useState("");


  const handleNextQuestionNo = (e) => {
    e.preventDefault();
    setNextQuestionNo(true);
    setNextQuestionYes(false);
    setDiscount(false);
    setDonation(false);
    setUrgency("no");
    onUrgencyChange("no");
  };

  const handleNextQuestionYes = (e) => {
    e.preventDefault();
    setNextQuestionYes(true);
    setNextQuestionNo(false);
  };

  const handleDonation = (e) => {
    e.preventDefault();
    setDonation(true);
    setDiscount(false);
    setUrgency("donate");
    setShowButton(true); 
  };

  const handleDiscount = (e) => {
    e.preventDefault();
    setDiscount(true);
    setDonation(false);
    setUrgency("discount");
    onUrgencyChange("discount");
    setShowButton(false);
  };

  const handleFoundationToDonate = (foundation) => {
    setFoundationToDonate(foundation);
    onFoundationToDonate(foundation);
    onUrgencyChange("donate");
    setUrgency("donate");
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
            className="text-sm font-semibold leading-6 text-gray-900 mt-8 "
          >
            ¿Tienes que sacarlo de tu casa con urgencia?
          </label>
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-x-3">
            <button
              onClick={handleNextQuestionYes}
              className="border border-gray-300 px-4 py-2 rounded-md bg-white hover:bg-gray-100 focus:bg-gray-200 text-sm "
            >
              Sí, tiene que estar fuera en 15 días
            </button>
          </div>
          <div className="flex items-center gap-x-3">
            <button
              onClick={handleNextQuestionNo}
              className="border border-gray-300 px-4 py-2 rounded-md bg-white hover:bg-gray-100 focus:bg-gray-200 text-sm mt-2"
            >
              No, puedo esperar a que se venda a mejor precio
            </button>
          </div>
        </div>
        <div>
          {nextQuestionNo && (
            <>
              <div>
                <p className="mt-4 mb-1 block text-sm font-medium leading-6 text-gray-900 ">
                  Perfecto, sigue por favor los siguientes pasos:
                </p>
              </div>
            </>
          )}
        </div>
        <div>
          {nextQuestionYes && (
            <>
              <div className="flex flex-col items-start ">
                <div className="flex items-center gap-x-3">
                  <button
                    onClick={handleDonation}
                    className="border border-gray-300 px-4 py-2 rounded-md bg-white hover:bg-gray-100 focus:bg-gray-200 mt-8 text-sm"
                  >
                    <b>Lo quiero donar</b> (nosotros nos encargamos de quitarlo
                    de tus manos en <b>máximo 3 días hábiles</b> de manera
                    gratuita)
                  </button>
                </div>
                <div className="flex items-center gap-x-3">
                  <button
                    onClick={handleDiscount}
                    className="border border-gray-300 px-4 py-2 rounded-md bg-white hover:bg-gray-100 focus:bg-gray-200 mt-2 text-sm"
                  >
                    <b>Quiero venderlo con descuento especial</b> (intentaremos
                    venderlo con un <b>descuento del 60% </b> o más contra su
                    precio si fuera nuevo en nuestra sección de Last Chance)
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        {showButton && ( // Render this div conditionally based on showButton state
          <>
            <div className="flex flex-col items-start mt-8 text-sm">
              <p>
                Elige al donatario con la causa más cercana a tu corazón.
                * Incluye envío estándar (sin volar, no más de 2 pisos en
                escaleras):
              </p>
              <div
                className={`flex flex-col rounded-md m-1 border ${
                  FoundationToDonate === "No tengo preferencia" ? "border-orange-300" : ""
                }`}
                onClick={() => handleFoundationToDonate("No tengo preferencia")}
              >
                <label
                  className="text-gray-700 p-2 text-center hover:cursor-pointer"
                  htmlFor="FoundationToDonate"
                >
                  No tengo preferencia
                </label>
              </div>
              <div
                className={`flex flex-col rounded-md m-1 border ${
                  FoundationToDonate === "Hogares Providencia" ? "border-orange-300" : ""
                }`}
                onClick={() => handleFoundationToDonate("Hogares Providencia")}
              >
                <label
                  className="text-gray-700 p-2 text-center hover:cursor-pointer"
                  htmlFor="FoundationToDonate"
                >
                  Hogares Providencia: Ayudan a niños en riesgo de situación de calle. 

                </label>
              </div>
              <div
                className={`flex flex-col rounded-md m-1 border ${
                  FoundationToDonate === "Casa de la Amistad" ? "border-orange-300" : ""
                }`}
                onClick={() => handleFoundationToDonate("Casa de la Amistad")}
              >
                <label
                  className="text-gray-700 p-2 text-center hover:cursor-pointer"
                  htmlFor="FoundationToDonate"
                >
                  Casa de la Amistad: Ayudan a niños con cáncer y sus familias
                </label>
              </div>
              <div
                className={`flex flex-col rounded-md m-1 border ${
                  FoundationToDonate === "Ejército de Salvación" ? "border-orange-300" : ""
                }`}
                onClick={() => handleFoundationToDonate("Ejército de Salvación")}
              >
                <label
                  className="text-gray-700 p-2 text-center hover:cursor-pointer"
                  htmlFor="FoundationToDonate"
                >
                 Ejército de Salvación: Ayudan a diferentes causas como migración, emergencias y tienen casas hogar. 

                </label>
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default FirstForm;
