import SectionHeader from "../../components/SectionHeader";
import ContactForm from "./components/ContactForm";
import GetInTouch from "./components/GetInTouch";
import { contact } from "@/app/config/contact";

export default function Page() {
  return (
    <div className="container my-20 flex flex-col justify-center items-center gap-10">
      <SectionHeader
        title="CONTACT"
        subtitle={`아이디어, 피드백, 혹은 가벼운 인사도\n 언제든 환영합니다.\n편안하게 메시지를 남겨주세요 :)`}
      />
      <GetInTouch
        email={contact.email}
        socials={contact.socials}
        className="mt-2"
      />
      <ContactForm />
    </div>
  );
}
