import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const Pricing = () => {
  return (
    <section id="price">
      <div className="bg-[url(https://i.ibb.co/ZcbgNbh/bg02.png)] bg-cover pt-4">
        <div className="text-center my-8">
          <h1 className="text-5xl font-bold opacity-80  font-sans">
            Pricing made for collaborative support.
          </h1>
          <p className="pb-8 mx-auto text-xl mt-4">
            Plain is made for your entire company. Only pay for users that
            actually message customers. Everyone else is free, forever.
          </p>
        </div>

        {/* CARD */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-11/12 lg:gap-0 gap-6 mx-auto items-center justify-items-center">
          {/* Card 01 */}
          <div className="w-80  rounded-lg h-[30rem]">
            <div className=" shadow-md px-6">
              <h2 className="pt-6 text-2xl text-center mb-2">Freebie</h2>
              <p className="mb-4">
                Ideal for individuals who need quick access to basic features.
              </p>
              <div>
                <span className="text-6xl">$0</span>{" "}
                <span className="text-xl">/month</span>
              </div>{" "}
              <br />
              <button className="btn btn-outline btn-wide rounded-md ml-2">
                {" "}
                Get started now
              </button>
              <div className="flex items-center mt-4">
                <IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline>
                <p>20,000+ of PNG & SVG graphics</p>
              </div>
              <div className="flex items-center mt-4">
                <IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline>
                <p>Access to 100 million stock images</p>
              </div>
              <div className="flex items-center opacity-50 mt-4">
                <IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline>
                <p>Upload custom icons and fonts</p>
              </div>
              <div className="flex items-center opacity-50 mt-4">
                <IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline>
                <p>Unlimited Sharing</p>
              </div>
              <div className="flex items-center opacity-50 mt-4 pb-8">
                <IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline>
                <p>Upload graphics & video in up to 4k</p>
              </div>
            </div>
          </div>

          {/* Card 02 */}
          <div className="w-80 bg-[#1c2d45f3] rounded-lg h-[32.5rem]">
            <div className="text-white px-6">
              <h2 className="pt-8 text-2xl mb-2">Proffesional</h2>
              <p className="mb-4">
                Ideal for individuals who who need advanced features and tools
                for client work.
              </p>
              <div>
                <span className="text-6xl">$25</span>{" "}
                <span className="text-xl">/month</span>
              </div>{" "}
              <br />
              <button className="btn btn-outline border-white text-white btn-wide rounded-md">
                {" "}
                Get started now
              </button>
              <div className="flex items-center mt-4">
                <IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline>
                <p>Unlimited Sharing</p>
              </div>
              <div className="flex items-center mt-4">
                <IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline>
                <p>Upload custom icons and fonts</p>
              </div>
              <div className="flex items-center mt-4">
                <IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline>
                <p>20,000+ of PNG & SVG graphics</p>
              </div>
              <div className="flex items-center opacity-50 mt-4">
                <IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline>
                <p>Access to 100 million stock images</p>
              </div>
              <div className="flex items-center opacity-50 mt-4">
                <IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline>
                <p>Upload graphics & video in up to 4k</p>
              </div>
            </div>
          </div>

          {/* Card 03 */}
          <div className="w-80  rounded-lg h-[31rem]">
            <div className="shadow-lg px-6">
              <h2 className="pt-2 text-2xl mb-2">Enterprise</h2>
              <p className="mb-4">
                Ideal for businesses who need personalized services and security
                for large teams.{" "}
              </p>
              <div>
                <span className="text-6xl">$100</span>{" "}
                <span className="text-xl">/month</span>
              </div>{" "}
              <br />
              <button className="btn btn-outline btn-wide rounded-md ml-2">
                {" "}
                Get started now
              </button>
              <div className="flex items-center mt-4">
                <IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline>
                <p>Unlimited Projects</p>
              </div>
              <div className="flex items-center mt-4">
                <IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline>
                <p>Upload graphics & video in up to 4k</p>
              </div>
              <div className="flex items-center mt-4">
                <IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline>
                <p>Upload custom icons and fonts.</p>
              </div>
              <div className="flex items-center mt-4">
                <IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline>
                <p>Unlimited Sharing</p>
              </div>
              <div className="flex items-center mt-4 pb-8">
                <IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline>
                <p>Access to 100 million stock images</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
