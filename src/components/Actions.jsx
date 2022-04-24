import React from "react";
import { NavLink } from "react-router-dom";
import { BiPlusCircle } from "react-icons/bi";
const Actions = ({ filter, handleChange }) => {
  const actions = [
    { label: "Accepted", value: "accepted" },
    { label: "Rejected", value: "rejected" },
  ];

  return (
    <div className="flex space-between">
      <div className="flex-1 flex gap-5 justify-center">
        {actions.map((action) => (
          <button
            className={`${
              filter === action.value
                ? "bg-white text-primary border-4 border-primary"
                : "bg-primary text-white"
            } rounded-md px-20 py-2`}
            onClick={() => handleChange(action.value)}
          >
            {action.label}
          </button>
        ))}
      </div>
      <div className="mr-10">
        <NavLink to="add-request" className="bg-primary flex rounded-lg p-1">
          <BiPlusCircle className="w-10 h-auto" />
        </NavLink>
      </div>
    </div>
  );
};

export default Actions;
