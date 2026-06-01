import { useState, useEffect } from "react";
import { Box, IconButton, Drawer, List, ListItem, Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloseIcon from "@mui/icons-material/Close";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import MenuIcon from "@mui/icons-material/Menu";
import Dialog from '@mui/material/Dialog';
import { Link } from "react-router-dom"; 
import "aos/dist/aos.css";   
import AOS from "aos";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [loginOpen, setloginOpen] = useState(false);
  const [view, setView] = useState("login")
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return(
    <>
      <header className={`fixed top-0 left-0 w-full h-21.25 z-50 flex items-center transition-all duration-300 px-4
        ${scrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white border-b border-white/30" }`}>

        <div className="grid grid-cols-[1fr_auto_1fr] md:grid-cols-3 items-center w-full">
          <div className="flex items-center md:gap-6 justify-start">
            <IconButton onClick={() => setOpen(true)} sx={{ color: scrolled ? "#313232" : "white", display: { xs: "inline-flex", md: "none" } }}>
              <MenuIcon sx={{ fontSize: "24px" }} />
            </IconButton>
            <IconButton onClick={() => setSearchOpen(true)} sx={{ color: scrolled ? "#313232" : "white", display: { xs: "inline-flex", md: "none" } }}>
              <SearchIcon sx={{ fontSize: "24px" }} />
            </IconButton>

            <div className="menus hidden lg:flex gap-6">
              <div className="title static group cursor-pointer">
                <div className="nav-link active flex items-center gap-1">
                  <Link className="text-xs tracking-wider">HOME</Link>
                  <i className="fa-solid fa-angle-down text-[10px]"></i>
                </div>
                <div className="absolute grid grid-cols-3 gap-5 bg-white left-0 top-full p-4 w-185 opacity-0 invisible group-hover:visible group-hover:opacity-100">
                  <div className="text-sm text-[#828787] text-center"><img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/home-1.jpg?v=1729049735" />Home Modern</div>
                  <div className="text-sm text-[#828787] text-center"><img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/home-2.jpg?v=1729049735" />Home Flat</div>
                  <div className="text-sm text-[#828787] text-center"><img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/home-3.jpg?v=1729049735" />Home Collection</div>
                  <div className="text-sm text-[#828787] text-center"><img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/home-4.jpg?v=1729049735" />Home Classic</div>
                  <div className="text-sm text-[#828787] text-center"><img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/home-5.jpg?v=1729049735" />Home Clean</div>
                  <div className="text-sm text-[#828787] text-center"><img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/home-6.jpg?v=1729049735" />Home Stylish</div>
               </div>
             </div>
 
              <div className="title static group cursor-pointer">
                <div className="nav-link flex items-center gap-1">
                  <Link className="text-xs tracking-wider">SHOP</Link>
                  <i className="fa-solid fa-angle-down text-[10px]"></i>
                </div>
                <div className="absolute grid grid-cols-2 gap-7 bg-white left-0 top-full px-15 py-10 opacity-0 invisible group-hover:visible group-hover:opacity-100">
                  <div className="flex gap-6 text-[#224229]">
                    <div className="relative hover:-translate-y-5 duration-300">
                      <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/shop1.webp?v=1727751500"/>
                      <span className="absolute left-26 bottom-16 text-center px-4 py-2 bg-white text-xs">NEW ARRIVALS</span>
                    </div>  
                    <div className="relative hover:-translate-y-5 duration-300">
                      <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/shop2.webp?v=1727751500"/>
                      <span className="absolute left-26 bottom-16 text-center px-4 py-2 bg-white text-xs">BEST SELLERS</span>
                    </div> 
                  </div>
                  <div className="grid grid-cols-3 gap-5">
                    <div className="layout">
                      <h2 className="text-[#313232] font-['Libre_Baskerville'] text-xl border-b border-gray-300">Layout</h2>
                      <ul className="text-[#828787] text-sm pt-3 leading-7">
                        <li>Standard</li>  <li>Standard With Banner</li>  <li>Categories Image 1</li>  <li>Categories Image 2</li>
                        <li>Fullwidth</li>  <li>List view</li>  <li>Simple</li>  <li>MansonryHot</li>
                        <li>Overlay Header</li>  <li>Collection List 1</li>  <li>Collection List 2</li>  <li>Collection SliderNew</li>
                      </ul>
                    </div>
                    <div className="filter">
                      <h2 className="text-[#313232] font-['Libre_Baskerville'] text-xl border-b border-gray-300">Filter</h2>
                      <ul className="text-[#828787] text-sm pt-3 leading-7">
                        <li>On top</li>  <li>Dropdown</li>  <li>Side out</li>  <li>Drawer</li>
                        <li>Sidebar Style 1</li>  <li>Sidebar Style 2</li>  <li>Sidebar Style 3</li>  <li>Sidebar Style 4</li>
                        <li>Filter Scroll</li> 
                      </ul>
                    </div>
                    <div className="cart">
                      <h2 className="text-[#313232] font-['Libre_Baskerville'] text-xl border-b border-gray-300">Loader & Cart</h2>
                      <ul className="text-[#828787] text-sm pt-3 leading-7">
                        <li>Shop Paggination</li>  <li>Shop Load more button</li>  <li>Shop Infinite scrolling</li>  <li>Cart Dropdown</li>
                        <li>Cart Side out</li>  <li>Cart Page</li>
                      </ul>
                    </div>
                  </div>
               </div>
             </div>

              <div className="title static group cursor-pointer">
                <div className="nav-link flex items-center gap-1">
                  <Link className="text-xs tracking-wider">PRODUCT</Link>
                  <i className="fa-solid fa-angle-down text-[10px]"></i>
                </div>
                <div className="absolute grid grid-cols-4 gap-7 bg-white w-full left-0 top-full px-18 py-10 opacity-0 invisible group-hover:visible group-hover:opacity-100">
                  <div className="product">
                    <h2 className="text-[#313232] font-['Libre_Baskerville'] text-xl border-b border-gray-300">Product Layout</h2>
                    <ul className="text-[#828787] text-sm pt-3 leading-7">
                      <li>Grid 1 columns</li>  <li>Grid 2 columns</li>  <li>Grid modern</li>  <li>Grid sticky</li>
                      <li>Slider full-width</li>  <li>Bottom Thumbnails</li>  <li>Left Thumbnails</li>  <li>Right Thumbnails</li>
                      <li>Without Thumbnails</li>  <li>Left Sidebar</li>  <li>Right Sidebar</li>  <li>Group Product</li>
                      <li>Tab information</li>  <li>Collapsible tabs information</li>  <li>Full Content information</li>  <li>Vertical information</li>
                    </ul>
                  </div>
                  <div className="featured">
                    <h2 className="text-[#313232] font-['Libre_Baskerville'] text-xl border-b border-gray-300">Featured</h2>
                    <ul className="text-[#828787] text-sm pt-3 leading-7">
                      <li>Pre-order productHot</li>  <li>Sticky add to cart</li>  <li>Video</li>  <li>3D, AR models</li>
                      <li>Product 360</li>  <li>Countdown Timer</li>  <li>Frequently Bought Together v1</li>  <li>Frequently Bought Together v2</li>
                      <li>Buy more save more</li>  <li>Real-time visitors</li>  <li>Stock countdown</li>  <li>Back in stock notification</li>
                      <li>Dynamic checkout button</li>  <li>Trust badge</li>  <li>Delivery information</li>
                    </ul>
                  </div>
                  <div className="featured">
                    <h2 className="text-[#313232] font-['Libre_Baskerville'] text-xl border-b border-gray-300">Featured</h2>
                    <ul className="text-[#828787] text-sm pt-3 leading-7">
                      <li>Product Upsell Features</li>  <li>Product pickup</li>  <li>Shipping info</li>  <li>Ask a Question</li>
                      <li>Product Variable Image</li>  <li>Product Variable Color</li>  <li>Product Variable Color and Check Box</li>  <li>Product Variable Dropdown</li>
                      <li>Product Variable Color and Dropdown</li>  <li>Product Variable Box</li>  <li>Product Variable Check Box</li> 
                    </ul>
                  </div>
                  <div className="cart">
                    <h2 className="text-[#313232] font-['Libre_Baskerville'] text-xl border-b border-gray-300">Product Cart</h2>
                    <ul className="text-[#828787] text-sm pt-3 leading-7">
                      <li>Scale hover</li>  <li>Slider hover</li>  <li>Fadein hover</li>  <li>Zoom hover</li>
                      <li>Icons on hover</li>  <li>Icon & add to cart</li>  <li>Quick view button</li>  <li>Add to cart button</li>
                      <li>Wishlist on the bottom</li>  <li>Dual Button</li>  <li>Slider up</li> <li>Info on hover</li>  <li>Quick shop buttonHot</li>
                    </ul>
                  </div>
                </div>
             </div>

              <div className="title static group cursor-pointer">
                <div className="nav-link flex items-center gap-1">
                  <Link className="text-xs tracking-wider">BLOG</Link>
                  <i className="fa-solid fa-angle-down text-[10px]"></i>
                </div>
                <div className="absolute grid grid-cols-2 gap-10 w-150 bg-white left-50 top-full px-8 py-10 opacity-0 invisible group-hover:visible group-hover:opacity-100">
                  <div className="post">
                    <h2 className="text-[#313232] font-['Libre_Baskerville'] text-xl border-b border-gray-300">Layout & Post</h2>
                    <ul className="text-[#828787] text-sm pt-3 leading-7">
                      <li>Blog Standard</li>  <li>Blog Grid</li>  <li>Blog Grid Mix</li>  <li>List</li>
                      <li>Post Sidebar</li>  <li>Post One Column</li>  <li>Post Prallax Image</li>  <li>Post Sticky</li>
                      <li>Post Simple Title</li> 
                    </ul>
                  </div>
                  <div className="images flex flex-col gap-5">
                    <div className="relative">
                      <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/articles/blog-6_600x260.webp?v=1727686488"/>
                      <div className="absolute inset-0 flex flex-col justify-end p-5 text-xs">
                        <span className="text-md hover:text-[#224229]">NEWS</span> <p className="font-['Libre_Baskerville'] text-[16px] hover:text-[#224229]">Travelling Solo Is Awesome</p>
                      </div>
                    </div> 
                    <div className="relative">
                      <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/articles/blog-2_600x260.webp?v=1727686423"/>
                      <div className="absolute inset-0 flex flex-col justify-end p-5 text-xs">
                        <span className="text-md hover:text-[#224229]">NEWS</span> <p className="font-['Libre_Baskerville'] text-[16px] hover:text-[#224229]">Indoor Plants Are Godd For Health.</p>
                      </div>
                    </div> 
                  </div>
                </div>
             </div>

              <div className="title static group cursor-pointer">
                <div className="nav-link flex items-center gap-1">
                  <Link className="text-xs tracking-wider">FEATURED</Link>
                  <i className="fa-solid fa-angle-down text-[10px]"></i>
                </div>
                <div className="absolute grid grid-cols-5 gap-10 w-full bg-white left-0 top-full px-18 py-10 opacity-0 invisible group-hover:visible group-hover:opacity-100">
                  <div className="page">
                    <h2 className="text-[#313232] font-['Libre_Baskerville'] text-xl border-b border-gray-300">Page</h2>
                    <ul className="text-[#828787] text-sm pt-3 leading-7">
                      <li>About Us</li>  <li>Contact Us</li>  <li>Faqs</li>  <li>Faqs 2</li>
                      <li>Wishlist</li>  <li>404 Error</li> 
                    </ul>
                  </div>
                  <div className="porfolio">
                    <h2 className="text-[#313232] font-['Libre_Baskerville'] text-xl border-b border-gray-300">Portfolio</h2>
                    <ul className="text-[#828787] text-sm pt-3 leading-7">
                      <li>2 Columns</li>  <li>3 Columns</li>  <li>4 Columns</li>  <li>Masonry Layout</li>
                    </ul>
                  </div>
                  <div className="featured">
                    <h2 className="text-[#313232] font-['Libre_Baskerville'] text-xl border-b border-gray-300">Featured</h2>
                    <ul className="text-[#828787] text-sm pt-3 leading-7">
                      <li>Announcement bar</li>  <li>Popup Newsletter</li>  <li>Popup CompareNew</li>  <li>Cookies law info</li> <li>RTL Layout</li>
                      <li>Wishlist</li>  <li>404 Error</li> 
                    </ul>
                  </div>
                  <div className="lookbook">
                    <h2 className="text-[#313232] font-['Libre_Baskerville'] text-xl border-b border-gray-300">Lookbook</h2>
                    <ul className="text-[#828787] text-sm pt-3 leading-7">
                      <li>Lookbook Single</li>  <li>Lookbook In Page</li>  <li>Lookbook Simple</li> 
                    </ul>
                  </div>
                  <div className="shop">
                    <h2 className="text-[#313232] font-['Libre_Baskerville'] text-xl border-b border-gray-300">Instagram Shop</h2>
                    <ul className="text-[#828787] text-sm pt-3 leading-7">
                      <li>Instagram Shop Slider</li>  <li>Instagram Shop Grid Modern</li>  <li>Instagram Shop in Page</li>
                    </ul>
                  </div>
                </div>
              </div>
           </div>
          </div>

          <div className="logo flex justify-center">
            <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/logo-white.png?crop=center&height=125&v=1727749201&width=400" 
              className="h-7 w-auto" style={{  transition: "all 0.3s ease", filter: scrolled ? "invert(1) brightness(0)" : "none" 
              }} 
          />
          </div>

          <div className="icons flex justify-end">
            <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1.5, md: 2.5 } }}>            
              <IconButton  onClick={() => setSearchOpen(true)} sx={{ color: scrolled ? "#313232" : "white",display: { xs: "none", md: "inline-flex" }, p: 0.5,
                "&:hover": { transform: "translateY(-2px)"}}}>
                <SearchIcon sx={{ fontSize: "26px" }} />
              </IconButton>

              <IconButton onClick={() => setloginOpen(true)} sx={{ color: scrolled ? "#313232" : "white", display: { xs: "none", md: "inline-flex" }, p: 0.5,
                "&:hover": { transform: "translateY(-2px)"}}}>
                <PersonOutlineOutlinedIcon sx={{ fontSize: "26px" }} />
              </IconButton>

              <IconButton  sx={{ color: scrolled ? "#313232" : "white", p: 0.5, 
                "&:hover": { transform: "translateY(-2px)"} }}>
                <Badge 
                  badgeContent={0} 
                  showZero
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "#224229",
                      color: "white",
                      fontSize: "12px",
                      height: "19px",
                    }
                  }}
               >
                  <FavoriteBorderIcon sx={{ fontSize: "24px" }} />
                </Badge>
              </IconButton>

              <IconButton sx={{ color: scrolled ? "#313232" : "white", p: 0.5, "&:hover": { transform: "translateY(-2px)"} }}>
                <Badge 
                  badgeContent={0} 
                  showZero
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "#224229",
                      color: "white",
                      fontSize: "12px",
                      height: "19px",
                    }
                  }}
                >
                  <LocalMallOutlinedIcon sx={{ fontSize: "24px" }} />
                </Badge>
              </IconButton>
            </Box>
          </div>
        </div>

        <Dialog data-aos="fade-down" open={searchOpen} onClose={() => setSearchOpen(false)} fullWidth maxWidth="lg"
          sx={{ "& .MuiDialog-container": { alignItems: "flex-start", marginTop: "80px" },}}>
            <div className="w-full py-20 px-20">
              <CloseIcon onClick={() => setSearchOpen(false)} sx={{position: "absolute", right: 20, top: 15 }}> </CloseIcon>
              <div className="relative flex items-center" >
                <SearchIcon sx={{ position: "absolute", left: 10, fontSize: "22px" }} />
                <input type="text" placeholder="Search..." className="w-full placeholder:text-sm border border-[#d6d2d2] py-3 px-10 outline-none" />
             </div>
           </div>
         </Dialog> 

        <Drawer anchor="right" transitionDuration={500} open={loginOpen} onClose={() => setloginOpen(false)}>
            <div className="w-130 p-10">
              <Box onClick={() => setloginOpen(false)}
                sx={{
                  position: "absolute",
                  right: "40px",
                  width: "25px", 
                  height: "25px",
                  border: "1px solid #d6d2d2",
                  backgroundColor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  "&:hover .line-1": {
                    transform: "rotate(0deg)",
                  },
                  "&:hover .line-2": {
                    transform: "rotate(0deg)",
                  },
                }}
              >              
                <div className="relative w-4 h-4 flex items-center justify-center">
                  <Box className="line-1"
                    sx={{
                      position: "absolute",
                      width: "16px",
                      height: "1px", 
                      backgroundColor: "#313232",
                      transform: "rotate(45deg)", 
                      transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                    }}
                  />
                  <Box className="line-2"
                    sx={{
                      position: "absolute",
                      width: "16px",
                      height: "1px",
                      backgroundColor: "#313232",
                      transform: "rotate(-45deg)",
                      transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                    }}
                  />
                </div>
              </Box>
              {view === "login" && (
                <div className="flex flex-col gap-5 py-10">
                  <span className="text-xs text-[#313232] font-semibold">SIGN IN</span>
                  <input type="text" placeholder="Email*" className="border border-[#d6d2d2] outline-none placeholder:text-sm px-6 py-2" />
                  <input type="text" placeholder="Password*" className="border border-[#d6d2d2] outline-none placeholder:text-sm px-6 py-2" />
                  <span onClick={() => setView("forgot")} className="cursor-pointer underline underline-offset-4 text-xs text-[#313232]">Lost your password ?</span>
                  <div className="buttons grid grid-cols-2 gap-4">
                    <button className="text-[10px] tracking-widest bg-[#313232] text-white py-3">SIGN IN</button>
                    <button className="text-[10px] hover:bg-[#224229] hover:text-white duratio-400 border border-[#313232] tracking-widest text-[#313232] py-3">CREATE YOUR ACCOUNT</button>
                  </div>
                </div>
              )} 

            {view === "forgot" && (
              <div className="flex flex-col items-center text-center gap-5 py-10">
                <span className="text-xs text-[#313232] font-semibold tracking-wider self-start uppercase mb-4">SIGN IN</span>
                  <h2 className="font-['Libre_Baskerville'] text-md text-[#313232] uppercase tracking-wide">RESET YOUR PASSWORD</h2>
                  <p className="text-sm italic text-gray-600 font-light"> We will send you an email to reset your password. </p>
                  <div className="w-32 h-px bg-gray-400 my-2"></div>
                  <input  type="text" placeholder="Email*" className="w-full border border-[#d6d2d2] outline-none placeholder:text-sm px-6 py-2.5 text-sm mt-2" />       
                  <button className="w-1/2 text-[11px] self-start tracking-widest bg-[#313232] text-white py-3 uppercase hover:bg-black transition-colors">
                    SUBMIT
                  </button>           
                  <span onClick={() => setView("login")} className="cursor-pointer underline underline-offset-5 text-xs tracking-wider text-[#313232] hover:text-black mt-4 block"> Cancel </span>
              </div>
            )}
            </div>           
        </Drawer>  

        <Drawer transitionDuration={500} open={open} onClose={() =>  setOpen(false)}>
          <div className="bg-white relative w-80 p-4">
            <CloseIcon onClick={() => setOpen(false)} sx={{ position: "absolute", right: "15px", top: "25px", border: "1px solid #d6d2d2", fontSize: "26px", p: 0.5}} ></CloseIcon>
            <div className="py-12">
              <List>
                 <div className="flex p-1.5 border-b border-[#d6d2d2] justify-between items-center">
                    <ListItem className="text-xs text-[#313232] -ml-4 uppercase">Home</ListItem>
                    <KeyboardArrowRightOutlinedIcon onClick={() => setOpenSubMenu(true)} sx={{ color: "#d6d2d2"}}></KeyboardArrowRightOutlinedIcon>
                 </div>
                 <div className="flex p-1.5 border-b border-[#d6d2d2] justify-between items-center">
                    <ListItem className="text-xs text-[#313232] -ml-4 uppercase">Shop</ListItem>
                    <KeyboardArrowRightOutlinedIcon sx={{ color: "#d6d2d2"}}></KeyboardArrowRightOutlinedIcon>
                 </div>
                 <div className="flex p-1.5 border-b border-[#d6d2d2] justify-between items-center">
                    <ListItem className="text-xs text-[#313232] -ml-4 uppercase">Product</ListItem>
                    <KeyboardArrowRightOutlinedIcon sx={{ color: "#d6d2d2"}}></KeyboardArrowRightOutlinedIcon>
                 </div>
                 <div className="flex p-1.5 border-b border-[#d6d2d2] justify-between items-center">
                    <ListItem className="text-xs text-[#313232] -ml-4 uppercase">Blog</ListItem>
                    <KeyboardArrowRightOutlinedIcon sx={{ color: "#d6d2d2"}}></KeyboardArrowRightOutlinedIcon>
                 </div>
                 <div className="flex p-1.5 border-b border-[#d6d2d2] justify-between items-center">
                    <ListItem className="text-xs text-[#313232] -ml-4 uppercase">Featured</ListItem>
                    <KeyboardArrowRightOutlinedIcon sx={{ color: "#d6d2d2"}}></KeyboardArrowRightOutlinedIcon>
                 </div>
              </List>
            </div>

            <div  className={`absolute top-0 bottom-0 right-0 w-full h-full z-30 bg-white transition-transform duration-500 ease-in-out 
              ${openSubMenu ? "translate-x-0" : "translate-x-full"}`} >
              <div className="border-b border-[#d6d2d2] pb-2">
                <CloseIcon onClick={() => setOpen(false)} sx={{ position: "absolute", right: "15px", top: "25px", border: "1px solid #d6d2d2", fontSize: "26px", p: 0.5}} ></CloseIcon>
                <div className="flex justify-between pt-20 px-4">
                  <KeyboardArrowLeftOutlinedIcon onClick={() => setOpenSubMenu(false)}></KeyboardArrowLeftOutlinedIcon>
                  <span className="text-[#313232] text-xs uppercase tracking-widest">Home</span>
                </div>
              </div>

              <div className="pt-10 px-4">
                <span className="text-xs text-[#313232] uppercase font-semibold tracking-wider">Sub Menu</span>
                <List>
                  <div className="flex p-1.5 border-b border-[#d6d2d2] justify-between items-center">
                    <ListItem className="text-xs text-[#313232] -ml-4 uppercase">Sub Item 1</ListItem>
                 </div>
                  <div className="flex p-1.5 border-b border-[#d6d2d2] justify-between items-center">
                    <ListItem className="text-xs text-[#313232] -ml-4 uppercase">Sub Item 2</ListItem>
                  </div>
               </List>
             </div>
            </div>
          </div>
        </Drawer>   
     </header>
    </>
  );
}



 {/* <div  className={`absolute top-0 bottom-0 right-0 w-full h-full bg-white p-4 pt-8 transition-transform duration-300 z-20
              ${openSubMenu ? "translate-x-0" : "translate-x-full"}`}  >
            <div className="flex items-center gap-2 border-b border-[#d6d2d2] pb-4 mb-4">
              <IconButton onClick={() => setOpenSubMenu(false)} sx={{ p: 0.5 }}>
                <KeyboardArrowLeftOutlinedIcon sx={{ fontSize: "22px", color: "black" }} />
              </IconButton>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#313232]">Back to Home</span>
            </div>

            <List>
              <div className="p-1.5 border-b border-[#f3f3f3]">
                <ListItem className="text-xs text-[#313232] -ml-4">Sub Item 1</ListItem>
              </div>
              <div className="p-1.5 border-b border-[#f3f3f3]">
                <ListItem className="text-xs text-[#313232] -ml-4">Sub Item 2</ListItem>
              </div>
              <div className="p-1.5 border-b border-[#f3f3f3]">
                <ListItem className="text-xs text-[#313232] -ml-4">Sub Item 3</ListItem>
              </div>
            </List>
          </div> */}