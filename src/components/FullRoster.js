import React from "react";
import PlayerAPI from "./api";
import { Link } from "react-router-dom";


const FullRoster = () => (
  <div className="row">

      {PlayerAPI.all().map(p => (
        <div  className="col-lg-4 locdiv">
        <h4>
          <Link to={`/roster/${p.number}`}>
          <div  className="fulldiv">
          <img src={p.img} className="fullimg"/>
          <p>849845</p>
          </div>
          </Link>
{p.h4}</h4>
</div>
      ))}

        </div>
);

export default FullRoster;
