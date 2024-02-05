import React from 'react'

function FlashSaleCard({product}) {
  return (
    <div> <div className="mb-4 p-3 rounded-md cursor-pointer shadow-xl hover:shadow-2xl">
    <img
      src={product.image}
      alt={product.name}
      className="mb-2 rounded-md w-full h-40  lg:h-[400px] object-cover"
    />
    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
    <p className="text-gray-600">Price: ৳{product.price}</p>
    <p className="text-gray-600">Discount: {product.discount}%</p>
    <div className='flex flex-row justify-between '>
    <p className="text-gray-600">Stock: {product.stock}</p>
    <p className='text-white rounded-md bg-info px-2 py-1'>Add to Cart</p>
    </div>
  </div></div>
  )
}

export default FlashSaleCard