import React from "react";
// import { Star } from "lucide-react"; // for the star icon

const RestaurantCard = ({ image, name, cuisines, rating, time, delivery }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-3 w-64">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-xl"
      />

      <div className="mt-3 space-y-1">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-gray-800 text-sm">{name}</h2>
          {delivery === "Free" ? (
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
              Free Delivery
            </span>
          ) : (
            <span className="text-xs text-gray-500">${delivery} delivery</span>
          )}
        </div>

        <p className="text-sm text-gray-500">
          {cuisines.join(" • ")}
        </p>

        <div className="flex items-center text-sm text-gray-600 gap-2">
          <span className="flex items-center text-yellow-500">
            {/* <Star size={14} className="fill-yellow-500" /> */}
            <span className="ml-1 text-gray-800 font-medium">{rating}</span>
          </span>
          <span>• {time}</span>
          {delivery !== "Free" && <span>• ${delivery} delivery</span>}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
