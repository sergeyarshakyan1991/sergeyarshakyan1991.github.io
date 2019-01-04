import React from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp3 from './Comp3';
import Comp4 from './Comp4';
import Comp5 from './Comp5';
import Comp6 from './Comp6';
import Roster from './Roster';
import FullRoster from './FullRoster';
import Player from './Player';
import Layer5 from '../img/Layer 5.png';
import Layer3 from '../img/Layer 3.png';
import Layer4 from '../img/Layer 4.png';
const Main = () => (

    <main>
      <div className="container">
      <div className="row">
      <div className="col-lg-6"><div className="com1"><img src={Layer3}/><div className="tex1"><b>Fashion</b></div></div>Sed arcu ipsum,convalis quis porttitor biben-dum,convallis non enim.</div>
      <div className="col-lg-6"><div className="com1"><img src={Layer4}/><div className="tex1"><b>Fashion</b></div></div>Sed arcu ipsum,convalis quis porttitor biben-dum,convallis non enim.</div>
      </div>
       <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/roster' component={FullRoster}/>
            <Route path='/roster/:number' component={Player}/>

        </Switch>

        
            <div className="row">
            <div className="col-lg-6"><div className="com1"><img src={Layer3}/><div className="tex1"><b>Fashion</b></div></div>Sed arcu ipsum,convalis quis porttitor biben-dum,convallis non enim.</div>
            <div className="col-lg-6"><div className="com1"><img src={Layer4}/><div className="tex1"><b>Fashion</b></div></div>Sed arcu ipsum,convalis quis porttitor biben-dum,convallis non enim.</div>
            </div>

        </div>

    </main>
);

export default Main;
