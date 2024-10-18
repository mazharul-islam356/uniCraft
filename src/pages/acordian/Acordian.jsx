/* eslint-disable react/jsx-key */
import { useState } from "react";
import AcordianItems from "./AcordianItems";


const Acordian = () => {

    const [open, setOpen] = useState(false);
const toggle = (i) => {
if (open === i) {
return setOpen(null)
}
setOpen (i)
}

    
    const acordianData = [
        {
            title:'Is there a free trial available?',
            desc: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
        },
        {
            title:'Can I change my plan later?',
            desc: "In most cases, yes! Many plans offer flexibility to upgrade, downgrade, or switch to different options at any time. However, some plans may have restrictions, like early termination fees or limited change windows. It's always best to check the specific terms and conditions of your plan to be sure."
        },
        {
            title:'What is your cancellation policy?',
            desc: "I apologize! I misunderstood your request. Please tell me what you're offering or what service applies to,and I'll craft a two-line answer explaining your cancellation policy in plain language. Remember, the more details you provide, the better!"
        },
        {
            title:'Can other info be added to an invoice?',
            desc: 'Yes, other information can be added to an invoice beyond the basic details. This includes things like payment terms, late fees, delivery instructions, and even marketing messages. Adding relevant information enhances clarity and professionalism, but avoid cluttering the invoice with unnecessary details.'
        },
        {
            title:'How does billing work?',
            desc: 'Billing involves generating invoices for products or services delivered, typically following a specific cycle. Customers receive invoices detailing the amount owed, and payment is tracked to ensure timely collection. Think of it as a bridge between your business and your customers, ensuring fair compensation for both sides.'
            
        },
        {
            title:'How do I change my account email?',
            desc: 'Changing your account email depends on the platform. Look for "Contact info" or "Account settings" and add your new email address. Verify it, and enjoy your updated login!'
        },
    ]

    return (
        <section id="faq">


            <div className="text-center mt-32">
                <h1 className="text-5xl font-sans mb-4 font-bold">Frequently asked questions</h1>
                <p className="text-xl">Everything you need to know about the product and billing.</p>
            </div>
     <section>
        <div className="px-[40px] flex flex-col justify-center w-11/12 mx-auto items-center mt-8 max-w-[800px]">
        {
            acordianData.map((data,i)=>{
                return <AcordianItems
                key={i}
                open={i === open}
                title={data.title}
                desc={data.desc}
                toggle={() => toggle(i)}
                ></AcordianItems>
            })
        }
        </div>
     </section>
        </section>
    );
};

export default Acordian;