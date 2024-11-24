import React from 'react'
import PropTypes from 'prop-types'
import Darkmode from './darkmode'
import { useState } from 'react'
import Alert from './Alert'
import './Navbar.css'
import { Link } from 'react-router-dom'



export default function Navbar(props) {
  const [modes, setmodes] = useState("light")

  function mode() {
    if (modes === "dark") {
      setmodes("light")
      document.querySelector("body").style.backgroundColor = "white";
      document.querySelector("body").style.color = "black";
      showalert("light mode is on", "success")
    }
    else {
      setmodes("dark")
      document.querySelector("body").style.backgroundColor = "black";
      document.querySelector("body").style.color = "white";
      showalert("dark mode is on", "success")

    }
  }

  const [alert, setalert] = useState(null) //here we set the alert for changing the mode
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  // const [color,setcolor]=useState()
  // const applycolor=(name)=>{
  //   setcolor(name)
  //   if(color==="green"){
  //     setcolor(name)
  //     document.querySelector("body").style.backgroundColor = "green";
  //     document.querySelector("body").style.color = "white";
  //     showalert("green color apply successfully", "success")
  //   }
  //   else if(color==="blue"){
  //     document.querySelector("body").style.backgroundColor = "blue";
  //     document.querySelector("body").style.color = "white";
  //     showalert("blue color apply successfully", "success")
  //   }
  //   else if(color==="purple"){
  //     document.querySelector("body").style.backgroundColor = "purple";
  //     document.querySelector("body").style.color = "white";
  //     showalert("purple color apply successfully", "success")
  //   }
  //   else{
  //     console.log("nothing")
  //   }
    
  // }


  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${modes} bg-${modes} `}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="/">home</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="./About">about</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <Darkmode Mode={modes} mood={mode} className="darkmode"/>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className='constainer'>
        <Alert alert={alert}>hello</Alert>
      </div>
    </>
  )
}

// we can also set the property of the props
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired
}

//we can set default value of the props
// Navbar.defaultProps={
//   title:"navbar",
//   home:"home"
// }
