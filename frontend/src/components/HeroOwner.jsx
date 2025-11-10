import React, { useEffect, useState } from 'react'
import { BiGridAlt } from "react-icons/bi";

const HeroOwner = () => {
    const [active,setActive]=useState("Overview")
    const [hasRestaurant,setHasRestaurant]=useState(null)
    
    const links = [
    "Overview",
    "Restaurant Info",
    "Menu Management",
    "Orders",
    "Analytics",
  ];

  //  useEffect(() => {
  //   // simulate backend check
  //   async function checkRestaurant() {
  //     try {
  //       const token = localStorage.getItem("token");
  //       const res = await fetch("http://localhost:8000/api/owner/status", {
  //         headers: { Authorization: `Bearer ${token}` },
  //       });
  //       const data = await res.json();
  //       setHasRestaurant(data.hasRestaurant);

  //       // Decide which tab to open first
  //       if (data.hasRestaurant) {
  //         setActive("Overview");
  //       } else {
  //         setActive("Restaurant Info");
  //       }
  //     } catch (err) {
  //       console.error("Error checking restaurant:", err);
  //       // default fallback
  //       setActive("Restaurant Info");
  //     }
  //   }

  //   checkRestaurant();
  // }, []);


  return (
   

    <div className="w-[90%] md:w-[80%] lg:w-[70%] h-auto md:h-[60px] flex flex-col md:flex-row items-center justify-center bg-white shadow-2xl rounded-3xl p-2 md:p-0 mx-auto">
      <div className="flex flex-wrap justify-center items-center text-base md:text-[15px] font-semibold gap-3 md:gap-x-15 text-xs gap-x-2">
        {links.map((link) => (
          <a
          
            key={link}
            href="#"
            onClick={() => setActive(link)}
            className={`px-3 md:px-4 py-2 rounded-4xl transition-all duration-200 ${
              active === link
                ? "bg-orange-500 text-white shadow-md"
                : "text-black hover:bg-orange-100"
            }`}
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  )
}

export default HeroOwner
