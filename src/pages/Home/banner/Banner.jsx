const Banner = () => {

  return (
    <div>
      <div>
        <h1 className="text-center mt-28 font-bold text-6xl w-[17em] mx-auto">
          Elevate Your Presence with Seamless Design and Innovation.
        </h1>
        <p className="text-center text-xl mt-6">
          From strategic planning to digital presence, we are your dedicated
          partner in achieving solo success.
        </p>
        <button className="text-center ml-[43em] mt-10 bg-gray-600 text-white p-3 px-10 rounded-lg">
          View Pricing
        </button>
      </div>

      

      <div>
        <p className="text-gray-500 text-center mt-48">
          Trusted By 250+ Companies
        </p>

        
          <div className="flex flex-wrap justify-center items-center lg:gap-20 gap-10 md:gap-20 mt-6">
            
            
            <img src="/public/imges/pngwing.com (13).png" className="w-32 h-20" alt="" />

            <img src="/public/imges/amazon.png" className="w-40 h-24" alt="" />
            
            <img
              src="/public/imges/zoom-logo-png.png"
              className="w-22 h-8"
              alt=""
            />
            <img
              src="/public/imges/klipartz.com (1).png"
              className="w-20 h-20"
              alt=""
            />
            <img
              src="/public/imges/klipartz.com.png"
              className="w-20 h-20"
              alt=""
            />
            <img
              src="/public/imges/pngegg (1).png"
              className="w-28 h-16"
              alt=""
            />
          </div>
      

        
      </div>
    </div>
  );
};

export default Banner;
