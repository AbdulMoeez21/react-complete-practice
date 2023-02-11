import React from "react";
import "./index.css";


function add(a,b){
let sum=a+b;
    return sum;
}
function sub(a,b){
    let sub=b-a;
        return sub;
    }

    function mult(a,b){
        let mult=a*b;
            return mult;
        }

        function div(a,b){
            let div=a/b;
                return div;
            }

export default add;
export {sub,mult,div};