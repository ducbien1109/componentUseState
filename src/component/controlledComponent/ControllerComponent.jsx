import React, { useState } from "react";
function ControllerComponent() {
    const [name, setName] = useState("")
    const handleNameChange = (event)=>{
        setName(event.target.value);
    }
    const handleSubmit = ()=>{
        if(name.trim() !== ""){
            alert(`xin chào ${name}`)
        }
        else{
            alert("vui lòng nhập tên")
        }
    }
  return (
    <>
      <input type="text" value={name} onChange={handleNameChange} />
      <button onClick={handleSubmit}>submit</button>
    </>
  );
}
export default ControllerComponent
