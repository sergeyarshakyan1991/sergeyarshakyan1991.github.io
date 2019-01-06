import React from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Roster from './Roster';
import FullRoster from './FullRoster';
import Player from './Player';
import PlayerAPI from "./api";
import Layer5 from '../img/Layer 5.png';
import Layer3 from '../img/Layer 3.png';
import Layer4 from '../img/Layer 4.png';
const Main = () => (

    <main>
      <div className="container">
      <div className="row">
      <div className="col-lg-6">
      <div className="com1">
      <img src={Layer3}/>
      <div className="tex1"><b>Fashion</b></div>
      </div>

      </div>
      <div className="col-lg-6">
      <div className="com1">
      <img src={Layer4}/>
      <div className="tex1"><b>Fashion</b></div>
      </div>Sed arcu ipsum,convalis quis porttitor biben-dum,convallis non enim.
      </div>
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
