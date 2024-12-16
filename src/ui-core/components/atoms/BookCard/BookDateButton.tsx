"use client";
import Calendar from "react-calendar";
import { FaCalendarAlt } from "react-icons/fa";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function BookDateButton({ ...props }) {
  const [date, setDate] = useState<Date>(new Date());
  const [calendarOpen, setCalendarOpen] = useState(false);

  return (
    <div
      className="flex gap-2 relative cursor-pointer hover:bg-blue-200 p-3 rounded-lg transition-all duration-300"
      onClick={() => setCalendarOpen(!calendarOpen)}
    >
      <div className="pt-[1px] relative">
        <FaCalendarAlt />
      </div>
      <h4 className="text-blue-600 text-sm font-bold">{props?.title}</h4>
      {calendarOpen && (
        <div className="absolute top-14 -left-2">
          <Calendar value={date} onChange={setDate as any} />
        </div>
      )}
      <div className="flex justify-center items-center pt-[1px]">
        <IoIosArrowForward className={`${calendarOpen === true ? "rotate-90" : "" } transition-all duration-300`} />
      </div>
    </div>
  );
}

export default BookDateButton;
