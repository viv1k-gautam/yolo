import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { serverUrl } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setMyShopData } from "../redux/ownerSlice";
const RestaurantInfo = () => {
    const navigate =useNavigate();
    const {userData,currentAddress}=useSelector((state)=>state.user)
    const { myShopData } = useSelector(state => state.owner);
    const { city,state } = useSelector(state=> state.user);
    const [name,setName] =useState(myShopData?.name ||"")
    const [address,setAddress]=useState(myShopData?.address ||currentAddress)
    const [frontendImage ,setFrontendImage]=useState(myShopData?.image || null)
    const [backendImage ,setBackendImage]=useState(null)
    const imageRef =useRef()
    const dispatch =useDispatch()
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    description: "",
    phone: "",
    email: "",
    address: "",
    openingTime: "",
    closingTime: "",
    deliveryFee: "",
  });

    const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImage =(e)=>{
    const file =e.target.files[0]
    setBackendImage(file)
    setFrontendImage(URL.createObjectURL(file))
  }
 
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const formData= new FormData()
      formData.append("name",name)
      formData.append("city",city)
      formData.append("state",state)
      formData.append("address",address)
      if(backendImage){
        formData.append("image",backendImage)

      }
      const result =await axios.post(`${serverUrl}/api/shop/restaurant-info`,formData,
        {withCredentials:true})
        dispatch(setMyShopData(result.data))
console.log(result.data)
      
    } catch (error) {
      console.log(error)
    }
  };

  return (

    
     <div className="min-h-screen p-6 bg-orange-50">
      <h1
        className="text-3xl font-bold flex px-20 mt-10 items-center shadow-xs py-2"
      >
        {isEditing ? "Edit Restaurant Information" : "Add Restaurant Information"}
      </h1>

      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-8 mt-10">
        <form onSubmit={handleSubmit}>
          {/* Name + Cuisine */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Restaurant Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter restaurant name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3
                 py-2 focus:outline-none focus:ring focus:ring-orange-200"
          
                
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
               Shop Image
              </label>
              <input
                type="file"
                accept="image/*"
                placeholder="choose image"
                onChange={handleImage}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-orange-200"
              />
              {frontendImage && <div className="mt-4">
                <img src={frontendImage} alt="" className="w-full h-48 object-cover
                rounded-lg border"/>
              </div>}
              
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Describe your restaurant"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-orange-200"
              rows="3"
            ></textarea>
          </div>

          {/* Phone + Email */}
          {/* <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-orange-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="restaurant@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-orange-200"
              />
            </div>
          </div> */}

          {/* Address */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Full restaurant address"
              value={address}
                onChange={(e)=>setAddress(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-orange-200"
            />
          </div>

          {/* Opening/Closing Time + Delivery Fee
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Opening Time
              </label>
              <input
                type="time"
                name="openingTime"
                value={formData.openingTime}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-orange-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Closing Time
              </label>
              <input
                type="time"
                name="closingTime"
                value={formData.closingTime}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-orange-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Delivery Fee
              </label>
              <input
                type="number"
                step="0.01"
                name="deliveryFee"
                placeholder="2.99"
                value={formData.deliveryFee}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-orange-200"
              />
            </div>
          </div> */}

          <button
            type="submit"
            className={`  ${ 
              isEditing ? " bg-green-600 hover:bg-green-700" : "bg-orange-500 hover:bg-orange-600"
            } text-white font-semibold px-6 py-2 rounded-lg transition cursor-pointer`}
          >
            {isEditing ? "Update Restaurant Info" : "Save Restaurant Info"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RestaurantInfo;
