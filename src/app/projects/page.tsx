"use client";
import SectionHeader from "../../components/SectionHeader";

export default function ProjectPage() {
  return (
    <section className="flex flex-col md:gap-14 lg:gap-16 mx-auto w-full">
      <SectionHeader
        title="PROJECTS"
        subtitle={
          <>
            지금까지 진행한 프로젝트로, <br className="block md:hidden" />
            기능 구현에서 UX와 인터랙션까지 성장해 <br />온 과정을 담았습니다.
          </>
        }
      />
    </section>
  );
}
