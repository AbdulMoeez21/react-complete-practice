import React from "react";
import ReactDOM from "react";
import "./index.css";

let curr_Date=new Date(2021,2,2,2);
curr_Date=curr_Date.getHours();
let greet="";
const cssStyle={
    color: "#59c9b0",
    backgroundColor:"#364236"

}
if(curr_Date > 1 && curr_Date < 12){
    greet="Good Morning";
    cssStyle.color='#00b894'
}
else if(curr_Date >= 12 && curr_Date < 20){
    greet="Good Afternoon";
    cssStyle.color='#59c9b0';
}
else if(curr_Date > 20 && curr_Date <= 24){
    greet="Good Night";
    cssStyle.color='grey';
}
function SimpleGreeting(){
    return(<>
    <h1>Greeting Card</h1>
    <p>Hello bro,<span style={cssStyle}></span> {greet}</p>

    </>)
}
export default SimpleGreeting;