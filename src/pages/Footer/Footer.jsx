import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg02 bg-cover h-[39rem] mt-40 ">
      <div className="flex flex-col justify-center items-center space-y-6 text-center">
        <h1 className="lg:text-6xl md:text-5xl text-4xl mt-20 font-bold">
          No long-term contracts. <br />
          No catches. Simple.
        </h1>
        <p className="text-xl opacity-80">
          Start your 30-day free trial. Cancel anytime.
        </p>
        <button className="bg-gray-800 font-semibold w-44 font-sans text-white p-3 mx-6 rounded-md">
          Contact us
        </button>
      </div>

      {/* Footer */}

      <div className="w-11/12 mx-auto mt-32">
        <p className="bg-gray-400 h-[1px]"></p>
        <h2 className="font-bold text-xl mt-8">Unicraft</h2>
        <p className="opacity-60">
          Design amazing digital experiences that <br />
          create more happy in the world.
        </p>

        <div className="flex justify-between mt-4">
          <p className="opacity-60">© 2077 Untitled UI. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-2xl opacity-60">
            <a href="">
              {" "}
              <FaSquareXTwitter />
            </a>
            <a href="">
              {" "}
              <FaFacebook />{" "}
            </a>
            <a href="">
              {" "}
              <FaLinkedin />{" "}
            </a>
            <a href="">
              {" "}
              <FaGithub />{" "}
            </a>
            <a href="">
              {" "}
              <TbWorld />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
