import React from 'react'
import StarRating from './StarRating'
import Editcard from './Editcard'

const Moviecard = ({list , functiondelete ,handleRating,handleEdit}) => {
  const handleSubmit=e=>{
    e.preventDefault();
    functiondelete(list.id)
  }
  
  return (
    <div className='card'>
    <div className="poster">
    <h1 className="title">{list.name}</h1>
    <img src={list.img} alt="img"/>
    <StarRating rating={list.rating} handleRating={handleRating} />
    <form className='config' >
    <button className='btn-delete' onClick={handleSubmit}>
    Delete
    </button>
    <Editcard movie={list} handleEdit={handleEdit} />
    </form>
    </div>
    </div>
  )
}


export default Moviecard