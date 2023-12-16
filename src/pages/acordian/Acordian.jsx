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
            title:'title 01',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure sapiente fugit tempore corporis eos, laudantium possimus praesentium obcaecati illo aspernatur, veritatis eveniet, totam eligendi iusto consectetur? Ipsa doloremque eos obcaecati!'
        },
        {
            title:'title 02',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure sapiente fugit tempore corporis eos, laudantium possimus praesentium obcaecati illo aspernatur, veritatis eveniet, totam eligendi iusto consectetur? Ipsa doloremque eos obcaecati!'
        },
        {
            title:'title 03',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure sapiente fugit tempore corporis eos, laudantium possimus praesentium obcaecati illo aspernatur, veritatis eveniet, totam eligendi iusto consectetur? Ipsa doloremque eos obcaecati!'
        },
    ]

    return (
        <div>
            <div className="text-center mt-10">
                <h1 className="text-5xl font-sans mb-4 font-bold">Frequently asked questions</h1>
                <p className="text-xl">Everything you need to know about the product and billing.</p>
            </div>
     <section>
        <div className="px-[40px] border flex flex-col justify-center w-11/12 mx-auto items-center mt-8 max-w-[800px]">
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
        </div>
    );
};

export default Acordian;