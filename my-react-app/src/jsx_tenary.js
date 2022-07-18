import React from 'react';
import ReactDOM from 'react-dom/client';

const x = 5;
const jsx_tenary = 
<h1>
    {
        (x) < 10 ? 
        "if statements  as  tenary  expressions" 
        : "Goodbye"
    }
</h1>;

export default jsx_tenary;