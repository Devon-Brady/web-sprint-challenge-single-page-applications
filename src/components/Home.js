import React from 'react';
import {Link} from 'react-router-dom';



export default function Home(){

    return (
        <div>
            <h1> Lambda's Pizza Palace</h1>
            <Link to="/">Home</Link>
          <Link to="/pizza">Order</Link>
          


        </div>
    );
}