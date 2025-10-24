import dynamic from "next/dynamic";
import HeroSection from "../components/HeroSection";
import { pageMetadata } from "../lib/seo";

const AboutPage = dynamic(() => import("./about/page"));
const ContactPage = dynamic(() => import("./contact/page"));

export const generateMetadata = () =>
  pageMetadata({
    title: "Home",
    description: "홈",
    path: "/",
    image: "/og/thumbnail.webp",
    type: "website",
  });

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
