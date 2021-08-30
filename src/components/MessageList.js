import React, { useEffect, useState } from "react";
import {uid} from 'react-uid';
import Message  from '../components/Message';

const MessageList = (props) =>{
    const [messagesArray, setMessagesArray] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
    const onSendMessage = () => {
        setMessagesArray((prev) => [...prev, {text:inputMessage,author:"ddd",bot:false}]);
        setInputMessage("");
      };
    const onAddMessage =()=>{
      //if ()console.log(messagesArray[messagesArray.length-1].bot);
       if (messagesArray.length>0 && !messagesArray[messagesArray.length-1].bot){ 
        setTimeout(()=>setMessagesArray((prev) => [...prev, {text:"Hi i'am Bot",author:"Bot",bot:true}]),1000);}

    }
    
      useEffect(()=>{
      onAddMessage();
    },[messagesArray])
    return <div>  
    <div class="messagewraper"> 
        {messagesArray.map((message, i) => (
        <div key={uid(i)}>
            <Message
            text={message.text}
            author={message.author}/>
        </div>
      ))}
      </div>
      <div>
      <input
          className="input"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={({ key }) => {
            if (key === "Enter") {
              
              onSendMessage();
            }
          }}
        />
         <button onClick={onSendMessage}>Отправить</button>
        </div>
        </div>
}

export default MessageList;