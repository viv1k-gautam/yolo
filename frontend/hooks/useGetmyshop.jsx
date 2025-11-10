import React, { useEffect } from 'react'
import axios from 'axios'
import { serverUrl } from '../src/App'
import { useDispatch } from 'react-redux'
import { setMyShopData } from '../src/redux/ownerSlice';

function useGetMyshop() {
    const dispatch=useDispatch()
useEffect(()=>{
    const fetchShop=async ()=>{
        try {
            const result =await axios.get(`${serverUrl}/api/shop/get-my`,
            {withCredentials:true})
             dispatch(setMyShopData(result.data))
            // console.log(result)
        } catch (error) {
            console.log(error)
            
        }
    }
    fetchShop()
},[])
}

export default useGetMyshop
