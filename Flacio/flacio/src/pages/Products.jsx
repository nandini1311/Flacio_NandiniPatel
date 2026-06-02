import { useState } from 'react';
import Slider from "@mui/material/Slider";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ProductCard from '../components/ProductCard';
// import products from '../data/productData';


export default function Products(){

  const [openSections, setOpenSections] = useState({
    collections: true,
    availability: true,
    price: true,
    size: true,
    color: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const [value, setValue] = useState([0, 153]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let currentProducts = [];

  return(
    <div className="flex flex-col py-21">
      <div className="top flex items-center justify-center h-62 bg-cover bg-end" style={{ backgroundImage: "url('https://wpbingo-flacio.myshopify.com/cdn/shop/files/bg-breadcrumb.jpg?crop=center&height=750&v=1728267580&width=1920')"}}>
        <h1 className="text-5xl font-['Libre_Baskerville']">Products</h1>
      </div>

      <div className="main py-15 px-15">
        <div className="grid grid-cols-12 gap-5">
           <div className="col-span-3">
              <aside className="pr-4 space-y-8">
                <div className="collections">
                  <div onClick={() => toggleSection("collections")} className="flex justify-between items-center cursor-pointer group py-2">
                    <h3 className="font-['Libre_Baskerville'] text-2xl font-normal text-[#313232]">  Collections </h3>
                    <i className={`fa-solid fa-angle-down text-xs text-gray-500 transition-transform duration-300 ${openSections.collections ? "" : "rotate-180"}`}></i>
                  </div>
        
                  <div className={`space-y-3.5 mt-4 transition-all duration-300 overflow-hidden ${openSections.collections ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                    {[
                      { name: "Air Purifying", count: 6, active: false },
                      { name: "Ceramic Pots", count: 9, active: false },
                      { name: "Herb Seeds", count: 6, active: false },
                      { name: "Indoor Plants", count: 5, active: true },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-sm cursor-pointer">
                        <span className="">
                          {item.name}
                        </span>
                        <span className="text-xs w-5 h-5 flex items-center bg-gray-100 justify-center rounded-full">
                          {item.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="availability">
                  <div onClick={() => toggleSection("availability")} className="flex justify-between items-center cursor-pointer">
                    <h3 className="font-['Libre_Baskerville'] text-2xl text-[#313232]"> Availability </h3>
                    <i className={`fa-solid fa-angle-down text-xs text-gray-500 transition-transform duration-300 ${openSections.availability ? "" : "rotate-180"}`}></i>
                  </div>
                  <div className={`space-y-3.5 mt-4 transition-all duration-300 overflow-hidden ${openSections.availability ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                    {[
                      { label: "In stock", count: 4 },
                      { label: "Out of stock", count: 1 }
                    ].map((item, idx) => (
                      <label key={idx} className="flex justify-between items-center text-sm cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" className="w-4 h-4 border border-gray-300 rounded-none accent-[#224229]  cursor-pointer" />
                          <span className="group-hover:text-black transition-colors duration-200">{item.label}</span>
                        </div>
                        <span className="text-xs w-5 h-5 flex items-center justify-center rounded-full bg-gray-100">
                          {item.count}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="rangebar">
                  <div onClick={() => toggleSection("price")} className="flex justify-between items-center cursor-pointer mb-4">
                    <h3 className="font-['Libre_Baskerville'] text-2xl"> Price </h3>
                    <i className={`fa-solid fa-angle-down text-xs text-gray-500 transition-transform duration-300 ${openSections.price ? "" : "rotate-180"}`}></i>
                  </div>
                  <div className={`mt-4 px-2 transition-all duration-300 overflow-hidden ${openSections.price ? "max-h-54 opacity-100" : "max-h-0 opacity-0"}`}>
                    <Slider 
                    value={value}
                    onChange={handleChange}
                    min={0}
                    max={153}
                    sx={{  color: "#444", height: 1.5,
                    "& .MuiSlider-thumb": { width: 12, height: 12, borderRadius: 0, backgroundColor: "#fff",  border: "1px solid #444", },
                   }}
                  />
                  <p className="text-xs"> Price : ${value[0].toFixed(2)} – ${value[1].toFixed(2)}  </p>
                  </div>
                </div>

                <div className="size">
                  <div onClick={() => toggleSection("size")} className="flex justify-between items-center cursor-pointer py-2" >
                    <h3 className="font-['Libre_Baskerville'] text-2xl"> Size </h3>
                    <i className={`fa-solid fa-angle-down text-xs text-gray-500 transition-transform duration-300 ${openSections.size ? "" : "rotate-180"}`}></i>
                  </div>
                  <div className={`flex flex-wrap gap-3 mt-4 transition-all duration-300 overflow-hidden ${openSections.size ? "max-h-24 opacity-100" : "max-h-0 opacity-0"}`}>
                    {["30cm", "50cm", "60cm"].map((size, idx) => (
                      <div key={idx} className="relative group cursor-pointer">
                        <div className="px-5 py-2 border border-gray-200 rounded-full text-xs text-[#313232] bg-white hover:border-black transition-all duration-300">
                          {size}
                        </div>
                        <span className="absolute -top-1.5 -right-1 text-[9px] w-4 h-4 bg-gray-200 text-gray-500 flex items-center justify-center rounded-full">
                          1
                        </span>
                      </div>
                    ))}
                  </div>
               </div>

               <div className="colors">
                 <div onClick={() => toggleSection("color")}  className="flex justify-between items-center cursor-pointer">
                   <h3 className="font-['Libre_Baskerville'] text-2xl"> Color </h3>
                   <i className={`fa-solid fa-angle-down text-xs text-gray-500 transition-transform duration-300 ${openSections.color ? "" : "rotate-180"}`}></i>
                 </div>

                 <div className={`space-y-4 mt-4 transition-all duration-300 overflow-hidden ${openSections.color ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
                   {[
                     { name: "Black", hex: "bg-black", count: 3 },
                     { name: "Blue", hex: "bg-[#005ad9]", count: 1 },
                     { name: "Grey", hex: "bg-[#888888]", count: 1 },
                     { name: "Orange", hex: "bg-[#ff8a00]", count: 1 },
                     { name: "Pink", hex: "bg-[#ffb3c6]", count: 3 },
                   ].map((color, idx) => (
                     <div key={idx} className="flex justify-between items-center text-sm text-[#828787] cursor-pointer group">
                       <div className="flex items-center gap-3">
                         <div className={`w-5 h-5 rounded-full ${color.hex} shadow-sm`}></div>
                         <span className="group-hover:text-black transition-colors duration-200">{color.name}</span>
                       </div>
                       <span className="text-xs text-black w-5 h-5 flex items-center justify-center rounded-full bg-gray-100">
                         {color.count}
                       </span>
                     </div>
                   ))}
                 </div>
               </div>
              </aside>
           </div>

            <div className="col-span-9">
              <div className="top flex justify-between items-center">
                <span className="text-xs text-[#828787]">You've viewed 6 of 6 products</span>
                <div className="">
                  <select className="bg-transparent border border-[#d6d2d2] outline-none font-medium text-xs py-2 px-4">
                    <option>Featured</option>
                    <option>Most relevant</option>
                    <option>Best selling</option>
                    <option>Alphabetically, A-Z</option>
                    <option>Alphabetically, Z-A</option>
                    <option>Price, low to high</option>
                    <option>Price, high to low</option>
                    <option>Date, old to new</option>
                    <option>Date, new to old</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-3">
                 {currentProducts.map((product) => (
                   <ProductCard key={product.id} product={product} />
                 ))}
              </div>
            </div> 
        </div>
      </div>
    </div>
  );
}
