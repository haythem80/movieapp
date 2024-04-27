import React from 'react'
import { Link } from 'react-router-dom'
import  Typewriter from 'typewriter-effect'

const Navebar = () => {
  return (
    
    <div className="writer" style={{color:'white'}}>
    <Typewriter
    options={{
      strings: ['Top Movie'],
      autoStart: true,
      loop: true,
    }}
    />
    <ul className='liste'>
    <Link to="/"> <li>Home</li> </Link>
    
    </ul>
    </div>
    
  )
}

export default Navebar