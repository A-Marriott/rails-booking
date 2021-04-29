import React from 'react';
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./Modal.css";


const Modal = (props) => {

  
  return (
    <div>
      <div className="modal-background-layer" onClick={props.onClose}></div>
      <Card className="error-modal">
        <h2>{props.title}</h2>
        <p>{props.message}</p>
        <footer className="error-modal-footer">
          <Button onClick={props.onClose}>Close</Button>
        </footer>
      </Card>
    </div>
  )
}

export default Modal;