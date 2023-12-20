import {useSelector, useDispatch } from "react-redux";
// useSelector - store에 저장되어있는 값을 가져옴
// useDispatch - 해당 액션을 실행
import {decreaseNum, increaseNum} from "../Actions/CountAction";
import React from 'react';

const CounterContainer = () => {

    const count = useSelector(state =>  state.num); //store에서 num가져옴
    const dispatch = useDispatch(); //상황에 맞는 액션사용을 위함

    return (
        <div>
            <h1>COUNTER</h1>
            <label> {count} </label>
            <br />
            <button onClick={() => dispatch(increaseNum())}> + </button>
            <button onClick={() => dispatch(decreaseNum())}> - </button>
        </div>
    );
};

export default CounterContainer;