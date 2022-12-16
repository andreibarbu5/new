import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Trade from "../components/Trade";
import Team from "../components/Team";
import Mountains from "../components/Mountains";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Buttons from "../components/Buttons";

import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

function Home() {
  const router = useRouter();
  const { locale, locales, push } = useRouter();
  const handleClick = (l) => {
    push("/", undefined, { locale: l });
  };

  const { t: translate } = useTranslation("navbar");
  return (
    <div className="">
      {/* <div className="">
        <select
          id="language"
          onChange={(l) => handleClick(l.currentTarget.value)}
          value={locale}
        >
          {locales?.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
        <h1>{locale}</h1>

        <h2>{translate("trade")}</h2>
      </div> */}

      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* About + Chart */}
      <About />
      {/* Trade your GHG*/}
      <Trade />
      {/* Team */}
      <Team />
      {/* Mountains */}
      <Mountains />
      {/* FAQ Dropdown Questions */}
      <Faq />
      {/* Contact Us */}
      <Contact />
      {/* Footer */}
      <Footer />
      {/* Absolute Buttons */}
      <Buttons />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["navbar"])),
    },
  };
}

export default Home;
