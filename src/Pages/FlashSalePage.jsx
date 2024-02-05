import React, { useState } from 'react'
import FlashSale from '../Components/FlashSale'
import FlashSaleCard from '../Components/FlashSaleCard';
import { Link } from 'react-router-dom';
const initialProducts = [
    {
      id: 1,
      name: 'Product 1',
      price: 50,
      discount: 10,
      stock: 20,
      brand: 'Brand A',
      image: 'https://images.pexels.com/photos/19278983/pexels-photo-19278983/free-photo-of-portrait-of-woman-wearing-red-sari.jpeg', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Product 2',
      price: 75,
      discount: 15,
      stock: 15,
      brand: 'Brand B',
      image: 'https://images.pexels.com/photos/15181110/pexels-photo-15181110/free-photo-of-woman-in-traditional-bridal-saree-dress.jpeg', // Replace with actual image URL
    },
    {
      id: 3,
      name: 'Product 2',
      price: 75,
      discount: 15,
      stock: 15,
      brand: 'Brand B',
      image: 'https://images.pexels.com/photos/15181110/pexels-photo-15181110/free-photo-of-woman-in-traditional-bridal-saree-dress.jpeg', // Replace with actual image URL
    },
    {
      id: 4,
      name: 'Product 2',
      price: 75,
      discount: 15,
      stock: 15,
      brand: 'Brand B',
      image: 'https://images.pexels.com/photos/15181110/pexels-photo-15181110/free-photo-of-woman-in-traditional-bridal-saree-dress.jpeg', // Replace with actual image URL
    },
    {
      id: 5,
      name: 'Product 2',
      price: 75,
      discount: 15,
      stock: 15,
      brand: 'Brand B',
      image: 'https://images.pexels.com/photos/15181110/pexels-photo-15181110/free-photo-of-woman-in-traditional-bridal-saree-dress.jpeg', // Replace with actual image URL
    },
    {
      id: 5,
      name: 'Product 2',
      price: 75,
      discount: 15,
      stock: 15,
      brand: 'Brand B',
      image: 'https://images.pexels.com/photos/15181110/pexels-photo-15181110/free-photo-of-woman-in-traditional-bridal-saree-dress.jpeg', // Replace with actual image URL
    },
    {
      id: 5,
      name: 'Product 2',
      price: 75,
      discount: 15,
      stock: 15,
      brand: 'Brand B',
      image: 'https://images.pexels.com/photos/15181110/pexels-photo-15181110/free-photo-of-woman-in-traditional-bridal-saree-dress.jpeg', // Replace with actual image URL
    },
    {
      id: 5,
      name: 'Product 2',
      price: 75,
      discount: 15,
      stock: 15,
      brand: 'Brand B',
      image: 'https://images.pexels.com/photos/15181110/pexels-photo-15181110/free-photo-of-woman-in-traditional-bridal-saree-dress.jpeg', // Replace with actual image URL
    },
    // Add more products as needed
  ];
function FlashSalePage() {
    const [products, setProducts] = useState(initialProducts);
  return (
    <div className='pt-32'>
        <img className='w-full' src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1707137363/flashsale_c42gen.webp" alt="flash sale" />
        <div className='max-w-7xl mx-auto '><h2 className='mt-7 text-2xl py-3'> Flash Sales</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-2 '>
            
        {products.map((product) => (
              <div key={product.id}>
                <Link to={`/product/${product.id}`}>
                 <FlashSaleCard product={product}/>
                </Link>
              </div>
            ))}
        </div>
           
        </div>
    </div>
  )
}

export default FlashSalePage    