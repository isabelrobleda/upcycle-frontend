import React from "react";
import { Fragment, useState } from "react";


const brands = [
  {
    id: 1,
    name: "Ikea",
    avatar:
      "https://i.pinimg.com/originals/84/e4/38/84e438b133f0ff16e839443e61e6afeb.jpg",
  },
  {
    id: 2,
    name: "Gaia",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVz-52qNSYEGqCj-HnZpk6eTwZSLVf_dwe0wBFKKfouw&s",
  },
  {
    id: 3,
    name: "Sin Marca",
    avatar:
      "https://i0.wp.com/kifabrik.mirmi.tum.de/wp-content/uploads/2022/05/placeholder-143.png?ssl=1",
  },
  {
    id: 4,
    name: "Otra",
    avatar:
      "https://i0.wp.com/kifabrik.mirmi.tum.de/wp-content/uploads/2022/05/placeholder-143.png?ssl=1",
  },
];

const usage = [
  {
    id: 1,
    name: "Nuevo",
  },
  {
    id: 2,
    name: "1 año de uso",
  },
  {
    id: 3,
    name: "2 años de uso",
  },
  {
    id: 4,
    name: "De 3 a 5 años de uso",
  },
  {
    id: 5,
    name: "De 5 a 10 años de uso",
  },
  {
    id: 6,
    name: "Más de 10 años de uso",
  },
  {
    id: 7,
    name: "Vintage",
  },
];

const material = [
  {
    id: 1,
    name: "Madera",
  },
  {
    id: 2,
    name: "Metal",
  },
  {
    id: 3,
    name: "Plástico",
  },
  {
    id: 4,
    name: "Vidrio",
  },
  {
    id: 5,
    name: "Tela",
  },
  {
    id: 6,
    name: "Concreto",
  },
  {
    id: 7,
    name: "Marmol",
  },
  {
    id: 8,
    name: "Piedra",
  },
  {
    id: 9,
    name: "Otro",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ProductOverview({
  onBrandChange,
  onUseChange,
  onMaterialChange,
  onHeightChange,
  onWidthChange,
  onDepthChange,
  onWeightChange,
}) {

  const [selected, setSelected] = useState(brands[0]);
  const [useSelected, setUseSelected] = useState(usage[0]);
  const [materialSelected, setMaterialSelected] = useState(material[0]);
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");
  const [weight, setWeight] = useState("");

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
    setWeight(e.target.value);
    onWeightChange(e.target.value);
  };

  return (
    <>
      <h2 className="font-bold text-xl text-gray-700 text-left mt-8">
        Sobre el Producto
      </h2>
      
      <div className="sm:col-span-3">
        <label
          htmlFor="brand"
          className="block text-sm font-medium leading-6 text-gray-700 text-left"
        >
          Marca
        </label>
        <div className="mt-2">
          <select
            id="brand"
            name="brand"
            autoComplete="brand-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:max-w-xs sm:text-sm sm:leading-6"
            value={selected}
            onChange={handleBrandSelect}
          >
            <option>Ikea</option>
            <option>Gaia</option>
            <option>Sin Marca</option>
            <option>Otra</option>
          </select>
        </div>
      </div>

      <div className="sm:col-span-3">
        <label
          htmlFor="usage"
          className="block text-sm font-medium leading-6 text-gray-700 text-left"
        >
          Uso
        </label>
        <div className="mt-2">
          <select
            id="usage"
            name="usage"
            autoComplete="usage-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:max-w-xs sm:text-sm sm:leading-6"
            value={useSelected}
            onChange={handleUseSelect}
          >
            <option>Nuevo</option>
            <option>1 a 2 años</option>
            <option>2 a 5 años</option>
            <option>5 a 10 años</option>
            <option>+10 años</option>
            <option>Vintage</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="dimensions"
          className="block text-sm font-medium leading-6 text-gray-900 text-left mt-4"
        >
          Medidas y Peso
        </label>
        <div className="flex p-2">
          <label
            htmlFor="height"
            className="block text-sm font-medium leading-6 text-gray-900  mt-2 text-left mr-2"
          >
            Alto
          </label>
          <input
            type="text"
            id="height"
            name="height"
            placeholder="cm"
            className="block w-1/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
            value={height}
            onChange={handleHeightChange}
          />
          <label
            htmlFor="width"
            className="block text-sm font-medium leading-6 text-gray-900  mt-2 text-left mx-2"
          >
            Ancho
          </label>
          <input
            type="text"
            id="width"
            name="width"
            placeholder="cm"
            className="block w-1/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
            value={width}
            onChange={handleWidthChange}
          />
          <label
            htmlFor="depth"
            className="block text-sm font-medium leading-6 text-gray-900  mt-2 text-left mx-2"
          >
            Profundidad
          </label>
          <input
            type="text"
            id="depth"
            name="depth"
            placeholder="cm"
            className="block w-1/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
            value={depth}
            onChange={handleDepthChange}
          />
          <label
            htmlFor="weight"
            className="block text-sm font-medium leading-6 text-gray-900  mt-2 text-left mx-2"
          >
            Peso
          </label>
          <input
            type="text"
            id="weight"
            name="weight"
            placeholder="kg"
            className="block w-1/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
            value={weight}
            onChange={handleWeightChange}
          />
        </div>
      </div>

      <div className="sm:col-span-3">
        <label
          htmlFor="material"
          className="block text-sm font-medium leading-6 text-gray-700 text-left"
        >
          Material
        </label>
        <div className="mt-2">
          <select
            id="material"
            name="material"
            autoComplete="material-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:max-w-xs sm:text-sm sm:leading-6"
            value={materialSelected}
            onChange={handleMaterialSelect}
          >
            <option>Madera</option>
            <option>Metal</option>
            <option>Plástico</option>
            <option>Mármol</option>
            <option>Piedra</option>
            <option>Otro</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default ProductOverview;
