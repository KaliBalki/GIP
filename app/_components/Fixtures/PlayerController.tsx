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

const PlayerController = () => {
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
    <div className="w-72 p-2 bg-[#161616] rounded-sm flex justify-between items-center border border-transparent hover:border-white hover:border-opacity-30 transition-all duration-300">
      {/* Left Arrow Button */}
      <button
        className="w-10 h-8 hover:text-white text-[#1e1e1d] transition-all duration-300 bg-[#7c51ae] hover:bg-transparent border border-transparent hover:border-[#7c51ae] rounded-sm flex justify-center items-center"
        onClick={handlePrevDay}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      {/* Date Display with Date Picker */}
      <div className="flex-grow h-9 text-center">
        <Popover>
          <PopoverTrigger asChild>
            <p className="text-[#f7f7f6] md:text-lg text-sm md:font-semibold  uppercase leading-9 cursor-pointer">
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

      <button
        className="hover:text-white text-[#1e1e1d] duration-300 w-10 h-8 transition-all bg-[#fb6209] hover:bg-transparent border border-transparent hover:border-[#fb6209] rounded-sm flex justify-center items-center"
        onClick={handleNextDay}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default PlayerController;
