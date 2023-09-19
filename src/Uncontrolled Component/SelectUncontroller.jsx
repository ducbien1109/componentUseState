import React, {useRef} from "react"
function SelectUncontroller(){
    const inputRef = useRef(null)
    const handleClick = ()=>{
        alert(`chọn: ${inputRef.current.value}`)
    }
    return(
        <>
        
            <select ref={inputRef}>
                <option>audi</option>
                <option>mec</option>
                <option>vinFast</option>
            </select>
            <button onClick={handleClick}>click</button>
        </>
    )
}
export default SelectUncontroller