import { Link } from "react-router-dom";

export default function LogIn(){
  return(
    <div className="py-40 flex flex-col items-center justify-center gap-10">
      <h1 className="text-black font-['Libre_Baskerville'] text-6xl">Account</h1>
      <div className="grid grid-cols-2 gap-12">
        <div className="left flex flex-col items-start justify-center gap-4">
          <h2 className="text-3xl font-['Libre_Baskerville']">Sign In</h2>
          <input type="text" placeholder="Email*" className="w-125 border border-gray-300 py-1 px-6 outline-none placeholder:text-sm"></input>
          <input type="text" placeholder="Password*" className="w-125 border border-gray-300 py-1 px-6 outline-none placeholder:text-sm"></input>
          <span className="underline text-sm">Lost your password ?</span>
          <button className="bg-[#313232] w-full text-center py-3 text-white text-xs hover:bg-[#224229] duration-400">SIGN IN</button>
        </div>
        <div className="right flex flex-col gap-6 items-start">
          <h2 className="text-3xl font-['Libre_Baskerville']">New Customer?</h2>
          <p className="text-[#828787]">Sign up for early Sale access plus tailored new arrivals, <br/> trends and promotions. To opt out, click unsubscribe in <br />our emails.</p>
          <Link to="/createaccount" className="text-xs bg-[#313232] text-white hover:bg-[#224229] py-3 px-8 w-fit">REGISTER</Link>
        </div>
      </div>
    </div>
  );
}