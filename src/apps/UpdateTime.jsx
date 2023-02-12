import React,{useState} from "react";


function UpdateTime(){
   let newTime=new Date().toLocaleTimeString()
    
    const[recent,setRecent]=useState(newTime);
    function Curr(){
        let newCTime=new Date().toLocaleTimeString();
       setRecent(newCTime)
      console.log("clicked", setRecent)
    }
    setInterval(Curr,1000)
    return(
        <>
            <h1>====Challenge 6=====</h1>
        <h3>{recent}</h3>
   
      {/* <button onClick={Curr}>update</button>  */}
        </>
    )
  
  }
  export default UpdateTime