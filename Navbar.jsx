import React from 'react'
import logo from '../assest/logo.png'
const Navbar = () => {
  return (
    <div className='px-5  mx-5 py-0'>
    <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo}></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" >
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          |  All Cities
        </a>
        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
          <li><a class="dropdown-item" href="#">Bhopal</a></li>
          <li><a class="dropdown-item" href="#">Indore</a></li>
          <li><a class="dropdown-item" href="#">Delhi</a></li>
        </ul>
      </li>
    </ul>
  </div>
    <div className="collapse navbar-collapse  center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-phone"></i></a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active " href="#">Download App  |</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active" href="#">Corporate Enquiry  |</a>
        </li>
        <li className="nav-item ">
        <a className="nav-link active" href="#">Refer & Earn  |</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link  active" href="#">List  |</a>
      </li>
      
      </ul>
    </div>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">|</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#">Signup</a>
      </li>
  
    </ul>
  </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar