export default function ContactUs() {
  return(
    <div className="py-21 flex flex-col gap-15">
      <div className="top flex items-center justify-center h-62 bg-cover bg-end" style={{ backgroundImage: "url('https://wpbingo-flacio.myshopify.com/cdn/shop/files/bg-breadcrumb.jpg?crop=center&height=750&v=1728267580&width=1920')"}}>
        <h1 className="text-6xl font-['Libre_Baskerville']">Contact</h1>
      </div>
      <div className="bottom grid grid-cols-12 gap-10 px-12">
        <div className="col-span-3 left flex flex-col gap-5">
          <h2 className="text-4xl font-['Libre_Baskerville']">Contact Details</h2>
          <div className="flex flex-col gap-1 pb-4 border-b border-[#d6d2d2]">
            <h4 className="text-xl font-['Libre_Baskerville']">Address</h4>
            <span className="text-[#828787] text-sm hover:text-[#224229]">8331 Indian Spring Street Ames, IA 30010</span>
          </div>
          <div className="flex flex-col gap-1 pb-4 border-b border-[#d6d2d2]">
            <h4 className="text-xl font-['Libre_Baskerville']">Phone</h4>
            <span className="text-[#828787] text-sm hover:text-[#224229]">(+84) 123 567 712</span>
          </div>
          <div className="flex flex-col gap-1 pb-4 border-b border-[#d6d2d2]">
            <h4 className="text-xl font-['Libre_Baskerville']">Email</h4>
            <span className="text-[#828787] text-sm hover:text-[#224229]">support@flacio.com</span>
          </div>
          <div className="flex flex-col gap-1 pb-4 border-b border-[#d6d2d2]">
            <h4 className="text-xl font-['Libre_Baskerville']">Opening Time</h4>
            <span className="text-[#828787] text-sm hover:text-[#224229]">8:00Am – 10:00Pm, Sunday Close</span>
          </div>
          <div className="flex flex-col gap-1 pb-4 border-b border-[#d6d2d2]">
            <h4 className="text-xl font-['Libre_Baskerville']">Follow Us On</h4>
            <div className="flex gap-3">
              <div className="facebook border text-[#313232] hover:text-white border-[#d6d2d2] rounded-full p-3 hover:bg-[#224229] hover:border-[#313232]">
                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" x="0" y="0" viewBox="0 0 320 512" fill="currentColor"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path></svg>
              </div>
              <div className="twiter border text-[#313232] hover:text-white border-[#d6d2d2] rounded-full p-3 hover:bg-[#224229] hover:border-[#313232]">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" x="0" y="0" viewBox="0 0 512 512" fill="currentColor"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
              </div>
              <div className="whatsapp border text-[#313232] hover:text-white border-[#d6d2d2] rounded-full p-3 hover:bg-[#224229] hover:border-[#313232]">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" x="0" y="0" viewBox="0 0 448 512" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
              </div>
              <div className="tiktok border text-[#313232] hover:text-white border-[#d6d2d2] rounded-full p-3 hover:bg-[#224229] hover:border-[#313232]">
                <svg  xmlns="http://www.w3.org/2000/svg"  version="1.1"  xmlnsXlink="http://www.w3.org/1999/xlink" width="1em" height="1em"  x="0" y="0" fill="currentColor" viewBox="0 0 512 512"  xmlSpace="preserve">
                <g>
                  <path d="M480.32 128.39c-29.22 0-56.18-9.68-77.83-26.01-24.83-18.72-42.67-46.18-48.97-77.83A129.78 129.78 0 0 1 351.04.39h-83.47v228.08l-.1 124.93c0 33.4-21.75 61.72-51.9 71.68a75.905 75.905 0 0 1-28.04 3.72c-12.56-.69-24.33-4.48-34.56-10.6-21.77-13.02-36.53-36.64-36.93-63.66-.63-42.23 33.51-76.66 75.71-76.66 8.33 0 16.33 1.36 23.82 3.83v-84.75c-7.9-1.17-15.94-1.78-24.07-1.78-46.19 0-89.39 19.2-120.27 53.79-23.34 26.14-37.34 59.49-39.5 94.46-2.83 45.94 13.98 89.61 46.58 121.83 4.79 4.73 9.82 9.12 15.08 13.17 27.95 21.51 62.12 33.17 98.11 33.17 8.13 0 16.17-.6 24.07-1.77 33.62-4.98 64.64-20.37 89.12-44.57 30.08-29.73 46.7-69.2 46.88-111.21l-.43-186.56a210.864 210.864 0 0 0 46.88 27.34c26.19 11.05 53.96 16.65 82.54 16.64v-83.1c.02.02-.22.02-.24.02z" />
                </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-9 w-full">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95945.74553067013!2d-122.52000119922108!3d37.75767131490468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e1!3m2!1sen!2sin!4v1780550102049!5m2!1sen!2sin" width="1050" height="550" style={{ border:0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className="questions flex flex-col w-[65%] mx-auto text-center pt-8">
        <h2 className="text-4xl font-['Liber_Baskerville']">Send Us Your Questions!</h2>
        <span className="text-sm text-[#828787]">We’ll get back to you within two days.</span>
        <div className="form flex flex-col gap-5 mt-10">
           <div className="grid grid-cols-2 gap-4">
             <div className="name flex flex-col gap-2">
              <label htmlFor="Name" className="text-start text-sm">Name</label>
              <input type="text" className="border px-6 py-3 outline-none"></input>
             </div>
             <div className="email flex flex-col gap-2">
              <label htmlFor="Name" className="text-start text-sm">Email</label>
              <input type="text" className="border px-6 py-3 outline-none"></input>
             </div>
           </div>
           <div className="msg flex flex-col gap-2">
              <label htmlFor="Name" className="text-start text-sm">Message</label>
              <textarea className="border px-6 py-3 outline-none" rows={9}></textarea>
           </div>
           <div className="submit flex justify-center">
             <button className="bg-[#313232] uppercase tracking-widest text-sm text-white px-15 py-3 hover:bg-[#224229]">Submit</button>
           </div>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-10">
        <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/brand-1.jpg?v=1728370113" className="tickle-image" />
        <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/brand-2.jpg?v=1728370113" className="tickle-image" />
        <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/brand-3.jpg?v=1728370113" className="tickle-image" />
        <img src="https://wpbingo-flacio.myshopify.com/cdn/shop/files/brand-4.jpg?v=1728370113" className="tickle-image" />
      </div>
    </div>
  );
}