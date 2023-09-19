import React, {useState} from "react";

function SelectComponent(){
    const [name,setName] = useState("")
    const handleItem = (even)=>{
        setName(even.target.value);
    }
    const handleBtn = ()=>{
        if(name !==""){
            alert(`ban chon ${name}`);
        }else{
            alert("xin moi ban lua chon");
        }
    }
    return(
        <>
            <select onChange={handleItem}>
                <option value={1}>thêm1</option>
                <option value={2}>thêm2</option>
                <option value={3}>thêm3</option>
            </select>
            <button onClick={handleBtn}>click</button>
        </>
    )
}
export default SelectComponent