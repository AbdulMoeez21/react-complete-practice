import React, { useState } from "react";
import "./App.css";
import "./index.css";
import SimpleGreeting from "./apps/SimpleGreeting.jsx";
import sname from "./apps/ImpExp";
import add from "./apps/SimpleCalc";
import { sub, mult, div } from "./apps/SimpleCalc";
// import IncDecCount from "./apps/IncDecCount";
import UpdateTime from "./apps/UpdateTime";
import SimpleForm from "./apps/SimpleForm";
import SlotMachineApp from "./apps/SlotMachineApp";
import Netlfix from "./apps/Netlfix";
import Calculator from "./apps/Calculator";
import Challenges from "./apps/Challenges";
import TodoList from "./components/TodoList";
import Accordion from "./apps/Accordion";
import Notes from "./apps/Notes";
import Covid from "./apps/Covid";

function App() {
  const [type, settype] = useState("Covid");

  if (type == "netflix") {
    return <Netlfix />;
  }
  else if (type == "IncDecCount") {
    return <IncDecCount />;
  }
  else if (type == "calculator") {
    return <Calculator />;
  }
  if (type == "challenges") {
    return <Challenges />;
  }
  else if (type == "SimpleCalc") {
    return <SimpleCalc />;
  }
  if (type == "SimpleForm") {
    return <SimpleForm />;
  }
  else if (type == "SimpleGreeting") {
    return <SimpleGreeting />;
  }
  else if (type == "UpdateTime") {
    return <UpdateTime />;
  }
  else if (type == "SlotMachine") {
    return <SlotMachineApp />;
  }
  else if (type == "ImpExp") {
    return <ImpExp />;
  }
  else if (type == "TodoList") {
    return <TodoList />;
  }
else if (type=="Accordion"){
  return <Accordion/>
}
else if (type=="Notes"){
  return <Notes/>
}
else if (type=="Covid"){
  return <Covid/>
}
  // else if (type=="hello"){
  //   return (
  //     <>
       
   
  //     </>
  //   )
  // }
}

export default App;
