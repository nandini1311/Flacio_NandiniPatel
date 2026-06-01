import { useState, useEffect } from "react";
import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "aos/dist/aos.css";   
import AOS from "aos";
import Dialog from '@mui/material/Dialog';
import CloseIcon from "@mui/icons-material/Close";
import { products } from "../data/productData"
import ProductCard from "../components/ProductCard"
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

export function PopOver(){
  const [open, setOpen] = useState(true)

  return(
    <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="md">
      <div className="grid grid-cols-2 w-full items-stretch h-full relative">
        <CloseIcon onClick={() => setOpen(false)} sx={{ position: "absolute", top: 10, right: 10, background: "white", p:0.5 }}></CloseIcon>
        <div className="left-text flex flex-col justify-center items-start px-7 gap-4 w-full">
          <h2 className="text-2xl font-semibold">Join The Our Family</h2>
          <p className="text-sm text-[#828787] pb-3">Signup for our newsletter and receive <br/> updates you're looking for: interior <br/> inspiration, the latest trends and discounts</p>
          <div className="flex w-full">
            <input type="email" placeholder="Email address..." className="py-2.5 w-full px-5 border border-gray-300 focus:outline-none placeholder:text-sm"/>
            <button className="bg-[#313232] text-white text-xs px-8 uppercase">Submit</button>
          </div>
       </div>
       <div className="right">
         <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/newsletter.webp?v=1727751718" className="h-full w-full"/>
       </div>
      </div>
    </Dialog>
  );
}


export function Hero() {
  const heroSlides = [
    {
      image: "https://wpbingo-flacio.myshopify.com/cdn/shop/files/slider-1-1.jpg?v=1727765932",
      title1: "Plants",
      title2: "made easy",
    },
    {
      image: "https://wpbingo-flacio.myshopify.com/cdn/shop/files/slider-1-2.jpg?v=1727765932",
      title1: "Make People",
      title2: "Merry",
    },
    {
      image: "https://wpbingo-flacio.myshopify.com/cdn/shop/files/slider-1-3_87c2a061-1b63-41f1-9ab1-9762598d377a.jpg?v=1727765984",
      title1: "Gifts We",
      title2: "Love",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
      AOS.init({ 
        duration: 800, 
        once: false,
      });
    }, []);

  return(
    <>
      <section className="overflow-hidden relative">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, type: 'bullets', modifierClass: 'swiper-pagination-', }}
          slidesPerView={1}
          className="h-full"
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
            setTimeout(() => {
              AOS.refresh();
            }, 50);
          }}  
        >         
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="h-250 bg-cover bg-center" style={{ backgroundImage: `url('${slide.image}')` }}>
                <div 
                  key={`${index}-${activeIndex}`}
                  className="absolute inset-0 px-4 flex flex-col justify-center items-center"
                  data-aos={index === activeIndex ? "fade-right" : ""}
                  data-aos-easing="ease-in-sine"
                >
                  <span className="tracking-[5px] text-xs md:text-sm text-white"> SALE UP TO 30% OFF </span>
                  <h2 className="text-4xl md:text-8xl font-['Libre_Baskerville'] font-light text-white">
                    {slide.title1} <span className="italic">{slide.title2}</span>
                  </h2>
                  <p className="max-w-xl text-xs md:text-sm text-white text-center pt-4">
                    Patch helps you discover the best plants for your space, delivers them <br className="md:flex hidden"/> to your door ad helps you look after them.
                  </p>  
          
                  <div className="flex gap-4 mt-15">
                    <Link to="/products" className="bg-white hover:bg-[#224229] duration-500 hover:text-white text-sm text-[#313232] px-6 md:px-10 py-4">
                      Shop indoor
                    </Link>

                    <button className="bg-white hover:bg-[#224229] duration-500 font-medium hover:text-white  text-sm text-[#313232] px-6 md:px-10 py-4">
                      Shop outdoor
                    </button>
                  </div>
               </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr_1.2fr] px-4 lg:px-8 gap-3 mt-10 lg:-mt-45">
          <div className="card-1 relative group overflow-hidden">
            <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/banner-1.jpg?v=1727768126" className="w-full h-full object-cover transition-transform duration-400 ease-in-out group-hover:scale-105" />
            <div className="content absolute inset-0 p-4 lg:p-8 flex flex-col gap-1 justify-end">
              <span className="font-['Libre_Baskerville'] text-xl lg:text-3xl">New Arrivals</span>
              <a className="lg:text-md text-sm underline underline-offset-5" href="">Shop Now</a>
            </div>
          </div>
          <div className="card-2 relative group overflow-hidden">
            <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/banner-2.jpg?v=1727768127" className="w-full h-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-110" />
            <div className="content absolute inset-0 p-4 lg:p-8 flex flex-col gap-1 justify-end items-center">
              <span className="font-['Libre_Baskerville'] text-xl lg:text-3xl">Gift Green</span>
              <a className="lg:text-md text-sm underline underline-offset-5" href="">Shop Now</a>
            </div>
          </div>
          <div className="card-3 relative group overflow-hidden">
            <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/banner-3.jpg?v=1727768127"className="w-full h-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-110" />
            <div className="content absolute inset-0 p-4 lg:p-8 flex flex-col gap-1 justify-end">
              <span className="font-['Libre_Baskerville'] text-xl lg:text-3xl">Home Grown</span>
              <a className="lg:text-md text-sm underline underline-offset-5" href="">Shop Now</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export function Decorate(){
  return(
    <div className="bg-[#f7f5f0] py-25 mt-4 lg:mt-0 px-4 lg:px-15 grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="left-box flex flex-col gap-7">
        <h2 className="text-[#313232] font-['Libre_Baskerville'] text-4xl lg:text-6xl">Decorate your <br /> home <span className="italic">with plants</span> </h2>
        <p className="text-[#828787] text-sm">
          Praesent egestas tristique nibh. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero,<br className="lg:block hidden"/>
          non adipiscing dolor urna a orci. Fusce convallis metus id felis luctus adipiscing. Integer tincidunt.
          <br className="lg:block hidden"/> Etiam imperdiet imperdiet orci
        </p>
        <div className="bottom flex flex-col gap-5">
          <div className="div1 flex gap-6 bg-cover bg-center overflow-x-hidden" style={{ backgroundImage: `url('https://wpbingo-flacio.myshopify.com/cdn/shopifycloud/storefront/assets/no-image-100-2a702f30_small.gif')` }}>
             <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/policy-1.png?v=1727778215" className="tickle-image" />
             <div className="text flex flex-col justify-center gap-1">
               <span className="text-[#313232] text-lg md:text-2xl font-['Libre_Baskerville']">Unbeatable quality</span>
               <p className="text-[#828787] text-xs md:text-sm tracking-wide">Greater productivity and relaxation</p>
             </div>
          </div>
          <div className="div2 flex gap-6 bg-cover bg-center overflow-x-hidden" style={{ backgroundImage: `url('https://wpbingo-flacio.myshopify.com/cdn/shopifycloud/storefront/assets/no-image-100-2a702f30_small.gif')` }}> 
            <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/policy-2.png?v=1727778215"  className="tickle-image" />
            <div className="text flex flex-col justify-center gap-1">
               <span className="text-[#313232] text-lg md:text-2xl font-['Libre_Baskerville']">Delivery to your door</span>
               <p className="text-[#828787] text-xs md:text-sm tracking-wide">Better mental wellbeing and happiness</p>
             </div>
          </div>
          <div className="div3 flex gap-6 bg-cover bg-center overflow-x-hidden" style={{ backgroundImage: `url('https://wpbingo-flacio.myshopify.com/cdn/shopifycloud/storefront/assets/no-image-100-2a702f30_small.gif')` }}>
             <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/policy-3.png?v=1727778215" className="tickle-image"/>
             <div className="text flex flex-col justify-center gap-1">
               <span className="text-[#313232] text-lg md:text-2xl font-['Libre_Baskerville']">Bring nature into your life</span>
               <p className="text-[#828787] text-xs md:text-sm tracking-wide">Greater productivity and relaxation</p>
             </div>
          </div>
        </div>
      </div>
      <div className="right-box flex justify-center relative overflow-hidden">
        <div className="pulsing-oval-1 absolute rounded-[50%] w-full h-full rotate-[-25deg] pointer-events-none"></div>
  
        <div className="pulsing-oval-2 absolute rounded-[50%] w-full h-full rotate-[-25deg] pointer-events-none"></div>
          <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/policy-image-1.webp?v=1727772240" />
        </div>
      </div>
  );
}


export function Rating() {
  const [activeTab, setActiveTab] = useState('topRating');
  const visibleProducts = activeTab === "topRating" ? products.slice(0, 8) : products.slice(8, 16)

  return (
    <div className="px-4 lg:px-12 py-12 text-center">
      
      <div className="flex justify-center items-center gap-6 text-2xl md:text-4xl mb-10">
        <button
          onClick={() => setActiveTab('topRating')}
          className={`font-['Libre_Baskerville'] duration-200 ${activeTab === 'topRating' ? 'text-gray-900' : 'text-gray-500'}`}
        >
          Top <span className="italic">Rating</span>
        </button>
        <span className="text-gray-400 font-light">/</span>
        <button
          onClick={() => setActiveTab('bestSelling')}
          className={`font-['Libre_Baskerville'] duration-200 ${activeTab === 'bestSelling' ? 'text-gray-900' : 'text-gray-500'}`}
        >
          Best <span className="italic">Selling</span>
        </button>
      </div>
      <div className="overflow-x-auto">
        <div className="grid grid-rows-2 grid-flow-col auto-cols-[250px] gap-4 lg:grid-flow-row lg:grid-cols-4">
          {visibleProducts.map((product) => (
              <ProductCard product={product} />
          ))}     
        </div>
      </div>

      <div className="py-10 justify-center items-center gap-1 flex text-[13px] tickle-image">
        <div className="relative flex justify-center items-center w-15 h-15 group cursor-pointer">  
          <span className="absolute inset-0 border rounded-full"></span>
          <div className="absolute -right-15 bg-white py-1 flex items-center gap-1 text-[13px] font-medium">
            <span>View more</span>
            <EastOutlinedIcon sx={{ fontSize: "18px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};


export function Review(){

  const reviewData = [
  {
    id: 1,
    rating: 4,
    text1: "Very happy with flacio; plants arrived in excellent condition, were",
    text2: "healthy looking with lots of new growth and are thriving!",
    image: "https://wpbingo-flacio.myshopify.com/cdn/shop/files/test-1.jpg?v=1727856407",
    author: "Ann Smith"
  },
  {
    id: 2,
    rating: 5, 
    text1: "Green thumb, black thumb, doesn't matter thanks to Modern",
    text2: " Sprout!",
    image: "https://wpbingo-flacio.myshopify.com/cdn/shop/files/test-2.jpg?v=1727856407",
    author: "Saitama One"
  },
  {
    id: 3,
    rating: 5, 
    text1: "Very happy with flacio; plants arrived in excellent condition, were",
    text2: "healthy looking with lots of new growth and are thriving!",
    image: "https://wpbingo-flacio.myshopify.com/cdn/shop/files/test-3.jpg?v=1727856407",
    author: "Sara Colinton"
  },
  {
    id: 4,
    rating: 5, 
    text1: "Green thumb, black thumb, doesn't matter thanks to Modern",
    text2: " Sprout!",
    image: "https://wpbingo-flacio.myshopify.com/cdn/shop/files/test-4_110x.jpg?v=1727856407",
    author: "Shetty Jamie"
  },
  ];

  return(
    <div 
      className="py-25 bg-center bg-cover" 
      style={{ backgroundImage: 'url("https://wpbingo-flacio.myshopify.com/cdn/shop/files/bg-1.jpg?v=1727854965")' }}
    >   
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[]}
          slidesPerView={1}
        >
          {reviewData.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="flex flex-col px-4 lg:px-0 items-center justify-center gap-4">
                <div className="flex text-lg tracking-widest gap-1">
                  {[...Array(5)].map((_, index) => (
                    <span key={index}  className={index < review.rating ? "text-[#224229]" : "text-gray-300"}> ★  </span>
                  ))}
                </div>
                <p className="text-2xl lg:text-4xl text-[#224229] italic font-['Libre_Baskerville'] text-center font-medium mb-6">
                  {review.text1} <br className="lg:block hidden"/> {review.text2}
                </p>               
                <img src={review.image} className="rounded-full" />               
                <span className="text-[#224229] text-md"> {review.author} </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
  );
}


export function Plants(){
  return(
    <div className="py-25 px-12 flex flex-col gap-15">
      <div className="grid grid-cols-2">
        <div className="left relative">
          <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/text-rotate.png?v=1727860890" className="absolute left-16 -top-13 animate-[spin_15s_linear_infinite]"/>
          <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/banner-4.jpg?v=1727860877"/>          
        </div>
        <div className="right flex flex-col items-start px-18 justify-center gap-6">
          <h2 className="text-6xl text-[#224229] font-['Libre_Baskerville']">Plants for <span className="italic">offices</span></h2>
          <p className="text-sm text-[#828787] tracking-wider">Praesent egestas tristique nibh. Sed mollis, eros et ultrices tempus, mauris ipsum <br />
            aliquam libero, non adipiscing dolor urna a orci. Fusce convallis metus id felis <br />
            luctus adipiscing. Integer tincidunt. Etiam imperdiet imperdiet orci
          </p>
          <button className="py-3 px-8 text-sm tracking-wider text-white bg-[#224229] hover:bg-[#323232] duration-400">Shop Collection</button>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="left flex flex-col items-start justify-center gap-6">
          <h2 className="text-6xl text-[#224229] font-['Libre_Baskerville'] ">Sets for all <span className="italic">styles</span></h2>
          <p className="text-sm text-[#828787] tracking-wider">Praesent egestas tristique nibh. Sed mollis, eros et ultrices tempus, mauris ipsum <br />
            aliquam libero, non adipiscing dolor urna a orci. Fusce convallis metus id felis <br />
            luctus adipiscing. Integer tincidunt. Etiam imperdiet imperdiet orci
          </p>
          <button className="py-3 px-8 text-sm tracking-wider text-white bg-[#224229] hover:bg-[#323232] duration-400">Shop Collection</button>
        </div>
        <div className="right relative">
          <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/text-rotate.png?v=1727860890" className="absolute right-20 -top-13 animate-[spin_15s_linear_infinite]"/>
          <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/banner-5.jpg?v=1727860876" />
       </div>
    </div>
  </div> 
  );
}


export function SignUp(){
  return(
    <div className="py-25 bg-[#e7e2ea] flex flex-col justify-center items-center gap-4">
      <h2 className="text-4xl font-['Libre_Baskerville']">Sign Up To Our <span className="italic">Newsletter</span></h2>
      <p className="text-sm text-[#828787] pb-6 tracking-wider">Stay up to date on the latest news with our carefully curated newsletters.</p>
      <div className="flex w-[45%]">
        <input type="email" placeholder="Email address..." className="py-4 w-full px-7 bg-white focus:outline-none placeholder:text-sm"/>
        <button className="bg-[#313232] text-white text-sm px-8">Submit</button>
      </div>
    </div>
  );
}


export function BringLife(){
  const cardData = [
    {
      id: 1,
      image: "https://wpbingo-flacio.myshopify.com/cdn/shop/files/ig-1_540x.jpg?v=1727923475"
    },
    {
      id: 2,
      image: "https://wpbingo-flacio.myshopify.com/cdn/shop/files/ig-2_540x.jpg?v=1727923475"
    },
    {
      id: 3,
      image: "https://wpbingo-flacio.myshopify.com/cdn/shop/files/ig-3_540x.jpg?v=1727923475"
    },
    {
      id: 4,
      image: "https://wpbingo-flacio.myshopify.com/cdn/shop/files/ig-4_540x.jpg?v=1727923475"
    },
    {
      id: 5,
      image: "https://wpbingo-flacio.myshopify.com/cdn/shop/files/ig-5_540x.jpg?v=1727923475"
    },
  ];

  return(
    <div className="py-15">
      <div className="text flex flex-col gap-3 items-center justify-center">
        <h3 className="text-4xl text-[#313232] font-['Libre_Baskerville']">#bring<span className="italic">lifein</span></h3>
        <p className="text-sm text-[#828787]">Our community has a thing for plant styling. Get inspired.</p>
      </div>
      <div className="px-12 py-12 border-b border-gray-400 relative group">
        <button className="prev-btn absolute bg-white z-10 p-1 left-8 border top-50 opacity-0 group-hover:opacity-100">
          <KeyboardArrowLeftOutlinedIcon sx={{fontSize: "22px"}}></KeyboardArrowLeftOutlinedIcon>
        </button>
        <button className="next-btn absolute bg-white z-10 p-1 right-8 border top-50 opacity-0 group-hover:opacity-100">
          <KeyboardArrowRightOutlinedIcon sx={{fontSize: "22px"}}></KeyboardArrowRightOutlinedIcon>
        </button>

        <Swiper
          modules={[ Navigation ]}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
          }}
          slidesPerView={4}
          spaceBetween={22}
        >
          {cardData.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="flex relative group/card w-full h-full overflow-hidden cursor-pointer">
                <img src={card.image} className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover/card:scale-110" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
                </div>
              </div>
            </SwiperSlide>
          ))} 
      </Swiper>
      </div>
      <div className="grid grid-cols-4 px-12 pt-12">
        <div className="delivery flex items-center gap-5">
           <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/policy-4.png?v=1727923043" className="tickle-image" />
           <div className="text flex flex-col">
            <h4 className="text-xl text-[#224229] font-['Libre_Baskerville']">Free delivery</h4>
            <span className="text-sm text-[#828787] tracking-wider">For all orders above $45</span>
           </div>
        </div>
        <div className="payments flex items-center gap-5">
          <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/policy-5.png?v=1727923043" className="tickle-image" />
           <div className="text flex flex-col">
            <h4 className="text-xl text-[#224229] font-['Libre_Baskerville']">Secure payments</h4>
            <span className="text-sm text-[#828787] tracking-wider">Confidence on all your devices</span>
           </div>
        </div>
        <div className="support flex items-center gap-5">
          <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/policy-6.png?v=1727923044" className="tickle-image" />
           <div className="text flex flex-col">
            <h4 className="text-xl text-[#224229] font-['Libre_Baskerville']">Top-notch support</h4>
            <span className="text-sm text-[#828787] tracking-wider">sayhello&flacio.com</span>
           </div>
        </div>
        <div className="return flex items-center gap-5">
          <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/policy-7.png?v=1727923043" className="tickle-image" />
           <div className="text flex flex-col">
            <h4 className="text-xl text-[#224229] font-['Libre_Baskerville']">180 Days Return</h4>
            <span className="text-sm text-[#828787] tracking-wider">180 Days Return</span>
           </div>
        </div>
      </div>
    </div>
  );
}







