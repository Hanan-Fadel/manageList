import { useState, useEffect, useRef } from "react";
import Panel from "./Panel";
import { GoChevronDown } from "react-icons/go";

function Dropdown({options, value, onChange}) {

    const [isOpen, setIsOpen] = useState(false);

    const divEl = useRef();

    const handleClick = ()=> {

        // setIsOpen((currentIsOpen)=> {return !currentIsOpen});
        // console.log(isOpen);
        setIsOpen(!isOpen);
    };

    const hanleOptionClick = (option)=> {
        setIsOpen(false);
        onChange(option);
    };

    useEffect(()=> {
        const handler = (event)=> {

            if (!divEl.current) {
                return;
            } 

            //Ensure that the user just clicked outside the dropdown list
            if(!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handler, true);

        //clean function called automatically when the component removed from the page
        return ()=> {
            document.removeEventListener('click', handler);
        };

    });

    const renderedOptions = options.map((option)=> {
        return <div className= "hover:bg-sky-100 rounded cursor-pointer p-1" onClick={()=> {hanleOptionClick(option)}} key={option.value}>
            {option.label}
        </div>
    });

    // let content = 'Select...';

    // if(selection) {
    //     content =  selection.label;
    // }



    return(
        //get a reference to Dropdown component
        <div ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                {value?.label || 'Select...'}
                <GoChevronDown className="text-lg"/>
            </Panel>
            {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
     </div>
    );
}

export default Dropdown;