import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const impressum = () => {
  return (
    <div>
      <Navbar />
      {/* Title */}
      <div className="text-[#1c1f20]   px-5 max-w-[676px] md:max-w-[1000px] mx-auto">
        <div className="">
          <p className="text-[30px] md:text-[44px]   md:leading-[70px]  leading-[50px] font-semibold pt-12">
            Impressum
          </p>
          <p className="text-[18px] leading-[28px] pt-6 font-semibold">
            q-bility - der digitale B2B Marketplace für den THG Quotenhandel
          </p>
        </div>
        <div className="">
          <p className="text-[30px] md:text-[44px]  md:leading-[70px]  leading-[50px] font-semibold pt-16">
            Name und Anschrift
          </p>

          <p className="thin pt-6">
            <span className="font-bold">q-bility GmbH</span>
            <br /> Brünnlfeldstraße 3 <br /> 85302 Gerolsbach Alberzell
          </p>
          <p className="thin pt-6">
            Sitz der Gesellschaft: Gerolsbach <br /> Amtsgericht Ingolstadt HRB:
            10765 <br />
            Umsatzsteueridentifikationsnummer: DE353592618
          </p>
        </div>

        <div className="">
          <p className="text-[30px] md:text-[44px]   leading-[50px] font-semibold pt-16">
            Geschäftsführung
          </p>
          <p className="thin pt-6  pb-12">
            Dominik Trisl <br /> Dennis Horn <br /> Jan Röstel
          </p>
        </div>
      </div>
      {/* Interested? */}
      <div className="bg-[#f9e5b3] pb-16 ">
        <p className="text-[26px] md:text-[33px]   leading-[40px] font-semibold pt-16 px-5 max-w-[676px]   mx-auto text-center md:max-w-[34rem]">
          q-bility ist der digitale B2B <br />
          Marketplace für den THG Quotenhandel.
        </p>
        <div className="bg-[#2d5d56] w-[10rem] mx-auto text-center text-white py-2 rounded-full text-[13px] mt-5 shadow-md shadow-gray-500">
          <p>INTERESSIERT?</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default impressum;
