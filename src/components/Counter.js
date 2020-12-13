import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {increment,decrement,incrementByAmount,counterUpdate} from '../store/counterSlice'


 function Counter() {

    let [value, setValue] = useState(0);

    const dispatch = useDispatch();

    const {counter , isLoading } = useSelector((state)=>{
        return {
            counter:state.counter.count,
            isLoading:state.counter.isLoading
        }
    });

    if(isLoading) return <div>Loading</div>

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
        <div>
            {/* this button is used for asyncThunck function and for extraReducers */}
        <button onClick={()=>{
                dispatch(counterUpdate())
            }} >Increment From Server</button>
        </div>
        </div>
    )
}

export default Counter
