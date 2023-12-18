const HowitsWorks = () => {
  return (
    <section id="how">
      <div className="lg:ml-0 ml-[999px] hidden lg:block">
        <div className="shadow-2xl pt-10 h-[28em] w-11/12 mx-auto rounded-2xl">
          <div className="text-center">
            <h1 className="text-4xl font-sans mb-2 font-semibold">
              How it works
            </h1>
            <p>
              Premium designs, unlimited requests, super fast delivery, for one
              flat monthly fee.
            </p>
          </div>

          <div>
            <div className="flex justify-center items-center my-8 ml-[17em]">
              <img
                className="w-64"
                src="https://i.ibb.co/0s1sqfy/one.png"
                alt=""
              />

              <img
                className="w-20 absolute left-[28em] opacity-50"
                src="https://i.ibb.co/x5GS4CL/up-arrow.png"
                alt=""
              />

              <div className="relative right-[17rem] top-10 font-sans">
                <h1 className="text-center text-3xl font-bold">Subscribe</h1>
                <p className="text-center w-72">
                  Subscribe to a plan & you’ll get an instant access to your
                  private Slack channel.
                </p>
              </div>

              <img
                className="w-60"
                src="https://i.ibb.co/Kq50bhZ/two.png"
                alt=""
              />
              <img
                className="w-20 absolute left-[64em] opacity-50"
                src="https://i.ibb.co/x5GS4CL/up-arrow.png"
                alt=""
              />

              <div className="relative right-[17rem] top-8  font-sans">
                <h1 className="text-center text-3xl font-bold">Request</h1>
                <p className="text-center w-72">
                  Submit any number of requests. We all work through them, one
                  at a time, ensuring consistent updates every 24-48 hours
                </p>
              </div>

              <img
                className="w-60"
                src="https://i.ibb.co/d5bDr1d/three.png"
                alt=""
              />

              <div className="relative right-[17rem] top-10 font-sans">
                <h1 className="text-center text-3xl font-bold">Revise</h1>
                <p className="text-center w-72">
                  Need changes? We guarantee unlimited revisions until you are
                  200% satisfied.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Another section */}

        <div className="h-[30rem] text-center  my-20 bg-[#F9FAFB]">
          <div className="flex justify-center items-center gap-2 pt-14">
            <img
              className="w-8"
              src="https://i.ibb.co/xLrS5dj/s-logo.png"
              alt=""
            />
            <h3 className=" text-xl font-bold font-sans">Sisyphus</h3>
          </div>

          <h1 className="text-4xl mt-16 w-11/12 mx-auto font-semibold">
            We’ve been with unicraft to kick start every new project and can’t
            imagine working without it.
          </h1>
          <img
            className="w-12 bg-cover ml-[46.3em] mt-20 mb-2 h-12 rounded-full"
            src="https://i.ibb.co/FKgWFH2/mngr.jpg"
            alt=""
          />
          <p className="text-xl font-semibold">Candice Wu</p>
          <p>Product Manager, Sisyphus</p>
        </div>
      </div>
    </section>
  );
};

export default HowitsWorks;
