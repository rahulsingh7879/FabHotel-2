import React from 'react'
import HotelCard from './HotelCard'

const data = [
    {
        name:"name1",
        location:"bhopal",
        price:"30",
        rating:"5"
    },
    {
        name:"name2",
        location:"Indore",
        price:"300",
        rating:"50"
    },
    {
        name:"name1",
        location:"bhopal",
        price:"30",
        rating:"5"
    }
]

const NearByHotel = () => {
  return (
    <div className='row mx-5 my-3 '>
  <h2>NearBy Hotels</h2>
    <div className=' mt-3 container'>
    {data.map((item)=>(

        <HotelCard name={item.name} location={item.location} price={item.price} rating="4.5"/ >
  ))}
    </div>
    </div>
  )
}

export default NearByHotel