import React from 'react'

export default function TextForm(props) {
  return (
    <div>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            {/* <label for="myBox" className="form-label">Example text area</label> */}
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
        <button className="btn btn-outline-primary">Convert to Uppercase</button>

    </div>
  )
}
