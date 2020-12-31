import React from 'react';
import {Typography,Grid,Paper,makeStyles} from '@material-ui/core';

const applyStyles=makeStyles(theme=>({

	paperPad:{
  	padding:theme.spacing(3),
  	marginTop:theme.spacing(1)
  },

customMargin:
{
	marginBottom:theme.spacing(3)
}

}))
const CardDetailsLocation=()=>{
const classes=applyStyles();
return(
	<Paper  className={classes.paperPad} elevation={0}>
    <Typography variant='h4'  className={classes.customMargin}>Location</Typography>

	<Grid container  spacing={2}>
	 <Grid item xs={12} sm={5}>
		<Typography variant='body1'>
		 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t
		 empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
		 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
		 sunt in culpa qui officia deserunt mollit anim id est laborum.
		</Typography>
	 </Grid>
	 <Grid item  xs={12} sm={7}>
	 	<iframe 
		src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d135529.76135982826!2d72.59486088007564!3d33.8706663871738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sro!4v1609326943963!5m2!1sen!2sro" 
		width="100%" height="450" frameBorder="0" 
		allowFullScreen aria-hidden="false" tabIndex="0"></iframe>
	 </Grid>
	</Grid>
	</Paper>


	)

}

export default CardDetailsLocation;







