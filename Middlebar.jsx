import React from 'react'
import breakfast from '../assest/breakfast.png'
const Middlebar = () => {
  return (<>
    <div className='shadow m-5  mb-4 bg-body rounded '>
    <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse d-flex justify-content-center   center" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item  ">
          <a className="nav-link  fw-bold mx-3 active  " href="#">SELECT ROOM</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link  fw-bold mx-3 active" href="#">ABOUT HOTEL</a>
        </li>
        <li className="nav-item ">
        <a className="nav-link  fw-bold mx-3  active" href="#">HOTEL AMENTIES</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link  fw-bold mx-3 active" href="#">RATING & REVIEW</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link  fw-bold mx-3 active" href="#">HOTEL LOCATION</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link  fw-bold mx-3 active" href="#">HOTEL POLICIES</a>
      </li>
      </ul>
    </div>

  </div>
</nav>
    </div>
    <div className="add-breakfast d-flex justify-content-between mx-5">
    <section className='d-flex'>
    <img className='breakfast-logo' src={breakfast} alt="breakfasat"/>
    <div>
    <h6 >Add Breakfast</h6>
    <h6>We serve delicious breakfast at our hotels.</h6>
    </div>
    </section>
    <section className='d-flex'>
    <p className='my-3 green'>₹250/night/guest </p>
    <button className='btn'>Add Button</button>
    
    </section>
    </div>

    </>
  )
}

export default Middlebar