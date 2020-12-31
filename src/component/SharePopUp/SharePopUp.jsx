import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import facebook from '../../images/facebook.svg';
import copylink from '../../images/copylink.svg';
import email from '../../images/email.svg';
import whatsapp from '../../images/whatsapp.svg';
import telegram from '../../images/telegram.svg';

// const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  dialogParent:
  {
  	display:'flex',
  	// flexWrap:'wrap',may or may not
  	gap:'1rem',
  	justifyContent: 'flex-start',
    alignItems: 'center',
    padding:'1.2rem'

  },
  imageSettings:{
  	height:'100%',
  	width:'100%'
  },


});

function SharePopUp(props) {
  const classes = useStyles();
  // const { onClose, selectedValue, open } = props;

  const handleClose = () => {
  	console.log("close called")
    //onClose(selectedValue);
  };

  // const handleListItemClick = (value) => {
  //   onClose(value);
  // };

  return (
    <Dialog   onClose={handleClose} aria-labelledby="simple-dialog-title" open={true}>
      <DialogTitle id="simple-dialog-title">Share</DialogTitle>
        <div className={classes.dialogParent}>
         <div  >
         <img  className={classes.imageSettings}  src={copylink} alt="copylink"/>
         </div>
         <div>
         <img  className={classes.imageSettings}  src={email} alt="email"/>
         </div>
         <div>
         <img className={classes.imageSettings}  src={whatsapp} alt="whatsapp"/>
         </div>
         <div>
         <img className={classes.imageSettings}  src={telegram} alt="telegram"/>
         </div>
         <div>
         <img  className={classes.imageSettings}  src={facebook} alt="facebook"/>
         </div>
        </div>

  
     </Dialog>
  );
}
export default SharePopUp



// // export default function SimpleDialogDemo() {
// //   const [open, setOpen] = React.useState(false);
// //   const [selectedValue, setSelectedValue] = React.useState(emails[1]);

// //   const handleClickOpen = () => {
// //     setOpen(true);
// //   };

// //   const handleClose = (value) => {
// //     setOpen(false);
// //     setSelectedValue(value);
// //   };

// //   return (
// //     <div>
// //       <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
// //       <br />
// //       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
// //         Open simple dialog
// //       </Button>
// //       <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
// //     </div>
// //   );
// //}








//       <List>
//         {emails.map((email) => (
//           <ListItem button onClick={() => handleListItemClick(email)} key={email}>
//             <ListItemAvatar>
//               <Avatar className={classes.avatar}>
//                 <PersonIcon />
//               </Avatar>
//             </ListItemAvatar>
//             <ListItemText primary={email} />
//           </ListItem>
//         ))}

//         <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
//           <ListItemAvatar>
//             <Avatar>
//               <AddIcon />
//             </Avatar>
//           </ListItemAvatar>
//           <ListItemText primary="Add account" />
//         </ListItem>
//       </List>
