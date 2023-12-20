import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux"; 
//redux-toolkit으로 인하여 redux의 createStore는 사용하지 않는 것을 가리킴
import {Provider} from "react-redux";
import counterReducer from './Reducer/Counter';

const store = createStore(counterReducer);
ReactDOM.render( // store를 넘겨주는 모습
    <Provider store = {store}>
    <App />
    </Provider>,
  document.getElementById('root')
);