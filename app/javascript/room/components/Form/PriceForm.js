import React, { useState } from 'react';
import Button from "../UI/Button";
import Card from "../UI/Card";

import "./PriceForm.css";



const PriceForm = (props) => {


  const [inputPrices, setInputPrices]= useState({monday: "", tuesday: "", wednesday: "", thursday: "", saturday: "", sunday: ""});
  const [buttonShow, setButtonShow] = useState(true);

  const priceUpdateHandler = (event) => {
    setInputPrices((prevState) => {
      return {
      ...prevState,
      [event.target.id]: event.target.value
      }})
  }

  
  const pricesAddHandler = () => {
    props.onBasePrices(inputPrices);
    setButtonShow(false);
  }
  
  const generatePriceInputs = () => {

    const createDayInput = (day) => {
      let dayCapitalized =  day[0].toUpperCase() + day.slice(1).toLowerCase();
      return (
      <div className="form-group row" key={day} >
        <label htmlFor={day} className="col-sm-2 col-form-label price-label">{dayCapitalized}</label>
        <div className="col-sm-2">
          <input type="number" id={day} onChange={priceUpdateHandler} className="form-control price-input" min="0" disabled={!buttonShow}/>
        </div>
      </div>
      )
    }

    const week = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    const dayInputs = [];

    week.forEach((day) => {
      dayInputs.push(createDayInput(day));
    });

    return dayInputs;
  }

  const generateSeasonalPriceInputs = () => {

    const createDayInput = (day) => {
      let dayCapitalized =  day[0].toUpperCase() + day.slice(1).toLowerCase();
      return (
      <div className="form-group row" key={day} >
        <label htmlFor={day} className="col-sm-2 col-form-label price-label">{dayCapitalized}</label>
        <div className="col-sm-2">
          <input type="number" id={day} onChange={priceUpdateHandler} className="form-control price-input" min="0"/>
        </div>
      </div>
      )
    }

    const week = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    const dayInputs = [];

    week.forEach((day) => {
      dayInputs.push(createDayInput(day));
    });

    return dayInputs;
  }

  return (
    <div>
      <div className="d-flex">
        <div className="base-prices">
          <h6 className="text-blue-grey">STEP TWO</h6>
          <h3 className="mb-4">Prices</h3>
          {generatePriceInputs()}
        </div>

        {/* <div>
          <h5>Seasonal prices</h5>
          {generateSeasonalPriceInputs()}
          <div className="form-group">
            <label htmlFor="date-from">From</label>
            <input id="date-from" type="date" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="date-to">To</label>
            <input id="date-to" type="date" className="form-control" />
          </div>
        </div> */}

      </div>

      {/* {buttonShow && <Button onClick={pricesAddHandler}>Set seasonal prices</Button>} */}
      <div className="d-flex justify-content-between modal-footer">
        <Button className="btn btn-dark" onClick={props.onBackToBasic}>Back</Button>
        <Button className="btn btn-primary" onClick={pricesAddHandler}>Save and continue</Button>
      </div>
    </div>
  )
}

export default PriceForm;