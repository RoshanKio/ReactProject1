import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {

        //console.log("Uppercase was clicked: ", text);

        //setText("You have clicked on handleUpClick");

        //setText(text.toUpperCase());
        

        
        let newText = text.toUpperCase();
        setText(newText);
        
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    //text = "new text"; //Wrong was to change the state
    //setText("new Text"); //Correct way to change the state
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            </div>
            <div className="conatiner my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

