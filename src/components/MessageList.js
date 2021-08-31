import { uid } from 'react-uid';
import Message from '../components/Message';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({
  messageWraper: {
    
    minHeight: "70vh",
    border: "1px solid black",
   

  },
}));


const MessageList = (props) => {
  const classes = useStyles();
   return <div>
    <div className={classes.messageWraper}>
      {props.messagesArray.map((message, i) => (
        <div key={uid(i)}>
          <Message
            color ={(i%2)?  "warning.main":"info.main"}
            text={message.text}
            author={message.author} />
        </div>
      ))}
    </div>
    
  </div>
}

export default MessageList;