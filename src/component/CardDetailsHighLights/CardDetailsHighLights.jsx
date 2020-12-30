<<<<<<< HEAD
import React from 'react';
import {Typography,Grid,Paper,List,makeStyles,ListItem,ListItemText} from '@material-ui/core';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';




const applyStyles=makeStyles(theme=>({


  colorPaper: {
    backgroundColor:'#FFF9E8',
  
  },
  file:
  {
  	display:'flex',
  	marginLeft:theme.spacing(2)

  },
  matchParent:
  {
  	height:'100%'
  },
  paperParent:
  {
  	padding:theme.spacing(3)
  },
 fileParent:
 {
 	display:'flex',
 	flexDirection:'column',
 	justifyContent:'space-between',
 	height:'70%',
 },
 centerVertically:
 {
 	alignSelf:'center'
 }



}))











const CardDetailsHighLights =()=>{

const classes=applyStyles();
return(
	<Grid container spacing={1} >

	  <Grid item sm={7} xs={12}>
	  <Paper  className={classes.paperParent} elevation={0}>
	     <Typography variant='h4'>Property Highlights</Typography>
	   <List>
	    <ListItem>
	    <ListItemText primary="It is a long established fact  The point of using Lorem Ipsum is that it has a,"  />
	    </ListItem>
	    <ListItem>
	     <ListItemText primary="It is a long established fact  The point of using Lorem Ipsum is that it has a more-or-less ',"  />
	    </ListItem>
	    <ListItem>
	     <ListItemText primary="It is a long established fact  The point of using Lorem Ipsum is that it," />
	    </ListItem>
       </List>
       </Paper>
	  </Grid>

	  <Grid item   sm={5}   xs={12} >
	     <Paper className={`${classes.matchParent}  ${classes.paperParent}`} elevation={0}>
	      <Typography variant='h4'>Documents</Typography>
	      <div  className={classes.fileParent}>
	        <div >
		        <Typography  variant="caption">Priority Legal Document 1</Typography>
			    <Paper className={classes.colorPaper} elevation={0}>
		        <div className={classes.file}>
		         <InsertDriveFileIcon style={{fontSize:'3rem'}}/>
		         <Typography  variant='body2' className={classes.centerVertically} >Prestage SkyHigh Mumbai pdf</Typography>
		        </div>
		        </Paper>
	        </div>
            <div>
	        <Typography variant="caption">Form C</Typography>
		    <Paper className={classes.colorPaper} elevation={0}>
		     <div className={classes.file}>
	         <InsertDriveFileIcon style={{fontSize:'3rem'}}/>
	         <Typography  variant='body2' className={classes.centerVertically} >Form C .pdf</Typography>
	         </div>
	         </Paper>
	         </div>

	      </div>

	     </Paper>
	  </Grid>
	</Grid>
	)

}


export default CardDetailsHighLights;


















=======
import React from 'react';
import {Typography,Grid,List,ListItem,ListItemText} from '@material-ui/core';


const CardDetailsHighLights =()=>{

return(
	<Grid container >
	  <Grid item container>
	  </Grid>
	  <Grid item container>
	  </Grid>
	</Grid>
	)

}


export default CardDetailsHighLights;
>>>>>>> 8e86baabbcfb1104103ed668012be347355d6ae7
