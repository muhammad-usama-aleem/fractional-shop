import React from 'react';
import {Grid,makeStyles,Typography,List,ListItem,ListItemIcon,ListItemText} from '@material-ui/core';


const CardDetailsHighLights =()=>{

return(
	<Grid container >
	    <Grid item direction="column" container>
		    <Grid item>
			    <List>
				    <ListItem>
				    <ListItemText  primary="It is a long established fact that a reader will be distracted by
				     the readable content of a page when looking at its layo as opposed to using 'Content here,
				      content here', making it look like readable English. Many desktop publishing packages and 
				      web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
				      will uncover many web sites still in their infancy. Various versions have evolved over the years, 
				      sometimes by accident, sometimes on purpose (injected humour and the like)." secondary="Pakistan"/>
				    </ListItem>
				    <ListItem>
				     <ListItemText  primary="It is a long established fact that a reader 
				     will be distracted by the readable content of a page when looking at its 
				     layo as opposed to using 'Content here, content here', making it look like readable English.
				      Many desktop publishing packages and web page editors now use Lorem Ipsum as their default 
				      model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
				       Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." secondary="Pakistan"/>
				    </ListItem>
				    <ListItem>
				     <ListItemText  primary="It is a long established fact that a reader 
				     will be distracted by the readable content of a page when looking at its
				      layo as opposed to using 'Content here, content here', making it look like readable English.
				       Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
				       and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
				        evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." secondary="Pakistan"/>
				    </ListItem>
			    </List>
			    </Grid>
		    <Grid/>
	    <Grid item container>

	    <Grid/>
	</Grid>
	)

}


export default CardDetailsHighLights;