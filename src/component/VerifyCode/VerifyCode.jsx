import React from 'react';
import {Typography,TextField,Button,Box,Paper,Container,Grid,Link} from '@material-ui/core';
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
code_inputs:
 {
   display :'flex',
   gap:theme.spacing(2)
 },

}))

const VerifyCode =()=>{
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
          <Typography variant='h4'>Verification Code Sent </Typography>
          </Grid>
          <Grid item>
           <Typography variant="caption">Enter Code</Typography>
            <div className={classes.code_inputs}>
            <TextField type="tel" inputProps={{ maxLength: 1,style:{fontSize:50,textAlign:'center'}}}   id="code[0]" variant='outlined'   size="normal"/>
            <TextField  type="tel" inputProps={{ maxLength: 1,style:{fontSize:50,textAlign:'center'}}} id="code[1]" variant='outlined' size="normal"/>
            <TextField   type="tel"     inputProps={{ maxLength: 1 ,style:{fontSize:50,textAlign:'center'}}}id="code[2]"  variant='outlined'size="normal"/>
            <TextField  type="tel" inputProps={{ maxLength: 1 ,style:{fontSize:50,textAlign:'center'}}}id="code[3]" variant='outlined' size="normal"/>
            </div>
          </Grid>
           <Grid item>
          <Typography variant="caption"  >Verification code has sent to your Mail ID:xyx@gmail.com</Typography>
          </Grid>
          <Grid item>
	          <Button fullWidth className={classes.button_settings} variant='outlined' >Submit</Button>
             <Typography variant="caption" >Didn't get a code?<Link to='#'>Resend</Link> </Typography>
          </Grid>
          </Grid>
          </Container>
        </div>
    )
}

export default  VerifyCode;








