import React from "react";

const MenuDropDown = () => {
  return (
    <div className=" mb-12">
      <ul className=" flex flex-col items-center text-[#55595c] gap-4">
        <li className="hover:text-white duration-[150ms] ease-out bg-white hover:bg-[#55595c] text-center text-[18px] w-[80%] py-2 rounded-full  ">
          <a href="#">Warum q-bility?</a>
        </li>
        <li className="hover:text-white duration-[150ms] ease-out bg-white hover:bg-[#55595c] text-center text-[18px] w-[80%] py-2 rounded-full  ">
          <a>Jetzt Quoten handeln</a>
        </li>
        <li className="hover:text-white duration-[150ms] ease-out bg-white hover:bg-[#55595c] text-center text-[18px] w-[80%] py-2 rounded-full  ">
          <a>Team</a>
        </li>
        <li className="hover:text-white duration-[150ms] ease-out bg-white hover:bg-[#55595c] text-center text-[18px] w-[80%] py-2 rounded-full  ">
          <a>Wissen</a>
        </li>
        <li className="hover:text-white duration-[150ms] ease-out bg-white hover:bg-[#55595c] text-center text-[18px] w-[80%] py-2 rounded-full  ">
          <a>Kontakt</a>
        </li>
        <li className="hover:text-white duration-[150ms] ease-out bg-white hover:bg-[#55595c] text-center text-[18px] w-[80%] py-2 rounded-full  ">
          <a>Login</a>
        </li>
      </ul>
    </div>
  );
};

export default MenuDropDown;
