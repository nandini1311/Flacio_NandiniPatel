import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {PopOver, Announcement, Hero, Decorate, Rating, Review, Plants, SignUp, BringLife} from "./pages/LandingPage";
import Wishlist from "./pages/Wishlist";
import CreateAccount from "./pages/CreateAccount";
import Products from "./pages/Products";
import LogIn from "./pages/LogIn";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element=
              {<>
                <PopOver />
                <Announcement />
                <Hero />
                <Decorate />
                <Rating />
                <Review />
                <Plants />
                <SignUp />
                <BringLife />
                </>
              } 
            />
          <Route path="/products" element={<Products />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </main>  

      <Footer />
      </div>
    </>
  );
}

export default App;