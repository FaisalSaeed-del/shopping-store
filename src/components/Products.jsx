import React, { useEffect,useState} from 'react';
import { add } from '../store/cartSlice';
import { useDispatch,useSelector } from 'react-redux';
import {fetchProducts}from '../store/productSlice';
import {STATUSES} from "../store/productSlice"
const Products = () => {
  // const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const {data: products,status}=useSelector((state)=>state.product)

  useEffect(() => {
dispatch(fetchProducts());


    // const fetchProducts = async () => {
    //   const res = await fetch('https://fakestoreapi.com/products');
    //   const data = await res.json();
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if(status===STATUSES.LOADING){
return <h2 className='font-bold text-4xl text-center'>Loading...</h2>;
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const filteredProducts = category === '' ? products : products.filter((product) => product.category === category);

  return (
    <div>
      <header className='bg-white py-6'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold text-gray-900'>Products</h1>
          <div className='mt-4 flex'>
            <label htmlFor='category-select' className='mr-2'>
              Category:
            </label>
            <select id='category-select' className='border border-gray-300 rounded-md' value={category} onChange={handleCategoryChange}>
              <option value=''>All</option>
              <option value='men clothing'>Men's Clothing</option>
              <option value='women clothing'>Women's Clothing</option>
              <option value='jewelery'>Jewelry</option>
              <option value='electronics'>Electronics</option>
            </select>
          </div>
        </div>
      </header>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10'>
        {filteredProducts.map((product) => (
          <div key={product.id} className='bg-white p-4 rounded-md shadow'>
            <img className='mx-auto h-48 w-full object-contain' src={product.image} alt={product.title} />
            <div className='text-center'>
              <h3 className='text-lg font-medium text-gray-800 mb-2'>{product.title}</h3>
              <p className='text-gray-500 text-sm'>{product.category}</p>
              <p className='text-green-500 font-medium mt-2'>${product.price.toFixed(2)}</p>
              <div className='mt-4'>
                <button onClick={() => handleAdd(product)} className='bg-green-500 text-white px-4 py-2 rounded-md'>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
