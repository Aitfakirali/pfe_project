import React, { useState } from "react";

const Absence = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="space-y-6 p-5 max-w-screen-sm mx-auto">
      <p className="font-medium text-lg">you have 2 abecences in total</p>
      <div className="w-full">
        <span className="sr-only">start date</span>
        <input
          type="date"
          className="rounded-lg p-2 w-full outline-none border-primary border-2"
          value={startDate}
          onChange={({ target }) => setStartDate(target.value)}
        />
      </div>
      <div>
        <span className="sr-only">end date</span>
        <input
          type="date"
          className="rounded-lg p-2 w-full outline-none border-primary  border-2"
          value={endDate}
          onChange={({ target }) => setEndDate(target.value)}
        />
      </div>
    </div>
  );
};

export default Absence;
