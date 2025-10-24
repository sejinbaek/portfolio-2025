import SectionHeader from "../../components/SectionHeader";
import { pageMetadata } from "../../lib/seo";
import { contact } from "@/app/config/site";
import ContactForm from "./components/ContactForm";
import GetInTouch from "./components/GetInTouch";

export const generateMetadata = () =>
  pageMetadata({
    title: "Contact",
    description: "연락하기",
    path: "/contact",
    image: "/og/contact.webp",
    type: "website",
  });

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-16 md:gap-20">
      <SectionHeader
        title="CONTACT"
        subtitle={
          <>
            아이디어, 피드백, 혹은 가벼운 인사도{" "}
            <br className="block md:hidden" />
            언제든 환영합니다.
            <br />
            편안하게 메시지를 남겨주세요 :)
          </>
        }
      />
      <div
        className="w-full max-w-5xl mx-auto
            flex flex-col items-center
            lg:flex-row lg:justify-center
            gap-20 md:gap-28 lg:gap-32"
      >
        <GetInTouch email={contact.email} />
        <ContactForm />
      </div>
    </div>
  );
}
