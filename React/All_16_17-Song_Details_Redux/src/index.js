import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {configureStore} from "@reduxjs/toolkit"
import App from './components/App';
import reducers from './Reducers';

ReactDOM.render(
    <Provider store={configureStore({reducer: reducers}) }>
        <App />
    </Provider>, document.querySelector("#root"));
