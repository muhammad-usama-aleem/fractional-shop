import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { IconButton,Link, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
// import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Google from '../../../images/google.svg';

const useStyles = makeStyles((theme) => ({
	signinContainer: {
		margin: theme.spacing(12, 'auto', 12),
		// display: 'flex',
		// flexDirection: 'column',
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'left',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(2, 0, 2),
		textTransform: 'none',
		height: '40px',
	},
	submitButton: {
		margin: theme.spacing(2, 0, 2),
		textTransform: 'none',
		border: '1px solid #FECF0E',
		'&:hover': {
			background: 'white',
		},
	},
	termsConditionsLink: {
		textDecoration: 'none',
		color: '#4285F4ff',
		'&:hover': {
			color: '#4285F4ff',
		},
	},
	container: {
		display: 'flex',
		alignItems: 'center',
	},
	border: {
		borderBottom: '2px solid lightgray',
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

	navlink: {
		textDecoration: 'none',
		color: '#1f1f1f',
		border: 'none',
		'&:active': {
			color: '#1f1f1f',
		},
	},
	label: {
		color: '#1F1F1F',
	},
	inputBorder: {
		'& label.Mui-focused': {
			color: '#ADD8E6',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: '#ADD8E6',
		},
		'& .MuiOutlinedInput-root': {
			borderRadius: '10px',
			'& fieldset': {
				borderColor: '#ADD8E6',
			},
			'&:hover fieldset': {
				borderColor: '#ADD8E6',
			},
			'&.Mui-focused fieldset': {
				borderColor: '#ADD8E6',
			},
		},
	},
}));

export default function SignIn(props) {
	const classes = useStyles();
	const [values, setValues] = useState({
		email: '',
		password: '',
	});
	const [passwordHelper, setPasswordHelper] = useState('');
	const [emailHelper, setEmailHelper] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword(!showPassword);
	const handleMouseDownPassword = () => setShowPassword(!showPassword);
	const handleChange = (event) => {
		event.persist();

		setValues((values) => ({
			...values,
			[event.target.name]: event.target.value,
		}));
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		const userData = {
			email: values.email,
			password: values.password,
		};
		console.log(userData);
	};

	return (
		<Container
			component='main'
			maxWidth='xs'
			className={classes.signinContainer}
		>
			<div className={classes.paper}>
				<Typography component='h1' variant='h4' gutterBottom>
					Login
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid
							item
							sm={12}
							style={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<InputLabel
								className={classes.label}
								htmlFor='email'
								shrink
								variant='outlined'
							>
								Email *
							</InputLabel>
							<TextField
								variant='outlined'
								required
								fullWidth
								className={classes.inputBorder}
								value={values.email}
								onChange={handleChange}
								size='small'
								id='email'
								error={emailHelper.length !== 0}
								helperText={emailHelper}
								name='email'
								autoComplete='email'
								autoFocus
							/>
						</Grid>
						<Grid
							item
							sm={12}
							style={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<InputLabel
								className={classes.label}
								htmlFor='password'
								shrink
								variant='outlined'
							>
								Password *
							</InputLabel>
							<TextField
								variant='outlined'
								required
								size='small'
								id='password'
								className={classes.inputBorder}
								error={passwordHelper.length !== 0}
								helperText={passwordHelper}
								name='password'
								value={values.password}
								onChange={handleChange}
								fullWidth
								type={showPassword ? 'text' : 'password'}
								InputProps={{
									// <-- This is where the toggle button is added.
									endAdornment: (
										<InputAdornment position='end'>
											<IconButton
												aria-label='toggle password visibility'
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
												disableRipple
												size='small'
											>
												{showPassword ? <Visibility /> : <VisibilityOff />}
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
						</Grid>
					</Grid>

					<Button
						type='submit'
						size='large'
						fullWidth
						variant='outlined'
						className={classes.submitButton}
						onClick={handleSubmit}
					>
						Login
					</Button>
					<Grid container>
						<Grid item xs>
							<Link to='#' className={classes.navlink} variant='body2'>
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link to='/signup' className={classes.navlink} variant='body2'>
								New here?{' '}
								<span className={classes.termsConditionsLink}>Sign Up</span>
							</Link>
						</Grid>
					</Grid>

					<div className={classes.container}>
						<div className={classes.border} />
						<span className={classes.content}>Or</span>
						<div className={classes.border} />
					</div>

					<Button
						type='submit'
						size='large'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}
						style={{ background: '#4285F4ff', padding: '.1rem .2rem' }}
					>
						<Grid container>
							<Avatar
								variant='square'
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
			</div>
		</Container>
	);
}
