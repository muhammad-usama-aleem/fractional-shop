import React from 'react';
import './Card.css';
import logo from '../../images/logo.png';

const Card = (props) => {
    var loading = props.loading.toString();
        return (
            <div className="card-h">
                <div className="card-thumbnail">
                    <img className ="card-main-image" alt={props.img} src={props.img} />
                    
                    

                <div className="tag tag-primary card-tag">
                {props.category}
                </div>
                <div className="tag tag-primary card-tag card-left-tag">
                {props.type}
                </div>
                    
                <div  className="tag  card-tag card-right-tag">
                <svg className="heart-top-left" width="20" height="20" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.32595 11.2559L5.56198 10.556C2.84698 8.094 1.05398 6.47002 1.05398 4.47702C1.0501 4.0951 1.12245 3.71623 1.26681 3.36264C1.41118 3.00904 1.62467 2.68776 1.89474 2.41769C2.16481 2.14762 2.48603 1.93425 2.83963 1.78988C3.19322 1.64552 3.57209 1.57311 3.95401 1.57699C4.40501 1.58027 4.85002 1.68009 5.25918 1.86984C5.66834 2.05958 6.0321 2.33482 6.32595 2.67697C6.61981 2.33482 6.98357 2.05958 7.39273 1.86984C7.80189 1.68009 8.24696 1.58027 8.69796 1.57699C9.07984 1.57325 9.45863 1.64571 9.81216 1.79013C10.1657 1.93454 10.4869 2.14802 10.7569 2.41806C11.027 2.68809 11.2404 3.00922 11.3849 3.36276C11.5293 3.71629 11.6017 4.09514 11.598 4.47702C11.598 6.47002 9.80599 8.094 7.08999 10.561L6.32595 11.2559Z" fill="none"/>
                        </svg>            
                </div>

                    

                </div>
                <div className="card-body">
                    <div className="card-text-header">
                <img className = "card-logo" alt="logo" src={logo} width="45px" height="45px" />
                <div className="card_title">
                    <h5 className="box-title">{props.name}</h5>
                    <small className="small-title">{props.location}</small>
                
                </div>            
                </div>
                    <div className="break"></div>
                    <div className="last-section">
                    <div className="target-cash-text">
                        <small className="target">
                        Target IRR
                        </small>
                        <small>
                        Net Cash Yield
                        </small>
                    </div>
                    <div className="target-cash-num">
                        <p className="number"> {props.iir} </p>
                        <p className="number"> {props.yield} </p>
                    </div>
                    <div className="target-cash-text">
                        <small className="target">
                        Target Equity Multiple
                        </small>
                        <small>
                        Hold Period
                        </small>
                    </div>
                    <div className="target-cash-num">
                        <p className="number"> {props.multiple} </p>
                        <p className="number"> {props.period} </p>
                    </div>
                    </div>
                    
                    <div className="meter orange nostripes">
                        
                        <span className="progress_bar" style={{width: loading, height: "10px", marginTop: "-5px"}}></span>
                        
                    </div>
                </div>
            </div>
        )
}

export default Card;