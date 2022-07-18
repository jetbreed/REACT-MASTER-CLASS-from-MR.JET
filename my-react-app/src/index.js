
import React from 'react';
import ReactDOM from 'react-dom/client';
import myNames from './html1';
import myFruits from './index2';
import myElement from './one_top_level_element';
import form from './form';
import jsx_tenary from './jsx_tenary';
import Form_component from './form_function_component';
import Car from './ClassStateChange';
import Garage from './PassData';
import Garager from './PassData';
import Garage3 from './Logical && Operator Render';
import MMS from './PassObject';
import Football from './event'; 
import Football1 from './Event_PassingAttribute';
import Football2 from './EventButtons_PassingAttribute';
import CarT from './ConditionalRendering';
import Goal from './ConditionalRendering2';
import MyForm from './form2';
import MyForm_Normal from './MyForm_Normal';
import MyForm2 from './Submitting_From';
import MyForm3 from './MultipleInputField';
import TextArea from './TextArea';
import Select from './Select';
import Header from './InlineStyling';
import CamelCaseStyling from './CamelCaseStyling';
import JavaScriptObj_Style from './JavaScriptObj_Style';
import ExternalStyle from './ExternalStyle';
import MyStyleModule from './MyStyleModule';
// >>> Executes

const root = ReactDOM
.createRoot(document.getElementById('root'));

// root.render(myFruits);
// root.render(myNames);
// root.render(<Form_component age='50' name='2' />);
// root.render(jsx_tenary);
// root.render(<Car/>);
// root.render(<MMS />);
// root.render(<Garager/>);
// root.render(<Garage3 />);
// root.render(<Football/>);
// root.render(<Football1/>);
// root.render(<Football2/>);
// root.render(<CarT/>);
// root.render(<Goal />);
// root.render(<MyForm_Normal />);
// root.render(<MyForm2/>);    
// root.render(<MyForm3/>);
// root.render(<TextArea/>);
// root.render(<Select/>)
// root.render(<Header/>);
// root.render(<CamelCaseStyling/>);
// root.render(<JavaScriptObj_Style/>);
// root.render(<ExternalStyle/>);
root.render(<MyStyleModule/>);