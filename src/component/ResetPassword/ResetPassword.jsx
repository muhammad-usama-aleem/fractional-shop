import React from 'react';
import {Typography,InputLabel,TextField,Button,Box,Paper,Container,Grid,Link} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {makeStyles} from  '@material-ui/core';


const applyStyles=makeStyles(theme=>({
 button_settings:{
  border: '#FDC424 solid 1px',
  borderRadius:3,
  flexGrow:1,
  marginBottom:theme.spacing(2)


 },

 container_parent:
 {
    height:'70vh',
    display:'flex',
    alignItems:'center'
 },



}))

const  ResetPassword =()=>{
    const classes=applyStyles();
	return(
		<div className={classes.container_parent}>
		  <Container   maxWidth="xs" >
          <Grid 
          justify="center"  container  direction="column" spacing={3}>
          <Grid item>
          <ArrowBackIosIcon/>
          </Grid>
          <Grid item>
          <Typography variant='h4'>Reset Password</Typography>
          </Grid>
          <Grid item>
           <Typography variant="caption">Enter a new password for your account</Typography>
          </Grid>
          <Grid item>
           
             <InputLabel htmlfor='newPassword' shrink>New Password</InputLabel>
            <TextField type="password" placeholder="Type New Password"  id="newPassword" variant='outlined'   size="small"  fullWidth/>
          </Grid>
           <Grid item>
             <InputLabel htmlfor='retypeNewPassword' shrink>Confirm Password</InputLabel>
            <TextField type="password"  placeholder="Confirm Password"  id="retypeNewPassword" variant='outlined'   size="small" fullWidth/>
          </Grid>
          
          <Grid item>
	          <Button fullWidth className={classes.button_settings} variant='outlined' >Submit</Button>
          </Grid>
          </Grid>
          </Container>
        </div>
    )
}

export default  ResetPassword;








