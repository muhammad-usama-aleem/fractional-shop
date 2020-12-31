import React from 'react';
import {Typography,Button,Box,Paper,Container,Grid} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {makeStyles} from  '@material-ui/core';


const applyStyles=makeStyles(theme=>({
 button_settings:{
  border: '#FDC424 solid 1px',
  borderRadius:3,
  flexGrow:1


 },
 buttons_box:{
 	display:'flex',
 	flexWrap:'wrap',
    gap:theme.spacing(1)
 },
 container_parent:
 {
    height:'70vh',
    display:'flex',
    alignItems:'center'
 }

}))


const VerificationMethod =()=>{
    const classes=applyStyles();
	return(
		<div className={classes.container_parent}>
		  <Container   maxWidth="sm" >
          <Grid 
          justify="center" container  direction="column" spacing={3}>
          <Grid item>
          <ArrowBackIosIcon/>
          </Grid>
          <Grid item>
          <Typography variant='h4'>Let's Verify It's You </Typography>
          </Grid>
           <Grid item>
          <Typography variant="caption"  >Choose a verification method so that we can make sure it's you.</Typography>
          </Grid>
          <Grid item>
	        <Box className={classes.buttons_box}>
	          <Button className={classes.button_settings} variant='outlined'>SMS Verification</Button>
	          <Button className={classes.button_settings} variant='outlined'>Email Verification</Button>
	       </Box>
          </Grid>
          </Grid>
          </Container>
        </div>
    )
}

export default  VerificationMethod;








