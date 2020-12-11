import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {increment,decrement,incrementByAmount} from '../store/counterSlice'


 function Counter() {

    let [value, setValue] = useState(0);

    const dispatch = useDispatch();

    const counter = useSelector((state)=>{
        return state.counter.count
    });

    return (
        <div>

        <div>Counter: {counter}</div>
        <div>
            <button onClick={()=>{
                dispatch(increment())
            }} >Increment</button>
            <br/>
             <br/>
             <button onClick={()=>{
                dispatch(decrement())
            }} >Decrement</button>
             <br/>
             <br/>
             <input type="text" onChange={(e)=>{
                setValue(e.target.value)
            }} />
            
            <br/>
            <br/>
            <button onClick={()=>{
                dispatch(incrementByAmount(Number(value)))
            }} >IncrementBy Input</button>
        </div>
        </div>
    )
}

export default Counter
