import React, { useRef } from 'react';
import { Slide } from 'react-slideshow-image';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

import './CardDetailsHeader.css';
import 'react-slideshow-image/dist/styles.css';

import Home1 from '../../images/home1.jpg';
import Home2 from '../../images/home2.jpg';
import Home3 from '../../images/home3.jpg';
import logo from '../../images/logo.png';

const slideImages = [
    Home1,
    Home2,
    Home3
  ];
  const PrettoSlider = withStyles({
    root: {
      color: '#FDC424',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

const CardDetailsHeader = () => {
    const slideRef = useRef();
    const properties = {
        autoplay: true,
        arrows: true
    };
    const move = (value) => {
    slideRef.current.goTo(parseInt(value, 10));
    console.log(value);
    }

        return (
            <div className="Details">

            <div className="Details_header">
                <div className="details_left">
                    <div className="text-header">
                        <img className = "header_logo" alt="logo" src={logo} />
                        <div className="card_title">
                            <h5 className="box-title">Prestige Sky High</h5>
                            <small className="small-title">Thane, Mumbai, India</small>
                        </div>  
                    </div>
                    <div className="price_row">
                        <div className="card_title">
                            <small className="small_price">Value Of Asset</small>
                            <h5 className="price">$20000</h5>
                        </div>  
                        <div className="card_title">
                            <small className="small_price">Price Per Fraction</small>
                            <h5 className="price">$2000</h5>
                        </div>
                    </div>
                    
                    <div className="per_row">
                        <div className="card_title">
                            <small className="small_per"> Targeted Investor IRR</small>
                            <h5 className="per">8%</h5>
                        </div>  
                        <div className="card_title">
                            <small className="small_per">Targeted Equity Multiple</small>
                            <h5 className="per">10%</h5>
                        </div>  
                        <div className="card_title">
                            <small className="small_per">Targeted Average Cash Yield</small>
                            <h5 className="per">10%</h5>
                        </div>
                    </div>

                    <div className="price_row">
                        <div className="card_title">
                            <small className="small_price">Minimum Investment:</small>
                        </div>  
                        <div className="card_title">
                            <small className="small_price">Minimum Hold Period:</small>
                        </div>
                    </div>

                    <div className="choose_slider">
                        <small className="title_slider">Choose investment amount</small>
                        <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
                        <div className="range_explain">
                            <div className="card_title">
                                <small className="small_price">Min:</small>
                            </div>  
                            <div className="card_title">
                                <small className="small_price">Available:</small>
                            </div>
                        </div>
                    </div>


                    <div className="buttons_row">
                        <button className="login_button">Invest Now</button>
                        <div className="add_to_list">
                            <svg className="heart" width="20" height="20" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.32595 11.2559L5.56198 10.556C2.84698 8.094 1.05398 6.47002 1.05398 4.47702C1.0501 4.0951 1.12245 3.71623 1.26681 3.36264C1.41118 3.00904 1.62467 2.68776 1.89474 2.41769C2.16481 2.14762 2.48603 1.93425 2.83963 1.78988C3.19322 1.64552 3.57209 1.57311 3.95401 1.57699C4.40501 1.58027 4.85002 1.68009 5.25918 1.86984C5.66834 2.05958 6.0321 2.33482 6.32595 2.67697C6.61981 2.33482 6.98357 2.05958 7.39273 1.86984C7.80189 1.68009 8.24696 1.58027 8.69796 1.57699C9.07984 1.57325 9.45863 1.64571 9.81216 1.79013C10.1657 1.93454 10.4869 2.14802 10.7569 2.41806C11.027 2.68809 11.2404 3.00922 11.3849 3.36276C11.5293 3.71629 11.6017 4.09514 11.598 4.47702C11.598 6.47002 9.80599 8.094 7.08999 10.561L6.32595 11.2559Z" fill="none"/>
                            </svg>
                            <p className="add_text">Adding to wishlist</p>    
                        </div>
                        <div className="add_to_list">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path d="M16.76,7.51l-5.199-5.196c-0.234-0.239-0.633-0.066-0.633,0.261v2.534c-0.267-0.035-0.575-0.063-0.881-0.063c-3.813,0-6.915,3.042-6.915,6.783c0,2.516,1.394,4.729,3.729,5.924c0.367,0.189,0.71-0.266,0.451-0.572c-0.678-0.793-1.008-1.645-1.008-2.602c0-2.348,1.93-4.258,4.303-4.258c0.108,0,0.215,0.003,0.321,0.011v2.634c0,0.326,0.398,0.5,0.633,0.262l5.199-5.193C16.906,7.891,16.906,7.652,16.76,7.51 M11.672,12.068V9.995c0-0.185-0.137-0.341-0.318-0.367c-0.219-0.032-0.49-0.05-0.747-0.05c-2.78,0-5.046,2.241-5.046,5c0,0.557,0.099,1.092,0.292,1.602c-1.261-1.111-1.979-2.656-1.979-4.352c0-3.331,2.77-6.041,6.172-6.041c0.438,0,0.886,0.067,1.184,0.123c0.231,0.043,0.441-0.134,0.441-0.366V3.472l4.301,4.3L11.672,12.068z"></path>
                            </svg>
                            <p className="add_text">Share</p>
                        </div>
                    </div>
                </div>

                <div className="Details_right">
                    <div className="slideshow">
                        <Slide ease="ease" ref={slideRef} {...properties}>
                            <div className="each-slide">
                                <div className="slideshow_img" style={{'backgroundImage': `url(${slideImages[0]})`}}>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div className="slideshow_img" style={{'backgroundImage': `url(${slideImages[1]})`}}>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div className="slideshow_img" style={{'backgroundImage': `url(${slideImages[2]})`}}>
                                </div>
                            </div>
                        </Slide>

                        <div className="autoplay-buttons">
                            {/* <button type="button" onClick={back}>Back</button>
                            <button type="button" onClick={next}>Next</button> */}

                            <img alt='img' src={Home1} width="30px" height="30px" className="indicator_img" onClick={() => move(0)} />
                            <img alt='img' src={Home2} width="30px" height="30px" className="indicator_img" onClick={() => move(1)} />
                            <img alt='img' src={Home3} width="30px" height="30px" className="indicator_img" onClick={() => move(2)} />
                        </div>
                    </div>
            
                </div>

            </div>
            


                <div className="Header_Footer">
                    <div className="Header_footer_left">
                        <p className="Header_disabled">*Only for KYC verified</p>
                        <p className="Header_disabled">*Only for accredited investors</p>
                    </div>
                    <div className="Header_footer_right">
                        <p className="Header_disabled">Enquire:</p>
                        <svg class="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M17.051,3.302H2.949c-0.866,0-1.567,0.702-1.567,1.567v10.184c0,0.865,0.701,1.568,1.567,1.568h14.102c0.865,0,1.566-0.703,1.566-1.568V4.869C18.617,4.003,17.916,3.302,17.051,3.302z M17.834,15.053c0,0.434-0.35,0.783-0.783,0.783H2.949c-0.433,0-0.784-0.35-0.784-0.783V4.869c0-0.433,0.351-0.784,0.784-0.784h14.102c0.434,0,0.783,0.351,0.783,0.784V15.053zM15.877,5.362L10,9.179L4.123,5.362C3.941,5.245,3.699,5.296,3.581,5.477C3.463,5.659,3.515,5.901,3.696,6.019L9.61,9.86C9.732,9.939,9.879,9.935,10,9.874c0.121,0.062,0.268,0.065,0.39-0.014l5.915-3.841c0.18-0.118,0.232-0.36,0.115-0.542C16.301,5.296,16.059,5.245,15.877,5.362z"></path>
						</svg>
                        <svg class="svg-icon" viewBox="0 0 20 20">
							<path d="M13.372,1.781H6.628c-0.696,0-1.265,0.569-1.265,1.265v13.91c0,0.695,0.569,1.265,1.265,1.265h6.744c0.695,0,1.265-0.569,1.265-1.265V3.045C14.637,2.35,14.067,1.781,13.372,1.781 M13.794,16.955c0,0.228-0.194,0.421-0.422,0.421H6.628c-0.228,0-0.421-0.193-0.421-0.421v-0.843h7.587V16.955z M13.794,15.269H6.207V4.731h7.587V15.269z M13.794,3.888H6.207V3.045c0-0.228,0.194-0.421,0.421-0.421h6.744c0.228,0,0.422,0.194,0.422,0.421V3.888z"></path>
						</svg>
                    </div>

                </div>
            
            </div>
            )

}

export default CardDetailsHeader;