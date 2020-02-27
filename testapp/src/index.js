import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Childform from "./components/childComp";
import Addform from "./components/addComp"
import Newcomp from "./components/newComp";
import Addnew from "./components/addNew";

ReactDOM.render(<Addnew></Addnew>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
