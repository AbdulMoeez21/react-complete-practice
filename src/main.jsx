import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {sub,mult,div} from './SimpleCalc'

ReactDOM.createRoot(document.getElementById('root')).render(
<> 
{/* <h1>Hello world!</h1> 
<p> lorem lorem lorem lorem lorem </p> */}
{/* <h1>{`my  full name is ${fname} ${lname}`}</h1> */}
{/* Challenge One */}
{/* <h1>Netflix Movies</h1>
<p>List of 5 Best Series</p>
<ol>
  <li>Dark</li>
  <li>13 Reasons Why</li>
  <li>Sacred Games</li>
  <li>Mirzapur</li>
</ol> */}
{/* Challenge TWO */}
{/* <h1>{`My name is ${fname} ${mname} ${lname}`}</h1>
<p>{`Today's Date is "${curr_date}"`}</p>
<p>{`Today's Date is "${curr_time}"`}</p> */}

<App/>

</>
)
