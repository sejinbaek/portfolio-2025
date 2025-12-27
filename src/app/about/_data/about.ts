import { SkillBadgeProps, AccordionData } from "../_types/types";

export const skills = [
  { label: "HTML5", icon: "/icons/HTML.svg" },
  { label: "CSS3", icon: "/icons/CSS.svg" },
  { label: "JavaScript", icon: "/icons/JavaScript.svg" },
  { label: "TypeScript", icon: "/icons/TypeScript.svg" },
  { label: "React", icon: "/icons/React.svg" },
  { label: "styled-components", icon: "/icons/StyledComponents.svg" },
  { label: "Tailwind CSS", icon: "/icons/TailwindCSS.svg" },
  { label: "GSAP", icon: "/icons/GSAP.svg" },
  { label: "VSCode", icon: "/icons/VSCode.svg" },
  { label: "Vite", icon: "/icons/Vite.svg" },
  { label: "Figma", icon: "/icons/Figma.svg" },
  { label: "Photoshop", icon: "/icons/Photoshop.svg" },
] satisfies SkillBadgeProps[];

export const aboutSections: AccordionData[] = [
  {
    label: "Experience",
    rows: [
      {
        text: "해커스 블로그 리포터 해블리 12기",
        period: "2025. 11 ~ 2025. 12",
      },
      {
        text: "LG유플러스 유레카 프론트엔드 개발자 과정 수료",
        period: "2025. 01 ~ 2025. 08",
      },
      {
        text: "한국관광공사 2024 TS교통안전 서포터즈",
        period: "2024. 07 ~ 2024. 11",
      },
      {
        text: "네이버 클라우드 캠프 서포터즈 1기",
        period: "2023. 10 ~ 2024. 01",
      },
    ],
  },
  {
    label: "Education",
    rows: [
      {
        text: "한양대학교 ERICA 캠퍼스",
        sub: "프랑스학과 / 신산업소프트웨어전공(융합전공) 학사 졸업",
        period: "2021. 03 ~ 2025. 08",
      },
      { text: "선주고등학교 졸업", period: "2021. 02" },
    ],
  },
  {
    label: "Awards",
    rows: [
      {
        text: "LG유플러스 유레카 최종 융합 프로젝트 우수상",
        sub: "(잇플레이스: 통신사 멤버십 제휴처 안내 지도 서비스)",
        period: "2025. 08. 12",
      },
    ],
  },
];
