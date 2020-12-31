import React,{useState} from 'react';
import {Typography,Grid,Paper,makeStyles,Box} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';



const applyStyles=makeStyles(theme=>({

	paperPad:{
  	padding:theme.spacing(3),
  	marginTop:theme.spacing(1)
  },

customMargin:
{
	marginBottom:theme.spacing(3)
}
,
questionsBox:
{
	
	
	display:'flex',
	justifyContent:'space-between',
	borderBottom:'#7777 solid 2px',
	padding:' .95rem 0'

},
hideDisplay:{
	display:'none',
},
viewDisplay:{
	padding:' .95rem 0',
	borderBottom:'#7777 solid 2px',
}

}))
const CardDetailsFaq=()=>{

const classes=applyStyles();





const [visibility,setVisibility]=useState(false);


return(
	<Paper className={classes.paperPad}  elevation={0}>
	<Typography variant='h4' className={classes.customMargin}>FAQ</Typography>
	<Grid continer>
	    <Grid item>
         <div onClick={()=>setVisibility(!visibility)} className={classes.questionsBox}>
			<Typography variant='body1' >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Typography>
			{!visibility?<ExpandMore/>:<ExpandLess/>}
		</div>
		<Typography className={!visibility?classes.hideDisplay:classes.viewDisplay} variant='body2'>
		Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit
		.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Typography>
	
		</Grid>
		<Grid item>
		   <Box className={classes.questionsBox}>
			<Typography variant='body1' > Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque</Typography>
			<ExpandMore/>
		</Box>
		</Grid>
		<Grid item>
		   <Box className={classes.questionsBox}>
			<Typography variant='body1' > Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque</Typography>
			<ExpandMore/>
		</Box>
		</Grid>
		<Grid item>
		   <Box className={classes.questionsBox}> 
			<Typography variant='body1' > Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque</Typography>
			<ExpandMore/>
		</Box>
		</Grid>
		<Grid item>
		   <Box className={classes.questionsBox}>
			<Typography variant='body1' > Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque</Typography>
			<ExpandMore/>
		</Box>
		</Grid>
	</Grid>


	</Paper>
	   

	)

}

export default CardDetailsFaq;







