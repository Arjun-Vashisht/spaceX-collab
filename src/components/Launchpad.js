import React from "react";

import classes from "./Launchpad.module.css";
import { Link } from "react-router-dom"

const Launchpad = (props) => {
  let empty
  const launchNumber=props.launches.length

if(launchNumber===0){
    empty=<p className={classes.empty}>No launches</p>
}else{
    empty=<div className={classes.launch}>
        <p><Link to={`/launch/${props.launches[0]}`}>Launch 1</Link></p>
        <p><Link to={`/launch/${props.launches[1]}`}>Launch 2</Link></p>
        <p><Link to={`/launch/${props.launches[2]}`}>Launch 3</Link></p>
    </div>
}
  return (
    <div className={classes.item}>
      <img src={props.images} alt=""/>
      <div>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.details}>{props.details}</div>
        <div className={classes.status}>Status : {props.status}</div>
        <div>{empty}</div>
      </div>
    </div>
  );
};

export default Launchpad;
