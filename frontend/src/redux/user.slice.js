import { createSlice } from "@reduxjs/toolkit";

const userSlice= createSlice({
    name:"user",
    initialState:{
        userData:null,
        city:null

    },
    reducers:{
        setUserData:(state,action)=>{
            state.userData=action.payload

        },
         setCity:(state,action)=>{
            state.city=action.payload.city
            state.country =action.payload.country

        },
    }
})

export const {setUserData,setCity}=userSlice.actions
export default userSlice.reducer