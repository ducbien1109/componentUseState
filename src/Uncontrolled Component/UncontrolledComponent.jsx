import React, {useRef} from "react";
function UncontrolledComponent(){
    const inputRef = useRef(null);
    
    const handleClick = ()=>{
        alert(inputRef.current.value)
    }
    return(
        <>
            <input type="text" ref={inputRef} placeholder="moi ban nhap...!"/>
            <button onClick={handleClick}>click</button>
        </>
    )
}
export default UncontrolledComponent

//inputRef là một tham chiếu được useRef tạo nên và gán cho nó trong thẻ input
