import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';

const ProductCard = ({ product, onQuickViewClick, onCompareClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="group relative flex flex-col bg-white">
      
      <div 
        className="relative group w-full overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered && product.hoverImage ? product.hoverImage : product.defaultImage}
          className="h-full w-full object-cover object-center transition-transform duration-200 ease-in-out group-hover:scale-105"
        />
        
        {product.badge && (
          <span className={`absolute left-3 top-3 px-3 py-1 text-xs font-semibold tracking-wider text-white ${
            product.badge.includes('stock') ? 'bg-[#B7B7B7] text-xs' : 'bg-red-500' 
          }`}>
            {product.badge}
          </span>
        )}

        <div className="absolute right-3 top-4 flex flex-col gap-2 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out z-10">       
          <button className="cart w-11 h-11 bg-white rounded-full flex items-center justify-center text-[#313232] shadow-md hover:bg-[#224229] hover:text-white transition-colors duration-200">
            <ShoppingBagOutlinedIcon sx={{ fontSize: "22px" }} />
          </button>

          <button className="wishlist w-11 h-11 bg-white rounded-full flex items-center justify-center text-[#313232] shadow-md hover:bg-[#224229] hover:text-white transition-colors duration-200">
            <FavoriteBorderIcon sx={{ fontSize: "22px" }} />
          </button>

          <button onClick={onCompareClick} className="compare w-11 h-11 bg-white rounded-full flex items-center justify-center text-[#313232] shadow-md hover:bg-[#224229] hover:text-white transition-colors duration-200">
            <SwapVertOutlinedIcon sx={{ fontSize: '22px' }} />
          </button>

          <button onClick={onQuickViewClick} className="quickview w-11 h-11 bg-white rounded-full flex items-center justify-center text-[#313232] shadow-md hover:bg-[#224229] hover:text-white transition-colors duration-200">
            <SearchIcon sx={{ fontSize: "22px" }} />
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-col grow text-left px-1">
        <div className="flex text-gray-300 text-lg">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < product.rating ? "text-black" : ""}>★</span>
          ))}
        </div>

        <h3 className="text-lg font-['Libre_Baskerville'] font-medium text-[#313232] cursor-pointer">
          {product.title}
        </h3>
        
        <div className="flex items-center gap-2 font-['Libre_Baskerville']">
          {product.originalPrice && (
            <span className="text-md text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
          <span className={`text-md font-['Libre_Baskerville'] text-[#224229] ${product.originalPrice ? 'text-red-500' : 'text-gray-900'}`}>
            ${product.price.toFixed(2)}
          </span>
        </div>

        {product.variants && product.variants.length > 0 && (
          <div className="pt-2 flex items-center gap-1.5">
            {product.variants.map((variant, index) => (
              <button
                key={index}
                style={{ backgroundColor: variant.colorCode }}
                className="h-6 w-6 rounded-full border-2 border-gray-300 hover:border-black"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;