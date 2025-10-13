import SectionHeader from "../../components/SectionHeader";
import ContactForm from "./components/ContactForm";
import GetInTouch from "./components/GetInTouch";
import { contact } from "@/app/config/site";

export default function Page() {
  return (
    <div className="my-20 flex flex-col justify-center items-center gap-10 md:gap-20">
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
            md:flex-row md:justify-center
            gap-14 md:gap-20 lg:gap-32"
      >
        <GetInTouch email={contact.email} />
        <ContactForm />
      </div>
    </div>
  );
}
