import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import logo from './023.png';
import './ModalButton.css';



const useStyles = makeStyles((theme) => ({                                          
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border:'none',
    // backgroundColor:'blue'

  },
//   paper: {
//     backgroundColor: 'white',
//     border: '0px solid #eee',
//     // boxShadow: theme.shadows[5],
//     // padding: theme.spacing(2, 4, 3),
//     height:'70%',
//     width:'70%',
//     display:'flex',

//   },
//   left:{
//     display:'flex',
//     flexBasis:'50%',
//     height:'100%',
//     backgroundColor:'blue',
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   right:{
//     display:'flex',
//     flexBasis:'50%',
//     height:'100%',
//     flexDirection:'column',
//     justifyContent:'center',
//     alignItems:'center'
//   },
  btn:{
    fontSize: '0.9em',
    backgroundColor: '#d64045',
    border: '2px solid #d64045',
    borderRadius : '5px',
    color : 'white',
    padding: '5px',
    width : '10em',
    height: '2.3em'
  }
}));

export default function ModalButton() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button  className = {classes.btn} type="button" onClick={handleOpen}>
        Request Callback
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        // disableBackdropClick = "true"
      >
        <Fade in={open}>
          <div className="paper">
            <div className = "left">
            {/* <img src="https://img.icons8.com/clouds/500/000000/atom-editor.png"/> */}
            <img src={logo}/>
            </div>
            <div className = "right">
                <div className = "headingright">
                <p className = "heading">
                  Schedule a Call
                </p>
                </div>
                <form className = "formlayout">
                <label>Name</label>
                        <input type = "text" placeholder="John Doe"/>
                       
                            
                                <label>Email</label>
                                <input type = "text" placeholder="johndoe@gmail.com"/>
                            
                           
                                <label>Phone</label>
                                <input type = "text" placeholder="(+91)-9999999999"/>
                            
                        
                        <button className="time">Find a time</button>
                </form>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
