import React, { useState } from "react";

function TextForm(props) {
    const [text,setText]=useState('');
    const handleUpClick=()=>{
        console.log("hello from handle clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success")

    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","success")
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text has been cleared","success")

    }
    const handleCopy=()=>{
        let ctext=document.getElementById('mybox');
        ctext.select();
        navigator.clipboard.writeText(ctext.value)
    }
    const handleOnChange=(e)=>{
    
        setText('');
        
        console.log("onchanged",text);
        setText(e.target.value)
    }
  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea
          className="form-control"
          id="mybox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        {/* as to read 125 words approx 1 minute is required for slow reader */}
        <p>{0.008*text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in textArea to preview the same...'}</p>
    </div>
    </>
  );
}

export default TextForm;
