import React, { useState, memo } from 'react';

const TextAreaForm = (props) => {
    document.title = 'TextUtils - Home';
    const [text, setText] = useState("");
    const handleChange = (event) => {
        setText(event.target.value);
    }
    const handleUppercase = () => {
        setText(text.toUpperCase());
        props.alert(`All Characters converted to UPPERCASE`, "success")
    }
    const handleLowercase = () => {
        setText(text.toLowerCase());
        props.alert(`All Characters converted to lowercase`, "success")
    }
    const handleCopyClipboard = () => {
        navigator.clipboard.writeText(text)
        props.alert(`Copy clipboard to clipboard`, "success")

    }
    const handleClear = () => {
        setText("");
        props.alert(`Clear all Characters`, "success")
    }
    const handleExtraSpace = () => {
        setText(text.split(/[ ]+/).join(" "));
        props.alert(`Remove all extra spaces between characters`, "success")
    }
    return <>
        <div>
            <div className="container p-3">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label fs-2 fw-bold">{props.heading}</label>
                    <textarea className="form-control" id="text" value={text}
                        onChange={handleChange} placeholder="Enter text here..." rows="8"></textarea>
                </div>
                <div className="d-flex justify-content-start">
                    <button type="button" className={`btn btn-${props.mode === "light" ? "dark" : props.mode} mx-2`} onClick={handleUppercase} >Convert to UPPERCASE</button>
                    <button type="button" className={`btn btn-${props.mode === "light" ? "dark" : props.mode} mx-2`} onClick={handleLowercase} >Convert to lowercase</button>
                    <button type="button" className={`btn btn-${props.mode === "light" ? "dark" : props.mode} mx-2`} onClick={handleCopyClipboard} >Copy clipboard</button>
                    <button type="button" className={`btn btn-${props.mode === "light" ? "dark" : props.mode} mx-2`} onClick={handleClear} >Clear Text</button>
                    <button type="button" className={`btn btn-${props.mode === "light" ? "dark" : props.mode} mx-2`} onClick={handleExtraSpace}>Clear Extra Space</button>
                </div>
                <h4 className="mt-3">Character,Word and Sentence counts</h4>
                <p>{text.length} characters, {text.length === 0 ? text.split(" ").length - 1 : text.split(" ").length} Words
                    and {text.length === 0 ? text.split(".").length - 1 : text.split(".").length} Sentences</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Write some text to the textarea..."}</p>
            </div>
        </div>
    </>
}

TextAreaForm.defaultProps = {
    heading: 'Enter your Text to Analyze'
}

export default memo(TextAreaForm);