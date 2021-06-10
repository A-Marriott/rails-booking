import React from 'react';
import "./Card.css";

const Card = (props) => {

  const classes = props.className + " react-card";

  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

export default Card;