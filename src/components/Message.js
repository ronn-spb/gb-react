const Message = (props) =>{
        return <div>
              <div>Author:{props.author}</div>
              {props.text}
            </div>;
        
    
};
export default Message ;