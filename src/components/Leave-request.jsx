import React from "react";
import { requests } from "../constants";
import { Actions } from "../components";
const LeaveRequest = () => {
  const [filter, setFilter] = React.useState("accepted");

  return (
    <div className="mt-10 space-y-20">
      <Actions filter={filter} handleChange={setFilter} />
      <div className="space-y-10 max-w-screen-md mx-auto ">
        {requests.map((request) => (
          <div className="flex items-center gap-5 rounded-xl p-4 border border-primary">
            <div className="">
              <img src={`/icons/${request.avatar}`} alt="icon" />
            </div>
            <span className="flex-1 text-gray-800">
              <h2 className="font-bold ">{request.employee}</h2>
              <p>{request.function}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaveRequest;
