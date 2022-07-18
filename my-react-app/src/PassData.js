import React from "react";

function Car(props) {
  return (
      <>
        <h2>I am a { props.brand }!</h2>
        <h2>I am a { props.maker }!</h2>
      </>
      );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" maker="JetBreed" />
    </>
  );
}

export default Garage;