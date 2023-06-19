import { useState } from "react";
import {GoChevronDown, GoChevronLeft} from "react-icons/go";

function Accordion({items}) {
    const [expandedIndex, setExpandedIndex] = useState(0);

    //declare the handlclick outside the map
    const handleClick = (index) => {
        if (expandedIndex === index) {
            //collapse the current expanded option
            setExpandedIndex((currentExpandedIndex)=> { //currentExpandedIndex has the most resent state value
                 if (currentExpandedIndex === index) {
                    return -1; 
                 }
                 return index;
            });
        }
        setExpandedIndex(index)
       }

    const renderedItems = items.map((item, index)=> {
       const isExpanded = index === expandedIndex;
    
       const icon = (
        <span className="text-2xl">{isExpanded? <GoChevronDown /> : <GoChevronLeft />}</span>
       );

        // Add key to the very first element in the JSX
        return <div key={Math.round(Math.random()*999)}> 
            <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={()=> handleClick(index)}>
                {item.label}
                {icon}
            </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
        </div>
    });

    return(
    <div className="border-x border-t rounded">
         {renderedItems}
    </div>);
}

export default Accordion;