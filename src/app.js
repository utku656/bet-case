import React from "react";
import HomePage from './containers/nesine-homepage/homepage'
import { Context } from './store/context';

const App = () => ( 
    <Context >
    <HomePage/>
    </Context>
);

export default App;