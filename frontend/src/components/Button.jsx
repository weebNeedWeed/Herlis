import {useState} from "react";

function Button() {
    const [counter, setCounter] = useState(0);
    const handleClick = function(){
        setCounter(counter+1);
    };
    return (<button onClick={handleClick} className="text-xl rounded-md bg-red-600 p-2">{counter}</button>);
}

export default Button;
