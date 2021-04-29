import React from 'react';
import ExtrasItem from "./ExtrasItem";


import "./ExtrasList.css";

const ExtrasList = (props) => {
  return (  
      <div className="extras-list">
        <ul>
          {props.extras.map ((extra) => (
          <li key={extra.id}> 
            <ExtrasItem name={extra.name} type={extra.type} quantity={extra.quantity} price={extra.price}/>
          </li>
          ))}
        </ul>
      </div>
  )
}

export default ExtrasList;