import React, { useState } from "react";

import FaqElement from "./FaqElement";
const Faq = () => {
  const [faq, setFaq] = useState([
    {
      question: "Für was steht eigentlich q-bility?",
      answer:
        "q wie kann es anders sein steht für Quote und bility für mobility oder ability. Such’s dir aus! ",
      open: false,
    },
    {
      question: "Welche Kraftstoffe sind quotenfähig?",
      answer: "Fahrstrom, Bio-LNG, Biomethan, Biogas, Wasserstoff, E-Fuels",
      open: false,
    },
    {
      question: "Wer kann über q-bility Quoten handeln?",
      answer:
        "Betreiber von E-Ladesäulen, Biomethantankstellenbetreiber, Bio-LNG Produzenten, Händler (per Vollmacht), Quotenverpflichtete, Broker, Pooling-Dienstleister, Wasserstoffproduzenten ",
      open: false,
    },
    {
      question: "Was sind die relevanten Gesetze?",
      answer:
        "RED II, Biokraftstoffnachhaltigkeitsverordnung, BImSchV, BImSchG ",
      open: false,
    },
    {
      question: "Was sind die relevanten Behörden?",
      answer:
        "Hauptzollamt Frankfurt (Oder) HZA, Umweltbundesamt UBA, Deutsche Emissionshandelsstelle DEHSt",
      open: false,
    },
  ]);

  const toggle = (index) => {
    setFaq(
      faq.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };
  return (
    <div
      id="faq"
      className="  px-5 max-w-[676px] md:max-w-[1000px] mx-auto pt-24 md:flex"
    >
      {/* Title */}
      <p className="text-[36px] leading-[54px] font-semibold pb-8 md:w-[30%] md:-mt-2 ">
        Wissen
      </p>
      {/* FAQ */}
      <div className="border-b pb-1 border-black md:w-[70%]">
        {faq.map((faq, index, key) => (
          <FaqElement
            question={faq.question}
            answer={faq.answer}
            open={faq.open}
            index={index}
            key={index}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
