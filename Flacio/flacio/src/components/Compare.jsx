import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog } from '@mui/material';

export default function Compare({ productsList = [], isOpen, onClose, onRemoveItem }) {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="lg">
      <div className="relative overflow-hidden text-center">
        
        <button onClick={onClose} className="absolute right-4 top-4 border border-[#d6d2d2] z-50">
          <CloseIcon sx={{ fontSize: '20px' }} />
        </button>

          <div className="overflow-x-auto border border-gray-200">
            <table className="w-fit h-160 text-sm text-left border-collapse">
              <tbody>
                <tr className="border-b border-[#d6d2d2]">
                  <td className="p-4 w-50 tracking-wide">Product</td>
                  {productsList.map((product) => (
                    <td key={product.id} className="px-12 pt-10 border-l border-r border-[#d6d2d2] text-center relative group min-w-60">
                      <button 
                        onClick={() => onRemoveItem(product.id)}
                        className="absolute top-6 left-20 text-gray-400 hover:text-black"
                        title="Remove"
                      >
                        <CloseIcon sx={{ fontSize: '18px' }} /> <span>Remove</span>
                      </button>
                      <img src={product.defaultImage} className="h-50 w-auto object-contain" />
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-[#d6d2d2]">
                  <td className="p-4 tracking-wide">Title</td>
                  {productsList.map((product) =>  (
                    <td key={product.id} className="p-4 text-center border-l border-r border-[#d6d2d2] font-['Libre_Baskerville'] text-xl">
                      {product.title}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[#d6d2d2]">
                  <td className="p-4 tracking-wide">Price</td>
                  {productsList.map((product) => (
                    <td key={product.id} className="p-4 text-center border-l text-lg border-r border-[#d6d2d2] font-['Libre_Baskerville'] text-[#224229]">
                      ${product.price.toFixed(2)}
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through text-sm font-normal ml-2">${product.originalPrice.toFixed(2)}</span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[#d6d2d2]">
                  <td className="p-4 tracking-wide">Brand</td>
                  {productsList.map((product) => (
                    <td key={product.id} className="p-4 text-center border-l border-r border-[#d6d2d2] text-gray-600">
                      {product.brand || 'wpbingo'}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[#d6d2d2]">
                  <td className="p-4 tracking-wide">Availability</td>
                  {productsList.map((product) => (
                    <td key={product.id} className="p-4 text-center border-l border-r border-[#d6d2d2]">
                      <span className={`text-sm ${product.badge?.includes('stock') ? 'text-red-500' : 'text-[#108043]'}`}>
                        {product.badge?.includes('stock') ? 'Out of stock' : 'In stock'}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr className="">
                   <td></td>
                   {productsList.map((product) => (
                     <td className="p-4 border-l border-r border-[#d6d2d2]"><button className="bg-[#313232] text-white text-xs hover:bg-[#224229] w-full py-3 uppercase tickle-image">Add to Cart</button></td>
                   ))}
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    </Dialog>
  );
}