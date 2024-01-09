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

  const handleCopy = () => {
    navigator.clipboard.writeText(text); 
    props.showAlert("Copied to Clipboard!", "success");
}

  const [text, setText] = useState('');
  // console.log(useState('Enter text here'));
  return (
    <>
      <div className="container" style={{color: props.mode === 'light'?'black':'white'}}>
          <h1 classNam="mb-2">{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#0f4068':'white', color: props.mode === 'light'?'black':'white'}} id="myBox" rows="8"></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleUpClick}>Convert To UpperCase</button>
          <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleLowClick}>Convert To LowerCase</button>
          <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleClear}>Clear</button>
          <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleCopy}>Copy</button>
          <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
      </div>
      <div className="container my-3"  style={{color: props.mode === 'light'?'black':'white'}}>
          <h2>Your text summary</h2>
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters, {text.split(".").length+text.split(":").length+text.split("?").length-3} sentences</p>
          <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </>
  )
}
