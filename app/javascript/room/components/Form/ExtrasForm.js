import React, { useState } from 'react';
import Button from "../UI/Button";
import "./ExtrasForm.css";
import "./RoomForm.css";
import Card from '../UI/Card';
import ExtrasList from "../ExtrasList/ExtrasList";
import InitialExtras from './InitialExtras';


const Extras = (props) => {
  const [inputExtraName, setInputExtraName] = useState("");
  const [inputExtraType, setInputExtraType] = useState("default");
  const [showInputQuantity, setShowInputQuantity] = useState(false);
  const [inputMaxQuantity, setInputMaxQuantity] = useState("");
  const [inputExtraPrice, setInputExtraPrice] = useState("");

  const inputExtraNameChangedHandler = (event) => {
    setInputExtraName(event.target.value);
  }

  const inputExtraPriceChangedHandler = (event) => {
    setInputExtraPrice(event.target.value);
  }

  const onNewExtraHandler = (event) => {
    event.preventDefault();
    if (inputExtraName.trim().length === 0 || inputExtraPrice.trim().length === 0 || inputExtraType === "default" || (inputMaxQuantity.trim().length === 0 && inputExtraType === "quantity")) {
      return;
    }
    props.onExtra(inputExtraName, inputExtraType, inputMaxQuantity, inputExtraPrice);
    setInputExtraName("");
    setInputExtraPrice("");
    setInputExtraType("default");
    setShowInputQuantity(false);
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onNewExtraHandler(event);
    }
  }

  const inputExtraTypeChangedHandler = (event) => {
    if (event.target.value === "checkbox") {
      setInputExtraType("checkbox");
      setShowInputQuantity(false);
      return;
    }
    if (event.target.value === "quantity") {
      setInputExtraType("quantity");
      setShowInputQuantity(true);
      return;
    }
    if (event.target.value === "default") {
      setShowInputQuantity(false);
      return;
    }
  }

  const inputMaxQuantityChangedHandler = (event) => {
    setInputMaxQuantity(event.target.value);
  }

  const extrasContent = (
    <div className="w-25">
      <h3>Extras for this room</h3>
      <ExtrasList extras={props.extras} />
    </div>
  ) 

  return (
    <Card>
      <h3 className="text-center">Add optional extras</h3>

      <div className="extras-all">

        <div className="left-extras-all">
          
          <div className="extras-form">
            <div className="extras-controls">
              <div className="form-group">
                <label htmlFor="extra-name">Name</label>
                <input type="text" id="extra-name" className="form-control" onChange={inputExtraNameChangedHandler}  value={inputExtraName} onKeyPress={handleKeyPress} />
              </div>
              <div className="form-group">
                <label htmlFor="extra-price">Price (£)</label>
                <input type="number" min="0" id="extra-price" className="form-control" onChange={inputExtraPriceChangedHandler}  value={inputExtraPrice} onKeyPress={handleKeyPress} />
              </div>
              <div className="form-group">
                <label htmlFor="quantity-type">Quantity type</label>
                <select onChange={inputExtraTypeChangedHandler} id="quantity-type" className="form-control" value={inputExtraType}>
                  <option value="default"> -- select an option -- </option>
                  <option value="checkbox">Check-box</option>
                  <option value="quantity">Quantity</option>
                </select>
              </div>
              {showInputQuantity && (
              <div className="form-group">
                <label htmlFor="max-quantity">Max quantity</label>
                <input type="number" id="max-quantity" min="1" className="form-control" onChange={inputMaxQuantityChangedHandler} />
              </div>)}            
            </div>

          <Button onClick={onNewExtraHandler} type="submit"  className="button-circle button-extra">+</Button>
          </div>

          <InitialExtras initialExtras={props.initialExtras} onExtra={props.onExtra}/>
        </div>

        { props.extras.length > 0 && extrasContent}    
        </div> 
       
    </Card>
  )
}

export default Extras;