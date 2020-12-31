import React,{useState} from 'react';
import {Typography,Grid,Paper,makeStyles,Button} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardDetailsFaq from '../CardDetailsFaq/CardDetailsFaq';
import ShareIcon from '@material-ui/icons/Share';
import dummy from '../../images/dummy.svg';


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
 gridChildLogo:
{
	display:'flex',
	justifyContent:'center',
},
 gridChildShare:
{
	display:'flex',
	justifyContent:'center',
	gap:'1rem'
},
 gridChildDetails:
{
	display:'flex',
	justifyContent:'space-between',
},

hideDisplay:{
	display:'none',
},
viewDisplay:{
	padding:' .95rem 0',
	borderBottom:'#7777 solid 2px',
},
valueColor:{
	color:'#e5e4e2',
	fontWeight:'bold'
}

}))
const CardDetailsFooter=()=>{

const classes=applyStyles();



return(
	<Paper className={classes.paperPad}  elevation={0}>

	 <CardDetailsFaq/>
	 <Grid style={{marginTop:'5rem'}} direction="column" container spacing={3}>
	  <Grid item xs={12}>
	   <div className={classes.gridChildLogo}>
	   	<img alt="logo"  src={dummy}/>
	   <Typography variant='h2'>Prestige Sky High</Typography>
	   </div>
	  </Grid>
	  <Grid item xs={12}>
	   <div className={classes.gridChildShare}>
		   <Button style={{border:'#FDC424 solid 1px'}} variant="outlined">Invest on Prestige Sky High</Button>
		   <Typography variant='caption' style={{padding:'.5rem 0 '}}><FavoriteBorderIcon/> Add to wishlist</Typography>
		   <Typography variant='caption' style={{padding:'.5rem 0 '}}><ShareIcon/> Share </Typography>
	   </div>
	  </Grid>
	  <Grid style={{marginTop:'2rem'}} item xs={12}>
	  	<div className={classes.gridChildDetails}>
		   <Typography variant='h2'  className={classes.valueColor} >
		   <Typography variant='body1' style={{textAlign:'center'}}>Targeted <span style={{display:'block'}}>Investor IIR</span></Typography>
		    8%
		   </Typography>
		   <Typography variant='h2' className={classes.valueColor}>
		    <Typography variant='body1' style={{textAlign:'center'}} >Targeted <span style={{display:'block'}}>Average Cash Yield</span></Typography>
		    4.18%
		    </Typography>
		    <Typography variant='h2' className={classes.valueColor}>
		     <Typography variant='body1' style={{textAlign:'center'}}>Targeted <span style={{display:'block'}}> Equity Multiple</span></Typography>
		    10%
		    </Typography>
	   </div>
	  </Grid>
	 </Grid>
	</Paper>
	  
	)

}

export default CardDetailsFooter;







