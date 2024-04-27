import React from 'react'
import { useParams } from 'react-router-dom'
import StarRating from './StarRating'
import ReactPlayer from 'react-player'

const Info = ({film , rating}) => {
    // console.log(film)
    const {id}=useParams()
    const item=film.find(el=>el.id==id)
  return (
    <div >
    <div className='content'>
    <img src={item.img} alt={item.name} />
    <ReactPlayer url={item.url} />
    </div>
    <div className='syno'>
    <h2>{item.name}</h2>
    <p>{item.description}</p>
    <StarRating  rating={item.rating}/>
    </div>
    </div>
)
}

export default Info