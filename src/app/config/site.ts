// ==== Types ====
export type Social = { name: string; href: string; icon: string };
export type NavItem = { label: string; href: string };

// ==== Contact Config ====
export const contact = {
  email: "sejin9767@gmail.com",

  // 밝은 배경(콘택트 페이지) — 검정 아이콘
  socialsDark: [
    {
      name: "instagram",
      href: "https://www.instagram.com/whitemondejin?igsh=MzB5cm44ZWtpdmt2",
      icon: "/icons/instagram-black.svg",
    },
    {
      name: "youtube",
      href: "https://www.youtube.com/@whitemondejin",
      icon: "/icons/youtube-black.svg",
    },
    {
      name: "blog",
      href: "https://blog.naver.com/sehadang_",
      icon: "/icons/blog-black.svg",
    },
    {
      name: "github",
      href: "https://github.com/sejinbaek",
      icon: "/icons/github-black.svg",
    },
  ],

  // 어두운 배경(푸터) — 흰색 아이콘
  socialsLight: [
    {
      name: "instagram",
      href: "https://www.instagram.com/whitemondejin?igsh=MzB5cm44ZWtpdmt2",
      icon: "/icons/instagram-white.svg",
    },
    {
      name: "youtube",
      href: "https://www.youtube.com/@whitemondejin",
      icon: "/icons/youtube-white.svg",
    },
    {
      name: "blog",
      href: "https://blog.naver.com/sehadang_",
      icon: "/icons/blog-white.svg",
    },
    {
      name: "github",
      href: "https://github.com/sejinbaek",
      icon: "/icons/github-white.svg",
    },
  ],
  resume: { href: "/about/baek-sejin.pdf", label: "이력서 보러가기" },
};

// ==== About Page Config ====
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
];

export type TimelineRow = { text: string; sub?: string; period?: string };
export type AccordionData = { label: string; rows: TimelineRow[] };

export const aboutSections: AccordionData[] = [
  {
    label: "Experience",
    rows: [
      {
        text: "LG 유레카 프론트엔드 개발자 과정 수료",
        period: "2025.01 ~ 2025. 08",
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
        text: "LG 유플러스 유레카 최종 융합 프로젝트 우수상",
        sub: "(잇플레이스: 통신사 멤버십 제휴처 안내 지도 서비스)",
        period: "2025. 08. 12",
      },
    ],
  },
];

// ==== Navigation (헤더) ====
export const nav = {
  header: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
} as const;
