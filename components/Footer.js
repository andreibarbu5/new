import React from "react";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <div className="bg-[#1c1f20]">
      <div className="px-5 max-w-[676px] md:max-w-[1000px] mx-auto md:flex items-center md:items-start justify-between text-white pt-6">
        <div className="w-full">
          <ul className="  md:space-y-4 pb-10">
            <li className="cursor-pointer">
              <a href="#">Home</a>
            </li>
            <li className="cursor-pointer">
              <a>AGB</a>
            </li>
            <li className="cursor-pointer">
              <a>Datenschutz</a>
            </li>

            <li
              onClick={() => router.push("/impressum")}
              className="cursor-pointer"
            >
              <a>Impressum</a>
            </li>
          </ul>
          <p className="pb-8 ">
            © q-bility 2022. <br /> Alle Rechte vorbehalten.
          </p>
        </div>
        <div className="w-full pb-6 ">
          <p>
            Anschrift <br /> q-bility GmbH <br /> Brünnlfeldstraße 3 <br />
            85302 Gerolsbach
          </p>
        </div>
        <div className="w-full">
          <p className="text-[20px] leading-[28px] text-[#f4cd69] pt-2 md:pt-0  pb-8 font-semibold">
            q-bility – der digitale B2B Marketplace für den THG Quotenhandel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
