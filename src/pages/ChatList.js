
import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const ChatList = (props) =>{
   
    return <div>
        
        {props.chatlist.map((chat, i) => (
        <div key={i}>
          
            Chat:{chat.name}:{chat.id}
            
        </div>
      ))}
      <Button>Create Chat
          onClick={props.onCreateChat}
      </Button>
    </div>
};
export default ChatList;