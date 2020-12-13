import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

// This code for reduxToolKit AsyncThunck
export const counterUpdate = createAsyncThunk(
    "counter/counterUpdate",
    async ()=>{
        const response = await fetch("http://localhost:3000/api/updatecounter")
        const data = await response.json();
        console.log(data)
        return data;
    }
);


export const counterSlice =  createSlice({
    name: "Counter",
    initialState:{
        count: 0,
        isLoading:false,
        error:"",
    },
    reducers:{
        increment: (state)=>{
            state.count++
        },
        decrement: (state)=>{
            state.count--
        },
        incrementByAmount: (state,action)=>{
            state.count+=action.payload
        }
    },
    extraReducers:{
        [counterUpdate.fulfilled]:(state, action)=>{
            state.count+=action.payload
            state.isLoading = false;
            console.log(state.count)
        },
        [counterUpdate.pending]:(state)=>{
            state.isLoading = true;
            
        },
        [counterUpdate.rejected]:(state)=>{
            state.isLoading=false;
            state.error="Error in update Counter"
        },
    }
});

export const {increment,decrement,incrementByAmount}  = counterSlice.actions
export default counterSlice.reducer

