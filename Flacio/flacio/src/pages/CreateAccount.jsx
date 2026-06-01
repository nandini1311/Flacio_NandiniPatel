import { Link } from "react-router-dom";

export default function CreateAccount() {
  return(
    <div className="py-40 flex flex-col gap-10 justify-center items-center">
      <h1 className="text-black font-['Libre_Baskerville'] text-6xl">Create Account</h1>
      <div className="flex flex-col gap-4">
        <input type="text" placeholder="First Name" className="w-125 border border-gray-300 py-1 px-6 outline-none placeholder:text-sm"></input>
        <input type="text" placeholder="Last Name" className="w-125 border border-gray-300 py-1 px-6 outline-none placeholder:text-sm"></input>
        <input type="text" placeholder="Email" className="w-125 border border-gray-300 py-1 px-6 outline-none placeholder:text-sm"></input>
        <input type="text" placeholder="Password" className="w-125 border border-gray-300 py-1 px-6 outline-none placeholder:text-sm"></input>
        <p className="text-sm text-[#828787]">Sign up for early Sale access plus tailored new arrivals, trends and <br/>promotions. To opt out, click unsubscribe in our emails.</p>
      </div>
      <div className="buttons w-125 flex flex-col gap-5">
        <button className="bg-[#313232] py-3 text-white text-xs">REGISTER</button>
        <Link to="/login" className="border text-center border-[#313232] py-3 text-[#313232] text-xs hover:bg-[#224229] hover:text-white duration-400">SIGN IN</Link>
      </div>
    </div>
  );
}