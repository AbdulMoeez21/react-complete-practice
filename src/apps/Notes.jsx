import React,{useState} from 'react'
import NotesCards from '../components/NotesCards'
import ViewNotes from '../components/ViewNotes'


const [addItem, setAddItem] = useState([])
const Notes = (note) => {
    // alert("i'm clicked")
    setAddItem((prevData)=>{
        return [...prevData,note]
})
   

  return (
    <div>
      <NotesCards passNote={Notes}/>
      <ViewNotes />
    </div>
  )
}

export default Notes
