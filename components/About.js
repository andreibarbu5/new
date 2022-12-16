import React from "react";
import Graph from "../components/Graph";

const About = () => {
  return (
    <section className="" id="about">
      <div className=" bg-[#f9e5b3] pt-[4.8rem] mt-[4.8rem]">
        <div className="about flex flex-col md:flex-row  max-w-[676px] md:max-w-[1000px] mx-auto ">
          {/* Why q-bility? */}
          <div className="md:w-1/2 px-5">
            <h2 className="text-[36px] leading-[54px] font-['SemiBold']   mb-5">
              Warum q-bility?
            </h2>
            <p className="leading-[24px]">
              Wir heben Chancen für beide Seiten, denn keine Tonne CO2 soll
              verloren gehen. Keine zähen G’schichten mehr. Langwierige
              Preisverhandlungen und Telefonate gehören ab sofort der
              Vergangenheit an. Lassen Sie uns besprechen, wie wir Ihr Geschäft
              als Käufer oder Verkäufer beschleunigen können.
            </p>
          </div>
          {/* Advantages */}
          <div className="flex flex-col md:flex-row md:w-1/2 px-5 gap-x-4 ">
            {/* Left */}
            <div className="space-y-8 pt-8 md:pt-2 md:space-y-10">
              <div className="">
                <p className="font-bold text-[26px] leading-[35px]">
                  Transparent
                </p>
                <p>Bei Preisen und Prozessen</p>
              </div>
              <div className="">
                <p className="font-bold text-[26px] leading-[35px]">
                  Innovativ
                </p>
                <p>Marktplatz mit Deal per Click</p>
              </div>
              <div className="">
                <p className="font-bold text-[26px] leading-[35px]">
                  Effizient
                </p>
                <p>Vertragsschluss & Abwicklung schnell und einfach</p>
              </div>
            </div>
            {/* Right */}
            <div className="md:space-y-10 space-y-8    pt-8 md:pt-2">
              <div className="lg:whitespace-nowrap">
                <p className="font-bold text-[26px] leading-[35px]">Digital</p>
                <p>Zeitgemäßer Handelsplatz</p>
              </div>
              <div className="">
                <p className="font-bold text-[26px] leading-[35px]">
                  Zuverlässig
                </p>
                <p>Geprüfte Handelspartner für sichere Deals</p>
              </div>
            </div>
          </div>
        </div>

        {/* Graph */}
        <Graph />
      </div>
    </section>
  );
};

export default About;
