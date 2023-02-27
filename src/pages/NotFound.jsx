import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div>
      <h1 className='mt-20'>Page not Found !!</h1>
      <p className="m-20">
        The Lorm alphabet is a method of tactile signing named after Hieronymus
        Lorm, who developed it in the late 19th century. Letters are spelled by
        tapping or stroking different parts of the listener's hand. The Lorm
        alphabet is mostly used in German-speaking countries, the Netherlands,
        Czech Republic, Poland and Georgia. The Lorm alphabet is a method of
        tactile signing named after Hieronymus Lorm, who developed it in the
        late 19th century. Letters are spelled by tapping or stroking different
        parts of the listener's hand. The Lorm alphabet is mostly used in
        German-speaking countries, the Netherlands, Czech Republic, Poland and
        Georgia.
      </p>
      <p>Go to the <Link to='/'>Homepage</Link></p>
    </div>
  )
}

export default NotFound
