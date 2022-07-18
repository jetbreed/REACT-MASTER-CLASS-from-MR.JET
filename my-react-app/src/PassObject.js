import React from "react";

function NIIT(props) {
  return (
      <>
        <h2>Students offer { props.sem1.subject1 }!</h2>
        <h2>Students offer { props.sem1.subject2 }!</h2>
        <h2>Students offer { props.sem1.subject3 }!</h2>
        <h2>Students offer { props.sem1.subject4 } 
        for {props.sem2.price4}!</h2>
      </>
      );
}
function MMS() {
    // This is the object properties definition
    const sem1Subjects = 
    {
        subject1:"Android", subject2:"JSF", 
        subject3:"Hibernate", subject4:"Spring"
    };
    const sem2Subjects = 
    {
        pro:"Android1", subject2:"JSF1", 
        subject3:"Hibernate1", price4:"220,000"
    };

     return (
    <>
      <h1>What courses do you offer?</h1>
      <NIIT sem1={sem1Subjects} sem2={sem2Subjects} />
    </>
  );
}

export default MMS;