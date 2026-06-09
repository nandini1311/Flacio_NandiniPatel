import React from 'react';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Navigation }  from "swiper/modules";
import "swiper/css/navigation";

export default function QuickViewModal({ product, isOpen, onClose }) {
  const [quantity, setQuantity] = useState(1);
  if (!isOpen || !product) return null;
  
  const sliderImages = [
    product.defaultImage,
    product.hoverImage ? product.hoverImage : product.defaultImage
  ];

  return (
    
    <Dialog open={isOpen} fullWidth maxWidth="md">  
      <div className="grid grid-cols-2 relative overflow-y-auto">   
        <button onClick={onClose}  className="absolute right-4 top-4 border border-[#d6d2d2] text-gray-500 hover:text-black transition-colors" >
          <CloseIcon sx={{ fontSize: '22px' }} />
        </button>

        <div className="w-full relative flex items-center justify-center group">
          <button className="modal-prev absolute left-4 top-1/2 z-10 border w-9 h-9 bg-white hover:bg-[#224229] hover:text-white rounded-full flex items-center justify-center">
            <i className="fa-solid fa-chevron-left text-xs"></i>
          </button>
          <button className="modal-next absolute right-4 top-1/2 z-10 border w-9 h-9 bg-white hover:bg-[#224229] hover:text-white rounded-full flex items-center justify-center">
            <i className="fa-solid fa-chevron-right text-xs"></i>
          </button>
        <Swiper
          modules={[ Navigation ]}
          speed={700}
          navigation={{
            prevEl: '.modal-prev',
            nextEl: '.modal-next',
          }}>
            {sliderImages.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={img} 
                    className="w-full h-auto max-h-full object-contain mx-auto" 
                  />
                </div>
             </SwiperSlide> 
            ))}  
        </Swiper> 
        </div>


        <div className="w-full text-left flex flex-col justify-center px-8 space-y-4">
          <h3 className="text-2xl md:text-3xl font-['Libre_Baskerville'] font-normal text-[#313232]">
            {product.title}
          </h3>

          <span className="text-sm text-[#828787]">By <span className='text-black'> {product.brand}</span> </span>

          <div className="flex items-center gap-3 font-['Libre_Baskerville'] text-xl pb-5 border-b border-[#d6d2d2]">
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-sm">${product.originalPrice.toFixed(2)}</span>
            )}
            <span className={`text-md font-semibold font-['Libre_Baskerville'] text-[#224229] ${product.originalPrice ? 'text-[#224229]' : 'text-gray-900'}`}>
            ${product.price.toFixed(2)}
          </span>
          </div>

          <p className="text-sm text-[#828787] pt-1 tracking-wider font-light">
            {product.para}
          </p>

          {product.variants && product.variants.length > 0 && (
            <div className="colors flex flex-col gap-2">
              <span className="text-sm font-medium tracking-wider text-[#313232]">Color:</span>
              <div className="flex items-center gap-2">
                {product.variants.map((variant, idx) => (
                  <div  key={idx} style={{ backgroundColor: variant.colorCode }}
                    className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer"
                  />
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <div className="flex items-center border">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 font-bold">-</button>
              <span className="px-4 font-bold">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 font-bold">+</button>
            </div>
            <button className="w-full tickle-image bg-[#313232] text-white text-xs uppercase font-semibold tracking-widest py-3 rounded-none hover:bg-[#224229] transition-colors duration-300">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}