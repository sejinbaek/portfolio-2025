import HeroSection from "../components/HeroSection";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutPage />
      <div className="mt-12 md:mt-20 lg:mt-44">
        <ContactPage />
      </div>
    </>
  );
}
