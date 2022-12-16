import React from "react";
import PlaneSvg from "../public/PlaneSvg";

const Contact = () => {
  return (
    <div className="bg-[#b4bec1] " id="contact">
      <div className="  px-5 max-w-[676px] md:max-w-[1000px] mx-auto bg-[#b4bec1] mt-12 text-[#1c1f20] py-16">
        <p className="text-[36px] leading-[54px] font-semibold">
          Kontaktieren Sie uns bei Fragen
        </p>
        <div className="pt-5">
          <form action="" className="space-y-3">
            <div className="">
              <p>Name</p>
              <input
                type="text"
                placeholder="Vorname, Name"
                className="py-2 px-4 rounded-[10px] w-full"
              />
            </div>
            <div className="">
              <p>Geschäftliche E-Mail</p>
              <input
                type="text"
                placeholder="E-mail, Adresse"
                className="py-2 px-4 rounded-[10px] w-full"
              />
            </div>
            <div className="">
              <p> Firma</p>
              <input
                type="text"
                placeholder="Firma, Unternehmen"
                className="py-2 px-4 rounded-[10px] w-full"
              />
            </div>
            <div className="">
              <p> Telefon</p>
              <input
                type="text"
                placeholder="Ihre Telefonnummer für Rückfragen"
                className="py-2 px-4 rounded-[10px] w-full"
              />
            </div>
            <div>
              <p>Nachricht</p>
              <textarea
                type="text"
                placeholder="Ihre Nachricht an q-bility"
                className="w-full rounded-[10px] px-4 py-2 h-[7.5rem]"
              />
            </div>
            {/* Agree */}
            <div className="flex items-start">
              <input type="checkbox" className="mt-[6px] mr-2" />
              <p className="thin">
                Ich erkläre mich mit den
                <span className="text-red-500"> AGB </span> sowie
                <span className="text-red-500">Datenschutzvereinbarungen</span>
                einverstanden.
              </p>
            </div>

            {/* Send */}
            <div className="bg-[#f4cd69] text-center py-2 rounded-full shadow-md shadow-gray-500 flex items-center justify-center md:w-[15rem] gap-2">
              <PlaneSvg className="w-6 h-6 " />
              <p className="text-[17px]">Senden</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
