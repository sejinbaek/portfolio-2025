import dynamic from "next/dynamic";
import HeroSectionV2 from "../components/HeroSectionV2";

const AboutPage = dynamic(() => import("./about/page"));
const ContactPage = dynamic(() => import("./contact/page"));

export default function HomePage() {
  return (
    <>
      <HeroSectionV2 />
      <div className="flex flex-col lg:gap-40 xl:gap-44 mt-16 md:mt-20 lg:mt-44">
        <AboutPage />
        <ContactPage />
      </div>
    </>
  );
}
