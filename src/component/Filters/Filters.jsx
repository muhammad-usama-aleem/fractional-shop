import React, { Component} from "react";
import "./Filters.css";
import {IoMdArrowDropdown} from "react-icons/io";


import {propertyType,iir,avgCashYield,minInvestment,minHoldPeriod,location} from './FiltersData';


class Filters extends Component {


constructor()
{
	super();
	this.state={
		propertyType:false,
		iir:false,
		avgCashYield:false,
		minInvestment:false,
		minHoldPeriod:false,
		location:false,
		country:""
	}
}

toggleProperyType=()=>{
	this.setState(function(prevState,props){
		return {iir:false,avgCashYield:false,minInvestment:false,minHoldPeriod:false,location:false,propertyType:!prevState.propertyType}
	})
}

toggleIir=()=>{
     this.setState(function(prevState,props){
		return {iir:!prevState.iir,avgCashYield:false,minInvestment:false,minHoldPeriod:false,location:false,propertyType:false}
	})
}
toggleAvgCashYield=()=>{
	this.setState(function(prevState,props){
      return {iir:false,avgCashYield:!prevState.avgCashYield,minInvestment:false,minHoldPeriod:false,location:false,propertyType:false}
	})
}
toggleMinInvestment=()=>{
	this.setState(function(prevState,props){
		  return {iir:false,avgCashYield:false,minInvestment:!prevState.minInvestment,minHoldPeriod:false,location:false,propertyType:false}
	})
}
toggleHoldPeriod=()=>{
	this.setState(function(prevState,props){

  return {iir:false,avgCashYield:false,minInvestment:false,minHoldPeriod:!prevState.minHoldPeriod,location:false,propertyType:false}
	})
}
toggleLocation=()=>{
	this.setState(function(prevState,props){

		  return {iir:false,avgCashYield:false,minInvestment:false,minHoldPeriod:false,location:!prevState.location,propertyType:false}
	})
}

setCountry=(event)=>{
	console.log(event.target.value)
	this.setState({country:event.target.value})

}


render()
{
return(
	<>
     <div className="filters-div" >
        <input type="text" name="search-property" placeholder={` Search by Property name,Developer or Loaction`} />
        <p className={this.state.propertyType? "background-yellow":"dummy"} onClick={this.toggleProperyType}>Property Type <IoMdArrowDropdown/>
        </p>
		<p className={this.state.iir? "  background-yellow":"dummy"} onClick={this.toggleIir}>IIR <IoMdArrowDropdown/>
        </p>
				<p className={this.state.avgCashYield? "background-yellow":"dummy"} onClick={this.toggleAvgCashYield}>Avg.Cash Yield<IoMdArrowDropdown/></p>
		<p className={this.state.minInvestment? "background-yellow":"dummy"} onClick={this.toggleMinInvestment}>Min. Investment<IoMdArrowDropdown/></p>
		<p  className={this.state.minHoldPeriod? "background-yellow":"dummy"} onClick={this.toggleHoldPeriod}>Min. Hold Period<IoMdArrowDropdown/></p>
		<p className={this.state.location? "background-yellow":"dummy"}  onClick={this.toggleLocation}>Location<IoMdArrowDropdown/></p>
     </div>
     
     	<div className="filters-options-div">
     	{
     	this.state.propertyType?
     	propertyType.map(opt=>{
     		return <p key={Math.random()*1000}>{opt} </p>
     	})
     	:
     	this.state.iir?
     	iir.map(opt=>{
     		return <p key={Math.random()*1000}>{opt}</p>
     	})
     	:
     	this.state.avgCashYield?
     	avgCashYield.map(opt=>{
     		return <p key={Math.random()*1000}>{opt}</p>
     	})
     	:
     	this.state.minInvestment?
     	minInvestment.map(opt=>{
     		return <p key={Math.random()*1000}>{opt}</p>
     	})

     	:
     	this.state.minHoldPeriod?
     	minHoldPeriod.map(opt=>{
     		return <p key={Math.random()*1000}>{opt}</p>
     	})
     	:
     	this.state.location?
     	<div className="location-options">
     	<p>All</p>
     	<select style={{border:"#d2cfcf solid 1px"}}    value={this.state.country} onChange={this.setCountry}>{location.countries.map(count=>{return<option  key={Math.random()*2000} >{count}</option>})}</select>
     	<select style={{border:"#d2cfcf solid 1px"}} >{

     		this.state.country?
     		    location.countries.map((count)=>{
     		  	console.log(this.state.country)
     		  	if(this.state.country===count)
     		  	{   console.log(count,"hello")
     		  		return Object.entries(location.states).map(arr=>{
                       if(arr[0]===count)
                       {
                         return  arr[1].map(sta=>{return <option key={Math.random()*2000}>{sta}</option>})
                       }
     		  		})
     		  	}

     		  })     		
     		:null

     	}</select>
     	</div>
     	:
     	null
        }
     	</div>
     </>
	)
}
}

export default Filters;












