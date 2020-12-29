import { createMuiTheme } from '@material-ui/core/styles';

const colorPrimary = '#2C5BC8';
const silverWhite = '#F8F9FC';
const darkGray = '#707070';
const eerieBlack = '#1F1F1F';
const oceanGreen = '#54B98A';
const imperialRed = '#E24848';
const yellowOrange = '#FFAD3C';
const oliveRed = '#F63A43';
const yellowLight = '#FECF0E';
const orangeDark = '#FE860E';
const lightGray = '#DFE9F6';
const lighterBlue = '#C5CACE';
const darkerGray = '#7D8790';
const darkerBlue = '#1D3041';
const imperialBlue = '#FDC424';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#2C5BC8',
		},
		secondary: {
			main: '#707070',
		},
		background: {
			default: '#ffffff',
		},
	},
	common: {
		arcSilver: '#DFE9F6ff',
		arcWhite: '#ffffff',
		arcBlack: '#1f1f1f',
		colorPrimary: colorPrimary,
		silverWhite: silverWhite,
		darkGray: darkGray,
		eerieBlack: eerieBlack,
		oceanGreen: oceanGreen,
		imperialRed: imperialRed,
		yellowOrange: yellowOrange,
		yellowLight: yellowLight,
		lighterBlue: lighterBlue,
		imperialBlue: imperialBlue,
	},
	typography: {
		estimate: {
			fontSize: '1rem',
		},
		fontFamily: ['Poppins', 'Roboto', 'sans-serif'].join(','),
	},
});
export default theme;
