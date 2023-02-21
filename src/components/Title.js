import React from "react";
import '../css/title.css';
import WorkBox from "./WorkBox";
import InputBox from "./InputBox";

const Title = ()=>{

    return(
        <>
            <div className="wrapper">
                <h1>TO DO APPLICATION</h1>
                <InputBox />
                <WorkBox work = "Play Cricket"/>
                <WorkBox work = "Go to gym"/>
                <WorkBox work = "Coding"/>
                <WorkBox work = "Watching a movie"/>
            </div>  
        </>
    );
}

export default Title;