import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { TextField, InputLabel } from '@material-ui/core/';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Google from '../../../images/google.svg';
import { IconButton,Link, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
// import { Link } from 'react-router-dom';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import './SignUp.css';

const useStyles = makeStyles((theme) => ({
	signupContainer: {
		margin: theme.spacing(12, 'auto', 12),
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
		width: '100%',
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		textTransform: 'none',
		height: '40px',
	},
	submitButton: {
		margin: theme.spacing(3, 0, 2),
		textTransform: 'none',
		border: '1px solid #FECF0E',
		'&:hover': {
			background: 'white',
		},
		borderRadius: '10px',
	},
	button: {
		margin: theme.spacing(1),
	},
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
	option: {
		fontSize: 15,
		'& > span': {
			marginRight: 10,
			fontSize: 18,
		},
	},
	navlink: {
		textDecoration: 'none',
		color: '#1f1f1f',
		'&:active': {
			color: '#1f1f1f',
		},
	},
	googleButton: {
		flex: 1,
		textTransform: 'none',
		alignSelf: 'center',
	},
	termsConditionsLink: {
		textDecoration: 'none',
		color: '#4285F4ff',
		'&:hover': {
			color: '#4285F4ff',
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

export default function SignUp(props) {
	const classes = useStyles();
	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => setShowPassword(!showPassword);
	const handleMouseDownPassword = () => setShowPassword(!showPassword);

	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
		state: '',
		country: '',
	});
	const [contact, setContact] = useState(0);
	const [countryCode, setCountryCode] = useState('');

	const handleCountryCodePhone = (value, country) => {
		setContact(value);
		setCountryCode(country.dialCode);
	};

	function handleChange(e) {
		const { name, value } = e.target;
		setUser((user) => ({ ...user, [name]: value }));
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		const userData = {
			email: user.email,
			firstName: user.firstName,
			lastName: user.lastName,
			password: user.password,
			contact: contact,
			countryCode: countryCode,
			countryName: user.country,
			stateName: user.state,
		};

		console.log(userData);
	};
	return (
		<Container
			component='main'
			maxWidth='xs'
			className={classes.signupContainer}
		>
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component='h1' variant='h4' gutterBottom>
					Sign up
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid
							item
							xs={12}
							sm={6}
							style={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<InputLabel
								className={classes.label}
								htmlFor='firstName'
								shrink
								variant='outlined'
							>
								First Name *
							</InputLabel>

							<TextField
								autoComplete='fname'
								name='firstName'
								size='small'
								variant='outlined'
								onChange={handleChange}
								value={user.firstName}
								fullWidth
								className={classes.inputBorder}
								id='firstName'
								autoFocus
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							style={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<InputLabel
								className={classes.label}
								htmlFor='lastName'
								shrink
								variant='outlined'
							>
								Last Name *
							</InputLabel>
							<TextField
								variant='outlined'
								className={classes.inputBorder}
								fullWidth
								onChange={handleChange}
								value={user.lastName}
								size='small'
								id='lastName'
								name='lastName'
								autoComplete='lname'
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
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
								Email ID *
							</InputLabel>
							<TextField
								variant='outlined'
								className={classes.inputBorder}
								fullWidth
								onChange={handleChange}
								value={user.email}
								size='small'
								id='email'
								name='email'
								autoComplete='email'
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							style={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<InputLabel
								className={classes.label}
								htmlFor='phone'
								shrink
								variant='outlined'
								className={classes.label}
							>
								Mobile Number *
							</InputLabel>
							<PhoneInput
								country={'us'}
								id='phone'
								label=''
								name='contact'
								value={user.contact}
								onChange={(value, country, e) =>
									handleCountryCodePhone(value, country)
								}
							/>
						</Grid>

						<Grid
							item
							xs={12}
							sm={6}
							style={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<InputLabel
								className={classes.label}
								htmlFor='state'
								shrink
								variant='outlined'
							>
								State *
							</InputLabel>
							<TextField
								variant='outlined'
								className={classes.inputBorder}
								fullWidth
								onChange={handleChange}
								value={user.state}
								size='small'
								id='state'
								name='state'
								autoComplete='state'
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							style={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<InputLabel
								className={classes.label}
								htmlFor='country'
								shrink
								variant='outlined'
							>
								Country *
							</InputLabel>
							<TextField
								variant='outlined'
								className={classes.inputBorder}
								fullWidth
								onChange={handleChange}
								value={user.country}
								size='small'
								id='country'
								name='country'
								autoComplete='country'
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
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
								className={classes.inputBorder}
								fullWidth
								onChange={handleChange}
								value={user.password}
								size='small'
								name='password'
								type={showPassword ? 'text' : 'password'}
								id='password'
								autoComplete='current-password'
								InputProps={{
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
						<Grid
							item
							xs={12}
							sm={6}
							style={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<InputLabel
								className={classes.label}
								htmlFor='confirmPassword'
								shrink
								variant='outlined'
							>
								Confirm Password *
							</InputLabel>
							<TextField
								variant='outlined'
								className={classes.inputBorder}
								fullWidth
								color='primary'
								onChange={handleChange}
								value={user.confirmPassword}
								size='small'
								name='confirmPassword'
								type={showPassword ? 'text' : 'password'}
								id='confirmPassword'
								autoComplete='current-password'
								InputProps={{
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
						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox name='allowExtraEmails' color='primary' />}
								label={
									<div>
										<Typography variant='subtitle2'>
											By clicking Sign up,you agree to our
											<Link
												href='#'
												variant='subtitle2'
												className={classes.termsConditionsLink}
											>
												{' '}
												Terms of Use
											</Link>{' '}
											and confirm that you have read,understood and agree to our
											<Link
												href='#'
												variant='subtitle2'
												className={classes.termsConditionsLink}
											>
												{' '}
												Privacy Policy
											</Link>
										</Typography>
									</div>
								}
							/>
						</Grid>
					</Grid>
					<Button
						type='submit'
						fullWidth
						size='large'
						disableRipple
						variant='outlined'
						className={classes.submitButton}
						onClick={handleSubmit}
					>
						Sign Up
					</Button>

					<Grid container justify='flex-end'>
						<Grid item>
							<Link to='/signin' className={classes.navlink} variant='body2'>
								Already have an account?{' '}
								<span className={classes.termsConditionsLink}>Login</span>
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
						fullWidth
						size='large'
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
