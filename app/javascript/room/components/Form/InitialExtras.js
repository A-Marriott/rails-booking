import React, { useState } from 'react';
import Button from "../UI/Button";
import ExtrasItem from "../ExtrasList/ExtrasItem";
import "./InitialExtras.css";
import "../ExtrasList/ExtrasList.css";



const InitialExtras = (props) => {
  const [selectedExtras, setSelectedExtras] = useState("");
  
  const onChosenSavedExtrasHandler = (extra) => {
    console.log(selectedExtras);
    setSelectedExtras(extra)
    props.onExtra(extra.name, extra.type, extra.quantity, extra.price);
  }

  return (
    <div className="initial-extras">
      <h3>Your saved extras:</h3>
        <div className="extras-list">
          <ul>
            {props.initialExtras.map ((extra) => (
              <li key={extra.id}> 
              <div className="initial-extra-control">
                <ExtrasItem  className="chosen-extra" name={extra.name} type={extra.type} quantity={extra.quantity} price={extra.price} />
                <Button onClick={onChosenSavedExtrasHandler.bind(this, extra)} id={extra.id} className="button-circle">+</Button>

              </div>
              </li>
            ))}
          </ul>
        </div>
      </div>     

  )
}

export default InitialExtras;