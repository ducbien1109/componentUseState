import React, {useRef} from "react"
function LoginUncontrolled(){
    const myUser = useRef(null)
    const pass = useRef(null)
    const handleClick =() =>{
        console.log(`user name ${myUser.current.value} password ${pass.current.value}`);
    }
    return(
        <>
            
            <input type="text"  ref={myUser} placeholder="moi ban nhap name...!"/>
            <input type="password"  ref={pass} placeholder="moi ban nhap pass...!"/>
            <button onClick={handleClick}>Login</button>
            
        </>
    )
}
export default LoginUncontrolled