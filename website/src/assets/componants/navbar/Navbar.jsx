import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbarColor fixed-top   "  >
      <div className="container ">
        <div className="d-flex justify-content-center align-items-center  py-1">

       <img src="revive.png" width="100px" hight="100px" alt="logo" />
        {/* <a className="navbar-brand fs-4 text-white pt-3 textGreenColor" href="#">Revive 
        <span className='textColor'>Road
            </span> </a> */}
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse  " id="navbarSupportedContent">
          <ul className="navbar-nav  ms-auto mb-2 mb-lg-0 ">
          <li className="nav-item text-capitalize fs-5 ">
              <Link to={"/*"} className="nav-link text-white active " aria-current="page" href="#">Home</Link>
            </li>
            <li className="nav-item text-capitalize fs-5">
              <Link to={'/About'} className="nav-link text-white" aria-current="page" href="#">about</Link>
            </li>
            <li className="nav-item text-capitalize fs-5">
              <Link to={"/Report"} className="nav-link text-white" aria-current="page" href="#">report</Link>
            </li>
            <li className="nav-item text-capitalize fs-5">
              <a className="nav-link text-white" aria-current="page" href="#">contact</a>
            </li>
            <button type="button" class="btn btn-outline-success text-capitalize fs-5 ms-3 hoverColor m-auto" >
              <Link to={"/Login"} className='greenColor'>log in</Link>
          
              </button>
           </ul>
         
        </div>
      </div>
    </nav>
    </>
  )
}
