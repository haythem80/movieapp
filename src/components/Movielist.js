import React from 'react'
import Moviecard from './Moviecard'

const Movielist = ({film , deletefunction,handleEdit}) => {
  return (
    <div className='card'>
    {
        React.Children.toArray(film.map(el=> <Moviecard list={el} functiondelete={deletefunction} handleEdit={handleEdit}/> ))
    }
    </div>
  )
}

export default Movielist