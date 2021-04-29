import React from 'react';
import Card from "../UI/Card";
import ExtrasList from "../ExtrasList/ExtrasList";


const RoomShow = (props) => {
  return (
    <Card>
      <h1>{props.room.name}</h1>
      <p>{`${props.room.capacity} persons (${props.room.price}£/night)`}</p>
      <h3>Description:</h3>
      <p>{props.room.description}</p>
      <h3>Base Prices (£/night)</h3>
        <ul>
          <li>{`monday: ${props.basePrices.monday} `}</li>
          <li>{`tuesday: ${props.basePrices.tuesday} `}</li>
          <li>{`wednesday: ${props.basePrices.wednesday} `}</li>
          <li>{`thursday: ${props.basePrices.thursday} `}</li>
          <li>{`friday: ${props.basePrices.friday} `}</li>
          <li>{`saturday: ${props.basePrices.saturday} `}</li>
          <li>{`sunday: ${props.basePrices.sunday} `}</li>
        </ul>
      <h3>Extras:</h3>
      {props.extras.length > 0 && <ExtrasList extras={props.extras} />}
    </Card>
  )
}

export default RoomShow;