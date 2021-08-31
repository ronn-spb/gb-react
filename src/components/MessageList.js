import { uid } from 'react-uid';
import Message from '../components/Message';

const MessageList = (props) => {
 
   return <div>
    <div class="messagewraper">
      {props.messagesArray.map((message, i) => (
        <div key={uid(i)}>
          <Message
            text={message.text}
            author={message.author} />
        </div>
      ))}
    </div>
    
  </div>
}

export default MessageList;