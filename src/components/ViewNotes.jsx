import React from 'react'

const ViewNotes = () => {
  return (
    <div className='note  w-96 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700' >
    <h3>title</h3>
    <br/>
    <p>This is content</p>
    <button
      type="button"
      className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      -
    </button>
  </div>
  )
}

export default ViewNotes
