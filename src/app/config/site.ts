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
};

// ==== Navigation (헤더/푸터 공용) ====
export const nav = {
  header: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
  footer: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
} as const;
