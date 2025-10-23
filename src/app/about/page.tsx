import Image from "next/image";
import { contact, skills, aboutSections } from "../config/site";
import SectionHeader from "../../components/SectionHeader";
import LinkButton from "./components/LinkButton";
import SkillBadge from "./components/SkillBadge";
import Accordion from "./components/Accordion";
import { pageMetadata } from "../../lib/seo";

export const generateMetadata = () =>
  pageMetadata({
    title: "About",
    description: "진행한 프로젝트 모음",
    path: "/about",
    image: "/og/about-og.png",
    type: "website",
  });

export default function AboutPage() {
  const labelMap: Record<string, string> = {
    instagram: "인스타 보러가기",
    blog: "블로그 보러가기",
    github: "깃허브 보러가기",
  };

  // 유튜브 제외
  const socialsForAbout = contact.socials.filter(
    (social) => social.name !== "youtube"
  );

  return (
    <section className="flex flex-col md:gap-14 lg:gap-16 mx-auto w-full">
      <div className="relative">
        {/* 상단 장식 */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -translate-y-1/2 rotate-180 px-2 md:px-10 lg:px-32 dark:invert dark:brightness-100"
        >
          <Image
            src="../about/about-decor.svg"
            alt=""
            width={50}
            height={50}
            className="w-12 h-12 md:w-16 md:h-16 lg:w-28 lg:h-28"
          />
        </div>
        <SectionHeader
          title="ABOUT"
          className="[&>p]:leading-6 md:[&>p]:leading-9 lg:[&>p]:leading-12"
          subtitle={
            <>
              안녕하세요, <br className="block md:hidden" />
              프론트엔드 개발자 백세진입니다.
              <br />
              저는 작은 디테일 속에서 특별한 경험을{" "}
              <br className="block md:hidden" />
              만들어내는 것을 좋아합니다.
              <br />
              애니메이션과 인터랙션으로 웹에 즐거움을{" "}
              <br className="block md:hidden" />
              더하고,
              <br className="hidden md:block" /> 끊임없이 배우며 한 걸음씩{" "}
              <br className="block md:hidden" />
              성장해 나가고 있습니다.
            </>
          }
        />
        {/* 하단 장식 */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-1/2 px-2 md:px-14 lg:px-32 dark:invert dark:brightness-100"
        >
          <Image
            src="../about/about-decor.svg"
            alt=""
            width={50}
            height={50}
            className="w-12 h-12 md:w-16 md:h-16 lg:w-28 lg:h-28"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-12 my-20 lg:mt-24 lg:mb-5 md:pl-4 lg:pl-8">
        <div className="relative w-40 md:w-xs lg:w-2xl aspect-[3/4] overflow-hidden rounded-2xl">
          <Image
            src="/about/id-photo.webp"
            alt="백세진"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 672px, (min-width: 768px) 320px, 160px"
          />
        </div>
        <div className="flex flex-col items-center gap-8 lg:gap-14">
          <div className="flex flex-col items-center lg:items-start w-full gap-4 lg:gap-6">
            <h2 className="text-base font-bold min-[400px]:text-xl md:text-2xl xl:text-3xl">
              Links
            </h2>
            <div className="grid grid-cols-2 gap-2 lg:flex lg:gap-4">
              {contact.resume && (
                <LinkButton href={contact.resume.href} download>
                  {contact.resume.label ?? "이력서 보러가기"}
                </LinkButton>
              )}
              {socialsForAbout.map((social) => (
                <LinkButton key={social.name} href={social.href}>
                  {labelMap[social.name] ?? `${social.name} 보러가기`}
                </LinkButton>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-6">
            <h2 className="text-base font-bold min-[400px]:text-xl md:text-2xl xl:text-3xl">
              My Skills
            </h2>
            <div className="flex flex-wrap justify-center md:px-10 lg:px-0 lg:justify-start gap-2 lg:gap-3">
              {skills.map((skill) => (
                <SkillBadge
                  key={skill.label}
                  label={skill.label}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Accordion sections={aboutSections} defaultOpen={0} className="mb-10" />
    </section>
  );
}
