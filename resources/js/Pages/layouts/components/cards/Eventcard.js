import React from 'react'

const products = [
    {
      id: 1,
      name: '',
      href: '#',
      imageSrc: 'https://images.quicket.co.za/0428814_247_247.png',
      imageAlt: "Front of men's Basic Tee in black. ",
      price: 'Mar 25th 2022 at 10:00:00 pm',
      color: 'Black',
    },
    // More products...
  ]

function Eventcard() {
  return (
    <div>
          {products.map((product) => (
            <div className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 justify-between">
                <div>
                  <h3 className="font-medium text-gray-700 overflow-hidden truncate w-200">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-700 italic overflow-hidden truncate w-200">At {product.color}</p>
                </div>
                <p className="text-xs text-gray-400 font-light font-s overflow-hidden truncate w-200">On {product.price}</p>
              </div>
            </div>
          ))}
        </div>
  )
}

export default Eventcard