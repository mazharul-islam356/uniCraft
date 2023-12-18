const Banner = () => {

  return (
    <div>
      <div className="flex flex-col  justify-center">
        <h1 className="text-center mt-28 font-bold lg:text-6xl md:text-5xl text-4xl w-11/12 mx-auto">
          Elevate Your Presence with Seamless Design and Innovation.
        </h1>
        <p className="text-center lg:text-xl mt-6">
          From strategic planning to digital presence, we are your dedicated
          partner in achieving solo success.
        </p>
        <button className="text-center w-32 mx-auto btn btn-outline mt-10 font-bold rounded-lg">
          View Pricing
        </button>
      </div>

      

      <div>
        <p className="text-gray-500 text-center mt-48">
          Trusted By 250+ Companies
        </p>

        
          <div className="flex flex-wrap justify-center items-center lg:gap-20 gap-10 md:gap-20 mb-16 mt-6">
            
            
            <img src="https://i.ibb.co/QXzwhYs/cisco.png" className="w-32 h-20" alt="" />

            <img src="https://i.ibb.co/fpTs597/amazon.png" className="w-40 h-20" alt="" />
            
            <img
              src="https://i.ibb.co/b1CjTpC/zoom-logo-png.png"
              className="w-22 h-8"
              alt=""
            />
            <img
              src="https://i.ibb.co/cFbN3zr/apple.png"
              className="w-20 h-20"
              alt=""
            />
            <img
              src="https://i.ibb.co/LNb5BBd/intel.png"
              className="w-20 h-20"
              alt=""
            />
            <img
              src="https://i.ibb.co/cxNTqd4/meta.png"
              className="w-28 h-16"
              alt=""
            />
          </div>
      

        
      </div>
    </div>
  );
};

export default Banner;
