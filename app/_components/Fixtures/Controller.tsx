import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Controller = () => {
  return (
    <div className="w-full flex justify-center items-center mt-4">
      <div className="w-96 p-2 bg-[#1d1d1c] rounded-sm flex justify-between items-center">
        <button className="w-10 h-10 hover:text-white text-[#1e1e1d] transition-all duration-300 bg-[#7c51ae] hover:bg-transparent border border-transparent hover:border-[#7c51ae] rounded-sm flex justify-center items-center">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className="flex-grow h-9 text-center">
          <div className="text-[#f7f7f6] text-lg font-normal leading-9">
            today
          </div>
        </div>
        <button className="w-10 h-10 hover:text-white text-[#1e1e1d] transition-all duration-300 bg-[#fb6209] hover:bg-transparent border border-transparent hover:border-[#fb6209] rounded-sm flex justify-center items-center">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Controller;
