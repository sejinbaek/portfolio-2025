export type Social = { name: string; href: string; icon: string };
export type NavItem = { label: string; href: string };

// ==== Navigation (헤더) ====
export const nav = {
  header: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
};

// ==== Contact & Footer ====
export const contact = {
  email: "sejin9767@gmail.com",
  socials: [
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
  ] satisfies Social[],
  resume: {
    href: "/résumé_baeksejin.pdf",
    label: "이력서 보러가기",
  },
};
