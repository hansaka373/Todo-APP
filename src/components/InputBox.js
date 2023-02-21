import React, { useState } from "react";
import '../css/inputBox.css';

const InputBox = (props) =>{


    const [text, setText] = useState('');

    const textChange =  (event)=>{
    setText(event.target.value);
}

    const clickedSave = (event) =>{
        if (text === ''){
            alert("Enter Something to save")
        }else{
        console.log(text);
        }
    }

    return(
        <>
            <div className="main_div">
                <input className="text_box_style" type="text" placeholder="Enter your work" onChange={textChange} value={text}></input>
                <button className="btn_save" onClick={clickedSave}>Save</button>
            </div>
        </>
    );
}

export default InputBox;