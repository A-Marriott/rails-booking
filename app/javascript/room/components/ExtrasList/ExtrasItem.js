import React from 'react';
import "./ExtrasItem.css";

const ExtrasItem = (props) => {
  let content = "";

  if (props.type === "checkbox") {
    content = (
      <div class="form-check form-check-inline">
        <input className="form-check-input m-0" type="checkbox" />
      </div>)
  }

  if (props.type === "quantity") {
    
    const quantityArray = Array.from(Array(+props.quantity + 1).keys());
    
    content = (
      <select className="form-control extras-item-select">{quantityArray.map ((num) => <option key={num} value={num}>{num}</option>) }</select>
    )
  }

  let classes = props.className;

  return (
    <div className={`${classes} user-item`}>
      <p>{`${props.name} (${props.price}£)`}</p>
      {content}
    </div>
  )
}

export default ExtrasItem;