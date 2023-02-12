import React,{useState} from "react";
import "./index.css";

function IncDecCount(){
    const state=useState();
    const[count,setCount]=useState(0);
    const NumInc=()=>{
      setCount(count+1)
     
    }
    
    const NumDec=()=>{
      if(count>0){
        setCount(count-1)
      }
      else{
        count=0
      }
      
    }
    return(
        <>
        <h1>=====Counter=====</h1>
      <h3>{count}</h3>
      <button onClick={NumDec}>-</button>
      <button onClick={NumInc}>+</button>
      </>
    )
}
export default IncDecCount