import React,{useState} from 'react'
import './textForm.css'


export default function textForm(props) {
    const [text,setText] = useState("")   // this is known as a hook or state in react

    const uppercaseclick=()=>{            // this is a function that will be called when the button is clicked
        console.log("button was clicked")
        let up=text.toUpperCase()
        setText(up)
    }
    const lowercaseclick=()=>{            // this is a function that will be called when the button is clicked
        console.log("button was clicked")
        let low=text.toLowerCase()
        setText(low)
    }

    const handleonchange=(event)=>{      // this is a function that will be called when the input field is changed
        console.log("on change");
        setText(event.target.value);  //it basicaly take the value form the input field what ever you have been made changes
    }

    return (
        <>
        <div className="form-floating">
                <h1>{props.heading}</h1>
                <textarea className="textbox form-control" value={text} onChange={handleonchange} ></textarea>
                <button className='btns ' onClick={uppercaseclick}>convert to Upperletter</button>
                <button className='btns mx-4' onClick={lowercaseclick}>convert to Lowerletter</button>
        </div>
        <div className='my-4'>
            <h1>your text summary</h1>
            <p>{text.split(" ").filter(element=>{return element.length!==0}).length} words and {text.length} character</p>
            <p>{0.008 * text.split(" ").length}minutes read</p>
            <h2>preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
