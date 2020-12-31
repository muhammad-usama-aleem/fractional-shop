<<<<<<< HEAD
import React from 'react';
import {TextField,Button,Link,InputLabel,makeStyles,Avatar,Grid , CssBaseline,Container,Typography} from '@material-ui/core';
import Google from '../../images/google.svg';



const useStyles=makeStyles((theme)=>({
container: {
    display: 'flex',
    alignItems: 'center',
  },
  border: {
    borderBottom: '1px solid lightgray',
    width: '100%',
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    fontWeight: 500,
    fontSize: 16,
    color: 'gray',
    width: '25%',
  },

  googleButton: {
    flex: 1,
    textTransform: 'none',
    alignSelf: 'center',
  },
  loginContainer: {
    margin: theme.spacing(12, 'auto', 12),
  },
  submitButton:{
  	margin: theme.spacing(0, 0, 2),
    textTransform: 'none',
    border: '1px solid #FECF0E',
    '&:hover': {
      background: 'white',
    },
    borderRadius: '4',
    padding: '7.5 14'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    textTransform: 'none',
    height: '40px',
  },

  heading:{
  	marginBottom : theme.spacing(3)
  },
  inputBorder: {
    '& label.Mui-focused': {
      color:'#4285F4ff'// theme.common.arcSilver,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#4285F4ff'//theme.common.lighterBlue,
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '4px',
      '& fieldset': {
        borderColor: '#4285F4ff'//theme.common.lighterBlue,
      },
      '&:hover fieldset': {
        borderColor: '#4285F4ff'//theme.common.lighterBlue,
      },
      '&.Mui-focused fieldset': {
        borderColor: '#4285F4ff'//theme.common.lighterBlue,
      },
    },
  },
  
}))


export const Login=()=>
{
	const classes = useStyles();
	return(
         <>
        <Container maxWidth="xs" className={classes.loginContainer}>
        <CssBaseline />
        <Typography  className={classes.heading} component="h1" variant="h4"  gutterBottom>Login</Typography>
		<form>
		<Grid container direction={"column"} spacing={3}>
		 <Grid item>
		  <InputLabel   htmlFor="login_email" variant="standard" >Email</InputLabel>
		 <TextField  className={classes.inputBorder} fullWidth id="loginName"  variant="outlined" size="small" />
		  </Grid>
		  <Grid item>
		     <InputLabel htmlFor="login_password" variant="standard">Password</InputLabel>
		 <TextField  className={classes.inputBorder} fullWidth id="loginPassword"  variant="outlined"  size="small"/>
		  </Grid>
		  <Grid item>
		 <Button  type='submit'   variant="outlined" fullWidth
            className={classes.submitButton}>
            Login
          </Button>
		  </Grid>
	
		</Grid>
	

           <Grid container justify="space-between">
            <Grid item>
              <Link to="/resetpassword"  variant="body2">
               {' '}
                <span >Forgot Password?</span>
              </Link>
            </Grid>
            <Grid item>
               New Here?
              <Link to="/signin"  variant="body2">
               {' '}
                <span >Signup</span>
              </Link>
            </Grid>
          </Grid>
          <div className={classes.container}>
            <div className={classes.border} />
            <span className={classes.content}>Or</span>
            <div className={classes.border} />
          </div>
          <Button
            type="submit"
            fullWidth
            size="large"
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ background: '#4285F4ff', padding: '.1rem .2rem' }}
          >

            <Grid container>
              <Avatar
                variant="square"
                style={{
                  background: 'white',
                  borderRadius: '10px',
                  padding: '.4rem',
                  width: '32px',
                  height: '32px',
                }}
                src={Google}
              ></Avatar>

              <Grid item className={classes.googleButton}>
                Continue With Google
              </Grid>
            </Grid>
          </Button>

		</form>
		</Container>
	
		</>
		)



}


export default Login;


























































































=======
import React from 'react';
import {TextField,Button,Link,InputLabel,makeStyles,Avatar,Grid , CssBaseline,Container,Typography} from '@material-ui/core';
import Google from '../../images/google.svg';



const useStyles=makeStyles((theme)=>({
container: {
    display: 'flex',
    alignItems: 'center',
  },
  border: {
    borderBottom: '1px solid lightgray',
    width: '100%',
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    fontWeight: 500,
    fontSize: 16,
    color: 'gray',
    width: '25%',
  },

  googleButton: {
    flex: 1,
    textTransform: 'none',
    alignSelf: 'center',
  },
  loginContainer: {
    margin: theme.spacing(12, 'auto', 12),
  },
  submitButton:{
  	margin: theme.spacing(0, 0, 2),

    textTransform: 'none',
    border: '1px solid #FECF0E',
    '&:hover': {
      background: 'white',
    },
    borderRadius: '4',
    padding: '7.5 14'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    textTransform: 'none',
    height: '40px',
  },

  heading:{
  	marginBottom : theme.spacing(3)
  },
  inputBorder: {
    '& label.Mui-focused': {
      color:'#4285F4ff'// theme.common.arcSilver,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#4285F4ff'//theme.common.lighterBlue,
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '4px',
      '& fieldset': {
        borderColor: '#4285F4ff'//theme.common.lighterBlue,
      },
      '&:hover fieldset': {
        borderColor: '#4285F4ff'//theme.common.lighterBlue,
      },
      '&.Mui-focused fieldset': {
        borderColor: '#4285F4ff'//theme.common.lighterBlue,
      },
    },
  },
  
}))


export const Login=()=>
{
	const classes = useStyles();
	return(
         <>
        <Container maxWidth="xs" className={classes.loginContainer}>
        <CssBaseline />
        <Typography  className={classes.heading} component="h1" variant="h4"  gutterBottom>Login</Typography>
		<form>
		<Grid container direction={"column"} spacing={3}>
		 <Grid item>
		  <InputLabel   htmlFor="login_email" variant="standard" >Email</InputLabel>
		 <TextField  className={classes.inputBorder} fullWidth id="loginName"  variant="outlined" size="small" />
		  </Grid>
		  <Grid item>
		     <InputLabel htmlFor="login_password" variant="standard">Password</InputLabel>
		 <TextField  className={classes.inputBorder} fullWidth id="loginPassword"  variant="outlined"  size="small"/>
		  </Grid>
		  <Grid item>
		 <Button  type='submit'   variant="outlined" fullWidth
            className={classes.submitButton}>
            Login
          </Button>
		  </Grid>
	
		</Grid>
	

           <Grid container justify="space-between">
            <Grid item>
              <Link to="/resetpassword"  variant="body2">
               {' '}
                <span >Forgot Password?</span>
              </Link>
            </Grid>
            <Grid item>
               New Here?
              <Link to="/signin"  variant="body2">
               {' '}
                <span >Signup</span>
              </Link>
            </Grid>
          </Grid>
          <div className={classes.container}>
            <div className={classes.border} />
            <span className={classes.content}>Or</span>
            <div className={classes.border} />
          </div>
          <Button
            type="submit"
            fullWidth
            size="large"
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ background: '#4285F4ff', padding: '.1rem .2rem' }}
          >

            <Grid container>
              <Avatar
                variant="square"
                style={{
                  background: 'white',
                  borderRadius: '10px',
                  padding: '.4rem',
                  width: '32px',
                  height: '32px',
                }}
                src={Google}
              ></Avatar>

              <Grid item className={classes.googleButton}>
                Continue With Google
              </Grid>
            </Grid>
          </Button>

		</form>
		</Container>
	
		</>
		)



}


export default Login;


























































































>>>>>>> 8e86baabbcfb1104103ed668012be347355d6ae7
