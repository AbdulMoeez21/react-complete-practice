import React from 'react'
import SlotMachine from '../components/SlotMachine'


const SlotMachineApp = () => {
  return (
    <div>
      <h1 className="heading_style">
  Welcome to <span style={{fontWeight:"bold"}}>Slot Machine Game</span> { " "}
</h1>
<div className="slotmachine">
      <SlotMachine x='👩' y='👮‍♂️' z='👷‍♀️'/>
      <SlotMachine x='👩' y='👩' z='👩' />
      <SlotMachine x='👩' y='👮‍♂️' z='👷‍♀️'/>
      </div>
    </div>
  )
}

export default SlotMachineApp
