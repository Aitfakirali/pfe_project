import React from "react";
import { BiCalendar, BiBell } from "react-icons/bi";
import { DiAptana } from "react-icons/di";
const Header = () => {
  return (
    <div className="p-5 flex justify-between border-b border-black items-end">
      <h1 className="font-semibold text-2xl">Absences and vacations</h1>
      <div className="flex gap-4">
          <button>
              <BiCalendar className="h-8 w-8 text-gray-600"/>
          </button>
          <button>
              <BiBell className="h-8 w-8 text-gray-600"/>
          </button>
          <button>
              <DiAptana className="h-8 w-8 text-gray-600"/>
          </button>
      </div>
    </div>
  );
};

export default Header;
