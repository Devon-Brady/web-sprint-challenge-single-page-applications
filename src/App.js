import React from "react";
import { Route } from "react-router-dom";
import Home from './components/Home';
import Pizza from './components/Pizza';
import {useState} from 'react';

const App = () => {

  const [orders, setOrders]= useState([]);

function makeOrdersList(para){
  const arr = [...orders]
  arr.push(para);
  setOrders(arr);
}

  return (
    <div>
    <Route exact path='/'>
      <Home/>
    </Route>
    <Route path='/pizza'>
      <Pizza orderFunc={makeOrdersList}/>
    </Route>
    </div>
    
  );
};
export default App()
