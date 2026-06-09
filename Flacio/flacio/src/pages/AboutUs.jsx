import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function AboutUs(){

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
    <div className="py-21 flex flex-col gap-15">
      <div className="top flex items-center justify-center h-62 bg-cover bg-end" style={{ backgroundImage: "url('https://wpbingo-flacio.myshopify.com/cdn/shop/files/bg-breadcrumb.jpg?crop=center&height=750&v=1728267580&width=1920')"}}>
        <h1 className="text-6xl font-['Libre_Baskerville']">About Us</h1>
      </div>   
      <div className="images bg-cover h-200 mx-15 relative" style={{ backgroundImage: "url('https://wpbingo-flacio.myshopify.com/cdn/shop/files/about-1.jpg?v=1728355049')"}}>
        <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/policy-image-1.webp?v=1727772240" className="absolute left-110 top-80 tickle-image" />
      </div>
      <div className="stories flex flex-col pt-15 gap-15">
        <div className="text max-w-4xl mx-auto flex flex-col justify-center items-center gap-3">
          <span className="text-[#828787] tracking-wider">FLACIO PHOTOSYNTHESIS STORIES</span>
          <h2 className="text-6xl text-center font-['Libre_Baskerville']">We connect buyers and sellers with suitable, eco-friendly <span className="italic">products</span></h2>
          <span className="text-2xl"> ---------- ♦ ----------</span>
          <p className="text-sm tracking-wide text-center text-[#828787]">Nothing adds more beauty and comfort to our homes and offices than the lush flowers and foliage of indoor plants. Bedrooms, bathrooms, kitchens, cubicles… There really isn’t a space a houseplant can’t enliven. Just add light and water, and you’ve got a growing indoor oasis. Bringing plants into your home is aesthetically pleasing and – amazingly – plants can offer strong health benefits as well!</p>
        </div>
        <div className="grid grid-cols-3 gap-30">
          <div className="img1"><img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/about-2_540x.jpg?v=1728359836" className="tickle-imageY"/></div>
          <div className="img2"><img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/about-3_540x.jpg?v=1728359836" className="mt-50 tickle-imageY"/></div>
          <div className="img3"><img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/about-4_540x.jpg?v=1728359837" className="tickle-imageY"/></div>
        </div>
      </div>
      <div className="works bg-[#f9f6ef] py-25 flex flex-col gap-15 justify-center items-center">
        <span className="font-['Libre_Baskerville'] text-4xl">Here's How It <span className="italic">Works</span></span>
        <div className="imgs flex w-full justify-around">
          <div className="plant flex flex-col items-center gap-3">
            <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/policy-8.svg?v=1728362430" className="h-20 w-20 tickle-image" />   
            <span className="font-['Libre_Baskerville'] text-xl">Pick your plant</span>
          </div>
          <div className="color flex flex-col items-center gap-3">
            <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/policy-9.svg?v=1728362518" className="h-20 w-20 tickle-image" />   
            <span className="font-['Libre_Baskerville'] text-xl">Choose a pot color</span>
          </div>
          <div className="shipping flex flex-col items-center gap-3">
            <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/policy-10.svg?v=1728362518" className="h-20 w-20 tickle-image" />   
            <span className="font-['Libre_Baskerville'] text-xl">Have it shipped</span>
          </div>
          <div className="watch flex flex-col items-center gap-3">
            <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/policy-11.svg?v=1728362518" className="h-20 w-20 tickle-image" />   
            <span className="font-['Libre_Baskerville'] text-xl">Watch it grow</span>
          </div>
        </div>
      </div> 
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
      <div className="grid grid-cols-4 pt-15 border-t border-[#d6d2d2]">
        <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/brand-1.jpg?v=1728370113" className="tickle-image" />
        <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/brand-2.jpg?v=1728370113" className="tickle-image" />
        <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/brand-3.jpg?v=1728370113" className="tickle-image" />
        <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/brand-4.jpg?v=1728370113" className="tickle-image" />
      </div>
    </div>
  );
}