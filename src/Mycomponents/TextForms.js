import React, {   useState} from 'react'

export default function TextForms(props) {
 
  const handleUpClick=(event)=>{

    setText(event.target.value)
    props.showAlert("converted to uppercase","success")

  }
  const handleclearClick=()=>{

    setText('')
    props.showAlert("text cleared","success")

  }
   const[text,setText]=useState('Enter text here'); 
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <form>
  <div className="mb-3">
   <textarea className="form-control" value ={text} onChange={handleUpClick} style={{backgroundColor:props.mode==='light'?'grey':'white'}} id="myBox" rows="8"></textarea>
  </div>
</form>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Delete</button>
<button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear text</button>
    </div>
    <div className="container my-3">
      <h1>YOUR TEXT SUMARY</h1>
      <p>{text.split(" ").length} words and  {text.length} characters</p>
    </div>
    </>
  )
}
