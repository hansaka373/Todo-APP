import React from "react";
import '../css/WorkBox.css'

const WorkBox = (props)=>{

    const deleteaction = ()=>{
        console.log("Delete Button Clicked");
    }

    return(
        <>
            <div className="display_div">
                <input type="checkbox"></input>
                <h3>{props.work}</h3>
                <button className="btn" onClick={deleteaction}>DEL</button>
            </div>
        </>
    );
}

export default WorkBox;