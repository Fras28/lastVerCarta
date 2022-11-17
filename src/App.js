import React from 'react';
import {  Route,Switch} from 'react-router-dom';
import Landing from "./Components/Landing/LandingPage.jsx"
import './App.css';
import { Nav } from './Components/Nav/Nav.jsx';
import { Cafeteria } from './Components/Cafeteria/Cafeteria.jsx';
import { Foot } from './Components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
<Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/Cafeteria" component={Cafeteria}/>
</Switch>
  <Foot/>
    </div>
  );
}

export default App;
