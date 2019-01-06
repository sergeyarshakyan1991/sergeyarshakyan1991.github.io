import React from "react";
import PlayerAPI from "./api";
import { Link } from "react-router-dom";

const FullRoster = () => (
  <div className="row">
      {PlayerAPI.all().map(p => (
  <div  className="fulldiv col-lg-4">
          <Link to={`/roster/${p.number}`}>
          <img src={p.img} className="fullimg"/>
          </Link>
          <h5>{p.h5}</h5>
          <h6>{p.h6} <a>{p.a}</a></h6>
   </div>
      ))}
   </div>
);
export default FullRoster;
