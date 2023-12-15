import { useState } from "react";
import { Transition } from '@headlessui/react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
    <nav className="p-4">
      <div className="container w-11/12 mt-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-black text-xl font-semibold">Unicraft</div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 5C3 4.44772 3.44772 4 4 4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H4C3.44772 6 3 5.55228 3 5ZM4 10H20C20.5523 10 21 10.4477 21 11C21 11.5523 20.5523 12 20 12H4C3.44772 12 3 11.5523 3 11C3 10.4477 3.44772 10 4 10ZM4 16H20C20.5523 16 21 16.4477 21 17C21 17.5523 20.5523 18 20 18H4C3.44772 18 3 17.5523 3 17C3 16.4477 3.44772 16 4 16Z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 5C3 4.44772 3.44772 4 4 4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H4C3.44772 6 3 5.55228 3 5ZM4 10H20C20.5523 10 21 10.4477 21 11C21 11.5523 20.5523 12 20 12H4C3.44772 12 3 11.5523 3 11C3 10.4477 3.44772 10 4 10ZM4 16H20C20.5523 16 21 16.4477 21 17C21 17.5523 20.5523 18 20 18H4C3.44772 18 3 17.5523 3 17C3 16.4477 3.44772 16 4 16Z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex font-sans space-x-8">
            <a href="#" className="text-black">How it works</a>
            <a href="#" className="text-black">Pricing</a>
            <a href="#" className="text-black">FAQ</a>
          </div>
          <button className="border-2 border-black w-28 p-1 rounded-lg  text-black">Contact us</button>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {(ref) => (
          <div ref={ref} className="lg:hidden font-sans bg-gray-800">
            <a href="#" className="text-black">How it works</a>
            <a href="#" className="text-black">Pricing</a>
            <a href="#" className="text-black">FAQ</a>
          </div>
        )}
      </Transition>
    </nav>



    </div>
  );
};

export default Navbar;
