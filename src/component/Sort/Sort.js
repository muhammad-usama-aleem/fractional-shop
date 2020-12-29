import React,{Component} from 'react';
import {MdSort} from "react-icons/md";
import './Sort.css';

class Sort extends Component{
	constructor()
	{
		super();
		this.state={
		//state to be added on sort
		active: false
		}
	}
	toggleClass = ()=> {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };
	render()
	{
		return(
			<>
				<div className="sort" onClick={this.toggleClass} >
					<h2>All Properties</h2>
					<p className="sortby">
						Sort By <MdSort style={{marginBottom:"-4px"}}/>
					</p>
				</div>
				<ul
					className={this.state.active ? 'sort-by-list': 'sort-by-list nodis'}>
					<li>Resently Listed</li>
					<li>Closing Soon</li>
					<li>IIR (High-Low)</li>
					<li>Avg. Cash Yield (Low-High)</li>
					<li>Min. Investment (Low-High)</li>
					<li>Min. Hold Period (Low-High)</li>
				</ul>
			</>
	)
	}
}

export default Sort;