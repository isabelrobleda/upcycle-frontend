import React from "react";
import { useState, useEffect } from "react";
import Profundidad from "../assets/profundidad.png";
import Alto from "../assets/alto.png";
import Largo from "../assets/largo.png";

function ProductOverview({
  onBrandChange,
  onUseChange,
  onMaterialChange,
  onHeightChange,
  onWidthChange,
  onDepthChange,
  onWeightChange,
  onMaterialMoreInfoChange,
  onPriceInputChange,
  onDesiredSellingPriceChange,
  onApproxSellingPrice,
  urgency,
}) {
  const [selected, setSelected] = useState([""]);
  const [useSelected, setUseSelected] = useState([""]);
  const [materialSelected, setMaterialSelected] = useState([""]);
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");
  const [weight, setWeight] = useState("");
  const [materialMoreInfo, setMaterialMoreInfo] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [desiredSellingPrice, setDesiredSellingPrice] = useState("");
  const [approxSellingPrice, setApproxSellingPrice] = useState("");
  const [priceError, setPriceError] = useState("");
  const [desiredPriceError, setDesiredPriceError] = useState(""); 

  const brands = [
    "Ninguna/Hecho a la medida",
    "Gaia",
    "Pergo",
    "Móbica",
    "Pottery Barn",
    "West Elm",
    "Cadana",
    "Ikea",
    "Rokam",
    "True Design",
    "Azcué",
    "Crate & Barrel",
    "Liverpool",
    "Palacio de Hierro",
    "Casa Palacio",
    "Zara Home",
    "Ashley Furniture",
    "Dupuis",
    "Bo Concept",
    "Passport Habitania",
    "Grand Home",
    "Montessori",
    "Decová",
    "Casa de las Lomas",
    "Whirlpool",
    "Mabe",
    "Samsung",
    "General Electric (GE)",
    "LG",
    "Frigidaire",
    "Electrolux",
    "Bosch",
    "Panasonic",
    "Hisense",
    "Maytag",
    "Hisense",
    "Sony",
    "Panasonic",
    "Philips",
    "TCL",
    "Sharp",
    "Vizio",
    "RCA",
    "Otra",
  ];

  const handleBrandSelect = (e) => {
    setSelected(e.target.value);
    onBrandChange(e.target.value);
  };

  const handleUseSelect = (e) => {
    setUseSelected(e.target.value);
    onUseChange(e.target.value);
  };

  const handleMaterialSelect = (e) => {
    setMaterialSelected(e.target.value);
    onMaterialChange(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
    onHeightChange(e.target.value);
  };

  const handleWidthChange = (e) => {
    setWidth(e.target.value);
    onWidthChange(e.target.value);
  };

  const handleDepthChange = (e) => {
    setDepth(e.target.value);
    onDepthChange(e.target.value);
  };

  const handleWeightChange = (e) => {
    const newWeight = e.target.value;
    setWeight(newWeight);
    onWeightChange(newWeight);

    // Reset price input when weight changes
    setPriceInput("");
    setDesiredSellingPrice("");
    setApproxSellingPrice("");

    // Set initial price error based on new weight
    if (newWeight === "<12kg" && priceInput && parseInt(priceInput) < "1300") {
      setPriceError(
        "El precio debe ser al menos MXN$1300 para pesos menores de 12kg."
      );
    } else if (
      newWeight === ">12kg" &&
      priceInput &&
      parseInt(priceInput) < "3500"
    ) {
      setPriceError(
        "El precio debe ser al menos MXN$3500 para pesos mayores de 12kg."
      );
    } else {
      setPriceError(""); // Clear any error
    }
  };

  const handleMaterialMoreInfoChange = (e) => {
    setMaterialMoreInfo(e.target.value);
    onMaterialMoreInfoChange(e.target.value);
  };

  const handlePriceInputChange = (e) => {
    const inputValue = e.target.value;
    setPriceInput(inputValue); // Always update the input to reflect user typing
    onPriceInputChange(inputValue);

    validateInput(inputValue, weight);

  }

    const validateInput = (inputValue, weight) => {
      if (weight === "<12kg") {
        if (!/^\d+$/.test(inputValue) || parseInt(inputValue) < "1858") {
          setPriceError("El precio debe ser al menos MXN$1300 para pesos menores de 12kg.");
          return;
        }
      } else if (weight === ">12kg") {
        if (!/^\d+$/.test(inputValue) || parseInt(inputValue) < "5000") {
          setPriceError("El precio debe ser al menos MXN$3500 para pesos mayores de 12kg.");
          return;
        }
      }
    
    setPriceError(""); // Clear any error
  };

  const handleDesiredSellingPriceChange = (e) => {
    const inputValue = e.target.value;
    setDesiredSellingPrice(inputValue);
    validateDesiredPrice(inputValue, weight);
    onDesiredSellingPriceChange(inputValue);
  };

  const validateDesiredPrice = (inputValue, weight) => {
    const inputPrice = parseInt(priceInput);
    const desiredPrice = parseInt(inputValue);
  
    if (isNaN(desiredPrice)) {
      setDesiredPriceError("Please enter a valid number.");
      return;
    }
  
    // Check if the desired price is greater than the input price
    if (desiredPrice > inputPrice) {
      setDesiredPriceError("El precio deseado no puede ser mayor al precio del producto si fuera nuevo hoy.");
      return;
    }
  
    // Validate based on weight
    if (weight === "<12kg") {
      if (desiredPrice < 1858) {
        setDesiredPriceError("El precio deseado debe ser al menos MXN$1858 para pesos menores de 12kg.");
        return;
      }
    } else if (weight === ">12kg") {
      if (desiredPrice < 5000) {
        setDesiredPriceError("El precio deseado debe ser al menos MXN$5000 para pesos mayores de 12kg.");
        return;
      }
    }
  
    setDesiredPriceError(""); // Clear any error if the input is valid
  };

  const calculateApproxSellingPrice = () => {
    if (!priceError && priceInput) {
      let discountPercentage = urgency === "discount" ? 0.6 : 0.7;
      const newPrice = parseFloat(priceInput);
      let approxPrice = newPrice * discountPercentage;
      setApproxSellingPrice(approxPrice.toFixed(2));
      onApproxSellingPrice(approxPrice.toFixed(2)); // Call this only if you need to propagate the value
    } else {
      setApproxSellingPrice("");
    }
  };


  useEffect(() => {
    calculateApproxSellingPrice();
  }, [priceInput, priceError, desiredPriceError]);

  return (
    <div className="md:mx-36 mt-16">
      <h2 className="font-bold text-xl text-gray-700 text-left mt-8">
        3. Sobre el Producto
      </h2>

      <div className="sm:col-span-3">
        <label
          htmlFor="brand"
          className="block text-sm font-medium leading-6 text-gray-700 text-left"
        >
          Marca *
        </label>
        <div className="mt-2">
          <input
            required={true}
            type="text"
            list="brands"
            id="brand"
            name="brand"
            autoComplete="off"
            className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:max-w-xs sm:text-sm sm:leading-6"
            value={selected}
            onChange={handleBrandSelect}
            placeholder="Selecciona o escribe para buscar"
          />
          <datalist id="brands">
            {brands.map((brand, index) => (
              <option key={index} value={brand} />
            ))}
          </datalist>
        </div>
      </div>

      <div className="sm:col-span-3 mt-2">
        <label
          htmlFor="usage"
          className="block text-sm font-medium leading-6 text-gray-700 text-left"
        >
          Uso *
        </label>
        <div className="mt-2">
          <select
            id="usage"
            name="usage"
            autoComplete="off"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:max-w-xs sm:text-sm sm:leading-6"
            value={useSelected}
            onChange={handleUseSelect}
            required={true}
          >
            <option value="" disabled hidden>
              Selecciona
            </option>
            <option value="Nuevo - sigue en su empaque">
              Nuevo - sigue en su empaque
            </option>
            <option value="Menos de 1 año">Menos de 1 año</option>
            <option value="1-3 años">1-3 años</option>
            <option value="3-6 años">3-6 años</option>
            <option value="Más de 6 años">Más de 6 años</option>
            <option value="Vintage">Vintage</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="dimensions"
          className="block text-sm  leading-6 text-gray-900 text-left mt-8 font-semibold"
        >
          Medidas *
        </label>
        <div className="flex flex-col pr-2 pb-2">
          <div className="flex flex-row items-center">
            <label
              htmlFor="height"
              className="text-sm font-medium leading-6 text-gray-900  mt-2 text-left mr-2"
            >
              Alto
            </label>
            <img src={Alto} alt="icon-hight" className="h-9 w-14 pr-2" />
            <input
              type="text"
              id="height"
              name="height"
              placeholder="cm"
              className=" pl-1 w-1/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
              value={height}
              onChange={handleHeightChange}
              required={true}
            />
          </div>
          <div className="flex flex-row items-center py-2">
            <label
              htmlFor="width"
              className="block text-sm font-medium leading-6 text-gray-900  mt-2 text-left "
            >
              Ancho
            </label>
            <img src={Largo} alt="icon-width" className="h-10 w-14 px-1" />
            <input
              type="text"
              id="width"
              name="width"
              placeholder="cm"
              className=" w-1/4 pl-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
              value={width}
              onChange={handleWidthChange}
              required={true}
            />
          </div>
          <div className="flex flex-row items-center pb-2">
            <label
              htmlFor="depth"
              className="block text-sm  font-medium leading-6 text-gray-900  mt-2 text-left "
            >
              Profundidad
            </label>
            <img
              src={Profundidad}
              alt="icon-depths"
              className="h-10 w-10 pr-1"
            />
            <input
              type="text"
              id="depth"
              name="depth"
              placeholder="cm"
              className=" w-1/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
              value={depth}
              onChange={handleDepthChange}
              required={true}
            />
          </div>
        </div>
      </div>
      <div className="sm:col-span-3">
        <label
          htmlFor="weight"
          className="block text-sm font-medium leading-6 text-gray-700 text-left"
        >
          Peso *
        </label>
        <div className="my-2">
          <select
            id="weight"
            name="weight"
            autoComplete="off"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:max-w-xs sm:text-sm sm:leading-6"
            value={weight}
            onChange={handleWeightChange}
            required={true}
          >
            <option value="" disabled hidden>
              Selecciona
            </option>
            <option value="<12kg">Menos de 12kg - Lo puedo cargar solo.</option>
            <option value=">12kg">
              Más de 12kg - Necesito que alguien me ayude a cargarlo
            </option>
          </select>
        </div>
      </div>
      <div className="sm:col-span-3">
        <label
          htmlFor="material"
          className="block text-sm font-medium leading-6 text-gray-700 text-left"
        >
          Material *
        </label>
        <div className="mt-2">
          <select
            id="material"
            name="material"
            autoComplete="material-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:max-w-xs sm:text-sm sm:leading-6"
            value={materialSelected}
            onChange={handleMaterialSelect}
            required={true}
          >
            <option value="" disabled hidden>
              Selecciona
            </option>
            <option>Madera</option>
            <option>Metal</option>
            <option>Plástico</option>
            <option>Mármol</option>
            <option>Piedra</option>
            <option>Piel</option>
            <option>Tela</option>
            <option>Vidrio</option>
            <option>Otro</option>
          </select>
        </div>
      </div>
      <div>
        <label
          htmlFor="Material More Info"
          className="block text-sm font-medium leading-6 text-gray-900  mt-2 text-left mr-2"
        >
          Si sabes, más especificación sobre el material
        </label>
        <input
          type="text"
          id="material-more-info"
          name="material-more-info"
          placeholder="Caoba, Pino, Aluminio"
          className="block md:w-1/4 pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
          value={materialMoreInfo}
          onChange={handleMaterialMoreInfoChange}
        />
      </div>
      <div className="border my-8 py-7 px-7 rounded-md border-dotted">
        <h3 className="text-lg font-bold text-gray-700 text-left">
          Precio aproximado de venta
        </h3>
        <p className="text-gray-700 text-left text-sm pb-1">
          El precio mínimo de venta al público (sin considerar el costo de
          envío) es de MXN$1300 para accesorios de menos de 12 Kg (que puedas
          cargar solo) y MXN$3500 para muebles de más de 12Kg (que necesiten 2 o
          más personas para moverse).
        </p>
        <p className="text-gray-700 text-left text-sm pb-5 font-semibold">
          Si vas a donar el producto, puedes saltar hasta "Subir tus archivos"
        </p>
        <div className="flex md:flex-row flex-col text-left text-sm justify-start text-gray-700 ">
          <label htmlFor="priceInput" className="pr-2">
            Precio del producto si fuera nuevo hoy (en MXN) [1]:
          </label>
          <input
            type="text"
            id="priceInput"
            value={priceInput}
            onChange={handlePriceInputChange}
            placeholder={weight === "<12kg" ? "1858" : "5000"}
            className="border-2 border-gray-300 rounded-md p-1 md:w-1/4 text-sm"
          />
        </div>

        <div className="flex md:flex-row flex-col text-left text-sm justify-start pt-3">
          <label className="pr-2">
            Precio que te sugerimos de venta (en MXN) [2]:{" "}
          </label>
          <input
            type="text"
            value={approxSellingPrice}
            readOnly
            className="border-2 border-dotted border-gray-300 rounded-md p-1 md:w-1/4 text-sm"
          />
          {priceError && (
            <p className="text-red-500 text-xs mt-2 md:pl-2 ">{priceError}</p>
          )}
        </div>
        <div className="flex flex-col text-sm mt-3">
          <div className="flex flex-row">
            <label htmlFor="">Estoy de acuerdo con el precio sugerido</label>
            <input type="radio" name="ok" id="ok-no" className=" ml-1" />
          </div>
          <div className="flex flex-row">
            <label htmlFor="">No estoy de acuerdo con el precio sugerido</label>
            <input type="radio" name="ok" id="ok-yes" className="ml-1 " />
          </div>
        </div>

        <div className="flex md:flex-row flex-col  text-sm  text-left justify-start pt-3">
          <label htmlFor="desiredSellingPrice" className="pr-2">
            Si no estás de acuerdo, ¿a qué precio deseas vender tu producto (en
            MXN)? Al precio que elijas, se añadirá el costo de envío estándar.
            Como vendedor, recibirás aprox. el 70% de este precio [3]:
          </label>
          <input
            type="text"
            id="desiredSellingPrice"
            value={desiredSellingPrice}
            onChange={handleDesiredSellingPriceChange}
            placeholder={weight === "<12kg" ? "1858 " : "5000"}
            className="border-2 border-gray-300 rounded-md p-1  md:w-1/5 text-sm"
          />
          {desiredPriceError && (
          <p className="text-red-500 text-xs mt-2 md:pl-2">{desiredPriceError}</p>
        )}
        </div>

        <div className="flex flex-row text-left pt-3">
          <p className="text-gray-700 text-xs pt-3">
            [1] ¿Cuánto cuesta tu producto o uno muy similar hoy en la tienda
            donde lo compraste o una muy similar?
          </p>
        </div>
        <div className="flex flex-row text-left pt-1">
          <p className="text-gray-700 text-xs">
            [2] Éste es el precio en el que te sugerimos vender tu producto
            tomando en cuenta algunas de las características que nos
            proporcionaste. OJO: el mínimo es de MXN$1,300 y MXN$3,500 para
            menores o mayores de 12 Kg respectivamente.
          </p>
        </div>
        <div className="flex flex-row text-left pt-1">
          <p className="text-gray-700 text-xs">
            [3] El precio máximo es el que tendría tu producto si fuera nuevo hoy
            (primer casilla*) así que siéntete libre de reducirlo cuanto desees
            hasta llegar a los mínimos mencionados (MXN$1,300 o MXN$3,500). Te
            sugerimos ofrecer tu producto a un precio competitivo y realista
            tomando en cuenta los años de uso y su estado para incentivar su
            venta con mayor rapidez.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductOverview;
