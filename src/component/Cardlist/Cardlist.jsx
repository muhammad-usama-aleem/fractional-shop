import React, { Component } from 'react';
import './Cardlist.css';
import {Data} from '../../Data.js';
import Card from '../Card/Card';

class Cardlist extends Component {

    render() {
        return (
            <div className="card-flex">
                {Data.map(data => {
                    return <Card id={data.id} name={data.name} location={data.location} iir={data.iir} yield={data.yield} multiple={data.multiple} period={data.period} loading_exist={data.loading_exist} loading={data.loading} type={data.type} img={data.img}  category={data.category} />
                })}
            </div>
        )
    }
}


export default Cardlist;