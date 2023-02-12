import React from "react";

const Calculator = () => {
  return (
    <div>
      <h1>Simple Calculator</h1>
      <ul>
        <li>Subtraction{sub(40, 2)} </li>
        <li>Addition {add(30, 1)}</li>
        <li>Multiplication {mult(40, 2)}</li>
        <li>Division {div(30, 2)}</li>
      </ul>
    </div>
  );
};

export default Calculator;
