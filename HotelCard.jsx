import React from 'react'
import img from "../assest/img-index-10.jpg"

const HotelCard = (props) => {
  return (
    <div className='col-md-3 m-5'>
    <div className="card card-list " style={{width:"18rem"}}>
    <img src={img} className="card-img-top" alt="hotel"/>
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <p className="card-text"><i class="fa-sharp fa-regular fa-location-dot"></i>   {props.location}</p>
      <a href="#" className="btn btn-primary">{props.price}/pernight</a>
    </div>
  </div>
    </div>
  )
}

export default HotelCard