import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Challenges from "./Challenges.jsx";
import SimpleGreeting from "./SimpleGreeting.jsx";
import sname from "./ImpExp.jsx";
import add from "./SimpleCalc";
import { sub, mult, div } from "./SimpleCalc";
import NetflixCards from "./NetflixCards";
import Sdata from "./Sdata";

function App() {
  return (
    <>
      <h1>List of Top 5 netflix Series in 2022</h1>
      <div className="min">
        {/* <NetflixCards
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        link={Sdata[0].link}      />
      <NetflixCards
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        link={Sdata[1].link}  
      />
      <NetflixCards
         imgsrc={Sdata[2].imgsrc}
        title={Sdata[2].title}
        link={Sdata[2].link}  
      /> */}

        {Sdata.map((val)=> {
          return (
            <>
              <NetflixCards
                imgsrc={val.imgsrc}
                title={val.title}
                link={val.link}
              />
            </>
          );
        })}

        {/* <h1>Simple Calculator</h1>
      <ul>
        <li>Subtraction{sub(40, 2)} </li>
        <li>Addition {add(30, 1)}</li>
        <li>Multiplication {mult(40, 2)}</li>
        <li>Division {div(30, 2)}</li>
      </ul>
      <Challenges />
      <SimpleGreeting /> */}
      </div>
    </>
  );
}

export default App;
