import React from 'react'
// import { useState } from 'react'

const darkmode = (props) => {
    // const [modes,setmodes]=useState("dark")
    // function mode(){
    //     if(modes === "dark"){
    //         setmodes("light")
    //         document.querySelector("body").style.backgroundColor="black";
    //         document.querySelector("body").style.color="white";
    //     }
    //     else{
    //         setmodes("dark")
    //         document.querySelector("body").style.backgroundColor="white";
    //         document.querySelector("body").style.color="black";
    //     }
    // }
  return (
    <div>
      <button onClick={props.mood}>{props.Mode}</button>
    </div>
  )
}

export default darkmode
