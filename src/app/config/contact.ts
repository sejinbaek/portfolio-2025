export type Social = { name: string; href: string; icon: string };

export const contact = {
  email: "sejin9767@gmail.com",
  socials: [
    {
      name: "instagram",
      href: "https://www.instagram.com/whitemondejin?igsh=MzB5cm44ZWtpdmt2",
      icon: "/icons/instagram.svg",
    },
    {
      name: "youtube",
      href: "https://www.youtube.com/@whitemondejin",
      icon: "/icons/youtube.svg",
    },
    {
      name: "blog",
      href: "https://blog.naver.com/sehadang_",
      icon: "/icons/blog.svg",
    },
    {
      name: "github",
      href: "https://github.com/sejinbaek",
      icon: "/icons/github.svg",
    },
  ] satisfies Social[],
};
