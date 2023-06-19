import Button from "../components/Button";
import { FiAperture } from "react-icons/fi"; 

function ButtonPage() {
    const handleClick= ()=> {
    };
    return (
        <div>
            <div>
                <Button secondary rounded className="mb-5" onClick={handleClick}>
                    <FiAperture/> 
                    Click me!!</Button>
            </div>
            <div>
               <Button danger outline>
                Buy Now!</Button>
            </div>
            <div>
            <Button warning>See Deal!</Button>
            </div>
            <div>
            <Button secondary outline>Hide Ads!</Button>
            </div>
            <div>
            <Button primary rounded>Something!</Button>
            </div>
        </div>

    );
}

export default ButtonPage;