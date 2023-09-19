import React, {useState} from "react"
function ToWayComponent(){
    const [input, setInput] = useState("");
    const [name, setName] = useState("");
    const handleInput = (event)=>{
        const newValue = event.target.value;
        setInput(newValue)
        setName(newValue)
    }

    return(
        <div className="towayinput">
            <input type="text" value={input} placeholder="new name...!" onChange={handleInput}/>
        <p>FullName: {name}</p>
        </div>
    )
}
export default ToWayComponent