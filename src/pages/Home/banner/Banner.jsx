import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <div>
      <div>
        <h1 className="text-center mt-16 font-bold text-5xl w-5/6 mx-auto">
          Elevate Your Presence with Seamless Design and Innovation.
        </h1>
        <p className="text-center text-xl mt-4">
          From strategic planning to digital presence, we are your dedicated
          partner in achieving solo success.
        </p>
        <button className="text-center ml-[43em] mt-10 bg-gray-600 text-white p-3 px-10 rounded-lg">
          View Pricing
        </button>
      </div>

      <div>
        <p className="text-gray-500 text-center mt-52">
          Trusted By 250+ Companies
        </p>

        <Marquee pauseOnHover>
          <div className="flex justify-center items-center gap-20 mt-6">
            <img
              src="/public/imges/Adobe_Logo_PNG_(17).png"
              className="w-24 h-8"
              alt=""
            />
            <img src="/public/imges/amazon.png" className="w-28 h-14" alt="" />
            <img src="/public/imges/pngegg.png" className="w-28 h-14" alt="" />
            <img
              src="/public/imges/Spotify-Logo.wine.png"
              className="w-28 h-20"
              alt=""
            />
            <img
              src="/public/imges/zoom-logo-png.png"
              className="w-16 h-5"
              alt=""
            />
            <img
              src="/public/imges/klipartz.com (1).png"
              className="w-16 h-16"
              alt=""
            />
            <img
              src="/public/imges/klipartz.com.png"
              className="w-16 h-16"
              alt=""
            />
            <img
              src="/public/imges/pngegg (1).png"
              className="w-24 h-12"
              alt=""
            />
          </div>
        </Marquee>

        
      </div>
    </div>
  );
};

export default Banner;
