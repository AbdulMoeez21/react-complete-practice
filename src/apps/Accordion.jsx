import React, { useState } from "react";
import Accdata from "../data/Accdata";
import '../index.css';
import AccordionCard from "../components/AccordionCard";

const Accordion = () => {
  const [data, setData] = useState(Accdata);
  return (
    <>
    <h1>Accordion</h1>
      {data.map((item) => {
        {/* const {id,question,answer}=item */}
        const { id }=item
        return <AccordionCard 
            key={id}{...item}
            //   ques={question}
            //   ans={answer}
        />;
      })}

      
    </>
  );
};

export default Accordion;
