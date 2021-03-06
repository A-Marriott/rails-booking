import React, { useState } from 'react';
import RoomForm from "./components/Form/RoomForm";
import RoomShow from "./components/RoomShow/RoomShow";
import ExtrasForm from './components/Form/ExtrasForm';
import PriceForm from './components/Form/PriceForm';
import Button from "./components/UI/Button";

import "./App.css";


const App = () => {

  const [room, setRoom] = useState();
  const [extras, setExtras] = useState([]);
  const [basePrices, setBasePrices] = useState({});

  const [editRoomInfo, setEditRoomInfo] = useState(true);
  const [editPriceInfo, setEditPriceInfo] = useState(false);
  const [editExtrasInfo, setEditExtrasInfo] = useState(false);

  const INITIAL_EXTRAS = [
    {name: "Extra towels", type: "quantity", quantity: "10", price: "5", id: Math.random().toString()},
    {name: "Breakfast", type: "quantity", quantity: "30", price: "10", id: Math.random().toString()},
    {name: "Spa treatment", type: "quantity", quantity: "30", price: "49", id: Math.random().toString()},
    {name: "Espresso machine", type: "checkbox", quantity: "", price: "5", id: Math.random().toString()}
  ]

  const updateUserData = (inputName, inputPrice, inputDescription, inputCapacity ) => {
    const roomSet = { name: inputName, price: inputPrice, id: Math.random().toString(), description: inputDescription, capacity: inputCapacity};
    setRoom(roomSet);

    // POST request with new room from the form
    const roomPost = { name: inputName, base_price: inputPrice, description: inputDescription, capacity: inputCapacity};
    postRoom(roomPost);
    setEditPriceInfo(true);
    setEditRoomInfo(false);
  };

  const updateExtras = (inputExtraName, inputExtraType, inputMaxQuantity, inputExtraPrice) => {
    setExtras((prevState) => {
      return [...prevState, {name: inputExtraName, type: inputExtraType, quantity: inputMaxQuantity, price: inputExtraPrice, id: Math.random().toString()}];
    })
  }

  const updateBasePrices = (inputPrices) => {
    setBasePrices({monday: inputPrices.monday, tuesday: inputPrices.tuesday, wednesday: inputPrices.wednesday, thursday: inputPrices.thursday, friday: inputPrices.friday, saturday: inputPrices.saturday, sunday: inputPrices.sunday});
    setEditExtrasInfo(true);
    setEditPriceInfo(false);
  }

  const getRooms = () => {
    fetch("http://localhost:3000/api/v1/rooms").then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
    });
  }


  const postRoom = (room) => {
    fetch("http://localhost:3000/api/v1/rooms", {
      method: "POST",
      body: JSON.stringify(room),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
    });
  }

  const editRoomHandler = () => {
    setEditRoomInfo(true)
    setEditExtrasInfo(false)
    setEditPriceInfo(false)
  }
  
  const editPriceHandler = () => {
    setEditRoomInfo(false)
    setEditExtrasInfo(false)
    setEditPriceInfo(true)
  }

  const editExtrasHandler = () => {
    setEditRoomInfo(false)
    setEditExtrasInfo(true)
    setEditPriceInfo(false)
  }


  const backToBasicHandler = () => {
    setEditRoomInfo(true);
    setEditPriceInfo(false);
  }

  const backToPricesHandler = () => {
    setEditPriceInfo(true);
    setEditExtrasInfo(false);
  }


  return (
    <div className="app">
      <div className="room-menu d-flex justify-content-center mb-4">
        <div className={`room-menu-tab ${editRoomInfo ? "tab-bg": ""}`}>
          <p>Basic information</p>
        </div>
        <div className={`room-menu-tab ${editPriceInfo ? "tab-bg": ""}`}>
          <p>Prices</p>
        </div>
        <div className={`room-menu-tab ${editExtrasInfo ? "tab-bg": ""}`}>
          <p>Extras</p>
        </div>
      </div>
      <div className="form-content">
        {editRoomInfo && <RoomForm onUserData={updateUserData}  onBasePrices={updateBasePrices} />}
        {editPriceInfo && <PriceForm onBasePrices={updateBasePrices} onBackToBasic={backToBasicHandler}/>}
        {editExtrasInfo && <ExtrasForm onExtra={updateExtras} extras={extras} initialExtras={INITIAL_EXTRAS} onBackToPrices={backToPricesHandler}/>}
      </div>

      {/* <RoomShow room={room} extras={extras} basePrices={basePrices} /> */}

      {/* <Button onClick={getRooms}>GET ROOMS</Button> */}
    </div>
  );
}

export default App;
