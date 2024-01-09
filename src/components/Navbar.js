import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar(props) {

    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        {/* <a className="navbar-brand" href="/">{props.title}</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
              {/* <a className="nav-link" href="/about">{props.aboutText}</a> */}
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form> */}
          {/* <div className="btn-group mx-5" role="group" aria-label="Basic mixed styles example">
            <button type="button" className="btn btn-primary px-4 py-3" onClick={()=>{props.setToogleMode('primary')}}></button>
            <button type="button" className="btn btn-success px-4 py-3" onClick={()=>{props.setToogleMode('success')}}></button>
            <button type="button" className="btn btn-warning px-4 py-3" onClick={()=>{props.setToogleMode('warning')}}></button>
            <button type="button" className="btn btn-danger px-4 py-3" onClick={()=>{props.setToogleMode('danger')}}></button>
          </div> */}
          <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={()=>{props.setToogleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode} Mode</label>
          </div>
        </div>
      </div>
    </nav>
    )
}

// to set acceptable data type of props
Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}

// to set default values of props
Navbar.defaultProps = {
    title: "Set Title Here",
    aboutText: "About us"
}

