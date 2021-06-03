import React from 'react';
// import "./Button.css";

const Button = (props) => {
  const classes = props.className;
  
  return (
    <button className={classes} type={props.type || "button"} onClick={props.onClick}>{props.children}</button>
  )
}

export default Button;