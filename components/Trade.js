import Image from "next/image";
import React from "react";
import background from "../assets/background.png";
import { useRouter } from "next/router";

const Trade = () => {
  const router = useRouter();
  return (
    <div id="trade" className="mt-10 sm:mt-16   ">
      {/* Title */}
      <p className="relative z-10 text-[36px] leading-[54px] text-center  font-bold  px-5 max-w-[676px] md:max-w-[1000px] mx-auto">
        Handeln Sie jetzt ihre THG-Quoten
      </p>

      <div className="relative">
        {/* Background Image */}
        <div className="absolute w-full h-full   flex">
          <Image src={background} className="object-cover w-full" />
        </div>
        <div className=" px-5 max-w-[676px] md:max-w-[1000px] mx-auto">
          {/* Cards */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 mt-16 gap-5">
            {/* Card 1 */}
            <div className="bg-[#f4cd69] min-h-[270px] rounded-[1rem] w-full px-10 py-12">
              <p className="font-bold text-[20px] leading-[28px] pb-5">
                Ich möchte THG Quote verkaufen
              </p>
              <p>
                Sie bringen erneuerbare quotenfähige Kraftstoffe in Verkehr?
                Vermarkten Sie über uns Ihre Quote voll digitalisiert kombiniert
                mit bestem Service.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#2d5d56] rounded-[1rem] w-full px-10 py-12 text-white">
              <p className="font-bold text-[20px] leading-[28px] pb-5">
                Ich möchte THG Quote kaufen
              </p>
              <p>
                Ihr direkter Weg zur Emissionseinsparung. Bei uns haben Sie nie
                wieder Stress beim Handel mit der THG-Quote – bei immer besten
                Preisen.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#b4bec1] rounded-[1rem] w-full px-10 py-12">
              <p className="font-bold text-[20px] leading-[28px] pb-5">
                Ich möchte THG Quote handeln
              </p>
              <p>
                Kaufen und verkaufen Sie Ihre THG-Quoten über den voll digitalen
                Marktplatz von q-bility. Der Markt läuft nie wieder an Ihrem
                Unternehmen vorbei.
              </p>
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="relative z-10 mt-4 md:mt-8 space-y-4 md:space-y-0 px-5 max-w-[676px] md:max-w-[1000px] mx-auto md:flex md:gap-4">
          {/* Button 1 */}
          <div
            className="bg-[#f4cd69] py-2.5 md:py-2 rounded-full text-center  md:w-[25rem] mx-auto shadow-md shadow-gray-400 cursor-pointer    "
            onClick={() => router.push("/marktplatz")}
          >
            <a>Zum Marktplatz anmelden</a>
          </div>
          {/* Button 2 */}
          <div
            className="bg-[#f4cd69] py-2.5 md:py-2  rounded-full text-center  md:w-[25rem] mx-auto shadow-md shadow-gray-400 cursor-pointer"
            onClick={() => router.push("/marktplatz")}
          >
            <a>Testzugang anfordern</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
