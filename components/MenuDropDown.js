import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const MenuDropDown = () => {
  const { t: translate } = useTranslation("dropdown");
  return (
    <div className=" mb-12">
      <ul className=" flex flex-col items-center text-[#55595c] gap-4">
        <li className="hover:text-white duration-[150ms] ease-out bg-white hover:bg-[#55595c] text-center text-[18px] w-[80%] py-2 rounded-full  ">
          {translate("a1")}
        </li>
        <li className="hover:text-white duration-[150ms] ease-out bg-white hover:bg-[#55595c] text-center text-[18px] w-[80%] py-2 rounded-full  ">
          {translate("a2")}
        </li>
        <li className="hover:text-white duration-[150ms] ease-out bg-white hover:bg-[#55595c] text-center text-[18px] w-[80%] py-2 rounded-full  ">
          {translate("a3")}
        </li>
        <li className="hover:text-white duration-[150ms] ease-out bg-white hover:bg-[#55595c] text-center text-[18px] w-[80%] py-2 rounded-full  ">
          {translate("a4")}
        </li>
        <li className="hover:text-white duration-[150ms] ease-out bg-white hover:bg-[#55595c] text-center text-[18px] w-[80%] py-2 rounded-full  ">
          {translate("a5")}
        </li>
        <Link
          href="/login"
          className="hover:text-white duration-[150ms] ease-out bg-white hover:bg-[#55595c] text-center text-[18px] w-[80%] py-2 rounded-full  "
        >
          <li>{translate("a6")}</li>
        </Link>
      </ul>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "navbar",
        "footer",
        "imprint",
        "dropdown",
      ])),
    },
  };
}

export default MenuDropDown;
