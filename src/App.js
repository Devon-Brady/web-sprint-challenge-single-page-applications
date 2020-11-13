import React from "react";
import { Route } from "react-router-dom";
import Home from './components/Home';
import Pizza from './components/Pizza';

const App = () => {
  return (
    <div>
    <Route exact path='/'>
      <Home/>
    </Route>
    <Route path='/pizza'>
      <Pizza/>
    </Route>
    </div>
    
  );
};
export default App;
