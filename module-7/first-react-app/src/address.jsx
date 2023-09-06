import React from 'react';

function Address(props) {
  return (
    <div className="address">
      <p>{props.name}</p>
      <p>{props.street}</p>
      <p>{props.city}, {props.state} {props.zip}</p>
      <p>{props.country}</p>
    </div>
  );
}

export default Address;
