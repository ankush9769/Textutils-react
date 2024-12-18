import React from 'react'

const Alert = (props) => {
  return (
    <div className="alert">
      {
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" >
        <strong>{props.alert.type}</strong> : {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
      }
    </div>
        
  )
}

export default Alert

// for implementation of the alert see the Navbar.jsx file
