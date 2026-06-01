import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {PopOver, Hero, Decorate, Rating, Review, Plants, SignUp, BringLife} from "./pages/LandingPage";
import Wishlist from "./pages/Wishlist";


function App() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element=
              {<>
                <PopOver />
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
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </main>  

      <Footer />
    </>
  );
}

export default App;