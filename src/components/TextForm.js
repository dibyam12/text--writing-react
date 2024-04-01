import React,{useState} from 'react'
import PropTypes from 'prop-types'
   

export default function TextForm(props) {

  
  const handleUpClick =() =>
  {
      console.log('Uppercase was clicked');
      let newText;
      if(text === text.toLowerCase())
      {
          document.querySelector('.convert').innerHTML ='To Lowercase';
        newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase','Success')
      }
      else{
          document.querySelector('.convert').innerHTML ='To Uppercase';
        newText = text.toLowerCase();
          setText(newText);
          props.showAlert('Converted to Lowercase','Success')
      }
  }
  const handleOnChange =(event)=>
  {
    console.log('On-change');
    setText(event.target.value);
  }

  const clearText =() =>
  {
    console.log('Text cleared');
   let newText ='';
   setText(newText);
   document.querySelector('.convert').innerHTML='Convert';
   props.showAlert('Text Cleared','Success');
  }

const handleCopy = () =>
{
  console.log('text copied to clipboard');
  let text =document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text Copied','Success');

   
}

const handleExtraSpaces =() => 
{
  let newText = text.split(/[ ]+/); //Ek space vanda dherai vako cha vaney
  setText(newText.join(" "));//ek space ma join garaidiney ho
  props.showAlert('Extra spaces removed','Success');

}

  const[text,setText]= useState('') ;
  // text="new Text";//wrong way to change the state 
  // setText('new text');//correct way to change the state

  return (
    <div className={`container text-${props.mode ==='light'?'dark':'light'}`}>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="input-group">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='light'?'dark':'light',color: props.mode ==='light'?'dark':'light'}} id="myBox" rows="8" aria-label="With textarea"></textarea>
</div>
<button className="btn btn-primary my-2 my-2 convert" onClick={handleUpClick}>Convert </button>
<button className="btn btn-primary mx-2 my-2 clear" onClick={clearText}>Clear Text</button>
<button className="btn btn-primary mx-2 my-2 clear" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2 my-2 clear" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className='container my-3'>
      <h2>Text Summary</h2>
      <p><b>{text.split(" ").filter((element)=>{
        return element.length !== 0 // element ko length 0 cha vaney yo array vitra basdaina means starting ko word will not be counted
      }).length}</b>words and <b>{text.length}</b> characters</p>
      <p><b>{ 0.008 * text.split(" ").length}</b>minutes read</p>
      <h3>Preview</h3>
      <p>
        {text.length>0?text:'Enter Something to preview it here'}
      </p>

    </div>
    </div>
  )
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired
}
