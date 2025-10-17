import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("../components/HeroSection"));
const AboutPage = dynamic(() => import("./about/page"));
const ContactPage = dynamic(() => import("./contact/page"));

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="flex flex-col gap-20 lg:gap-40 xl:gap-44 mt-16 md:mt-20 lg:mt-44">
        <AboutPage />
        <ContactPage />
      </div>
    </>
  );
}
