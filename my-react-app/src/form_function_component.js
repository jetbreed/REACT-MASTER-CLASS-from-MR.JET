import React from "react";

// This is a component (not ordinary variable)
// function Form_component(department){
const form_component = (department) => {
return (
        <>
        <h2>WEB FORM</h2>
        Name: <input value={5+5} type='text'/><br/><br/>
        Name: <input value={4} type='text'/><br/><br/>
        Name: <input value={department.name + 3} type='text'/><br/><br/>
        Name: <input type='text'/><br/><br/>
        Name: <input type='text'/><br/><br/>
        Name: <input type='text'/><br/><br/>
        Name: <input type='text'/><br/><br/>
        <input type='submit' value='SUBMIT'/>
        <br/><br/>
        </>
    );
}
export default form_component;