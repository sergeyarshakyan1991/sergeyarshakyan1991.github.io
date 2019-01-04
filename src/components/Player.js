import React from "react";
import PlayerAPI from "./api";
import Layer5 from '../img/Layer 5.png';
import { Link } from "react-router-dom";

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Player = props => {
  const player = PlayerAPI.get(parseInt(props.match.params.number));
  if (!player) {
    return <div>Sorry, but the player was not found</div>;
  }
  return (
    <div className="playerdiv">
      <img src={player.img} className="imgdiv"/>
      <div className="divtext">
      <h1 className="divh1">sodales tellus interdum fermentum nulla.Aliquam vitae arcu condimentum,<br/>consectetur diam sed,ultriqes urna.
       <br/><Link to="/"><button>Back</button></Link></h1>
       </div>
  </div>
  );
};

export default Player;
