import React from 'react';
import './index.css'

 const fname="Rao"
 const mname="Abdul"
 const lname="Moiz"
 const curr_date=new Date().toLocaleDateString();
 const curr_time=new Date().toLocaleTimeString();

 function Challenges(){
  return (<> 
  {/* <h1>Hello world!</h1>
  <p> lorem lorem lorem lorem lorem </p> */}
  {/* <h1>{`my  full name is ${fname} ${lname}`}</h1> */}
  {/* Challenge One */}
  <h1>Challenge One</h1>
   <h4>Netflix Movies</h4>
  <p>List of 5 Best Series</p>
  <ol>
    <li>Dark</li>
    <li>13 Reasons Why</li>
    <li>Sacred Games</li>
    <li>Mirzapur</li>
  </ol> 
  {/* Challenge TWO */}
  <h1>Challenge Two</h1>
  <h4>{`My name is ${fname} ${mname} ${lname}`}</h4>
  <p>{`Today's Date is "${curr_date}"`}</p>
  <p>{`Today's Date is "${curr_time}"`}</p>
  </>)
 }
export default Challenges;