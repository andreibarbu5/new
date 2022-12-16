import Image from "next/image";
import React from "react";
import mountains from "../assets/mountains.jpeg";

const Mountains = () => {
  return (
    <div className="px-5 max-w-[676px] md:max-w-[1000px] mx-auto pt-20">
      <div className="md:flex">
        <p className="font-semibold text-[26px] leading-[34px] md:w-1/2">
          Die Berge sind unsere Leidenschaft und wir geben alles auf dem Weg zum
          Gipfel.
        </p>
        <div className="md:pl-4 md:w-1/2">
          <p className="pt-6 md:pt-0 text-[16px]   font-thin leading-[25px]">
            Das q-bility Team: ein dynamisches und junges Start-Up mit
            mehrjähriger Erfahrung in der Energie- und Kraftstoffbranche mit
            hoher Expertise im Bereich der Quotenvermarktung.
          </p>
          <p className="pt-6 text-[16px] leading-[25px]">
            Unser Ziel ist es den Quotenhandel zu revolutionieren, indem wir
            einen effizienten, digitalen und transparenten Marktplatz schaffen.
          </p>
        </div>
      </div>
      <div className="pt-12">
        <Image src={mountains} className="rounded-[2rem]" />
      </div>
    </div>
  );
};

export default Mountains;
