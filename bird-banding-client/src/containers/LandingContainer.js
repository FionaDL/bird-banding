import React from "react"
import SiteInfo from '../components/birdComponents/SiteInfo.js'
import {Link} from 'react-router-dom'



const LandingContainer = () => {

  return (
    <div className='container'>
      <SiteInfo/>
        <div className="card">
          <Link to="/signUp" className="btn btn-outline">Sign Up</Link>
          <Link to="/login" className="btn btn-outline">Log In</Link>
          <Link to="/bandsearch" className="btn btn-outline">Enter a Band Number</Link>
        </div>
    </div>
  )
}



export default LandingContainer
