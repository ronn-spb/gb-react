import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles(() => ({
  message: {
    
    minHeight: "4vh",
    width:"30%",
    border: "1px solid black",
    borderRadius:"15px",
    padding:"3px 10px",
    marginTop:"5px",
    marginLeft:"5px",
    

  },
}));

const Message = (props) =>{
  const classes = useStyles();
        return <div>
              <Box className={classes.message}
              bgcolor={props.color}>
                {props.author}: <br/> {props.text}
                </Box>
              
            </div>;
        
    
};
export default Message ;