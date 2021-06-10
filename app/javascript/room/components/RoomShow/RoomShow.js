import React from 'react';
import Card from "../UI/Card";
import ExtrasList from "../ExtrasList/ExtrasList";


const RoomShow = (props) => {
  return (
    <Card>
      <h4>Room information</h4>
      {!props.room && <p>Room information has not been added</p>}
      {props.room && <div>
        <h4>{props.room.name}</h4>
        <p>{`${props.room.capacity} persons (${props.room.price}£/night)`}</p>
        <h4>Description:</h4>
        <p>{props.room.description}</p>
      </div>}

      <h4>Base Prices (£/night)</h4>
      {!props.basePrices.monday && <p>Prices have not been added</p>}
      {props.basePrices.monday &&
        <ul>
          <li>{`monday: ${props.basePrices.monday} `}</li>
          <li>{`tuesday: ${props.basePrices.tuesday} `}</li>
          <li>{`wednesday: ${props.basePrices.wednesday} `}</li>
          <li>{`thursday: ${props.basePrices.thursday} `}</li>
          <li>{`friday: ${props.basePrices.friday} `}</li>
          <li>{`saturday: ${props.basePrices.saturday} `}</li>
          <li>{`sunday: ${props.basePrices.sunday} `}</li>
        </ul>}

      <h4>Extras:</h4>
      {props.extras.length === 0 && <p>Extras have not been added</p>}
      {props.extras.length > 0 && <ExtrasList extras={props.extras} />}
    </Card>
  )
}

export default RoomShow;