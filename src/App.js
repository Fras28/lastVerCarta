import React from 'react';
import {  Route,Switch} from 'react-router-dom';
import Landing from "./Components/Landing/LandingPage.jsx"
import './App.css';
import { Cafeteria } from './Components/Cafeteria/Cafeteria.jsx';
import { Foot } from './Components/Footer/Footer.jsx';
import { Comidas } from './Components/Comidas/Comidas';
import { Bag } from './Components/myBag/myBag.jsx';
import { MyFoot } from './Components/myFoot/MyFooter.jsx';

function App() {
  return (
    <div className="App">
<Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/Cafeteria" component={Cafeteria}/>
          <Route exact path="/Comidas" component={Comidas}/>
          <Route exact path="/Bag" component={Bag}/>
</Switch>
  <Foot/>
  <MyFoot/>
    </div>
  );
}

export default App;
