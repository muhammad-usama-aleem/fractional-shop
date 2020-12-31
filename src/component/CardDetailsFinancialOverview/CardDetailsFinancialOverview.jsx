import React from 'react';
import {Typography,makeStyles,Button,Box,Paper,Container,Grid} from '@material-ui/core';


const applyStyles=makeStyles(theme=>({

  paperPad:{
  	padding:theme.spacing(3),
  	marginTop:theme.spacing(1)
  },
  tableRow:{
   display:'flex',
   justifyContent:'space-between',
   padding:'1rem'

  },
  gridChildWidth:{
  	maxWidth:'100%'
   },
   colorRows: {
   	 backgroundColor:'#FFF9E8',
}  
}))


const CardDetailsFinancialOverview =()=>
{


	   const classes=applyStyles()
	return(
		<Paper className={classes.paperPad} elevation={0}>
		<Grid container direction='column' spacing={2} >
		  <Grid item xs={12} >
		   <Typography variant='h4' >Financial Overview</Typography>
		  </Grid>
		  <Grid   item xs={12} >
		  <Typography style={{overflowWrap: 'break-word'}} variant='body1' >
		  Module not found: Can't resolve './component/CardDetailsFinancialOverview/CardDetailsFinancialOverview' in 'C:\Users\hafiz\Desktop\frac\src'Module not found: Can't resolve './component/CardDetailsFinancialOverview/Card
		  DetailsFinancialOverview' in 'C:\Users\hafiz\Desktop\frac\src'</Typography>
		  </Grid>
		  <Grid   xs={12}  item>
		  <Typography variant='body2'>
		  We indeed to make semi-annual dividend payments based on cash available
		  </Typography>
		  </Grid>
        
        </Grid>
          <Grid   container direction='column'>
           <Grid item xs={4}  className={`${classes.gridChildWidth}  ${classes.colorRows}`} >
             <div className={classes.tableRow}>
             <Typography variant='body1' >
             
             1234
            
             </Typography>
             <Typography variant='body1' >
             $346
             </Typography>
             <Typography variant='body1' >
             TreeShaking
             </Typography>
             </div>
           </Grid>
            <Grid item xs={4} className={`${classes.gridChildWidth}  `}>
             <div className={classes.tableRow}>
             <Typography variant='body1' >
             1234
             </Typography>
             <Typography variant='body1' >
             $346
             </Typography>
             <Typography variant='body1' >
             TreeShaking
             </Typography>
             </div>
              

           </Grid>
            <Grid item xs={4} className={`${classes.gridChildWidth}  ${classes.colorRows}`}>
               <div className={classes.tableRow}>
             <Typography variant='body1' >
             1234
             </Typography>
             <Typography variant='body1' >
             $346
             </Typography>
             <Typography variant='body1' >
             TreeShaking
             </Typography>
             </div>
              
           </Grid>
          
          </Grid>








		</Paper>

	

		)



}

export default CardDetailsFinancialOverview;