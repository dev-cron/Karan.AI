import React, { useState } from 'react';
import {GoogleGenerativeAI} from '@google/generative-ai';

const Input = () => {

    const [Input, setInput] = useState("")
    const [Chat, setChat] = useState([]);

    const genAI = new GoogleGenerativeAI("AIzaSyDjycqu5K7H7VvbkmlAemZhkdfMfYNX5TM");

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    async function submitQuery() {
        // console.log(Input);

        // const result = await model.generateContent(Input);

        // const response  = result.response;

        // console.log(response);

        setChat([...setChat, {type : "user", message : Input}, {type: "bot", message: response.text}])
    }

    return (
    <div className="nes-field" style={{display: "flex", padding:"10px", margin: "20px"}}>
        <input type="text" id="name_field" className="nes-input" onChange={(e)=>{setInput(e.target.value)}}/>
        <button type="button" className="nes-btn is-primary" onClick={submitQuery}>Send</button>
    </div>
    
  )
}

export default Input