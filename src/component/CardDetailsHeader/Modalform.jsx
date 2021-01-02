import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function Modalform(props) {
  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState('sm');
  const PrettoSlider = props.PrettoSlider;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      
      <button className="login_button" onClick={handleClickOpen}>Invest Now</button>

      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">
            <div className="modal-form-title">
                Invest Now
                <svg onClick={handleClose} style={{width: "30px", height: "30px"}} class="svg-icon" viewBox="0 0 20 20">
                    <path fill="none" d="M 12.71 7.291 c -0.15 -0.15 -0.393 -0.15 -0.542 0 L 10 9.458 L 7.833 7.291 c -0.15 -0.15 -0.392 -0.15 -0.542 0 c -0.149 0.149 -0.149 0.392 0 0.541 L 9.458 10 l -2.168 2.167 c -0.149 0.15 -0.149 0.393 0 0.542 c 0.15 0.149 0.392 0.149 0.542 0 L 10 10.542 l 2.168 2.167 c 0.149 0.149 0.392 0.149 0.542 0 c 0.148 -0.149 0.148 -0.392 0 -0.542 L 10.542 10 l 2.168 -2.168 C 12.858 7.683 12.858 7.44 12.71 7.291 z z z"></path>
                </svg>
            </div>
            
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
              <button className="Invest_Step backline active">Step1</button>
              <button className="Invest_Step backline">Step2</button>
              <button className="Invest_Step">Step3</button>
          </DialogContentText>
          
          
          <small className="title_slider">Choose investment amount</small>
          <div className="modal_row">
          <div className="range_explain">
                <div className="card_title">
                    <small className="small_price">Available fraction:</small>
                </div>  
                <div className="card_title">
                    <small className="small_price">Price per fraction:</small>
                </div>
            </div>

            <PrettoSlider className="modalslider" valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
            
            <div className="range_explain">
                <div className="card_title">
                    <small className="small_price">Min:</small>
                </div>  
                <div className="card_title">
                    <small className="small_price">Available:</small>
                </div>
            </div>
          </div>

          </DialogContent>
        <DialogActions>
          {/* <Button color="primary">
          </Button> */}
          <button className="login_button">Continue</button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
