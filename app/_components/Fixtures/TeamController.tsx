import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { format, addDays, subDays } from "date-fns";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"; // Adjust import based on your file structure
import { Calendar } from "@/components/ui/calendar"; // Adjust import based on your file structure

const TeamController = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  const handleDateSelect = (day: Date | undefined) => {
    if (day) {
      setSelectedDate(day);
    }
  };

  // Handlers for arrow button clicks
  const handlePrevDay = () => {
    if (selectedDate) {
      setSelectedDate(subDays(selectedDate, 1));
    }
  };

  const handleNextDay = () => {
    if (selectedDate) {
      setSelectedDate(addDays(selectedDate, 1));
    }
  };

  return (
    <div className="w-full p-2 bg-[#161616] rounded-sm flex justify-between items-center border border-transparent hover:border-white hover:border-opacity-30 transition-all duration-300">
      {/* Left Arrow Button */}
      <button
        className="w-10 h-10 hover:text-white text-[#1e1e1d] transition-all duration-300 bg-[#6bff6b] hover:bg-transparent border border-transparent hover:border-[#6bff6b] rounded-sm flex justify-center items-center"
        onClick={handlePrevDay}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      {/* Date Display with Date Picker */}
      <div className="flex-grow h-9 text-center">
        <Popover>
          <PopoverTrigger asChild>
            <p className="text-[#f7f7f6] text-lg font-semibold uppercase leading-9 cursor-pointer">
              {selectedDate
                ? format(selectedDate, "EEEE dd MMMM")
                : "Pick a date"}
            </p>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Right Arrow Button */}
      <button
        className="hover:text-white text-[#1e1e1d] duration-300 w-10 h-10 transition-all bg-[#6bff6b] hover:bg-transparent border border-transparent hover:border-[#6bff6b] rounded-sm flex justify-center items-center"
        onClick={handleNextDay}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default TeamController;
