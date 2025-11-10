import { createSlice, current } from "@reduxjs/toolkit";

const userSlice= createSlice({
    name:"user",
    initialState:{
        userData:null,
        city:null,
        state:null,
        currentAddress:null

    },
    reducers:{
        setUserData:(state,action)=>{
            state.userData=action.payload

        },
         setCity:(state,action)=>{
            state.city=action.payload.city
            state.country =action.payload.country

        },
        setState:(state,action)=>{
            state.state=action.payload.state
            state.country =action.payload.country

        },
        setAddress:(state,action)=>{
            state.currentAddress=action.payload
           

        },
    }
})

export const {setUserData,setCity,setState,setAddress}=userSlice.actions
export default userSlice.reducer