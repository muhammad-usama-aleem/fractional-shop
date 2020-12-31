import React from 'react';
import {Typography,makeStyles,Button,Box,Paper,Container,Grid} from '@material-ui/core';


const applyStyles=makeStyles(theme=>({

	paperPad:{
  	padding:theme.spacing(3),
  	marginTop:theme.spacing(1)
  },
ifraeDiv:{
	display:'flex',
	flexWrap:'wrap',
	justifyContent:'flex-start',
	gap:theme.spacing(1)
},
customMargin:
{
	marginBottom:theme.spacing(3)
}

}))


const CardDetailsWebinars =()=>
{


	   const classes=applyStyles()
	return(
		<Paper className={classes.paperPad} elevation={0}>
		 <Typography variant='h4' className={classes.customMargin}>Webinars</Typography>
		  <Grid container  spacing={3} >
		  <Grid item xs={12} sm={4}  >
		   <iframe 
		    title="Inline Frame Example"
		    frameBorder="0"
		    width='100%'
		      height='200px'
		    src="https://www.youtube.com/embed/tgbNymZ7vqY" allowFullScreen={true} >
            </iframe>
           </Grid>
          <Grid item xs={12} sm={4}  >
		  <iframe 
		    title="Inline Frame Example"
		        width='100%'
		        height='200px'
		       frameBorder="0"
		    src="https://www.youtube.com/embed/tgbNymZ7vqY" allowFullScreen={true}  >
            </iframe>
          </Grid>
		  </Grid>
		</Paper>
		)
}

export default CardDetailsWebinars;