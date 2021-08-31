import React, { useEffect, useState } from "react";
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import MessageList from "./components/MessageList";
import MessageInput from "./components/MessageInput";
const useStyles = makeStyles(() => ({
  appWraper:{
    

  },
}));
function App() {
  const [messagesArray, setMessagesArray] = useState([]);

  const onSendMessage = (text) => {
    setMessagesArray((prev) => [...prev, { text: text, author: "ddd", bot: false }]);
  };
  const onAddMessage = () => {
    
    if (messagesArray.length > 0 && !messagesArray[messagesArray.length - 1].bot) {
      setTimeout(() => setMessagesArray((prev) => [...prev, { text: "Hi i'am Bot", author: "Bot", bot: true }]), 1000);
    }

  }

  useEffect(() => {
    onAddMessage();
  }, [messagesArray]);
  return (
    <div className="App">
     
      <MessageList
      messagesArray={messagesArray}/>
     
      <MessageInput
      funcOnSendMessage={onSendMessage}
    />
    </div>
     
  );
}

export default App;
