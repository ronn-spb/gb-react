import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles(() => ({
    button:{

    },
  }));
const MessageInput =(props) =>{
    const [inputMessage, setInputMessage] = useState("");
    const sendMessageAndClear = () =>{
        props.funcOnSendMessage(inputMessage);
        setInputMessage("");
    }
    return <div>
    <TextField id="standard-basic" label="Enter message text" 
        className="input"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        onKeyDown={({ key }) => {
          if (key === "Enter") {
            sendMessageAndClear();
          }
        }}
      />
       <Button 
       variant="contained" 
       color="primary"
       onClick={sendMessageAndClear}>Отправить</Button>
      </div>
}
export default MessageInput;