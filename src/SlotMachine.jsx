import React from "react";
import "./index.css";

const SlotMachine=(props)=>{
    let x=props.x
    let y=props.y
    let z=props.z
  
    if((x==y) && (y==z)){
      return (
        <>
          <div className="slot_inner">
            <h1>
              {" "}
              {x} {y} {z} {" "}
            </h1>
            <h4>Matching</h4>
          </div>
        </>
      )
    }else{
      return (
        <>
           <div className="slot_inner">
            <h1>
              {" "}
              {x} {y} {z} {" "}
            </h1>
            <h4>Not Matching</h4>
          </div>
        </>
      )
    }
  }

export default SlotMachine