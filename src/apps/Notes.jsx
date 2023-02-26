import React,{useState} from 'react'
import NotesCards from '../components/NotesCards'
import ViewNotes from '../components/ViewNotes'



const Notes = (note) => {
  const [addItem, setAddItem] = useState([])
    // alert("i'm clicked")
    setAddItem((prevData)=>{
        return [...prevData,note]
})
   

  return (
    <div>
      <NotesCards passNote={Notes}/>
      {/* <ViewNotes /> */}
      {addItem.map((val,index)=>{
        return <ViewNotes 
             key={index} 
             id={index}
              title={val.title}
        desc={val.desc}
        />
      })}
    </div>
  )
}

export default Notes
