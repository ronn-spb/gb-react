import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import AppMenu from "./components/AppMenu";
import ChatList from "./pages/ChatList";
import Home from "./pages/Home";

const useStyles = makeStyles(() => ({
  AppWraper: {
    width: "40%",
    minHeight: "600px",
    border: "1px solid black",
    margin: "0 auto",
    marginTop: "50px",

  },
}));
function App() {
  const [chatList, setChatList] = useState([]);
  const onCreateChat = () =>{
    
  }
  return (
    <Router>
      <AppMenu />
      <Switch>
        <Route path="/pages/Chat">
          <Chat />
        </Route>

        <Route path="/pages/Profile">
          <Profile />
        </Route>
        <Route path="/pages/ChatList">
          <ChatList 
          chatlist={chatList}
          />
        </Route>
        <Route path="/chats/:id" children={<Child />} />
        
       <Route path="/">
          <Home />
        </Route>
      </Switch>

    </Router>

  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}


export default App;
