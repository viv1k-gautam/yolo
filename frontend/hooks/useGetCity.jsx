import React, { useEffect } from 'react'
import axios from 'axios'
import { serverUrl } from '../src/App'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from '../src/redux/user.slice';
import { setCity } from '../src/redux/user.slice';

function useGetCity() {
    const dispatch=useDispatch()
    const {userData}=useSelector(state=>state.user)
    const apikey=import.meta.env.VITE_GEOAPIKEY
useEffect(()=>{
    navigator.geolocation.getCurrentPosition(async (position)=>{
        // console.log(position)
        const latitude=position.coords.latitude
        const longitude=position.coords.longitude

        const result =await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${apikey}`)
        // console.log(result.data.results[0].city)
        // console.log(result.data.results[0].country)
        // dispatch(setCity(result?.data?.results[0].city))
       
        const city = result?.data?.results[0]?.city;
const country = result?.data?.results[0]?.country;

dispatch(setCity({ city, country }));


    })
},[userData])
}

export default useGetCity
