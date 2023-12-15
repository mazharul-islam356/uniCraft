
const HowitsWorks = () => {
    return (
        <div className="shadow-2xl pt-10 h-[28em] w-11/12 mx-auto rounded-2xl">
            <div className="text-center">
            <h1 className="text-4xl font-sans mb-2 font-semibold">How it works</h1>
            <p>Premium designs, unlimited requests, super fast delivery, for one flat monthly fee.</p>
            </div>

            <div>
                <div className="flex justify-center items-center my-8 ml-[17em]">
                    
                    <img className="w-64" src="../../../public/imges/one.png" alt="" />
                    
                    <img className="w-20 absolute left-[28em] opacity-50" src="../../../public/imges/up-arrow.png" alt="" />

                    <div className="relative right-[17rem] top-10 font-sans">
                        <h1 className="text-center text-3xl font-bold">Subscribe</h1>
                        <p className="text-center w-72">Subscribe to a plan & you’ll get an instant access to your private Slack channel.</p>
                        
                   
                    </div>
                 
                    <img className="w-60" src="../../../public/imges/two.png" alt="" />
                    <img className="w-20 absolute left-[64em] opacity-50" src="../../../public/imges/up-arrow.png" alt="" />

                    <div className="relative right-[17rem] top-8  font-sans">
                        <h1 className="text-center text-3xl font-bold">Request</h1>
                        <p className="text-center w-72">Submit any number of requests. We all work through them, one at a time, ensuring consistent updates every 24-48 hours</p>
                        
                   
                    </div>


                    <img className="w-60" src="../../../public/imges/three.png" alt="" />

                    <div className="relative right-[17rem] top-10 font-sans">
                        <h1 className="text-center text-3xl font-bold">Revise</h1>
                        <p className="text-center w-72">Need changes? We guarantee unlimited revisions until you are 200% satisfied.</p>
                        
                   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowitsWorks;