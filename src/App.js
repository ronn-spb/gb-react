import React, { useEffect, useState } from "react";
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import MessageList from "./components/MessageList";
import MessageInput from "./components/MessageInput";
const useStyles = makeStyles(() => ({
  AppWraper: {
    width: "40%",
    minHeight: "600px",
    border: "1px solid black",
    margin: "0 auto",
    marginTop:"50px",

  },
}));
function App() {
  const [messagesArray, setMessagesArray] = useState([]);

  const onSendMessage = (text) => {
    setMessagesArray((prev) => [...prev, { text: text, author: "User", bot: false }]);
  };
  const onAddMessage = () => {

    if (messagesArray.length > 0 && !messagesArray[messagesArray.length - 1].bot) {
      setTimeout(() => setMessagesArray((prev) => [...prev, { text: "Hi i'am Bot", author: "Bot", bot: true }]), 1000);
    }

  }

  useEffect(() => {
    onAddMessage();
  }, [messagesArray]);
  const classes = useStyles();
  return (
    <div className={classes.AppWraper}>

      <MessageList
        messagesArray={messagesArray} />

      <MessageInput
        funcOnSendMessage={onSendMessage}
      />
    </div>

  );
}

export default App;
