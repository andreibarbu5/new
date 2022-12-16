import React from "react";
import FingerSvg from "../public/FingerSvg";
import ArrowUp from "../public/ArrowUp";

const Buttons = () => {
  return (
    <div>
      {/* FingerPrint */}
      <div className="fixed left-12 bottom-12 bg-[#f6d787] hover:bg-[#f7c74d] duration-150 ease-out p-3 rounded-full cursor-pointer">
        <FingerSvg className="w-[45px] h-[45px] text-white " />
      </div>

      <a href="#">
        <ArrowUp className="w-16 h-16 fixed right-12 bottom-12 text-[#f6d787] cursor-pointer" />
      </a>
    </div>
  );
};

export default Buttons;
