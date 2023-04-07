import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div className="bg-gray-100 py-6">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-3xl font-bold mb-6">Cart</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-md shadow">
              <img
                className="mx-auto h-48 w-full object-contain"
                src={product.image}
                alt={product.title}
              />
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm">{product.category}</p>
                <p className="text-green-500 font-medium mt-2">
                  ${product.price.toFixed(2)}
                </p>
                <div className="mt-4">
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
