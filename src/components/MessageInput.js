import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles(() => ({
    messageinput:{
        display:"flex",
        padding:"20px",
        justifyContent: "space-between",
    }
  }));
const MessageInput =(props) =>{
    const [inputMessage, setInputMessage] = useState("");
    const sendMessageAndClear = () =>{
        props.funcOnSendMessage(inputMessage);
        setInputMessage("");
    }
    
    const classes = useStyles();
    
    return <div>
    <div className={classes.messageinput}>
    <TextField id="standard-basic" label="Enter message text" 
        className="input"
        autoFocus
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
      </div>
}
export default MessageInput;