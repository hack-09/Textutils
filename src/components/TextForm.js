import React,{useState} from 'react'


export default function TextForm(props) {
  const handleUpClick =()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  }
  const handleLowClick =()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowCase","success");
  }
  const handleClear =()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared","success");
  }
  const handleOnChange =(event)=>{
    setText(event.target.value);
  }
  const handleExtraSpaces =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed","success");
  }

  const [text, setText] = useState('');
  // console.log(useState('Enter text here'));
  return (
    <>
      <div className="container" style={{color: props.mode === 'light'?'black':'white'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'light'?'black':'white'}} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
          <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To LowerCase</button>
          <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
      </div>
      <div className="container my-3"  style={{color: props.mode === 'light'?'black':'white'}}>
          <h2>Your text summary</h2>
          <p>{text.split(" ").length} words and {text.length} characters, {text.split(".").length+text.split(":").length+text.split("?").length-3} sentences</p>
          <p>{0.008 * text.split(" ").length} minutes</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
      </div>
    </>
  )
}
