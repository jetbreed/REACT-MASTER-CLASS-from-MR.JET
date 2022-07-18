import React from "react";

function Garage2(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your 			
          garage.
        </h2>
      }
    </>
  );
}
const cars = ['Ford', 'BMW'];

function Garage3(){
    return <Garage2 cars={cars} />
}

export default Garage3;