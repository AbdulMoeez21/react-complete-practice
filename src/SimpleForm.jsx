import React,{useState} from "react";
import "./index.css";

function SimpleForm(){



    const [name,setName]=useState("");
    const [fullName,setFullName]=useState("");
    const inputEvent=(event)=>{
        console.log(event.target.value)
        setName(event.target.value)
    }
    const submt=()=>{
setFullName(name)
    }
    return(
        <>
            <h1>{`Hello ${fullName}`} </h1>
            <input type="text" style={{padding:"11px",margin:"10px"}} placeholder="Enter Your Name" onChange={inputEvent} value={name} />
            <button onClick={submt}>Submit</button>
        </>
    )

}
export default SimpleForm