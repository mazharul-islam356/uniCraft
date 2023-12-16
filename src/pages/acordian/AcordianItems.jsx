/* eslint-disable react/prop-types */
import { Collapse } from "react-collapse";
import { BiMinusCircle } from "react-icons/bi";
import { FiPlusCircle } from "react-icons/fi";

const AcordianItems = ({open,toggle,title,desc}) => {
    return (
        <div>
            <div className="pt-2">
            <div className="bg-white py-6 px-12 flex justify-between items-center cursor-pointer" onClick={toggle}>
                <p className="text-2xl font-semibold">{title}</p>
                <div className="text-3xl">
        {open ? <BiMinusCircle />  :  <FiPlusCircle />}
                </div>
            </div>

            </div>
            <Collapse isOpened={open}>
                <div className="bg-white px-12 pb-5">
            {desc}
                </div>
            </Collapse>
        </div>
    );
};

export default AcordianItems;