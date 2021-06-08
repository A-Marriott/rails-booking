import React, { useState } from 'react';
import './RoomForm.css';
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import Card from '../UI/Card';


const RoomForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputAge] = useState("");
  const [inputCapacity, setInputCapacity] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [error, setError] = useState();
  
  const nameChangedHandler = (event) => {
    setInputName(event.target.value);
  }

  const priceChangedHandler = (event) => {
    setInputAge(event.target.value);
  }

  const capacityChangedHandler = (event) => {
    setInputCapacity(event.target.value);
  }

  const descriptionChangedHandler = (event) => {
    setInputDescription(event.target.value);
  }


  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputName.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name (non-empty value)"
      });
      return;
    }
    if (inputDescription.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid description (non-empty value)"
      });
      return;
    }
    if (+inputPrice < 0) {
      setError({
        title: "Invalid price",
        message: "Please enter a valid price"
      });
      return;
    }
    props.onUserData(inputName, inputPrice, inputDescription, inputCapacity);
    // setInputName("");
    // setInputAge("");
    // setInputDescription("");
    // setInputCapacity("");
  }


  const closeModalHandler = () => {
    setError(null);
  }



  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div>
          <h6 className="text-blue-grey">STEP ONE</h6>
          <h3 className="mb-4">Basic details</h3>
            <div className="form-group">
              <label htmlFor="name">Room name</label>
              <input type="text" id="name" className="form-control" onChange={nameChangedHandler} value={inputName} />
            </div>
            <div className="flex-control">
              <div className="form-group">
                <label htmlFor="price">Price (£/night)</label>
                <input type="number" id="price" className="form-control" onChange={priceChangedHandler} value={inputPrice} min="0" />
              </div>
              <div className="form-group">
                <label htmlFor="capacity">Capacity</label>
                <input type="number" id="capacity" className="form-control" onChange={capacityChangedHandler} value={inputCapacity} min="1" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="description">Room description</label>
              <textarea id="description" className="form-control" onChange={descriptionChangedHandler} value={inputDescription} />
            </div>
          
          <div className="d-flex justify-content-end modal-footer">
            <Button type="submit" className="btn btn-primary">Save and continue</Button>
          </div>
        </div>
      </form>
           
      {error && <Modal title={error.title} message={error.message} onClose={closeModalHandler} />}      
    </div>
  )
}

export default RoomForm;