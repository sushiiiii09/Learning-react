import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log("Uppercase was clicked"+ text);
    let newText =text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }
  const handleLoClick = ()=>{
    console.log("Uppercase was clicked"+ text);
    let newText =text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","success");
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
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#404258':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-outline-danger mx-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-outline-info mx-1 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
            {/* <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button> */}
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
