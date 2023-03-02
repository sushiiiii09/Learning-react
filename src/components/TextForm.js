import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log("Uppercase was clicked"+ text);
    let newText =text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = ()=>{
    console.log("Uppercase was clicked"+ text);
    let newText =text.toLowerCase();
    setText(newText);
  }

  const handleOnChange=(event)=>{
    console.log("on change");
    setText(event.target.value);
  }

  const [text, setText] = useState('');//useState hook
  // text="new text";
  // setText("new text");//correct way to chnage the state

  return (
    <>
    <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
            {/* <label for="myBox" className="form-label">Example text area</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
        </div>
        <button className="btn btn-outline-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-outline-danger mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        
    </div>
    <div className="container my-4">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    
    </>
  )
}
