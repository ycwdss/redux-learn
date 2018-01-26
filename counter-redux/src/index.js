import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import './assert/css/index.css'
import App from './container/app';
import reducer from './reducer/index'
import {increment, decrement, incrementIfOdd, incrementAsync} from './actions';
const store=createStore(reducer,applyMiddleware(thunk));

const boundIncrement = (id) => store.dispatch(increment(id));
const boundDecrement = (id, value) => store.dispatch(decrement(id, value));
const boundIncrementIfOdd = (id, value) => store.dispatch(incrementIfOdd(id, value));
const boundIncrementAsync = (id) => store.dispatch(incrementAsync(id));
const addCounter = panelName => store.dispatch({type: 'ADD_COUNTER', panelName});

/*const store=createStore(reducer,applyMiddleware(thunk));
const addCounter = panelName => store.dispatch({type: 'ADD_COUNTER', panelName});
const increment = (id) => store.dispatch({type: 'INCREMENT', id});
const decrement = (id) => store.dispatch({type: 'DECREMENT', id});
const incrementIfOdd=(id,value)=>{
    if( value%2 === 0 ) return;
    increment(id)
}
const incrementAsync=(id)=>{
    setTimeout(()=>{
        increment(id)
    },2000)
}*/

function render() {
    ReactDOM.render(
        <App
            action={{boundIncrement,boundDecrement,boundIncrementIfOdd,boundIncrementAsync}}
            {...{state: store.getState(), addCounter}}
        />,
        document.getElementById('root')
    );

}

render();

store.subscribe(render)

