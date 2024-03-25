import React from 'react'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

const brands = [
  {
    id: 1,
    name: 'Ikea',
    avatar:
      'https://i.pinimg.com/originals/84/e4/38/84e438b133f0ff16e839443e61e6afeb.jpg',
  },
  {
    id: 2,
    name: 'Gaia',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVz-52qNSYEGqCj-HnZpk6eTwZSLVf_dwe0wBFKKfouw&s',
  },
  {
    id: 3,
    name: 'Sin Marca',
    avatar:
      'https://i0.wp.com/kifabrik.mirmi.tum.de/wp-content/uploads/2022/05/placeholder-143.png?ssl=1',
  },
  {
    id: 4,
    name: 'Otra',
    avatar:
      'https://i0.wp.com/kifabrik.mirmi.tum.de/wp-content/uploads/2022/05/placeholder-143.png?ssl=1',
  },
  
]

const usage = [
  {
    id: 1,
    name: 'Nuevo', 
  },
  {
    id: 2,
    name: '1 año de uso',
  },
  {
    id: 3,
    name: '2 años de uso',
  },
  {
    id: 4,
    name: 'De 3 a 5 años de uso',
  },
  {
    id: 5,
    name: 'De 5 a 10 años de uso',
  },
  {
    id: 6,
    name: 'Más de 10 años de uso',
  },
  {
    id: 7,
    name: 'Vintage',
  }

]

const material = [
  {
    id: 1,
    name: 'Madera',
  }, 
  {
    id: 2,
    name: 'Metal',
  },
  {
    id: 3,
    name: 'Plástico',
  },
  {
    id: 4,
    name: 'Vidrio',
  },
  {
    id: 5,
    name: 'Tela',
  },
  {
    id: 6,
    name: 'Concreto',
  },
  {
    id: 7,
    name: 'Marmol',
  },
  {
    id: 8,
    name: 'Piedra',
  },
  {
    id: 9,
    name: 'Otro',
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function ProductOverview() {

  const [selected, setSelected] = useState(brands[3])
  const [useSelected, setUseSelected] = useState(usage[0])
  const [materialSelected, setMaterialSelected] = useState(material[0])


  return (
    <>
    <h2 className="font-bold text-xl text-gray-700 text-left mt-8">Sobre el Producto</h2>
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900 text-left mt-2">Marca</Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <img src={selected.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {brands.map((brand) => (
                  <Listbox.Option
                    key={brand.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={brand}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img src={brand.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {brand.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                           
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>

    <Listbox value={useSelected} onChange={setUseSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900 text-left mt-2">Uso</Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{useSelected.name}</span>
              </span>
              
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {usage.map((use) => (
                  <Listbox.Option
                    key={use.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={use}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {use.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                           
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>

    <div>
      <label htmlFor="dimensions" className="block text-sm font-medium leading-6 text-gray-900 text-left mt-4">Medidas y Peso</label>
      <div className='flex p-2'>
        <label htmlFor="height" className="block text-sm font-medium leading-6 text-gray-900  mt-2 text-left mr-2">Alto</label>
         <input type="text" id='height' name='height' placeholder='cm'className="block w-1/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"/>
        <label htmlFor="width" className="block text-sm font-medium leading-6 text-gray-900  mt-2 text-left mx-2">Ancho</label>
          <input type="text" id='width' name='width' placeholder='cm'className="block w-1/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"/>    
        <label htmlFor="depth" className="block text-sm font-medium leading-6 text-gray-900  mt-2 text-left mx-2">Profundidad</label>
          <input type="text" id='depth' name='depth' placeholder='cm'className="block w-1/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"/> 
        <label htmlFor="weight" className="block text-sm font-medium leading-6 text-gray-900  mt-2 text-left mx-2">Peso</label>
          <input type="text" id='weight' name='weight' placeholder='kg'className="block w-1/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"/>                
      </div>
    </div>

    <Listbox value={materialSelected} onChange={setMaterialSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900 text-left mt-4">Material</Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{materialSelected.name}</span>
              </span>
              
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {material.map((material) => (
                  <Listbox.Option
                    key={material.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={material}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {material.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                           
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>

                              
    </>
  )
}

export default ProductOverview