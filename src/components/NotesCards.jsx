import React,{useState} from "react";

const NotesCards = (props) => {
    const [note, setNote] = useState({
        title:"",
        desc:"",
    })
    const inputEvent=(e)=>{
        // const value=e.target.value;
        // const name=e.target.name;
        const {name,value}=e.target
        setNote((prevData)=>{
            return {
                ...prevData,[name] :value,
            }

        })
        console.log(note)
    }
    const addEvent =()=>{
        props.passNote(note)
    }
  return (
    <>
      <form className=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <input placeholder="Title" value={note.title} name='title'  onChange={inputEvent} autoComplete="off" />
          </h5>
          <textarea
            className="mb-3 font-normal text-gray-700 dark:text-gray-400 "
            placeholder="Write a note"  value={note.desc} name='desc' onChange={inputEvent} 
          ></textarea>
        </div>
        <button
        onClick={addEvent}
          type="button"
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          +
        </button>
      </form>
    </>
  );
};

export default NotesCards;
