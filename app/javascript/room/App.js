import React, { useState } from 'react';
// import './App.css';
import RoomForm from "./components/Form/RoomForm";
import RoomShow from "./components/RoomShow/RoomShow";

import Button from "./components/UI/Button";


const App = () => {

  const [room, setRoom] = useState();
  const [extras, setExtras] = useState([]);
  const [basePrices, setBasePrices] = useState({});

  const INITIAL_EXTRAS = [
    {name: "Extra towels", type: "quantity", quantity: "10", price: "5", id: Math.random().toString()},
    {name: "Breakfast", type: "quantity", quantity: "30", price: "10", id: Math.random().toString()},
    {name: "Spa treatment", type: "quantity", quantity: "30", price: "49", id: Math.random().toString()},
    {name: "Espresso machine", type: "checkbox", quantity: "", price: "5", id: Math.random().toString()}
  ]

  const updateUserData = (inputName, inputPrice, inputDescription, inputCapacity ) => {
    setRoom({ name: inputName, price: inputPrice, id: Math.random().toString(), description: inputDescription, capacity: inputCapacity});
  };

  const updateExtras = (inputExtraName, inputExtraType, inputMaxQuantity, inputExtraPrice) => {
    setExtras((prevState) => {
      return [...prevState, {name: inputExtraName, type: inputExtraType, quantity: inputMaxQuantity, price: inputExtraPrice, id: Math.random().toString()}];
    })
  }

  const updateBasePrices = (inputPrices) => {
    setBasePrices({monday: inputPrices.monday, tuesday: inputPrices.tuesday, wednesday: inputPrices.wednesday, thursday: inputPrices.thursday, friday: inputPrices.friday, saturday: inputPrices.saturday, sunday: inputPrices.sunday});
  }

  const getRooms = () => {
    fetch("http://localhost:3000/api/v1/rooms").then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
    });
  }


  return (
    <div className="app mt-2">
      <RoomForm onUserData={updateUserData} onExtra={updateExtras} extras={extras} initialExtras={INITIAL_EXTRAS} onBasePrices={updateBasePrices} />
      {room && <RoomShow room={room} extras={extras} basePrices={basePrices} />}
      <Button onClick={getRooms}>GET ROOMS</Button>
    </div>
  );
}

export default App;
