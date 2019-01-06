import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullRoster from './FullRoster'
import Player from './Player'
import Layer5 from '../img/Layer 5.png';
// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
  <Switch>
    <Route exact path='/' component={FullRoster}/>
    <Route path='/roster/:number' component={Player}/>
  </Switch>
)

export default Roster;
